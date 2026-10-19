const phobias = {
  "zoofobia": "Elige el tipo de animal: lobos, insectos, ratas, aves u otro.",
  "aracnofobia": "Miedo a las ara&ntilde;as.",
  "cinofobia": "Miedo a los perros.",
  "murofobia": "Miedo a ratas y ratones.",
  "quiroptofobia": "Miedo a los murci&eacute;lagos.",
  "ailurofobia": "Miedo a los gatos.",
  "bufonofobia": "Miedo a los sapos.",
  "equinofobia": "Miedo a los caballos.",
  "escolequifobia": "Miedo a los gusanos.",
  "lepidopterofobia": "Miedo a las mariposas.",
  "lupofobia": "Miedo a los lobos.",
  "ofidiofobia": "Miedo a las serpientes.",
  "ornitofobia": "Miedo a las aves.",
  "entomofobia": "Miedo a los insectos.",
  "nictofobia": "Miedo a la oscuridad.",
  "claustrofobia": "Miedo a los espacios cerrados.",
  "hematofobia": "Miedo a ver sangre, propia o ajena.",
  "tanatofobia": "Cualquier cad&aacute;ver, funeral o amenaza mortal activa la fobia.",
  "necrofobia": "Miedo a los muertos o no-muertos.",
  "aicmofobia": "Miedo a los objetos punzantes.",
  "hidrofobia": "Miedo al agua profunda.",
  "acrofobia": "Miedo a las alturas.",
  "fobia-social": "Miedo a la interacci&oacute;n social.",
  "pirofobia": "Miedo al fuego.",
  "vicafobia": "Miedo a la brujer&iacute;a, la magia, los hechizos, los rituales, los s&iacute;mbolos o las criaturas m&aacute;gicas.",
  "enfermedad": "Miedo a la infecci&oacute;n o la putrefacci&oacute;n.",
  "autofobia": "Miedo a estar aislado.",
  "contreltofobia": "Miedo al contacto.",
  "teratofobia": "Miedo a los monstruos y las malformaciones.",
  "germofobia": "Miedo a los g&eacute;rmenes o a la suciedad.",
  "brontofobia": "Miedo a las tormentas o los rayos.",
  "erotofobia": "Miedo a lo er&oacute;tico o a la desnudez."
};

function fillPhobia(entry) {
  const phobiaSelect = entry.querySelector("select");
  const phobiaEffect = entry.querySelector("textarea");
  const zoophobiaTypeField = entry.querySelector("[id^='zoophobia-type-field-']");
  const zoophobiaType = entry.querySelector("[id^='zoophobia-type-']");
  const description = phobias[phobiaSelect.value];

  phobiaEffect.value = description ? decodeHtml(description) : "";
  zoophobiaTypeField.hidden = phobiaSelect.value !== "zoofobia";

  if (phobiaSelect.value !== "zoofobia") {
    zoophobiaType.value = "";
  }
}

function bindPhobia(entry) {
  entry.querySelector("select").addEventListener("change", () => fillPhobia(entry));
}

document.querySelectorAll(".phobia-entry").forEach(bindPhobia);

document.querySelector("#add-phobia").addEventListener("click", () => {
  const list = document.querySelector("#phobias-list");
  const entry = list.querySelector(".phobia-entry").cloneNode(true);
  const number = list.querySelectorAll(".phobia-entry").length + 1;

  entry.querySelectorAll("[id]").forEach((field) => {
    field.id = field.id.replace(/-\d+$/, `-${number}`);
  });
  entry.querySelectorAll("[for]").forEach((label) => {
    label.htmlFor = label.htmlFor.replace(/-\d+$/, `-${number}`);
  });
  entry.querySelectorAll("input, textarea").forEach((field) => {
    field.value = "";
  });
  entry.querySelector("select").value = "";
  entry.querySelector("[id^='zoophobia-type-field-']").hidden = true;

  list.appendChild(entry);
  bindPhobia(entry);
});
