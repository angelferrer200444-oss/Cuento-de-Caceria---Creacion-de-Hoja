const occupations = {
  "cazadores-lobos": {
    description: "Incre&iacute;blemente atentos a su entorno, estos cazadores son expertos en supervivencia, rastreo, colocaci&oacute;n de trampas y combate contra bestias salvajes, sobre todo sus archienemigos: los hombres lobo. Su vida salvaje los convierte en predadores implacables, aunque su agresividad puede llevarlos a ser imprudentes. A&ntilde;os de aislamiento los vuelven torpes en interacciones sociales y refuerzan su dependencia de la naturaleza y sus instintos.",
    feats: "Puntos del Cazador (PC)\nPuntos del Superviviente (PS)\nPuntos del Domador (PD)",
    equipment: "Capa de Piel de Lobo\nArco y Flechas (10)\nMosquete (3)\nDaga de Plata\nEquipaje: Mochila, saco de dormir y 1 remedio medicinal.",
    abilities: "Rastreo de Huellas (Pasivo) (2 PC)\nReflejos Felinos (Pasivo) (2 PC)\nFuerza Salvaje (3 PC)\nVista Aguda (Pasivo) (2 PC)\nEnemigo Jurado (Pasivo) (4 PC)\nResistencia al Fr&iacute;o (Pasivo) (2 PS)\nSentido del Peligro (Pasivo) (2 PS)\nCamuflaje Natural (Pasivo) (3 PS)\nFiereza (Activo) (4 PS)\nRecuperaci&oacute;n R&aacute;pida (Activa) (4 PS)\nAliado Lupino (Activo) (2 PD)\nDominancia (Pasivo) (2 PD)\nAullido Intimidante (Activo) (3 PD)\nInstinto de Manada (Pasivo) (3 PD)\nOrden Especial (Activo) (4 PD)"
  },
  "cazador-brujas": {
    description: "Guerreros devotos entrenados por la iglesia para detectar y erradicar la magia oscura. Utilizan artefactos sagrados y t&aacute;cticas extremas para garantizar la purificaci&oacute;n del alma. Reconocidos por su tenacidad y fervor, son el &uacute;ltimo recurso contra las fuerzas de lo oscuro.",
    feats: "Puntos de Inquisidor (PI)\nPuntos de Brujer&iacute;a (PB)",
    equipment: "Crucifijo Protector\nL&aacute;tigo de hierro\nLibro de Encantamientos\nCombustible (2 frascos)\nEquipaje: Mochila, 5 velas, barra de incienso, incensario y raciones para 2 d&iacute;as.\nMonedero: 10 monedas de Bronce.",
    abilities: "Detector de Magia (Activo) (2 PI)\nMirada del Inquisidor (Pasivo) (2 PI)\nDisciplinario (Pasivo) (2 PI)\nTorturador (Activo) (3 PI)\nResistencia M&aacute;gica (Pasivo) (3 PI)\nArmadura Consagrada (Pasivo) (4 PI)\nSentencia (Activo) (3 PI)\nArma bendita (Activo) (4 PI)\nArmas de Tortura (3 PI)\nAura de Fe (3 PI)\nTrampa Arcana (Activo) (2 PB)\nSangre de Bruja (Pasivo) (2 PB)\nMarca Purificadora (Activo) (3 PB)\nCastigo en la hoguera (Activo) (4 PB)\nDecretos de Anulaci&oacute;n (Activo) (3 PB)"
  },
  "comerciante": {
    description: "Persuasivos, astutos y con un conocimiento enciclop&eacute;dico sobre bienes y mercados, los comerciantes son maestros del intercambio. Identifican oportunidades comerciales y convierten una moneda en un imperio, aunque su avaricia o falta de habilidad en combate puede ponerlos en situaciones comprometedoras.",
    feats: "Puntos de Recaudador (PR)\nPuntos de Negociante (PN)\nPuntos de Fabricante (PF)",
    equipment: "Carro Mercantil\nEquipamiento para la aventura elegido por el jugador y aprobado por el DJ\nBalanza Port&aacute;til\nEquipaje: Raciones y monedero",
    abilities: "Maestro del Regateo (Activo) (2 PR)\nContabilidad (Pasivo) (2 PR)\nAn&aacute;lisis de Mercado (Activo) (4 PR)\nMano para el Oro (Pasivo) (3 PR)\nSe&ntilde;or del Mercado (Pasivo) (4 PR)\nApuesta (3 PR)\nPalabras Doradas (Pasivo) (2 PN)\nPalabras que Sanan (Activo) (2 PN)\nContactos en Todas Partes (Pasivo) (3 PN)\nVoz del Mediador (Activo) (4 PN)\nDefensa Contratada (Activo) (6 PN)\nArtesano Vers&aacute;til (Pasivo) (2 PF)\nFalsificador Maestro (Activo) (2 PF)\nBolsa Sin Fondo (Activo) (4 PF)\nMaestro Artesano (Activo) (4 PF)"
  },
  "ocultista": {
    description: "Inmersos en las sombras del conocimiento prohibido, los ocultistas son estudiantes del arte oscuro y las ciencias arcanas. Poseen un instinto innato para entender los misterios del mundo sobrenatural y detectar los flujos m&aacute;gicos. Su b&uacute;squeda de poder los lleva al borde de la corrupci&oacute;n o la revelaci&oacute;n.",
    feats: "Puntos de Pacto (PP)\nPuntos de Sangre (PS)\nPuntos de Estratega (PE)",
    equipment: "Cuchillo Ritual\nRopa de Aprendiz\nEquipaje: Mochila, libro, 3 frascos de sangre y reliquia profana.",
    abilities: "Pacto Menor (Activo) (2 PP)\nVoz del M&aacute;s All&aacute; (Activo) (2 PP)\nPacto con el Diablo (Pasivo) (2 PP)\nMaldecir Dados (Activo) (4 PP)\nIntercambio de Tomos (Pasivo) (3 PP)\nRitualista (Activa) (2 PS)\nPacto de Sangre (Activo) (2 PS)\nRestauraci&oacute;n (Activo) (4 PS)\nConsumir Coraz&oacute;n (Activo) (3 PS)\nCoraz&oacute;n Profano (Activo) (6 PS)\nConexi&oacute;n con las Sombras (Pasivo) (2 PE)\nAstucia (Pasivo) (2 PE)\nIngenio (Pasivo) (2 PE)\nMagia Sencilla (Activo) (3 PE)\nPreparaci&oacute;n (Activo) (4 PE)"
  },
  "mercenario": {
    description: "Guerreros por contrato, expertos en combate y supervivencia, los mercenarios son individuos de moral flexible que valoran el pago por encima de la gloria o el honor. Se adaptan a cualquier situaci&oacute;n como protectores, cazadores o asesinos. Aunque su lealtad est&aacute; en venta, su profesionalismo los convierte en aliados temidos y respetados.",
    feats: "Puntos del Asesino (PA)\nPuntos del Blindado (PB)\nPuntos del L&iacute;der (PL)",
    equipment: "Espada Larga\nArmadura de Cuero\nSet de juegos\nSello de Mercenario\n&Uacute;ltimo Salario",
    abilities: "Instinto contra enga&ntilde;os (Pasivo) (2 PA)\nLuchador (Pasivo) (2 PA)\nMaestr&iacute;a de Armas (Pasivo) (3 PA)\nGolpe Preciso (Activo) (3 PA)\nH&aacute;bil (Activo) (4 PA)\nCurtido (Activo) (2 PB)\nInquebrantable (Pasivo) (2 PB)\nExperiencia (Activo) (3 PB)\nPiel de Hierro (Activo) (3 PB)\nVerdaderas Agallas (Pasivo) (4 PB)\nRenombre (Pasivo) (2 PL)\nLenguaje de Criminales (Pasivo) (2 PL)\nOmert&agrave; (Pasivo) (2 PL)\nAdaptabilidad T&aacute;ctica (Activo) (3 PL)\nContrato de Mercenarios (Activo) (4 PL)"
  },
  "apostol": {
    description: "Portadores de una fe inquebrantable, los Ap&oacute;stoles son guerreros consagrados que canalizan la luz divina para curar heridas, reforzar la moral y bendecir a sus aliados en los momentos m&aacute;s oscuros. Su conexi&oacute;n con lo sagrado requiere un gran esfuerzo espiritual y lleva su cuerpo al l&iacute;mite con cada intervenci&oacute;n milagrosa. Su poder depende de la pureza de sus intenciones: cuando dudan o empiezan a envidiar, sus poderes se diluyen.",
    feats: "Puntos Divinos (PD)\nPuntos del Consagrado (PC)\nPuntos del Justiciero (PJ)",
    equipment: "B&aacute;culo de Fe\nRopa Consagrada\nMochila: 5 velas, 1 barra de incienso, un incensario y raciones para 2 d&iacute;as\nLimosnas: 10 monedas de Bronce\nLibro de Oraciones: durante un Interludio otorga +1 en tiradas relacionadas con la recuperaci&oacute;n mental.",
    abilities: "Toque de Sanaci&oacute;n (Activo) (2 PD)\nBendici&oacute;n (Activo) (2 PD)\nDecretos de Anulaci&oacute;n (Activo) (3 PD)\nEscudo Sagrado (Activo) (3 PD)\nMilagro (Activo) (4 PD)\nDevoto (Pasivo) (2 PC)\nFuerza en la Voluntad (2 PC)\nVoz del Pastor (Pasivo) (2 PC)\nRevelaci&oacute;n Divina (Activo) (3 PC)\nAuxilio del Cielo (Activo) (4 PC)\nOjos Despiertos (Pasivo) (2 PJ)\nDiscernimiento (Pasivo) (2 PJ)\nDecretos de Verdad (Activo) (3 PJ)\nMartillo de Luz (Activo) (4 PJ)\nLlama Redentora (4 PJ)"
  },
  "alquimista": {
    description: "Maestros del arte de la creaci&oacute;n y transformaci&oacute;n, los Alquimistas combinan la ciencia con la magia para alcanzar logros extraordinarios. Crean pociones curativas, venenos, modificaciones corporales y esclavos de carne. Su obsesi&oacute;n por la perfecci&oacute;n los lleva a desafiar las leyes de la naturaleza, con riesgos y consecuencias impredecibles.",
    feats: "Puntos de Herborista (PH)\nPuntos de Transmutador (PT)\nPuntos de Investigador (PI)",
    equipment: "Cuchillo de Herborista\nAtuendo de investigaci&oacute;n\nKit de Alquimia\nIngredientes acordes al descriptor",
    abilities: "Brebaje Curativo (Activo) (2 PC)\nEnvenenador (Activo) (2 PC)\nSuero Calmante (Activo) (2 PC)\nSistema Inmunol&oacute;gico Reforzado (Pasivo) (3 PC)\nElixir de la Vida (Activo) (6 PC)\nAlterar Objeto (Activo) (2 PT)\nAlterar Cuerpo (Activo) (2 PT)\nCient&iacute;fico Loco (Pasivo) (3 PT)\nHom&uacute;nculo (Activo) (4 PT)\nIngenio (Pasivo) (2 PI)\nInvestigador de Campo (Pasivo) (2 PI)\nPoder de Deducci&oacute;n (Activo) (3 PI)\n&iexcl;Eureka! (Activo) (4 PI)\nMaestro Tenaz (Activo) (4 PI)"
  },
  "guardia-real": {
    description: "Como soldados de &eacute;lite al servicio de la nobleza y la corona, los Guardias Reales representan el pin&aacute;culo del honor, la disciplina y la lealtad. Son maestros del combate defensivo y poseen habilidades excepcionales para liderar y mantener la moral de sus filas, aunque su devoci&oacute;n puede llevarlos a sacrificar su libertad para tomar decisiones independientes.",
    feats: "Puntos del Protector (PP)\nPuntos de la Espada (PE)\nPuntos del Comandante (PC)",
    equipment: "Espada Bastarda\nEscudo Her&aacute;ldico\nArmadura de Placas\nSalario: 10 monedas de Bronce\nSello del Rey",
    abilities: "Postura de Guardia (Pasivo) (2 PP)\nMuralla Inamovible (Pasivo) (2 PP)\nEscudo Noble (Activo) (3 PP)\nPiel de Hierro (Activo) (3 PP)\nBasti&oacute;n Real (Activo) (4 PP)\nCorte Preciso (Activo) (2 PE)\nContraataque (Pasivo) (2 PE)\nProvocaci&oacute;n (Activo) (3 PE)\nEstocada (Activo) (3 PE)\nFlujo de Combate (Activo) (4 PE)\nVoz de Mando (Pasivo) (2 PC)\nPresencia Imponente (Pasivo) (2 PC)\nFormaci&oacute;n Real (Activo) (3 PC)\nEstratega (Activo) (3 PC)\n&iexcl;Todos para uno y uno para todos! (Activo) (4 PC)"
  },
  "pirata": {
    description: "Temidos y admirados por igual, los Piratas viven bajo su propio c&oacute;digo de libertad. Son maestros del saqueo y el combate improvisado, navegan los mares y convierten cualquier situaci&oacute;n en una oportunidad para ganar oro o un enemigo nuevo. Su encanto y astucia los hacen indispensables en cualquier tripulaci&oacute;n.",
    feats: "Puntos del Corsario (PC)\nPuntos del Marinero (PM)\nPuntos del Brib&oacute;n (PB)",
    equipment: "Espada de Corsario\nPistola de Chispa (munici&oacute;n x3)\nEquipo de Navegaci&oacute;n: sextante, br&uacute;jula, regla, 3 cartas, pergamino, frasco de tinta y pluma\nBotella de Ron (x2)\nBolsita: 5 monedas de bronce",
    abilities: "Espadach&iacute;n Improvisado (Pasivo) (2 PC)\nDisparo Certero (Pasivo) (2 PC)\nAs del Duelo (Activo) (3 PC)\nArma Escondida (Activo) (3 PC)\nResbaladizo (Activo) (3 PC)\nMono de Aparejos (Pasivo) (2 PM)\nPatas de Mar Resistentes (Pasivo) (2 PM)\nConocedor del Mar (Pasivo) (2 PM)\nAmante del Alcohol (Pasivo) (3 PM)\nBombas Caseras (Activo) (4 PM)\nManos Ligeras (Pasivo) (2 PB)\nLobo de Mar (Pasivo) (2 PB)\nMal Perdedor (Pasivo) (2 PB)\nSea Shanties (Activo) (3 PB)\nLadr&oacute;n de Oportunidades (Activo) (4 PB)"
  }
};

const occupationSelect = document.querySelector("#occupation");
const characteristicPoints = document.querySelector("#characteristic-points");
const abilityError = document.querySelector("#ability-error");
const abilityErrorMessage = document.querySelector("#ability-error-message");
const dismissAbilityError = document.querySelector("#dismiss-ability-error");
let initialCharacteristicPoints = Number(characteristicPoints.value) || 0;
let selectedOccupationAbilities = [];
let selectedOccupationEquipment = [];

function hideAbilityError() {
  abilityError.hidden = true;
}

function showAbilityError(ability, remainingPoints) {
  abilityErrorMessage.textContent = `Te quedan ${remainingPoints} punto${remainingPoints === 1 ? "" : "s"}, pero esta habilidad requiere ${getAbilityCost(ability)}.`;
  abilityError.hidden = false;
}

function getAbilityCost(ability) {
  const match = decodeHtml(ability).match(/\((\d+)\s+[A-Z]+\)$/);
  return match ? Number(match[1]) : 0;
}

function getSelectedAbilityCost() {
  return selectedOccupationAbilities.reduce((total, ability) => total + getAbilityCost(ability), 0);
}

function updateCharacteristicPoints() {
  characteristicPoints.value = initialCharacteristicPoints - getSelectedAbilityCost();
}

function renderFixedOccupationList(listId, prefix, labelText, values) {
  const list = document.querySelector(`#${listId}`);
  list.innerHTML = "";

  values.forEach((value, index) => {
    const row = document.createElement("span");
    row.className = "occupation-feat";
    row.textContent = decodeHtml(value);
    list.appendChild(row);
  });
}

function renderOccupationAbilities() {
  const list = document.querySelector("#occupation-abilities-list");
  list.innerHTML = "";

  selectedOccupationAbilities.forEach((selectedAbility, index) => {
    const row = document.createElement("span");
    const select = document.createElement("select");
    select.id = `occupation-ability-${index + 1}`;
    select.name = "occupation_abilities[]";

    const emptyOption = document.createElement("option");
    emptyOption.value = "";
    emptyOption.textContent = "Selecciona una habilidad";
    select.appendChild(emptyOption);

    selectedOccupationAbilities.options.forEach((ability) => {
      const option = document.createElement("option");
      option.value = ability;
      option.textContent = decodeHtml(ability);
      option.selected = ability === selectedAbility;
      select.appendChild(option);
    });

    select.addEventListener("change", () => {
      const previousValue = selectedOccupationAbilities[index];
      selectedOccupationAbilities[index] = select.value;

      if (getSelectedAbilityCost() > initialCharacteristicPoints) {
        showAbilityError(select.value, initialCharacteristicPoints - getSelectedAbilityCost() + getAbilityCost(select.value));
        selectedOccupationAbilities[index] = previousValue;
        renderOccupationAbilities();
        return;
      }

      hideAbilityError();
      updateCharacteristicPoints();
    });

    const label = document.createElement("label");
    label.htmlFor = select.id;
    label.textContent = `Habilidad ${index + 1}`;
    row.appendChild(label);
    row.appendChild(select);

    const removeButton = document.createElement("button");
    removeButton.type = "button";
    removeButton.className = "remove-trait";
    removeButton.textContent = "Eliminar";
    removeButton.addEventListener("click", () => {
      selectedOccupationAbilities.splice(index, 1);
      renderOccupationAbilities();
    });
    row.appendChild(removeButton);

    list.appendChild(row);
  });

  updateCharacteristicPoints();
}

function renderOccupationEquipment() {
  const list = document.querySelector("#occupation-equipment-list");
  list.innerHTML = "";

  selectedOccupationEquipment.forEach((selectedEquipment, index) => {
    const row = document.createElement("span");
    row.className = "equipment-row";
    const input = document.createElement("input");
    input.type = "text";
    input.id = `occupation-equipment-${index + 1}`;
    input.name = "occupation_equipment[]";
    input.value = decodeHtml(selectedEquipment);
    input.addEventListener("input", () => {
      selectedOccupationEquipment[index] = input.value;
    });

    row.appendChild(document.createElement("br"));
    const label = document.createElement("label");
    label.htmlFor = input.id;
    label.textContent = `Equipo ${index + 1}`;
    row.appendChild(label);
    row.appendChild(input);
    const removeButton = document.createElement("button");
    removeButton.type = "button";
    removeButton.className = "remove-equipment";
    removeButton.textContent = "Eliminar";
    removeButton.addEventListener("click", () => {
      selectedOccupationEquipment.splice(index, 1);
      renderOccupationEquipment();
    });
    row.appendChild(removeButton);
    list.appendChild(row);
  });
}

function fillOccupation() {
  const occupation = occupations[occupationSelect.value];
  const description = document.querySelector("#occupation-description");

  description.value = occupation ? decodeHtml(occupation.description) : "";
  selectedOccupationAbilities = occupation ? [""] : [];
  selectedOccupationAbilities.options = occupation ? parseList(occupation.abilities) : [];
  characteristicPoints.value = initialCharacteristicPoints;
  hideAbilityError();
  renderOccupationAbilities();
  renderFixedOccupationList("occupation-feats-list", "occupation-feat", "Hazaña", occupation ? parseList(occupation.feats) : []);
  selectedOccupationEquipment = occupation ? parseList(occupation.equipment) : [];
  selectedOccupationEquipment.options = occupation ? parseList(occupation.equipment) : [];
  renderOccupationEquipment();
}

document.querySelector("#add-occupation-ability").addEventListener("click", () => {
  selectedOccupationAbilities.push("");
  renderOccupationAbilities();
});

document.querySelector("#add-occupation-equipment").addEventListener("click", () => {
  selectedOccupationEquipment.push("");
  renderOccupationEquipment();
});

occupationSelect.addEventListener("change", fillOccupation);
dismissAbilityError.addEventListener("click", hideAbilityError);
characteristicPoints.addEventListener("input", () => {
  const enteredPoints = Math.max(0, Number(characteristicPoints.value) || 0);
  initialCharacteristicPoints = enteredPoints + getSelectedAbilityCost();
  updateCharacteristicPoints();
});
