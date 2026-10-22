const sheet = document.getElementById("sheet");
const fields = [...document.querySelectorAll(".editable")];
const characterSheetStorageKey = "cuentos-caceria-character-sheet";

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

  fields.forEach(field => {
    let value = character[field.dataset.field];
    if (field.dataset.field === "puntosCaracteristicas") {
      value = character.puntosCaracteristicas ?? character.characteristicPoints ?? "";
    }
    if (field.dataset.field === "nivelCorrupcion" && character.puntoCorrupcion !== undefined) {
      const points = Number(character.puntoCorrupcion) || 0;
      value = `Nivel ${points === 0 ? 0 : Math.ceil(points / 5)}`;
    }
    if (typeof value === "string" && value) {
      field.textContent = value;
    }
  });
}

function fitSheetToContent() {
  // Los bloques usan alturas mínimas y crecen con el texto, sin superponerse.
  fields.forEach(field => {
    field.style.height = "auto";
    if (field.classList.contains("lines") || field.classList.contains("body-copy")) {
      field.style.minHeight = "";
    }
  });
}

fields.forEach(field => {
  field.addEventListener("input", fitSheetToContent);
  field.addEventListener("paste", event => {
    event.preventDefault();
    const text = (event.clipboardData || window.clipboardData).getData("text/plain");
    document.execCommand("insertText", false, text);
  });
});

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

function waitForImages(root) {
  const imgs = [...root.querySelectorAll("img")].filter(img => !img.hidden && img.src);
  return Promise.all(imgs.map(img => img.decode ? img.decode().catch(() => {}) : Promise.resolve()));
}

async function exportSheet(type) {
  if (typeof html2canvas !== "function") {
    alert("No se pudo cargar el exportador. Comprueba tu conexión a Internet e inténtalo de nuevo.");
    return;
  }
  await document.fonts.ready;
  await waitForImages(sheet);
  const canvas = await html2canvas(sheet, {
    scale: 2,
    backgroundColor: "#f7f5f2",
    useCORS: true,
    logging: false,
    windowWidth: Math.max(document.documentElement.clientWidth, sheet.scrollWidth)
  });
  const mime = type === "jpg" ? "image/jpeg" : "image/png";
  const url = canvas.toDataURL(mime, type === "jpg" ? 0.94 : undefined);
  const link = document.createElement("a");
  link.download = `ficha-personaje.${type}`;
  link.href = url;
  link.click();
  URL.revokeObjectURL(url);
}

document.getElementById("downloadPng").addEventListener("click", () => exportSheet("png"));
document.getElementById("downloadJpg").addEventListener("click", () => exportSheet("jpg"));

document.getElementById("clearBtn").addEventListener("click", () => {
  if (!confirm("¿Quieres borrar todo el contenido de la ficha?")) return;
  fields.forEach(field => field.innerHTML = "");
  document.getElementById("portraitImage").hidden = true;
  document.getElementById("portraitImage").removeAttribute("src");
  document.querySelector(".portrait-placeholder").hidden = false;
  document.getElementById("portraitInput").value = "";
});

// Permite que el navegador ajuste el tamaño de los recuadros a los textos.
loadCharacterSheet();
fitSheetToContent();
