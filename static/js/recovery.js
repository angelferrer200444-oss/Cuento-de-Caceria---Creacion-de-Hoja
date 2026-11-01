const RECOVERY_PREFIX = "CUENTOS-CACERIA-RECOVERY:v1:";

function bytesToBase64Url(bytes) {
  let binary = "";
  bytes.forEach(byte => {
    binary += String.fromCharCode(byte);
  });
  return btoa(binary)
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/g, "");
}

function base64UrlToBytes(value) {
  const base64 = value
    .replace(/-/g, "+")
    .replace(/_/g, "/")
    .padEnd(Math.ceil(value.length / 4) * 4, "=");
  const binary = atob(base64);
  return Uint8Array.from(binary, character => character.charCodeAt(0));
}

async function compressRecoveryData(data) {
  const input = new TextEncoder().encode(JSON.stringify(data));

  if (!("CompressionStream" in window)) {
    return `${RECOVERY_PREFIX}plain:${bytesToBase64Url(input)}`;
  }

  const stream = new Blob([input])
    .stream()
    .pipeThrough(new CompressionStream("gzip"));
  const compressed = new Uint8Array(await new Response(stream).arrayBuffer());
  return `${RECOVERY_PREFIX}gzip:${bytesToBase64Url(compressed)}`;
}

async function decompressRecoveryData(value) {
  if (!value.startsWith(RECOVERY_PREFIX)) {
    throw new Error("El archivo no contiene datos de recuperación válidos.");
  }

  const encoded = value.slice(RECOVERY_PREFIX.length);
  const separator = encoded.indexOf(":");
  const format = encoded.slice(0, separator);
  const bytes = base64UrlToBytes(encoded.slice(separator + 1));
  let output = bytes;

  if (format === "gzip") {
    const stream = new Blob([bytes])
      .stream()
      .pipeThrough(new DecompressionStream("gzip"));
    output = new Uint8Array(await new Response(stream).arrayBuffer());
  } else if (format !== "plain") {
    throw new Error("Formato de recuperación no compatible.");
  }

  return JSON.parse(new TextDecoder().decode(output));
}

async function createRecoveryQr(data) {
  const qrs = await createRecoveryQrs(data);
  if (qrs.length !== 1) {
    throw new Error("La recuperación necesita varios códigos QR.");
  }
  return qrs[0];
}

async function createRecoveryQrs(data) {
  if (!window.qrcode) {
    throw new Error("No se pudo cargar el generador de códigos QR.");
  }

  const encoded = await compressRecoveryData(data);
  const maxPartLength = 1800;
  const parts = [];

  for (let start = 0; start < encoded.length; start += maxPartLength) {
    parts.push(encoded.slice(start, start + maxPartLength));
  }

  return parts.map((part, index) => {
    const payload =
      parts.length === 1
        ? part
        : `${RECOVERY_PREFIX}part:${index + 1}:${parts.length}:${part}`;
    const qr = window.qrcode(0, "L");
    qr.addData(payload);
    qr.make();
    return qr.createDataURL(8, 3);
  });
}

function combineRecoveryParts(values) {
  const parts = values.map(value => {
    const marker = `${RECOVERY_PREFIX}part:`;
    if (!value.startsWith(marker)) {
      return { value, index: 1, total: 1 };
    }

    const fields = value.slice(marker.length).match(/^(\d+):(\d+):(.*)$/);
    if (!fields) {
      throw new Error("Código QR de recuperación inválido.");
    }

    return {
      value: fields[3],
      index: Number(fields[1]),
      total: Number(fields[2])
    };
  });

  if (parts.length === 1 && parts[0].total === 1) {
    return parts[0].value;
  }

  const total = parts[0]?.total;
  if (!total || parts.length !== total || parts.some(part => part.total !== total)) {
    throw new Error("Faltan códigos QR de recuperación.");
  }

  parts.sort((left, right) => left.index - right.index);
  if (parts.some((part, index) => part.index !== index + 1)) {
    throw new Error("Los códigos QR de recuperación están incompletos.");
  }

  return parts.map(part => part.value).join("");
}
