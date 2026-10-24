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

function renderArchetypeTraitPair(virtueList, defectList, index, virtueValue = "", defectValue = "", requireDefect = false) {
  const virtueRow = document.createElement("p");
  const defectRow = document.createElement("p");
  const virtueInputId = `archetype-virtue-${index}`;
  const defectInputId = `archetype-defect-${index}`;

  virtueRow.innerHTML = `<label for="${virtueInputId}">Virtud ${index}</label>`;
  defectRow.innerHTML = `<label for="${defectInputId}">Defecto ${index}</label>`;

  const virtueInput = document.createElement("input");
  virtueInput.type = "text";
  virtueInput.id = virtueInputId;
  virtueInput.name = "archetype_virtue[]";
  virtueInput.value = decodeHtml(virtueValue);

  const defectInput = document.createElement("input");
  defectInput.type = "text";
  defectInput.id = defectInputId;
  defectInput.name = "archetype_defect[]";
  defectInput.value = decodeHtml(defectValue);
  defectInput.required = requireDefect;

  virtueRow.appendChild(virtueInput);
  defectRow.appendChild(defectInput);

  const removePair = () => {
    virtueRow.remove();
    defectRow.remove();
    renumberArchetypeTraitPairs();
  };

  [virtueRow, defectRow].forEach((row) => {
    const removeButton = document.createElement("button");
    removeButton.type = "button";
    removeButton.className = "remove-trait";
    removeButton.textContent = "Eliminar";
    removeButton.addEventListener("click", removePair);
    row.appendChild(removeButton);
  });
  virtueList.appendChild(virtueRow);
  defectList.appendChild(defectRow);
}

function renderArchetypeSingleTrait(list, type, index, value = "") {
  const row = document.createElement("p");
  const inputId = `archetype-${type}-${index}`;
  const label = type === "virtue" ? "Virtud" : "Defecto";

  row.innerHTML = `<label for="${inputId}">${label} ${index}</label>`;

  const input = document.createElement("input");
  input.type = "text";
  input.id = inputId;
  input.name = `archetype_${type}[]`;
  input.value = decodeHtml(value);
  row.appendChild(input);

  const removeButton = document.createElement("button");
  removeButton.type = "button";
  removeButton.className = "remove-trait";
  removeButton.textContent = "Eliminar";
  removeButton.addEventListener("click", () => {
    row.remove();
    renumberArchetypeTraitPairs();
  });
  row.appendChild(removeButton);
  list.appendChild(row);
}

function renumberArchetypeTraitPairs() {
  const virtueRows = Array.from(document.querySelectorAll("#archetype-virtues-list p"));
  const defectRows = Array.from(document.querySelectorAll("#archetype-defects-list p"));

  virtueRows.forEach((row, index) => {
    const number = index + 1;
    const input = row.querySelector("input");
    input.id = `archetype-virtue-${number}`;
    row.querySelector("label").htmlFor = input.id;
    row.querySelector("label").textContent = `Virtud ${number}`;
  });

  defectRows.forEach((row, index) => {
    const number = index + 1;
    const input = row.querySelector("input");
    input.id = `archetype-defect-${number}`;
    row.querySelector("label").htmlFor = input.id;
    row.querySelector("label").textContent = `Defecto ${number}`;
  });
}

function renderArchetypeTraitPairs(virtues, defects) {
  const virtueList = document.querySelector("#archetype-virtues-list");
  const defectList = document.querySelector("#archetype-defects-list");
  virtueList.innerHTML = "";
  defectList.innerHTML = "";

  const pairedTraits = Math.min(virtues.length, defects.length);
  for (let index = 0; index < pairedTraits; index += 1) {
    renderArchetypeTraitPair(virtueList, defectList, index + 1, virtues[index], defects[index]);
  }

  for (let index = pairedTraits; index < virtues.length; index += 1) {
    renderArchetypeSingleTrait(virtueList, "virtue", index + 1, virtues[index]);
  }

  for (let index = pairedTraits; index < defects.length; index += 1) {
    renderArchetypeSingleTrait(defectList, "defect", index + 1, defects[index]);
  }

  const addTraitPair = () => {
    const nextNumber = virtueList.querySelectorAll("input").length + 1;
    renderArchetypeTraitPair(virtueList, defectList, nextNumber, "", "", true);
    virtueList.appendChild(addVirtueButton);
    defectList.appendChild(addDefectButton);
  };

  const addVirtueButton = document.createElement("button");
  addVirtueButton.type = "button";
  addVirtueButton.className = "add-option";
  addVirtueButton.textContent = "Añadir virtud";
  addVirtueButton.addEventListener("click", addTraitPair);
  virtueList.appendChild(addVirtueButton);

  const addDefectButton = document.createElement("button");
  addDefectButton.type = "button";
  addDefectButton.className = "add-option";
  addDefectButton.textContent = "Añadir defecto";
  addDefectButton.addEventListener("click", addTraitPair);
  defectList.appendChild(addDefectButton);
}

function renderArchetypeTraits(listId, prefix, labelText, traits) {
  const list = document.querySelector(`#${listId}`);
  list.innerHTML = "";

  traits.filter(Boolean).forEach((trait, index) => {
    const row = document.createElement("span");
    const inputId = `${prefix}-${index + 1}`;
    const input = document.createElement("input");
    const decodedTrait = decodeHtml(trait);

    input.type = "text";
    input.id = inputId;
    input.name = `${prefix.replace("-", "_")}[]`;
    input.value = decodedTrait;
    row.append(document.createElement("br"));
    row.append(Object.assign(document.createElement("label"), {
      htmlFor: inputId,
      textContent: `${decodeHtml(labelText)} ${index + 1}`
    }));
    row.append(input);
    applySanityLimitEffect(input, decodedTrait, prefix);
    list.appendChild(row);
  });

  const addButton = document.createElement("button");
  addButton.type = "button";
  addButton.className = "add-option";
  addButton.textContent = `Añadir ${decodeHtml(labelText).toLowerCase()}`;
  addButton.addEventListener("click", () => {
    const nextNumber = list.querySelectorAll("input").length + 1;
    const row = document.createElement("span");
    const inputId = `${prefix}-${nextNumber}`;
    const input = document.createElement("input");

    input.type = "text";
    input.id = inputId;
    input.name = `${prefix.replace("-", "_")}[]`;
    row.append(document.createElement("br"));
    row.append(Object.assign(document.createElement("label"), {
      htmlFor: inputId,
      textContent: `${decodeHtml(labelText)} ${nextNumber}`
    }));
    row.append(input);
    applySanityLimitEffect(input, "", prefix);
    list.insertBefore(row, addButton);
  });
  list.appendChild(addButton);
}

function applySanityLimitEffect(input, value, prefix) {
  if (prefix !== "sanity-limit") {
    return;
  }

  const row = input.parentElement;
  const effectClasses = [
    "sanity-wolf",
    "sanity-magic",
    "sanity-forest",
    "sanity-strength",
    "sanity-curse",
    "sanity-hero",
    "sanity-berserker",
    "sanity-dimension",
    "sanity-spirit",
    "sanity-fairy"
  ];
  const getEffectClass = (text) => {
    const normalized = text
      .toLocaleLowerCase("es")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
    const effects = [
      [[
        "lobo", "lobuno", "lobezno", "lobezna", "licantropo", "licano",
        "hombre lobo", "mujer lobo", "manada", "aullido", "aullar",
        "colmillo", "colmillos", "garra", "garras", "pelaje", "piel de lobo",
        "forma lupina", "naturaleza lupina", "instinto animal", "instinto bestial",
        "animal", "bestia", "bestial", "feral", "salvaje", "depredador",
        "depredadora", "cazador nocturno", "transformaci", "mutacion",
        "metamorfosis", "cambio de forma", "forma animal"
      ], "sanity-wolf"],
      [[
        "magia", "magico", "magica", "arcano", "arcana", "mistic", "mistico",
        "mistica", "hechizo", "hechicer", "brujo", "bruja", "brujeria",
        "conjuro", "conjurar", "encantamiento", "encantado", "encantada",
        "sortilegio", "ritual", "invocacion", "invocar", "poder sobrenatural",
        "energia sobrenatural", "mana", "runas", "runa", "grimorio",
        "maldicion magica", "maleficio", "malefica", "brujeria", "letras peque",
        "pacto", "aquelarre", "alquimia", "pocion", "pociones", "oraculo",
        "vision mistica", "hechiceria"
      ], "sanity-magic"],
      [[
        "bosque", "selva", "arboleda", "floresta", "monte", "naturaleza",
        "natural", "verde", "vegetal", "planta", "plantas", "raiz", "raices",
        "rama", "ramas", "hoja", "hojas", "tronco", "madera", "musgo",
        "enredadera", "enredaderas", "espina", "espinas", "flora", "fauna",
        "animal salvaje", "espiritu del bosque", "guardian del bosque",
        "fraterna", "hermandad", "hermano", "hermana", "tribu", "manada",
        "tierra viva", "naturaleza salvaje", "susurro de los arboles"
      ], "sanity-forest"],
      [[
        "fuerza", "fuerte", "fortaleza", "poder", "potencia", "vigor",
        "musculo", "musculoso", "musculosa", "fisico", "fisica", "brutal",
        "brutalidad", "golpe", "golpes", "impacto", "aplastar", "aplastamiento",
        "gigante", "coloso", "titan", "titanica", "ogro", "monstruoso",
        "monstruosa", "furia", "rabia", "ira", "furioso", "furiosa",
        "guerrero", "guerrera", "combate", "batalla", "berserker", "berseker",
        "enfurecido", "enfurecida", "frenesi", "sangre"
      ], "sanity-strength"],
      [[
        "maldici", "maldito", "maldita", "maldecido", "maldecida", "desatada",
        "desatado", "condena", "condenado", "condenada", "condenacion",
        "castigo sobrenatural", "marca oscura", "marca maldita", "sello oscuro",
        "sello maldito", "afliccion", "infortunio", "desgracia", "fatalidad",
        "mala suerte", "destino oscuro", "corrupcion", "corrupcion espiritual",
        "pacto oscuro", "precio del poder", "deuda sobrenatural", "pecado",
        "profanacion", "maldicion desatada"
      ], "sanity-curse"],
      [[
        "antih", "heroe", "heroina", "heroico", "heroica", "protagonista",
        "campeon", "campeona", "caballero", "caballeria", "paladin", "paladina",
        "justicia", "honor", "valor", "valentia", "coraje", "corazon",
        "determinaci", "voluntad", "resistencia", "esperanza", "luz",
        "redencion", "sacrificio", "deber", "proposito", "juramento",
        "promesa", "hazana", "hazanas", "salvador", "salvadora"
      ], "sanity-hero"],
      [[
        "dimensi", "bolsillo", "espacio", "espacial", "portal", "portales",
        "umbral", "puerta dimensional", "mundo alterno", "mundo paralelo",
        "realidad alterna", "realidad paralela", "universo", "multiverso",
        "vacio", "vacio dimensional", "abismo", "pliegue", "teletransporte",
        "teletransportar", "inframundo", "otro plano", "plano astral",
        "limbo", "laberinto", "interior imposible", "espacio interior",
        "dentro de si"
      ], "sanity-dimension"],
      [[
        "espiritu", "fantasma", "fantasmal", "alma", "almas", "aparicion",
        "apariciones", "espectro", "espectral", "ente", "entidad", "presencia",
        "posesion", "poseido", "poseida", "medium", "ectoplasma", "etereo",
        "etereo", "eterea", "inmaterial", "sobrenatural", "muerto", "muerta",
        "no muerto", "no muerta", "alma perdida", "voz del mas alla",
        "susurro", "susurros", "paranormal", "fantasma maligno"
      ], "sanity-spirit"],
      [[
        "titiritero", "marioneta", "marionetas", "titere", "titeres",
        "hilo", "hilos", "cuerda", "cuerdas", "muñeco", "muneco", "muñeca",
        "muneca", "juguete", "juguetes", "madera", "metal", "engranaje",
        "engranajes", "maquina", "mecanico", "mecanica", "automata",
        "robot", "constructo", "construido", "ensamblaje", "protesis",
        "amo", "creador", "orden", "obediencia", "atadura", "ataduras",
        "cuerpo artificial", "cuerpo mecanico", "niño de verdad",
        "nino de verdad"
      ], "sanity-automata"],
      [[
        "terror", "miedo", "horror", "espanto", "pavor", "panico", "temor",
        "pesadilla", "pesadillas", "cuento", "cuentos", "hadas", "hada",
        "faerico", "feérico", "fantasia", "fantastico", "fantastica",
        "maravilloso", "maravillosa", "encantado", "encantada", "inocencia",
        "infancia", "nana", "bosque encantado", "cuento de hadas",
        "monstruo bajo la cama", "maldad infantil", "reino magico"
      ], "sanity-fairy"]
    ];

    return effects.find(([keywords]) => keywords.some((keyword) => normalized.includes(keyword)))?.[1] || "";
  };
  const allEffectClasses = [...effectClasses, "sanity-automata"];
  const syncEffect = () => {
    row.classList.remove(...allEffectClasses);
    const effectClass = getEffectClass(input.value);
    if (effectClass) {
      row.classList.add(effectClass);
    }
  };

  input.addEventListener("input", syncEffect);
  syncEffect();
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
    renderArchetypeTraitPairs(virtues, defects);
        renderArchetypeTraits("archetype-abilities-list", "archetype-ability", "Habilidad", parseList(archetype.abilities));
        renderArchetypeTraits("archetype-peculiarities-list", "archetype-peculiarity", "Peculiaridad", parseList(archetype.peculiarities || ""));
        renderArchetypeTraits("sanity-limit-list", "sanity-limit", "L&iacute;mite de Cordura", parseList(archetype.sanityLimit));
  } else {
    renderArchetypeTraitPairs([], []);
        renderArchetypeTraits("archetype-abilities-list", "archetype-ability", "Habilidad", []);
        renderArchetypeTraits("archetype-peculiarities-list", "archetype-peculiarity", "Peculiaridad", []);
        renderArchetypeTraits("sanity-limit-list", "sanity-limit", "L&iacute;mite de Cordura", []);
  }

  if (archetype) {
    fields.maximumSanity.value = archetype.sanity;
    fields.woundLimit.value = archetype.wounds;
    fields.affinity.value = archetype.affinity;
  }

  fields.affinity.dispatchEvent(new Event("change", { bubbles: true }));
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
  const number = corruptionStatusList.querySelectorAll(
    ".corruption-status-entry"
  ).length + 1;

  const original = corruptionStatusList.querySelector(
    ".corruption-status-entry"
  );

  if (!original) return;

  // Clonar la entrada original.
  const entry = original.cloneNode(true);

  // Eliminar el menú personalizado clonado y conservar el select.
  entry.querySelectorAll(".custom-select").forEach((wrapper) => {
    const select = wrapper.querySelector("select");

    if (select) {
      wrapper.parentNode.insertBefore(select, wrapper);
    }

    wrapper.remove();
  });

  const select = entry.querySelector("select");
  const label = entry.querySelector("label");

  // Asignar un identificador nuevo.
  select.id = `corruption-status-${number}`;
  label.htmlFor = select.id;
  label.textContent = `Estado ${number}`;

  // Reiniciar el select.
  select.required = false;
  select.selectedIndex = 0;

  // Eliminar cualquier botón de eliminación heredado.
  entry.querySelectorAll(".remove-trait").forEach((button) => {
    button.remove();
  });

  corruptionStatusList.appendChild(entry);

  refreshCorruptionStatusControls();
});


refreshCorruptionStatusControls();
corruptionPoints.addEventListener("input", updateCorruptionLevel);
updateCorruptionLevel();

archetypeSelect.addEventListener("change", fillArchetype);
