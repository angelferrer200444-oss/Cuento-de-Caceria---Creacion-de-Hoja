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
    const character = {
      nombre: getFieldValue("#character-name"),
      jugador: getFieldValue("#player-name"),
      arquetipo: getSelectedText("#archetype"),
      oficio: getSelectedText("#occupation"),
      descripcionArquetipo: getFieldValue("#archetype-description"),
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

    localStorage.setItem("cuentos-caceria-character-sheet", JSON.stringify(character));
    window.location.href = "../ficha_rpg_dinamica/index.html";
  }

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
})();

