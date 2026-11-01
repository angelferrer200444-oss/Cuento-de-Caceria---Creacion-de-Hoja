const sheet = document.getElementById("sheet");
const fields = [...document.querySelectorAll(".editable")];
const characterSheetStorageKey = "cuentos-caceria-character-sheet";

// =========================================
// CARGAR LA FICHA GUARDADA
// =========================================

function loadCharacterSheet() {
  const savedCharacter = localStorage.getItem(characterSheetStorageKey);

  if (!savedCharacter) {
    return;
  }

  let character;

  try {
    character = JSON.parse(savedCharacter);
  } catch {
    localStorage.removeItem(characterSheetStorageKey);
    return;
  }

  const specialDescriptions = character.specialDescriptions || {};
  const savedSpecialDescriptions = localStorage.getItem(
    "cuentos-caceria-special-descriptions"
  );
  let storedSpecialDescriptions = {};

  if (savedSpecialDescriptions) {
    try {
      storedSpecialDescriptions = JSON.parse(savedSpecialDescriptions);
    } catch {
      localStorage.removeItem("cuentos-caceria-special-descriptions");
    }
  }

  fields.forEach(field => {
    let value = character[field.dataset.field];
    const hasSavedField = Object.prototype.hasOwnProperty.call(
      character,
      field.dataset.field
    );

    if (field.dataset.field === "descripcionEspecial") {
      value =
        hasSavedField
          ? value
          : storedSpecialDescriptions.archetype ||
            specialDescriptions.archetype ||
            character.specialDescription ||
            character.descripcionEspecialArquetipo ||
            "";
    }

    if (field.dataset.field === "descripcionAmigoImaginario") {
      value =
        hasSavedField
          ? value
          : storedSpecialDescriptions.imaginaryFriend ||
            specialDescriptions.imaginaryFriend ||
            character.imaginaryFriendDescription ||
            character.descripcionAmigo ||
            "";
    }

    if (field.dataset.field === "descripcionDimensionBolsillo") {
      value =
        hasSavedField
          ? value
          : storedSpecialDescriptions.pocketDimension ||
            specialDescriptions.pocketDimension ||
            character.pocketDimensionDescription ||
            character.descripcionDimension ||
            "";
    }

    if (field.dataset.field === "puntosCaracteristicas") {
      value =
        character.puntosCaracteristicas ??
        character.characteristicPoints ??
        "";
    }

    if (
      field.dataset.field === "nivelCorrupcion" &&
      character.puntoCorrupcion !== undefined
    ) {
      const points = Number(character.puntoCorrupcion) || 0;
      value = `Nivel ${points === 0 ? 0 : Math.ceil(points / 5)}`;
    }

    if (typeof value === "string" && value) {
      field.textContent = value;
    }
  });
}

// =========================================
// ICONOS SVG DEL ARQUETIPO Y DEL OFICIO
// =========================================

const iconosPersonaje = {
  "alquimista": "Alquimista.svg",
  "animal astuto": "Animal astuto.svg",
  "apostol": "Apostol.svg",
  "automata": "Automata.svg",
  "brujeria": "Brujeria.svg",
  "cazador de brujas": "Cazador de Brujas.svg",
  "cazadores de lobos": "Cazadores de lobos.svg",
  "comerciante": "Comerciante.svg",
  "feerico": "Feerico.svg",
  "guardia real": "Guardia Real.svg",
  "heroico": "Heroico.svg",
  "licantropo": "licantropo.svg",
  "linaje maldito": "Linaje maldito.svg",
  "los ninos perdidos": "Los niños perdidos.svg",
  "mercenario": "Mercenario.svg",
  "ocultista": "Ocultista.svg",
  "ogro": "Ogro.svg",
  "pirata": "Pirata.svg",
  "sonador": "Soñador.svg"
};

// Normaliza los nombres para ignorar mayúsculas y tildes.
function normalizarNombreIcono(nombre) {
  return nombre
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

// Actualiza la imagen de un arquetipo o un oficio.
function actualizarIcono(campo, idImagen) {
  const imagen = document.getElementById(idImagen);
  if (!imagen) return;

  const nombre = normalizarNombreIcono(campo);
  const archivo = iconosPersonaje[nombre];

  if (!archivo) {
    imagen.hidden = true;
    imagen.removeAttribute("src");
    return;
  }

  imagen.onerror = () => {
    imagen.hidden = true;
    console.error("No se pudo cargar el icono:", archivo);
  };

  imagen.onload = () => {
    imagen.hidden = false;
  };

  imagen.hidden = true;
  imagen.src = `../static/images/svg/${encodeURIComponent(archivo)}`;
}

// Lee los nombres que ya están escritos en la ficha.
function actualizarIconosPersonaje() {
  const arquetipo = document.querySelector(
    '[data-field="arquetipo"]'
  );

  const oficio = document.querySelector(
    '[data-field="oficio"]'
  );

  actualizarIcono(arquetipo?.textContent || "", "archetypeIcon");
  actualizarIcono(oficio?.textContent || "", "occupationIcon");
}

function actualizarDescripcionesEspeciales() {
  const archetype = document.querySelector('[data-field="arquetipo"]');
  const specialDescription = document.querySelector(
    '[data-field="descripcionEspecial"]'
  );
  const imaginaryFriendDescription = document.querySelector(
    '[data-field="descripcionAmigoImaginario"]'
  );
  const pocketDimensionDescription = document.querySelector(
    '[data-field="descripcionDimensionBolsillo"]'
  );
  const specialSection = document.querySelector(
    '[data-special-section="descripcionEspecial"]'
  );
  const dreamerSection = document.querySelector(
    '[data-special-section="sonador"]'
  );
  const isDreamer =
    normalizarNombreIcono(archetype?.textContent || "") === "sonador";

  if (specialSection && specialDescription) {
    specialSection.hidden =
      isDreamer || !specialDescription.textContent.trim();
    specialSection.style.display = specialSection.hidden ? "none" : "";
  }

  if (dreamerSection && imaginaryFriendDescription && pocketDimensionDescription) {
    dreamerSection.hidden = !isDreamer;
    dreamerSection.style.display = dreamerSection.hidden ? "none" : "";

    if (!isDreamer) {
      imaginaryFriendDescription.textContent = "";
      pocketDimensionDescription.textContent = "";
    }
  }
}


// =========================================
// AJUSTAR LOS CAMPOS AL CONTENIDO
// =========================================

function fitSheetToContent() {
  fields.forEach(field => {
    field.style.height = "auto";

    if (
      field.classList.contains("lines") ||
      field.classList.contains("body-copy")
    ) {
      field.style.minHeight = "";
    }
  });
}

// =========================================
// EDICIÓN Y PEGADO DE TEXTO
// =========================================

fields.forEach(field => {
  field.addEventListener("input", fitSheetToContent);

  field.addEventListener("paste", event => {
    event.preventDefault();

    const text = (
      event.clipboardData || window.clipboardData
    ).getData("text/plain");

    document.execCommand("insertText", false, text);
  });
});

// =========================================
// CARGAR EL RETRATO
// =========================================

document.getElementById("portraitInput").addEventListener("change", event => {
  const file = event.target.files && event.target.files[0];

  if (!file) return;

  const reader = new FileReader();

  reader.onload = () => {
    const img = document.getElementById("portraitImage");

    img.src = reader.result;
    img.hidden = false;

    document.querySelector(".portrait-placeholder").hidden = true;
  };

  reader.readAsDataURL(file);
});

// =========================================
// ESPERAR A QUE CARGUEN LAS IMÁGENES
// =========================================

function waitForImages(root) {
  const imgs = [...root.querySelectorAll("img")].filter(
    img => !img.hidden && img.src
  );

  return Promise.all(
    imgs.map(img => {
      if (img.complete && img.naturalWidth > 0) {
        return Promise.resolve();
      }

      return new Promise(resolve => {
        const timeout = setTimeout(resolve, 3000);
        const finish = () => {
          clearTimeout(timeout);
          resolve();
        };

        img.onload = finish;
        img.onerror = finish;
      });
    })
  );
}

// =========================================
// ESPERAR AL DISEÑO DEL NAVEGADOR
// =========================================

function waitForLayout() {
  return new Promise(resolve => {
    let frames = 0;
    const finish = () => resolve();
    const nextFrame = () => {
      frames += 1;
      if (frames >= 2) {
        finish();
        return;
      }
      requestAnimationFrame(nextFrame);
    };

    setTimeout(finish, 100);
    requestAnimationFrame(nextFrame);
  });
}

// =========================================
// CAPTURAR LA FICHA COMO IMAGEN
// =========================================

function imageToDataUrl(image) {
  const canvas = document.createElement("canvas");
  const scale = 2;
  const isPortrait = image.id === "portraitImage";
  const bounds = image.getBoundingClientRect();
  const width = isPortrait ? Math.max(1, Math.round(bounds.width)) : 145;
  const height = isPortrait ? Math.max(1, Math.round(bounds.height)) : 145;

  canvas.width = width * scale;
  canvas.height = height * scale;

  const context = canvas.getContext("2d");
  const sourceRatio = image.naturalWidth / image.naturalHeight;
  const targetRatio = width / height;

  if (isPortrait) {
    let sourceX = 0;
    let sourceY = 0;
    let sourceWidth = image.naturalWidth;
    let sourceHeight = image.naturalHeight;

    if (sourceRatio > targetRatio) {
      sourceWidth = image.naturalHeight * targetRatio;
      sourceX = (image.naturalWidth - sourceWidth) / 2;
    } else {
      sourceHeight = image.naturalWidth / targetRatio;
      sourceY = (image.naturalHeight - sourceHeight) / 2;
    }

    context.drawImage(
      image,
      sourceX,
      sourceY,
      sourceWidth,
      sourceHeight,
      0,
      0,
      canvas.width,
      canvas.height
    );
  } else {
    const drawWidth = sourceRatio >= 1 ? width : width * sourceRatio;
    const drawHeight = sourceRatio >= 1 ? height / sourceRatio : height;
    const offsetX = (width - drawWidth) / 2;
    const offsetY = (height - drawHeight) / 2;

    context.drawImage(
      image,
      offsetX * scale,
      offsetY * scale,
      drawWidth * scale,
      drawHeight * scale
    );
  }

  return canvas.toDataURL("image/png");
}

async function captureSheet() {
  if (typeof html2canvas !== "function") {
    throw new Error("No se pudo cargar la biblioteca html2canvas.");
  }

  await document.fonts.ready;
  await waitForImages(sheet);

  fitSheetToContent();
  await waitForLayout();

  const imageData = new Map();
  const images = [...sheet.querySelectorAll("img")].filter(
    image => !image.hidden && image.src
  );

  for (const image of images) {
    try {
      imageData.set(image.id, imageToDataUrl(image));
    } catch (error) {
      console.warn("No se pudo incrustar una imagen en la captura:", error);
    }
  }

  return html2canvas(sheet, {
    scale: 2,
    backgroundColor: "#f7f5f2",
    useCORS: true,
    logging: false,

    onclone: clonedDocument => {
      imageData.forEach((dataUrl, id) => {
        const image = clonedDocument.getElementById(id);
        if (image) {
          image.src = dataUrl;
        }
      });
    },

    width: sheet.scrollWidth,
    height: sheet.scrollHeight,
    windowWidth: Math.max(
      document.documentElement.clientWidth,
      sheet.scrollWidth
    ),
    windowHeight: Math.max(
      document.documentElement.clientHeight,
      sheet.scrollHeight
    ),
    scrollX: 0,
    scrollY: 0
  });
}



function obtenerNombreArchivo() {
    const campoNombre = document.querySelector(
        '[data-field="nombre"]'
    );

    const nombrePersonaje = (
        campoNombre?.innerText ||
        campoNombre?.textContent ||
        ""
    ).trim();

    const nombreSeguro = nombrePersonaje
        .replace(/[<>:"/\\|?*\x00-\x1F]/g, "")
        .replace(/\s+/g, " ")
        .replace(/[. ]+$/g, "")
        .slice(0, 100);

    return `${nombreSeguro || "Personaje"} - Hoja de personaje`;
}



// =========================================
// DESCARGAR PNG
// =========================================

function downloadImage(canvas) {
    const link = document.createElement("a");

    link.download = `${obtenerNombreArchivo()}.png`;
    link.href = canvas.toDataURL("image/png");

    link.click();
}

function getRecoveryData() {
    const savedCharacter = localStorage.getItem(characterSheetStorageKey);

    if (!savedCharacter) {
        throw new Error("No hay datos guardados para crear la recuperación.");
    }

    const character = JSON.parse(savedCharacter);
    const savedSpecialDescriptions = localStorage.getItem(
        "cuentos-caceria-special-descriptions"
    );

    if (savedSpecialDescriptions) {
      character.specialDescriptions = {
        ...(JSON.parse(savedSpecialDescriptions) || {}),
        ...(character.specialDescriptions || {})
      };
    }

    if (!character.formState || typeof character.formState !== "object") {
      throw new Error(
        "La ficha no contiene el estado completo del formulario. Guarda la hoja nuevamente."
      );
    }

    return {
        character,
        savedAt: new Date().toISOString()
    };
}

async function downloadRecoveryImage() {
    const recoveryDataUrls = await createRecoveryQrs(getRecoveryData());
    const columns = recoveryDataUrls.length > 1 ? 2 : 1;
    const qrSize = recoveryDataUrls.length > 1 ? 1000 : 1200;
    const rows = Math.ceil(recoveryDataUrls.length / columns);
    const recoveryCanvas = document.createElement("canvas");
    recoveryCanvas.width = columns * qrSize + (columns + 1) * 100;
    recoveryCanvas.height = rows * qrSize + 260 + (rows + 1) * 100;

    const context = recoveryCanvas.getContext("2d");
    context.fillStyle = "#ffffff";
    context.fillRect(0, 0, recoveryCanvas.width, recoveryCanvas.height);
    context.fillStyle = "#111111";
    context.font = "bold 42px Arial";
    context.textAlign = "center";
    context.fillText("Datos de recuperación", recoveryCanvas.width / 2, 80);
    context.font = "28px Arial";
    context.fillText(
        "Sube esta imagen en Cargar personaje para restaurar la ficha.",
        recoveryCanvas.width / 2,
        130
    );

    for (let index = 0; index < recoveryDataUrls.length; index += 1) {
      const qrImage = new Image();
      await new Promise((resolve, reject) => {
          qrImage.onload = resolve;
          qrImage.onerror = reject;
          qrImage.src = recoveryDataUrls[index];
      });

      const column = index % columns;
      const row = Math.floor(index / columns);
      context.drawImage(
          qrImage,
          100 + column * (qrSize + 100),
          220 + row * (qrSize + 100),
          qrSize,
          qrSize
      );
    }

    const link = document.createElement("a");
    link.download = `${obtenerNombreArchivo()} - Recuperacion.png`;
    link.href = recoveryCanvas.toDataURL("image/png");
    link.click();
}


// =========================================
// CONVERTIR LA CAPTURA A PDF
// Una página A4 vertical, sin cortes
// =========================================

async function downloadPDF(canvas) {
    if (!window.jspdf || !window.jspdf.jsPDF) {
        throw new Error(
            "No se pudo cargar jsPDF. Comprueba que la biblioteca esté incluida en el HTML."
        );
    }

    const { jsPDF } = window.jspdf;

    const formato = window.prompt(
        "¿Qué formato de PDF quieres?\n\n" +
        "1. A4 — Formato de impresión convencional.\n" +
        "2. Tamaño real — La página se adapta a las dimensiones de la ficha.\n\n" +
        "Escribe 1 o 2:"
    );

    // Si cancela o escribe algo distinto de 1 o 2, no exportamos.
    if (formato === null) return;

    if (formato !== "1" && formato !== "2") {
        alert("Opción no válida. Escribe 1 para A4 o 2 para tamaño real.");
        return;
    }

    const margin = 5;
    let pdf;
    let pageWidth;
    let pageHeight;
    let imageWidth;
    let imageHeight;
    let x;
    let y;

    const imageData = canvas.toDataURL("image/jpeg", 0.95);

    if (formato === "1") {
        // FORMATO A4: la ficha completa cabe en una sola página.
        pdf = new jsPDF({
            orientation: "portrait",
            unit: "mm",
            format: "a4",
            compress: true
        });

        pageWidth = pdf.internal.pageSize.getWidth();
        pageHeight = pdf.internal.pageSize.getHeight();

        const availableWidth = pageWidth - margin * 2;
        const availableHeight = pageHeight - margin * 2;

        const scale = Math.min(
            availableWidth / canvas.width,
            availableHeight / canvas.height
        );

        imageWidth = canvas.width * scale;
        imageHeight = canvas.height * scale;

        x = (pageWidth - imageWidth) / 2;
        y = (pageHeight - imageHeight) / 2;

    } else {
        // TAMAÑO REAL: la página se adapta a la ficha.
        // captureSheet() usa html2canvas con scale: 2.
        const captureScale = 2;
        const pixelsPerInch = 96;

        pageWidth =
            (canvas.width / captureScale) * 25.4 / pixelsPerInch;

        pageHeight =
            (canvas.height / captureScale) * 25.4 / pixelsPerInch;

        pdf = new jsPDF({
            orientation: pageWidth > pageHeight ? "landscape" : "portrait",
            unit: "mm",
            format: [pageWidth, pageHeight],
            compress: true
        });

        imageWidth = pageWidth;
        imageHeight = pageHeight;
        x = 0;
        y = 0;
    }

    pdf.addImage(
        imageData,
        "JPEG",
        x,
        y,
        imageWidth,
        imageHeight,
        undefined,
        "FAST"
    );

    const nombreArchivo = `${obtenerNombreArchivo()}.pdf`;
    const recoveryDataUrls = await createRecoveryQrs(getRecoveryData());
    pdf.addPage("a4", "portrait");
    pdf.setFontSize(18);
    pdf.text("Datos de recuperación", 105, 18, { align: "center" });
    pdf.setFontSize(10);
    pdf.text("Sube este PDF en Cargar personaje para restaurar la ficha.", 105, 25, {
        align: "center"
    });
    const columns = recoveryDataUrls.length > 1 ? 2 : 1;
    const qrSize = recoveryDataUrls.length > 1 ? 82 : 170;
    recoveryDataUrls.forEach((dataUrl, index) => {
      const column = index % columns;
      const row = Math.floor(index / columns);
      pdf.addImage(
        dataUrl,
        "PNG",
        columns === 1 ? 20 : 15 + column * 95,
        35 + row * 95,
        qrSize,
        qrSize
      );
    });

    pdf.save(nombreArchivo);
}


// =========================================
// EXPORTAR FICHA
// =========================================

async function exportSheet(type) {
  const pngButton = document.getElementById("downloadPng");
  const pdfButton = document.getElementById("downloadPdf");

  try {
    if (pngButton) pngButton.disabled = true;
    if (pdfButton) pdfButton.disabled = true;

    const canvas = await captureSheet();

    if (type === "png") {
      downloadImage(canvas);
      await downloadRecoveryImage();
    } else if (type === "pdf") {
      await downloadPDF(canvas);
    }
  } catch (error) {
    console.error("Error al exportar la ficha:", error);

    alert(
      error?.message ||
      String(error) ||
      "No se pudo exportar la ficha. Inténtalo de nuevo."
    );
  } finally {
    if (pngButton) pngButton.disabled = false;
    if (pdfButton) pdfButton.disabled = false;
  }
}

// =========================================
// BOTONES DE DESCARGA
// =========================================

document
  .getElementById("downloadPng")
  .addEventListener("click", () => exportSheet("png"));

document
  .getElementById("downloadPdf")
  .addEventListener("click", () => exportSheet("pdf"));

// =========================================
// LIMPIAR LA FICHA
// =========================================

document.getElementById("clearBtn").addEventListener("click", () => {
  if (!confirm("¿Quieres borrar todo el contenido de la ficha?")) {
    return;
  }

  fields.forEach(field => {
    field.innerHTML = "";
  });

  const portraitImage = document.getElementById("portraitImage");

  portraitImage.hidden = true;
  portraitImage.removeAttribute("src");

  document.querySelector(".portrait-placeholder").hidden = false;
  document.getElementById("portraitInput").value = "";
});

// =========================================
// INICIALIZACIÓN
// =========================================

loadCharacterSheet();
actualizarIconosPersonaje();
actualizarDescripcionesEspeciales();
fitSheetToContent();

// Si se cambia el nombre manualmente en la ficha,
// actualizar también el icono correspondiente.
document
  .querySelector('[data-field="arquetipo"]')
  ?.addEventListener("input", actualizarIconosPersonaje);

document
  .querySelector('[data-field="oficio"]')
  ?.addEventListener("input", actualizarIconosPersonaje);
