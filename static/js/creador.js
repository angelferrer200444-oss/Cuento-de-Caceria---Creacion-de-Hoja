(() => {
  "use strict";

  const steps = Array.from(document.querySelectorAll(".creator-step"));
  const dots = Array.from(document.querySelectorAll(".step-dot"));
  const currentStep = document.querySelector("#current-step");
  const progressFill = document.querySelector("#step-progress-fill");
  const previousButton = document.querySelector("#previous-step");
  const nextButton = document.querySelector("#next-step");
  const formActions = document.querySelector("#form-actions");
  const randomOptionValue = "__random__";
  let activeStep = 0;

  const modoAleatorio = new URLSearchParams(window.location.search)
  .get("modo") === "aleatorio";

function elegirOpcionAleatoria(selector) {
  const select = document.querySelector(selector);

  if (!select) {
    console.warn(`No se encontró el selector: ${selector}`);
    return false;
  }

  const opciones = Array.from(select.options).filter(option =>
    option.value.trim() &&
    option.value !== randomOptionValue &&
    !option.disabled
  );

  if (!opciones.length) {
    console.warn(`No hay opciones disponibles para: ${selector}`);
    return false;
  }

  const opcion = opciones[Math.floor(Math.random() * opciones.length)];

  select.value = opcion.value;
  select.dispatchEvent(new Event("change", { bubbles: true }));

  return true;
}


  let dadosOverlay = null;
  let dadosFrame = null;
  let dadosEnAnimacion = false;
  let temporizadorDados = null;
  const TIEMPO_MAXIMO_DADOS = 7000; // 10 segundos


  // Preparar los elementos del HTML.
  function prepararDados() {
    dadosOverlay = document.querySelector("#dados-overlay");
    dadosFrame = document.querySelector("#dados-frame");

    console.log("Overlay encontrado:", !!dadosOverlay);
    console.log("Iframe encontrado:", !!dadosFrame);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", prepararDados, {
      once: true
    });
  } else {
    prepararDados();
  }

  // Lanzar los dados.
  window.lanzarDadosMedievales = function () {
    if (!dadosOverlay || !dadosFrame) {
      console.error("No se encontró el overlay o el iframe.");
      return;
    }

    if (dadosEnAnimacion) {
      console.warn("Los dados todavía están animándose.");
      return;
    }

    clearTimeout(temporizadorDados);
    dadosEnAnimacion = true;

    // Volver a mostrar el overlay.
    dadosOverlay.style.display = "block";
    dadosOverlay.classList.add("visible");
    dadosOverlay.setAttribute("aria-hidden", "false");

    // Reiniciar el iframe y reutilizar la URL para aprovechar la caché.
    dadosFrame.src = "about:blank";

    requestAnimationFrame(() => {
      dadosFrame.src = "../dados20/dados.html";
    });

  };

  function finalizarDados() {
    clearTimeout(temporizadorDados);

    if (!dadosOverlay || !dadosFrame) return;

    dadosOverlay.classList.remove("visible");
    dadosOverlay.setAttribute("aria-hidden", "true");
    dadosOverlay.style.display = "none";

    // Detener la animación y liberar el iframe.
    dadosFrame.src = "about:blank";

    dadosEnAnimacion = false;

    console.log("Dados finalizados o retirados por tiempo máximo.");
  }


  // Recibir el aviso de que los dados terminaron.
  window.addEventListener("message", (event) => {
    if (
      !dadosFrame ||
      event.source !== dadosFrame.contentWindow ||
      event.data !== "dados-terminados"
    ) {
      return;
    }

    // Mantener el pequeño desvanecimiento visual.
    clearTimeout(temporizadorDados);

    temporizadorDados = setTimeout(() => {
      finalizarDados();
    }, 1100);
  });



  function supportsRandomOption(select) {
    return select.matches(
      "#archetype, #occupation, #curse, #corruption-status-list select, #phobias-list select"
    );
  }

  function addRandomOption(select) {
    if (!supportsRandomOption(select) || select.querySelector(`option[value="${randomOptionValue}"]`)) {
      return;
    }

    const randomOption = document.createElement("option");
    randomOption.value = randomOptionValue;
    randomOption.textContent = "Aleatorio";
    select.appendChild(randomOption);
  }

  function enhanceSelect(select) {
    if (select.closest(".custom-select")) {
      return;
    }

    addRandomOption(select);

    const wrapper = document.createElement("div");
    const button = document.createElement("button");
    const optionsList = document.createElement("div");

    wrapper.className = "custom-select";
    button.className = "custom-select-button";
    button.type = "button";
    button.setAttribute("aria-controls", `${select.id}-options`);
    button.setAttribute("aria-expanded", "false");
    button.setAttribute("aria-haspopup", "listbox");
    optionsList.className = "custom-select-options";
    optionsList.id = `${select.id}-options`;
    optionsList.setAttribute("role", "listbox");

    select.parentNode.insertBefore(wrapper, select);
    wrapper.append(select, button, optionsList);

    const close = () => {
      wrapper.classList.remove("open");
      button.setAttribute("aria-expanded", "false");
    };

    const sync = () => {
      button.textContent = select.selectedOptions[0]?.textContent || "";
      wrapper.classList.remove("affinity-water", "affinity-fire", "affinity-earth", "affinity-wind");
      const affinityClass = {
        agua: "affinity-water",
        fuego: "affinity-fire",
        tierra: "affinity-earth",
        viento: "affinity-wind"
      }[select.value];

      if (affinityClass) {
        wrapper.classList.add(affinityClass);
      }

      optionsList.querySelectorAll(".custom-select-option").forEach((optionButton, index) => {
        const selected = select.selectedIndex === index;
        optionButton.classList.toggle("selected", selected);
        optionButton.setAttribute("aria-selected", String(selected));
      });
    };

    const open = () => {
      if (select.disabled) {
        return;
      }

      wrapper.classList.add("open");
      button.setAttribute("aria-expanded", "true");
      optionsList.querySelector(".selected")?.focus();
    };

    Array.from(select.options).forEach((option, index) => {
      const optionButton = document.createElement("button");

      optionButton.className = "custom-select-option";
      optionButton.type = "button";
      optionButton.textContent = option.textContent;
      optionButton.setAttribute("role", "option");
      if (option.value === randomOptionValue) {
        optionButton.classList.add("random-option");
      }
      if (select.id === "magical-affinity" && option.value) {
        optionButton.classList.add(`affinity-option-${option.value}`);
      }
      optionButton.addEventListener("click", () => {
        select.selectedIndex = index;
        select.dispatchEvent(new Event("change", { bubbles: true }));
        close();
        button.focus();
      });
      optionsList.appendChild(optionButton);
    });

    button.addEventListener("click", () => {
      sync();

      if (wrapper.classList.contains("open")) {
        close();
      } else {
        open();
      }
    });

    button.addEventListener("keydown", (event) => {
      if (event.key === "ArrowDown" || event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        open();
      }
    });

    select.addEventListener("change", () => {
      if (select.value === randomOptionValue) {

        // Mostrar la animación de los dados medievales.
        if (typeof window.lanzarDadosMedievales === "function") {
          window.lanzarDadosMedievales();
        }

        // Elegir una opción al azar.
        const availableOptions = Array.from(select.options).filter(
          (option) => option.value && option.value !== randomOptionValue
        );

        const randomOption = availableOptions[
          Math.floor(Math.random() * availableOptions.length)
        ];

        if (randomOption) {
          select.value = randomOption.value;
          select.dispatchEvent(new Event("change", { bubbles: true }));
          return;
        }
      }

      sync();
    }, true);

    sync();
  }

  function enhanceAllSelects() {
    document.querySelectorAll("select").forEach(enhanceSelect);
  }

  enhanceAllSelects();

  const selectObserver = new MutationObserver(enhanceAllSelects);
  selectObserver.observe(document.querySelector("form"), { childList: true, subtree: true });

  document.addEventListener("click", (event) => {
    document.querySelectorAll(".custom-select.open").forEach((wrapper) => {
      if (!wrapper.contains(event.target)) {
        wrapper.classList.remove("open");
        wrapper.querySelector(".custom-select-button").setAttribute("aria-expanded", "false");
      }
    });
  });

  document.addEventListener("click", (event) => {
    const label = event.target.closest("label[for]");

    if (!label) {
      return;
    }

    const select = document.getElementById(label.htmlFor);
    const customSelect = select && select.closest(".custom-select");

    if (customSelect) {
      customSelect.querySelector(".custom-select-button").focus();
    }
  });

  function getDirectContainer(element, step) {
    let container = element;

    while (container.parentElement && container.parentElement !== step) {
      container = container.parentElement;
    }

    return container;
  }

  function configureProgressiveStep(step, triggerSelector) {
    const trigger = step.querySelector(triggerSelector);

    if (!trigger) {
      return;
    }

    const triggerContainer = getDirectContainer(trigger, step);
    const children = Array.from(step.children);
    const triggerIndex = children.indexOf(triggerContainer);
    const hiddenContainers = children.slice(triggerIndex + 1);

    hiddenContainers.forEach((container) => {
      container.classList.add("progressive-hidden");
    });

    const revealRemainingQuestions = () => {
      if (!trigger.value.trim()) {
        return;
      }

      hiddenContainers.forEach((container) => {
        container.classList.remove("progressive-hidden");
      });
    };

    trigger.addEventListener("input", revealRemainingQuestions);
    trigger.addEventListener("change", revealRemainingQuestions);
  }

  const progressiveTriggers = [
    ["#archetype", "#archetype"],
    ["#occupation", "#occupation"],
    ["#additional-virtue-1", "#additional-virtue-1"],
    ["#phobia-1", "#phobia-1"],
    ["#curse", "#curse"],
    ["#vice", "#vice"],
    ["#character-name", "#character-name"]
  ];

  steps.forEach((step, index) => {
    configureProgressiveStep(step, progressiveTriggers[index][1]);
  });

  function updateStep() {
    steps.forEach((step, index) => {
      step.classList.toggle("active", index === activeStep);
    });

    dots.forEach((dot, index) => {
      dot.classList.toggle("active", index === activeStep);
    });

    currentStep.textContent = String(activeStep + 1);
    progressFill.style.width = `${((activeStep + 1) / steps.length) * 100}%`;
    previousButton.disabled = activeStep === 0;
    previousButton.style.visibility = activeStep === 0 ? "hidden" : "visible";
    nextButton.textContent = "Continuar";
    nextButton.hidden = activeStep === steps.length - 1;

    formActions.classList.toggle("visible", activeStep === steps.length - 1);

  }

  function currentStepIsValid() {
    const fields = steps[activeStep].querySelectorAll("input, select, textarea");

    for (const field of fields) {
      if (field.closest(".progressive-hidden")) {
        continue;
      }

      if (!field.checkValidity()) {
        field.reportValidity();
        return false;
      }
    }

    return true;
  }

  previousButton.addEventListener("click", () => {
    if (activeStep > 0) {
      activeStep -= 1;
      updateStep();
    }
  });

  nextButton.addEventListener("click", () => {
    if (!currentStepIsValid()) {
      return;
    }

    if (activeStep < steps.length - 1) {
      activeStep += 1;
      updateStep();
      return;
    }

    document.querySelector("#character-name").focus();
  });

  function getFieldValue(selector) {
    const field = document.querySelector(selector);
    if (!field) {
      return "";
    }

    return typeof field.value === "string"
      ? field.value.trim()
      : field.textContent.trim();
  }

  function collectFormState() {
    const state = {};
    const elements = Array.from(document.querySelectorAll("input, select, textarea"));
    const nameCounters = {};

    elements.forEach(element => {
      const baseName = element.name || element.type;
      const key =
        element.id ||
        `${baseName}-${nameCounters[baseName] || 0}`;
      nameCounters[baseName] = (nameCounters[baseName] || 0) + 1;

      state[key] = {
        type: element.type,
        value: element.value,
        checked: "checked" in element ? element.checked : undefined,
        selectedValues:
          element instanceof HTMLSelectElement && element.multiple
            ? Array.from(element.selectedOptions).map(option => option.value)
            : undefined
      };
    });

    return state;
  }

  function getSelectedText(selector) {
    const field = document.querySelector(selector);
    return field?.selectedOptions[0]?.textContent.trim() || "";
  }

  function getCorruptionLevel() {
    const points = Number(getFieldValue("#corruption-points")) || 0;
    return points === 0 ? "Nivel 0" : `Nivel ${Math.ceil(points / 5)}`;
  }

  function getListValue(selector, prefix = "◆ ") {
    const matchedFields = Array.from(document.querySelectorAll(selector));
    if (!matchedFields.length) {
      return "";
    }

    const field = matchedFields.length === 1 ? matchedFields[0] : null;
    const childItems = field ? Array.from(field.children) : [];
    const listItems = field?.matches("input, select, textarea")
      ? [field]
      : field
        ? Array.from(field.querySelectorAll("input, select, textarea"))
        : matchedFields;
    const items = listItems.length ? listItems : childItems;
    const lines = (items.length ? items : [field])
      .map(item => {
        if (item.matches("select")) {
          return item.selectedOptions[0]?.textContent.trim() || "";
        }
        return typeof item.value === "string"
          ? item.value.trim()
          : item.textContent.trim();
      })
      .filter(Boolean);

    if (items.length) {
      return lines.map(line => `${prefix}${line}`).join("\n");
    }

    return field.textContent
      .split("\n")
      .map(line => line.trim())
      .filter(Boolean)
      .map(line => `${prefix}${line}`)
      .join("\n");
  }

  function saveCharacterSheet() {
    const specialDescriptions = {
      archetype: getFieldValue("#special-description"),
      imaginaryFriend: getFieldValue("#imaginary-friend-description"),
      pocketDimension: getFieldValue("#pocket-dimension-description")
    };

    const character = {
      nombre: getFieldValue("#character-name"),
      jugador: getFieldValue("#player-name"),
      arquetipo: getSelectedText("#archetype"),
      oficio: getSelectedText("#occupation"),
      descripcionArquetipo: getFieldValue("#archetype-description"),
      descripcionEspecial: getFieldValue("#special-description"),
      descripcionAmigoImaginario: getFieldValue("#imaginary-friend-description"),
      descripcionDimensionBolsillo: getFieldValue("#pocket-dimension-description"),
      specialDescriptions,
      specialDescription: specialDescriptions.archetype,
      imaginaryFriendDescription: specialDescriptions.imaginaryFriend,
      pocketDimensionDescription: specialDescriptions.pocketDimension,
      descripcionOficio: getFieldValue("#occupation-description"),
      habilidadesArquetipo: getListValue("#archetype-abilities-list"),
      peculiaridades: getListValue("#archetype-peculiarities-list"),
      habilidadBloqueada: getFieldValue("#locked-ability"),
      requisitoDesbloqueo: getFieldValue("#locked-ability-requirement"),
      limiteCordura: getListValue("#sanity-limit-list"),
      reservaCordura: getFieldValue("#maximum-sanity"),
      limiteHeridas: getFieldValue("#wound-limit"),
      puntosCaracteristicas: getFieldValue("#characteristic-points") || "0",
      dieta: getFieldValue("#diet"),
      afinidadMagica: getSelectedText("#magical-affinity"),
      puntoCorrupcion: getFieldValue("#corruption-points"),
      nivelCorrupcion: getCorruptionLevel(),
      estadoCorrupcion: getListValue("#corruption-status-list select"),
      hazanas: getListValue("#occupation-feats-list"),
      habilidades: getListValue("#occupation-abilities-list"),
      equipamiento: getListValue("#occupation-equipment-list"),
      virtudes: getListValue("#archetype-virtues-list"),
      defectos: getListValue("#archetype-defects-list"),
      descripcionPersonaje: getFieldValue("#character-description"),
      fobia: [
        getSelectedText("#phobia-1") || getFieldValue("#custom-phobia-1"),
        getSelectedText("#phobia-2") || getFieldValue("#custom-phobia-2")
      ].filter(Boolean).join(", "),


      efectoFobia: [
        getFieldValue("#phobia-effect-1"),
        getFieldValue("#phobia-effect-2")
      ].filter(Boolean).join("\n"),

      maldicion: getSelectedText("#curse") || getFieldValue("#custom-curse"),
      efectoMaldicion: getFieldValue("#curse-benefit"),
      penalizacionMaldicion: getFieldValue("#curse-penalty"),
      rupturaMaldicion: getFieldValue("#curse-condition"),
      vicio: getFieldValue("#vice"),
      descripcionVicio: getFieldValue("#vice-description"),
      cuentoOrigen: getFieldValue("#origin-story")
    };

    character.formState = collectFormState();

    localStorage.setItem("cuentos-caceria-character-sheet", JSON.stringify(character));
    localStorage.setItem(
      "cuentos-caceria-special-descriptions",
      JSON.stringify(specialDescriptions)
    );
    window.location.href = "../ficha_rpg_dinamica/index.html";
  }

  function seleccionarPorTexto(selector, value) {
    const select = document.querySelector(selector);

    if (!select || !value) {
      return false;
    }

    const normalizedValue = value.trim().toLowerCase();
    const option = Array.from(select.options).find(
      candidate =>
        candidate.textContent.trim().toLowerCase() === normalizedValue
    );

    if (!option) {
      return false;
    }

    select.value = option.value;
    select.dispatchEvent(new Event("change", { bubbles: true }));
    return true;
  }

  function establecerValor(selector, value) {
    const field = document.querySelector(selector);

    if (!field || value === undefined || value === null) {
      return;
    }

    field.value = value;
    field.dispatchEvent(new Event("input", { bubbles: true }));
    field.dispatchEvent(new Event("change", { bubbles: true }));
  }

  function restaurarEstadoFormulario(formState) {
    if (!formState || typeof formState !== "object") {
      return;
    }

    Object.entries(formState).forEach(([key, savedField]) => {
      const field = document.getElementById(key);

      if (!field || !savedField) {
        return;
      }

      if (
        (field.type === "checkbox" || field.type === "radio") &&
        typeof savedField.checked === "boolean"
      ) {
        field.checked = savedField.checked;
      } else if (field instanceof HTMLSelectElement && field.multiple) {
        const selectedValues = new Set(savedField.selectedValues || []);
        Array.from(field.options).forEach(option => {
          option.selected = selectedValues.has(option.value);
        });
      } else if (savedField.value !== undefined) {
        if (field instanceof HTMLSelectElement) {
          const option = Array.from(field.options).find(
            candidate =>
              candidate.value === savedField.value ||
              candidate.textContent.trim() === savedField.value
          );
          field.value = option ? option.value : savedField.value;
        } else {
          field.value = savedField.value;
        }
      }

      field.dispatchEvent(new Event("input", { bubbles: true }));
      if (field.id === "archetype" || field.id === "occupation") {
        return;
      }
      if (field.id.startsWith("occupation-ability-")) {
        field.dataset.restoring = "true";
      }
      field.dispatchEvent(new Event("change", { bubbles: true }));
      delete field.dataset.restoring;
    });
  }

  function sincronizarFilasDinamicas(formState) {
    const groups = [
      ["archetype-ability", "#archetype-abilities-list", "Añadir habilidad", ".remove-trait"],
      ["archetype-peculiarity", "#archetype-peculiarities-list", "Añadir peculiaridad", ".remove-trait"],
      ["sanity-limit", "#sanity-limit-list", "Añadir límite de cordura", ".remove-trait"],
      ["archetype-virtue", "#archetype-virtues-list", "Añadir virtud", ".remove-trait"],
      ["archetype-defect", "#archetype-defects-list", "Añadir defecto", ".remove-trait"],
      ["occupation-ability", "#occupation-abilities-list", null, ".remove-trait"],
      ["occupation-equipment", "#occupation-equipment-list", null, ".remove-equipment"],
      ["corruption-status", "#corruption-status-list", null, ".remove-trait"],
      ["phobia", "#phobias-list", null, ".remove-phobia"]
    ];

    groups.forEach(([prefix, containerSelector, addText, removeSelector]) => {
      const container = document.querySelector(containerSelector);
      if (!container) return;

      const savedIds = Object.keys(formState)
        .filter(key => new RegExp(`^${prefix}-\\d+$`).test(key))
        .map(key => Number(key.slice(prefix.length + 1)));
      const targetCount = savedIds.length ? Math.max(...savedIds) : 0;
      const getFields = () =>
        Array.from(container.querySelectorAll(`[id^="${prefix}-"]`))
          .filter(field => new RegExp(`^${prefix}-\\d+$`).test(field.id));

      const getAddButton = () => {
        if (prefix === "occupation-ability") {
          return document.querySelector("#add-occupation-ability");
        }

        if (prefix === "occupation-equipment") {
          return document.querySelector("#add-occupation-equipment");
        }
        if (prefix === "corruption-status") {
          return document.querySelector("#add-corruption-status");
        }
        if (prefix === "phobia") {
          return document.querySelector("#add-phobia");
        }
        return Array.from(container.parentElement.querySelectorAll("button"))
          .find(button => button.textContent.trim() === addText);
      };

      while (getFields().length < targetCount) {
        getAddButton()?.click();
      }

      while (getFields().length > targetCount && targetCount > 0) {
        const removeButton = container.querySelector(`${removeSelector}:last-of-type`);
        if (!removeButton) break;
        removeButton.click();
      }
    });
  }

  function asegurarFilasGuardadas(formState) {
    const groups = [
      ["occupation-ability", "#add-occupation-ability"],
      ["occupation-equipment", "#add-occupation-equipment"],
      ["archetype-virtue", null],
      ["archetype-defect", null]
    ];

    groups.forEach(([prefix, buttonSelector]) => {
      const targetCount = Object.keys(formState).filter(key =>
        new RegExp(`^${prefix}-\\d+$`).test(key)
      ).length;

      if (!targetCount) {
        return;
      }

      const listSelector =
        prefix === "occupation-ability"
          ? "#occupation-abilities-list"
          : prefix === "occupation-equipment"
            ? "#occupation-equipment-list"
            : prefix === "archetype-virtue"
              ? "#archetype-virtues-list"
              : "#archetype-defects-list";
      const list = document.querySelector(listSelector);
      const addButton =
        buttonSelector && document.querySelector(buttonSelector);

      while (
        list &&
        Array.from(list.querySelectorAll(`[id^="${prefix}-"]`)).filter(field =>
          new RegExp(`^${prefix}-\\d+$`).test(field.id)
        ).length < targetCount
      ) {
        if (addButton) {
          addButton.click();
        } else {
          const genericButton = Array.from(
            list.parentElement?.querySelectorAll("button") || []
          ).find(button => button.textContent.trim().startsWith("Añadir"));
          if (!genericButton) {
            break;
          }
          genericButton.click();
        }
      }
    });
  }

  function restaurarPersonajeCargado() {
    if (new URLSearchParams(window.location.search).get("recuperado") !== "1") {
      return;
    }

    const savedCharacter = localStorage.getItem("cuentos-caceria-character-sheet");

    if (!savedCharacter) {
      return;
    }

    let character;

    try {
      character = JSON.parse(savedCharacter);
    } catch {
      console.error("No se pudo leer el personaje recuperado.");
      return;
    }

    establecerValor("#character-name", character.nombre);
    establecerValor("#player-name", character.jugador);

    seleccionarPorTexto("#archetype", character.arquetipo);
    establecerValor("#special-description", character.descripcionEspecial);
    establecerValor(
      "#imaginary-friend-description",
      character.descripcionAmigoImaginario
    );
    establecerValor(
      "#pocket-dimension-description",
      character.descripcionDimensionBolsillo
    );

    seleccionarPorTexto("#occupation", character.oficio);
    seleccionarPorTexto("#magical-affinity", character.afinidadMagica);
    seleccionarPorTexto("#phobia-1", character.fobia);
    seleccionarPorTexto("#curse", character.maldicion);
    establecerValor("#character-description", character.descripcionPersonaje);
    establecerValor("#origin-story", character.cuentoOrigen);
    establecerValor("#vice", character.vicio);
    establecerValor("#vice-description", character.descripcionVicio);
    establecerValor("#curse-benefit", character.efectoMaldicion);
    establecerValor("#curse-penalty", character.penalizacionMaldicion);
    establecerValor("#curse-condition", character.rupturaMaldicion);
    establecerValor("#occupation-description", character.descripcionOficio);
    establecerValor("#maximum-sanity", character.reservaCordura);
    establecerValor("#wound-limit", character.limiteHeridas);
    establecerValor("#characteristic-points", character.puntosCaracteristicas);
    establecerValor("#diet", character.dieta);
    establecerValor("#corruption-points", character.puntoCorrupcion);

    const storedSpecialDescriptions = {
      archetype: character.descripcionEspecial || "",
      imaginaryFriend: character.descripcionAmigoImaginario || "",
      pocketDimension: character.descripcionDimensionBolsillo || ""
    };
    localStorage.setItem(
      "cuentos-caceria-special-descriptions",
      JSON.stringify(storedSpecialDescriptions)
    );

    const restoreDynamicState = () => {
      asegurarFilasGuardadas(character.formState);
      sincronizarFilasDinamicas(character.formState);
      const occupationAbilityCount = Object.keys(character.formState).filter(key =>
        /^occupation-ability-\d+$/.test(key)
      ).length;
      const occupationAbilityButton = document.querySelector(
        "#add-occupation-ability"
      );
      while (
        document.querySelectorAll(
          '#occupation-abilities-list select[id^="occupation-ability-"]'
        ).length < occupationAbilityCount
      ) {
        occupationAbilityButton?.click();
      }
      restaurarEstadoFormulario(character.formState);
      updateStep();
    };

    restoreDynamicState();
    setTimeout(restoreDynamicState, 0);
  }

  [
    ["#special-description", "archetype"],
    ["#imaginary-friend-description", "imaginaryFriend"],
    ["#pocket-dimension-description", "pocketDimension"]
  ].forEach(([selector, key]) => {
    const field = document.querySelector(selector);

    field?.addEventListener("input", () => {
      const saved = localStorage.getItem(
        "cuentos-caceria-special-descriptions"
      );
      let descriptions = {};

      if (saved) {
        try {
          descriptions = JSON.parse(saved);
        } catch {
          localStorage.removeItem("cuentos-caceria-special-descriptions");
        }
      }

      descriptions[key] = field.value.trim();
      localStorage.setItem(
        "cuentos-caceria-special-descriptions",
        JSON.stringify(descriptions)
      );

      const savedCharacter = localStorage.getItem(
        "cuentos-caceria-character-sheet"
      );

      if (savedCharacter) {
        try {
          const character = JSON.parse(savedCharacter);
          const fieldNames = {
            archetype: [
              "descripcionEspecial",
              "specialDescription"
            ],
            imaginaryFriend: [
              "descripcionAmigoImaginario",
              "imaginaryFriendDescription"
            ],
            pocketDimension: [
              "descripcionDimensionBolsillo",
              "pocketDimensionDescription"
            ]
          };

          fieldNames[key].forEach(fieldName => {
            character[fieldName] = descriptions[key];
          });
          character.specialDescriptions = descriptions;
          localStorage.setItem(
            "cuentos-caceria-character-sheet",
            JSON.stringify(character)
          );
        } catch {
          localStorage.removeItem("cuentos-caceria-character-sheet");
        }
      }
    });
  });

  document.querySelector("form").addEventListener("submit", event => {
    event.preventDefault();
    if (!currentStepIsValid()) {
      return;
    }
    saveCharacterSheet();
  });

if (modoAleatorio) {
  requestAnimationFrame(() => {
    const arquetipoElegido = elegirOpcionAleatoria("#archetype");
    const oficioElegido = elegirOpcionAleatoria("#occupation");
    const fobiaElegida = elegirOpcionAleatoria("#phobia-1");

    if (arquetipoElegido && oficioElegido && fobiaElegida) {
      activeStep = 6;
    }

    updateStep();

    if (activeStep === 6) {
      document.querySelector("#character-name")?.focus();
    }
  });
} else {
  updateStep();
}

restaurarPersonajeCargado();
})();

const archetypeStep = document
  .querySelector("#archetype-illustration")
  ?.closest(".creator-step");

const archetypeFigure = document.querySelector("#archetype-illustration");

const occupationStep = document
  .querySelector("#occupation-illustration")
  ?.closest(".creator-step");

const occupationFigure = document.querySelector("#occupation-illustration");

function updateIllustrationsScroll() {
  const isMobile = window.matchMedia("(max-width: 620px)").matches;

  const archetypeIsActive =
    isMobile &&
    archetypeStep?.classList.contains("active");

  const occupationIsActive =
    isMobile &&
    occupationStep?.classList.contains("active");

  archetypeFigure?.classList.toggle(
    "follow-scroll",
    Boolean(archetypeIsActive)
  );

  occupationFigure?.classList.toggle(
    "follow-scroll",
    Boolean(occupationIsActive)
  );
}

updateIllustrationsScroll();

window.addEventListener("resize", updateIllustrationsScroll);

document.querySelectorAll("#next-step, #previous-step").forEach((button) => {
  button.addEventListener("click", () => {
    requestAnimationFrame(updateIllustrationsScroll);
  });
});

(() => {
  const archetypeSelect = document.querySelector("#archetype");
  const archetypeStep = archetypeSelect?.closest(".creator-step");

  if (!archetypeSelect || !archetypeStep) return;

  const overview = archetypeStep.querySelector(".selection-overview");

  function updateArchetypeDetails() {
    const hasSelection = Boolean(archetypeSelect.value);

    archetypeStep.querySelectorAll(
      ":scope > h2, :scope > p, :scope > .selection-overview"
    ).forEach((element) => {
      // Conservar el selector y la ilustración visibles.
      if (element === overview) {
        const description = element.querySelector(
          'p:has(#archetype-description)'
        );

        if (description) {
          description.hidden = !hasSelection;
        }

        return;
      }

      if (
  element.querySelector("#archetype") ||
  element.querySelector("#archetype-illustration")
) {
  return;
}

      // Estos campos tienen su propia lógica de visibilidad
      // en arquetipos.js. No debemos modificarlos aquí.
      if (
        element.id === "special-description-field" ||
        element.id === "imaginary-friend-description-field" ||
        element.id === "pocket-dimension-description-field"
      ) {
        return;
      }

      element.hidden = !hasSelection;

    });
  }

  archetypeSelect.addEventListener("change", updateArchetypeDetails);
  updateArchetypeDetails();
})();

(() => {
    const archetypeSelect = document.querySelector("#archetype");
    const archetypeStep = archetypeSelect?.closest(".creator-step");

    if (!archetypeSelect || !archetypeStep) return;

    function updateArchetypeLayout() {
        archetypeStep.classList.toggle(
            "archetype-unselected",
            !archetypeSelect.value.trim()
        );
    }

    archetypeSelect.addEventListener("change", updateArchetypeLayout);

    // Aplicar el diseño correcto al abrir el creador
    updateArchetypeLayout();
})();

(() => {
    const occupationSelect = document.querySelector("#occupation");
    const occupationStep = occupationSelect?.closest(".creator-step");

    if (!occupationSelect || !occupationStep) return;

    const occupationDescription = document.querySelector("#occupation-description");
    const descriptionContainer = occupationDescription?.closest("p");
    const overview = occupationSelect.closest(".selection-overview");

    // Contenedores que aparecen después del selector de oficio
    const children = Array.from(occupationStep.children);
    const overviewIndex = children.indexOf(overview);
    const followingContainers = children.slice(overviewIndex + 1);

    function updateOccupationLayout() {
        // La primera opción debe ser "Selecciona un Oficio"
        const hasOccupation =
            occupationSelect.selectedIndex > 0 &&
            occupationSelect.value.trim() !== "";

        // Ajustar el diseño inicial
        occupationStep.classList.toggle(
            "occupation-unselected",
            !hasOccupation
        );

        // Ocultar o mostrar la descripción
        if (descriptionContainer) {
            descriptionContainer.hidden = !hasOccupation;
        }

        // Ocultar o mostrar el resto de la información del oficio
        followingContainers.forEach(container => {
            container.classList.toggle(
                "progressive-hidden",
                !hasOccupation
            );
        });
    }

    occupationSelect.addEventListener("change", updateOccupationLayout);
    occupationSelect.addEventListener("input", updateOccupationLayout);

    // Aplicar el estado correcto al abrir el creador
    updateOccupationLayout();
})();
