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

  fields.forEach(field => {
    let value = character[field.dataset.field];

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
      if (img.decode) {
        return img.decode().catch(() => {});
      }

      if (img.complete) {
        return Promise.resolve();
      }

      return new Promise(resolve => {
        img.onload = resolve;
        img.onerror = resolve;
      });
    })
  );
}

// =========================================
// ESPERAR AL DISEÑO DEL NAVEGADOR
// =========================================

function waitForLayout() {
  return new Promise(resolve => {
    requestAnimationFrame(() => {
      requestAnimationFrame(resolve);
    });
  });
}

// =========================================
// CAPTURAR LA FICHA COMO IMAGEN
// =========================================

async function captureSheet() {
  if (typeof html2canvas !== "function") {
    throw new Error("No se pudo cargar la biblioteca html2canvas.");
  }

  await document.fonts.ready;
  await waitForImages(sheet);

  fitSheetToContent();
  await waitForLayout();

  return html2canvas(sheet, {
    scale: 2,
    backgroundColor: "#f7f5f2",
    useCORS: true,
    logging: false,
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


// =========================================
// CONVERTIR LA CAPTURA A PDF
// Una página A4 vertical, sin cortes
// =========================================

function downloadPDF(canvas) {
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
    } else if (type === "pdf") {
      downloadPDF(canvas);
    }
  } catch (error) {
    console.error("Error al exportar la ficha:", error);

    alert(
      error.message ||
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
fitSheetToContent();

// Si se cambia el nombre manualmente en la ficha,
// actualizar también el icono correspondiente.
document
  .querySelector('[data-field="arquetipo"]')
  ?.addEventListener("input", actualizarIconosPersonaje);

document
  .querySelector('[data-field="oficio"]')
  ?.addEventListener("input", actualizarIconosPersonaje);
