const archetypes = {
  "licantropo": {
    description: "Cazadores con sentidos sobrehumanos, capaces de rastrear a cualquier criatura por el olor o el sonido que emita. Su naturaleza bestial los vuelve desconfiados y extremadamente sensibles a est&iacute;mulos fuertes. La plata es su mayor debilidad: incluso el contacto m&iacute;nimo les quema la piel.",
    traits: "Virtuosos:\n- Sentidos Agudos.\n\nDefectuosos:\n- Hipersensible.\n- Desconfiado.\n- Vulnerabilidad a la plata.",
    peculiarities: "- Debilidad a la plata (Pasiva)\n- Dualidad (Pasiva)",
    abilities: "- Olfato del Cazador (Activa)",
    sanityLimit: "- Transformaci&oacute;n a Lobo (Pasivo)",
    lockedAbility: "- Usurpaci&oacute;n (Activo)",
    requirement: "Obtener una Reputaci&oacute;n Positiva por m&eacute;rito propio, a discreci&oacute;n del Narrador.",
    diet: "Carne",
    affinity: "fuego",
    sanity: 5,
    wounds: 5
  },
  "ninos-perdidos": {
    description: "Hu&eacute;rfanos astutos que emplean su encanto infantil para manipular a los adultos y alcanzar sus objetivos. Su conexi&oacute;n m&aacute;gica les permite controlar plantas y animales, pero su resistencia mental es limitada y la manifestaci&oacute;n de su magia llama inevitablemente la atenci&oacute;n.",
    traits: "Virtuosos:\n- Astucia Infantil.\n- Magia Innata.\n\nDefectuosos:\n- Cuerpo infantil.\n- Fuerza mental de un ni&ntilde;o.",
    abilities: "- Encanto Infantil (Activo)\n- Migajas de pan (Activa)\n- Devuelta a casa (Costo: 1 Cordura)\n- Dulce trampa (Costo: 1 Cordura)",
    sanityLimit: "- Magia maldita del bosque\n- Fuerza Fraterna",
    lockedAbility: "- Adultez",
    requirement: "Se desbloquea cuando el Ni&ntilde;o Perdido firma un pacto o sacrificio, entregando algo muy valioso a cambio de poder.",
    diet: "Dulces, trigo",
    affinity: "tierra",
    sanity: 4,
    wounds: 4
  },
  "brujeria": {
    description: "Los brujos y brujas de Alderland son maestros de la magia oscura, nacidos de un legado de sacrificios y venganza. Su poder emana de antiguos rituales que requieren sangre. Su debilidad f&iacute;sica la compensan con astucia y enga&ntilde;o, aunque el fuego y la santidad los hieren. Su pr&aacute;ctica constante de las artes oscuras los vuelve paranoicos y corrompe su percepci&oacute;n.",
    traits: "Virtuosos:\n- Magia oscura.\n- Maestros manipuladores.\n\nDefectuosos:\n- Debilidad f&iacute;sica.\n- Presencia mal&eacute;vola.\n- Mente corrompida.",
    abilities: "- Verdades ocultas (Activa)\n- Familiares (Pasiva)",
    sanityLimit: "- Maleficio (Activa)\n- &iquest;Le&iacute;ste las letras peque&ntilde;as? (Activa)",
    lockedAbility: "- L&iacute;der Sectario (Activo)",
    requirement: "Tener vivos a cinco seres vivos e inteligentes bajo lealtad incondicional hacia ti. Tambi&eacute;n cuentan los seres bajo el efecto de &iquest;Le&iacute;ste las letras peque&ntilde;as?.",
    diet: "Insectos, lagartos, carne humana",
    affinity: "agua",
    sanity: 5,
    wounds: 5
  },
  "automata": {
    description: "Seres construidos a partir de madera, metal o compuestos m&aacute;gicos. Poseen fuerza sobrehumana y gran resistencia, pero est&aacute;n atados a las &oacute;rdenes de su creador. No sienten dolor, cansancio ni fr&iacute;o; son vulnerables a golpes contundentes y al fuego. No comprenden la mentira y su cuerpo delata o da&ntilde;a cualquier falsedad.",
    traits: "Virtuosos:\n- Fuerza sobrehumana.\n- Invulnerabilidad.\n- Sensibilidad M&aacute;gica.\n\nDefectuosos:\n- Vulnerabilidad al fuego.\n- Cuerpo imperfecto.\n- Inocencia.\n- La mentira crece.",
    abilities: "- Pr&oacute;tesis mejoradas (Pasiva)\n- Ensamblaje (Activo)",
    sanityLimit: "- Titiritero (Activo)",
    lockedAbility: "- Un ni&ntilde;o de verdad (Activo)",
    requirement: "Cumplir un objetivo impuesto por tu amo o creador. Desobedecerlo cinco veces permite romper las ataduras y acercarte a convertirte en un ni&ntilde;o de verdad; ir contra el objetivo provoca Depresi&oacute;n.",
    diet: "Clavos, aceite, madera",
    affinity: "tierra",
    sanity: 4,
    wounds: 5
  },
  "linaje-maldito": {
    description: "Su belleza y nobleza innatas les permiten ganarse la confianza de los dem&aacute;s. Sin embargo, su maldici&oacute;n les impide conocer a fondo a las personas: suelen ser rechazados como si llevaran una enfermedad contagiosa. Su presencia atrae fuerzas sobrenaturales y, aunque poseen una determinaci&oacute;n f&eacute;rrea, el dolor del rechazo les afecta profundamente.",
    traits: "Virtuosos:\n- Atractivo.\n- Resiliencia.\n\nDefectuosos:\n- Maldito.\n- B&uacute;squeda de Aceptaci&oacute;n.\n- Malas energ&iacute;as.",
    abilities: "- Herencia Maldita (Pasiva)\n- Conocimientos malditos (Activa)",
    sanityLimit: "- Maldici&oacute;n Desatada",
    lockedAbility: "- Liberaci&oacute;n del Destino (Activo)",
    requirement: "Lograr un acto heroico significativo en una escena clave con testigos importantes, a discreci&oacute;n del Narrador.",
    diet: "Hierbas amargas, frutos oscuros como moras o ciruelas",
    affinity: "fuego",
    sanity: 5,
    wounds: 5
  },
  "heroico": {
    description: "Posee las aptitudes del protagonista: espada, voluntad, corcel, liderazgo y encanto. Sin embargo, es una persona com&uacute;n sin la fuerza de un ogro, la magia de una bruja o la resistencia de un lobo. Busca cumplir un gran prop&oacute;sito, pero la inexperiencia pesa en un Alderland cruel. Su reputaci&oacute;n y su conciencia le afectan profundamente.",
    traits: "Virtuosos:\n- Habilidoso con la Espada.\n- Fiel Corcel.\n- L&iacute;der innato.\n\nDefectuosos:\n- Cuna dorada.\n- Ego fr&aacute;gil.\n- Conciencia.",
    abilities: "- En Guardia (Activo)\n- Grito de Guerra (Activo)",
    sanityLimit: "- Antih&eacute;roe (Activo)\n- Determinaci&oacute;n Oscura (Activo)",
    lockedAbility: "- Palad&iacute;n brillante (Activo)",
    requirement: "Aplicar con &eacute;xito los efectos de &Uacute;ltima Gota de Determinaci&oacute;n. Al finalizar la escena, quedas en estado de Agotamiento.",
    diet: "Frutas frescas, manzanas doradas, peras, bayas silvestres, espinacas, zanahorias y br&oacute;coli",
    affinity: "fuego",
    sanity: 6,
    wounds: 5
  },
  "ogro": {
    description: "Un ser tan alto como un oso y tan fuerte como un caballo de guerra. Puede arrancar &aacute;rboles, desmembrar a un hombre o derribar un caballo de un golpe. Su piel act&uacute;a como armadura, aunque su aspecto y temperamento causan rechazo. Es vulnerable a la magia y arrogante, pero puede ocultar un talento art&iacute;stico y un coraz&oacute;n enorme.",
    traits: "Virtuosos:\n- Fuerza sobrehumana.\n- Piel Gruesa.\n- Artista.\n\nDefectuosos:\n- Fealdad.\n- Mala Actitud.\n- Vulnerabilidad a la magia.",
    abilities: "- Huelo a Carne fresca (Activa)\n- Intimidaci&oacute;n (Activa)",
    sanityLimit: "- Berserker (Activa)",
    lockedAbility: "- Protector Leal (Activa)",
    requirement: "Realizar un acto de salvaci&oacute;n heroica para proteger a un compa&ntilde;ero en peligro, amortiguando un ataque mortal cuando est&eacute; a 1 o 2 Heridas. El acto debe ser reconocido por sus compa&ntilde;eros.",
    diet: "Carne",
    affinity: "tierra",
    sanity: 5,
    wounds: 6
  },
  "sonador": {
    description: "Mantiene una mente firme e imaginativa. Esta dualidad le otorga reservas de poder mental que se manifiestan como habilidades ps&iacute;quicas. Cuenta con un amigo imaginario que solo &eacute;l puede ver, pero a menudo escapa de la realidad para evitar el estr&eacute;s o la adversidad.",
    traits: "Virtuosos:\n- Imaginaci&oacute;n Poderosa.\n- Poderosa mente.\n- Amigo Imaginario.\n\nDefectuosos:\n- Escapismo.\n- Mundo interior.",
    peculiarities: "- Locura (Pasiva)\n- Amigo Imaginario (Pasivo)",
    abilities: "- Evasión Onírica (Activo)\n- Amigo Imaginario (Pasivo)\n- Cabeza en las Nubes (Activa)",
    sanityLimit: "- Dimensi&oacute;n de Bolsillo (Activa)",
    lockedAbility: "- Materializaci&oacute;n (Activa)",
    requirement: "Superar los bloqueos mentales, traumas y demonios internos. Realizar 3 pruebas exitosas de dificultad intermedia durante viajes on&iacute;ricos en Pesadillas; el Narrador puede reducirlas.",
    imaginaryFriendDescription: "Describe qui&eacute;n es el Amigo Imaginario, c&oacute;mo se manifiesta, qu&eacute; ayuda ofrece y qu&eacute; caprichos o necesidades tiene.",
    pocketDimensionDescription: "Describe el refugio imaginario, sus reglas, acceso y l&iacute;mites.",
    diet: "Medicinas, hierbas medicinales o alucin&oacute;genos",
    affinity: "viento",
    sanity: 4,
    wounds: 4
  },
  "animal-astuto": {
    description: "La enigm&aacute;tica raza enmascarada se adapta a diversos roles ocultando su identidad tras m&aacute;scaras. Es elocuente, persuasiva, &aacute;gil y capaz de manipular almas para acceder a poderes ilusionistas. Lucha entre su verdadera naturaleza y la imagen que proyecta, con un miedo primitivo que evita enfrentar directamente.",
    traits: "Virtuosos:\n- Maestro del disfraz.\n- Embaucador.\n- &Aacute;gil.\n- Magia Innata.\n\nDefectuosos:\n- Fragmentado.\n- Miedo Primitivo.\n- Existencia M&aacute;gica.",
    peculiarities: "- Animal Antropom&oacute;rfico (Pasivo)",
    abilities: "- Nueve vidas como un gato (Activo)\n- M&aacute;scara encantada (Pasivo)\n- V&iacute;nculo de Alma (Activo)",
    sanityLimit: "- Esp&iacute;ritu maligno (Activo)",
    lockedAbility: "- Maestro ilusionista (Activo)",
    requirement: "Aumentar tus conocimientos y poderes m&aacute;gicos.",
    specialDescription: "Animal Antropom&oacute;rfico: elige qu&eacute; animal de tama&ntilde;o peque&ntilde;o eres.",
    diet: "Un alimento relacionado con la dieta del animal elegido para tu Descripción.",
    affinity: "viento",
    sanity: 5,
    wounds: 4
  },
  "feerico": {
    description: "Entidades antiguas hechas de magia pura que necesitan un recipiente humano. Encarnan conceptos y pueden sellar pactos con mortales a cambio de poder. Su cuerpo es m&aacute;gico, pero el v&iacute;nculo con la carcasa es fr&aacute;gil. El hierro y los r&iacute;os son barreras naturales contra ellos.",
    traits: "Virtuosos:\n- Magia Innata.\n- Encarnaci&oacute;n Conceptual.\n\nDefectuosos:\n- Inhumanidad.\n- Debilidad de las Hadas.",
    peculiarities: "- Carcasa fr&aacute;gil (Pasivo)",
    abilities: "- Abracadabra (Activa)\n- Deseo, 24 horas (Activa)\n- Aberraciones (Activa)",
    sanityLimit: "- Terror de los Cuentos de Hadas (Activa)",
    lockedAbility: "- Soberano de la Realidad (Activa)",
    requirement: "Si tu nombre resuena con temor en un grupo humano y te temen o veneran por tus poderes, obtienes la habilidad. Si dejan de venerarte o temerte, pierdes esos poderes.",
    specialDescription: "Encarnaci&oacute;n Conceptual: describe el concepto que encarnas, sus virtudes, poderes, aversiones y vulnerabilidades.\n\nAfinidad M&aacute;gica: puedes elegir entre agua, fuego, tierra o viento.",
    diet: "Carne, trigo, plantas",
    affinity: "",
    sanity: 6,
    wounds: 4
  }
};

const archetypeSelect = document.querySelector("#archetype");
const fields = {
  description: document.querySelector("#archetype-description"),
  lockedAbility: document.querySelector("#locked-ability"),
  requirement: document.querySelector("#locked-ability-requirement"),
  maximumSanity: document.querySelector("#maximum-sanity"),
  woundLimit: document.querySelector("#wound-limit"),
  diet: document.querySelector("#diet"),
  affinity: document.querySelector("#magical-affinity"),
  specialDescription: document.querySelector("#special-description"),
  imaginaryFriendDescription: document.querySelector("#imaginary-friend-description"),
  pocketDimensionDescription: document.querySelector("#pocket-dimension-description")
};

function decodeHtml(value) {
  const decoder = document.createElement("textarea");
  decoder.innerHTML = value;
  return decoder.value;
}

function parseList(value) {
  return value.split("\n").map((item) => item.replace(/^-\s*/, "").trim()).filter(Boolean);
}

function renderArchetypeTraits(listId, prefix, labelText, traits) {
  const list = document.querySelector(`#${listId}`);
  list.innerHTML = "";
  const traitValues = traits.filter(Boolean);

  traitValues.forEach((trait, index) => {
    const row = document.createElement("span");
    row.innerHTML = `<br><label for="${prefix}-${index + 1}">${labelText} ${index + 1}</label> <input type="text" id="${prefix}-${index + 1}" name="${prefix.replace("-", "_")}[]" value="${decodeHtml(trait).replace(/&/g, "&amp;").replace(/"/g, "&quot;")}">`;
    list.appendChild(row);
  });

  const addButton = document.createElement("button");
  addButton.type = "button";
  addButton.className = "add-option";
  addButton.textContent = `Añadir ${decodeHtml(labelText).toLowerCase()}`;
  addButton.addEventListener("click", () => {
    const nextNumber = list.querySelectorAll("input").length + 1;
    const row = document.createElement("span");
    row.innerHTML = `<br><label for="${prefix}-${nextNumber}">${labelText} ${nextNumber}</label> <input type="text" id="${prefix}-${nextNumber}" name="${prefix.replace("-", "_")}[]">`;
    list.insertBefore(row, addButton);
  });
  list.appendChild(addButton);
}

function fillArchetype() {
  const archetype = archetypes[archetypeSelect.value];
  const specialDescriptionField = document.querySelector("#special-description-field");
  const imaginaryFriendDescriptionField = document.querySelector("#imaginary-friend-description-field");
  const pocketDimensionDescriptionField = document.querySelector("#pocket-dimension-description-field");

  Object.keys(fields).forEach((field) => {
    fields[field].value = archetype ? decodeHtml(archetype[field] || "") : "";
  });

  specialDescriptionField.hidden = !archetype || !archetype.specialDescription;
  imaginaryFriendDescriptionField.hidden = !archetype || !archetype.imaginaryFriendDescription;
  pocketDimensionDescriptionField.hidden = !archetype || !archetype.pocketDimensionDescription;

  if (archetype) {
    const traitSections = archetype.traits.split("\n\nDefectuosos:\n");
    const virtues = traitSections[0].replace("Virtuosos:\n", "").split("\n-").map((trait) => trait.replace(/^-\s*/, "").trim());
    const defects = (traitSections[1] || "").split("\n-").map((trait) => trait.replace(/^-\s*/, "").trim());
    renderArchetypeTraits("archetype-virtues-list", "archetype-virtue", "Virtud", virtues);
    renderArchetypeTraits("archetype-defects-list", "archetype-defect", "Defecto", defects);
        renderArchetypeTraits("archetype-abilities-list", "archetype-ability", "Habilidad", parseList(archetype.abilities));
        renderArchetypeTraits("archetype-peculiarities-list", "archetype-peculiarity", "Peculiaridad", parseList(archetype.peculiarities || ""));
        renderArchetypeTraits("sanity-limit-list", "sanity-limit", "L&iacute;mite de Cordura", parseList(archetype.sanityLimit));
  } else {
    renderArchetypeTraits("archetype-virtues-list", "archetype-virtue", "Virtud", []);
    renderArchetypeTraits("archetype-defects-list", "archetype-defect", "Defecto", []);
        renderArchetypeTraits("archetype-abilities-list", "archetype-ability", "Habilidad", []);
        renderArchetypeTraits("archetype-peculiarities-list", "archetype-peculiarity", "Peculiaridad", []);
        renderArchetypeTraits("sanity-limit-list", "sanity-limit", "L&iacute;mite de Cordura", []);
  }

  if (archetype) {
    fields.maximumSanity.value = archetype.sanity;
    fields.woundLimit.value = archetype.wounds;
    fields.affinity.value = archetype.affinity;
  }
}

const corruptionStatusList = document.querySelector("#corruption-status-list");
const addCorruptionStatusButton = document.querySelector("#add-corruption-status");
const corruptionPoints = document.querySelector("#corruption-points");
const corruptionLevel = document.querySelector("#corruption-level");

function updateCorruptionLevel() {
  const points = Math.min(16, Math.max(0, Number(corruptionPoints.value) || 0));
  corruptionPoints.value = points;

  if (points === 0) {
    corruptionLevel.value = "Sin corrupción (0 puntos)";
  } else if (points <= 5) {
    corruptionLevel.value = "Nivel 1: Corrupción Leve (1-5 puntos)";
  } else if (points <= 10) {
    corruptionLevel.value = "Nivel 2: Corrupción Moderada (6-10 puntos)";
  } else if (points <= 15) {
    corruptionLevel.value = "Nivel 3: Corrupción Grave (11-15 puntos)";
  } else {
    corruptionLevel.value = "Nivel 4: Transformación Irreversible (16 puntos)";
  }
}

function renumberCorruptionStatuses() {
  corruptionStatusList.querySelectorAll("select").forEach((select, index) => {
    const number = index + 1;
    select.id = `corruption-status-${number}`;
    select.previousElementSibling.htmlFor = select.id;
    select.previousElementSibling.textContent = `Estado ${number}`;
  });
}

function refreshCorruptionStatusControls() {
  const entries = Array.from(corruptionStatusList.querySelectorAll(".corruption-status-entry"));

  entries.forEach((entry, index) => {
    const existingButton = entry.querySelector(".remove-trait");
    if (existingButton) {
      existingButton.remove();
    }

    if (entries.length > 1) {
      const removeButton = document.createElement("button");
      removeButton.type = "button";
      removeButton.className = "remove-trait";
      removeButton.textContent = "Eliminar";
      removeButton.addEventListener("click", () => {
        entry.remove();
        renumberCorruptionStatuses();
        refreshCorruptionStatusControls();
      });
      entry.appendChild(removeButton);
    }
  });
}

addCorruptionStatusButton.addEventListener("click", () => {
  const number = corruptionStatusList.querySelectorAll("select").length + 1;
  const entry = corruptionStatusList.querySelector(".corruption-status-entry").cloneNode(true);
  const select = entry.querySelector("select");
  const label = entry.querySelector("label");

  select.id = `corruption-status-${number}`;
  label.htmlFor = select.id;
  label.textContent = `Estado ${number}`;
  select.required = false;
  select.value = "";
  const existingButton = entry.querySelector(".remove-trait");
  if (existingButton) {
    existingButton.remove();
  }
  corruptionStatusList.appendChild(entry);
  refreshCorruptionStatusControls();
});

refreshCorruptionStatusControls();
corruptionPoints.addEventListener("input", updateCorruptionLevel);
updateCorruptionLevel();

function addTraitRow(listId, prefix, labelText) {
  const list = document.querySelector(`#${listId}`);
  const nextNumber = list.querySelectorAll("input").length + 1;
  const row = document.createElement("p");
  row.innerHTML = `<label for="${prefix}-${nextNumber}">${labelText} ${nextNumber}</label> <input type="text" id="${prefix}-${nextNumber}" name="${prefix.replace("-", "_")}[]" required>`;
  list.appendChild(row);
}

function removeAdditionalTraitPair(index) {
  const virtueRows = document.querySelectorAll("#additional-virtues-list p");
  const defectRows = document.querySelectorAll("#additional-defects-list p");
  const virtue = virtueRows[index];
  const defect = defectRows[index];

  if (!virtue || !defect || virtueRows.length <= 2) {
    return;
  }

  virtue.remove();
  defect.remove();
  renumberAdditionalTraits();
}

function refreshAdditionalTraitControls() {
  const lists = [
    ["#additional-virtues-list", "Virtud"],
    ["#additional-defects-list", "Defecto"]
  ];

  lists.forEach(([listSelector]) => {
    const list = document.querySelector(listSelector);
    const rows = Array.from(list.querySelectorAll("p"));

    rows.forEach((row) => {
      const removeButton = row.querySelector(".remove-trait");
      if (removeButton) {
        removeButton.remove();
      }
    });

    if (rows.length <= 2) {
      return;
    }

    rows.forEach((row, index) => {
      const removeButton = document.createElement("button");
      removeButton.type = "button";
      removeButton.className = "remove-trait";
      removeButton.textContent = "Eliminar";
      removeButton.addEventListener("click", () => removeAdditionalTraitPair(index));
      row.appendChild(removeButton);
    });
  });
}

function renumberAdditionalTraits() {
  ["virtue", "defect"].forEach((type) => {
    document.querySelectorAll(`#additional-${type}s-list input`).forEach((input, index) => {
      const number = index + 1;
      input.id = `additional-${type}-${number}`;
      input.previousElementSibling.htmlFor = input.id;
      input.previousElementSibling.textContent = `${type === "virtue" ? "Virtud" : "Defecto"} adicional ${number}`;
    });
  });

  refreshAdditionalTraitControls();
}

document.querySelector("#add-virtue").addEventListener("click", () => {
  const virtueList = document.querySelector("#additional-virtues-list");
  const defectList = document.querySelector("#additional-defects-list");
  const nextNumber = virtueList.querySelectorAll("input").length + 1;

  [virtueList, defectList].forEach((list, index) => {
    const type = index === 0 ? "virtue" : "defect";
    const label = index === 0 ? "Virtud" : "Defecto";
    const row = document.createElement("p");
    row.innerHTML = `<label for="additional-${type}-${nextNumber}">${label} adicional ${nextNumber}</label> <input type="text" id="additional-${type}-${nextNumber}" name="additional_${type}s[]" required>`;
    list.appendChild(row);
  });

  refreshAdditionalTraitControls();
});

refreshAdditionalTraitControls();

archetypeSelect.addEventListener("change", fillArchetype);
