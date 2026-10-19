(() => {
  "use strict";

  const steps = Array.from(document.querySelectorAll(".creator-step"));
  const dots = Array.from(document.querySelectorAll(".step-dot"));
  const currentStep = document.querySelector("#current-step");
  const progressFill = document.querySelector("#step-progress-fill");
  const previousButton = document.querySelector("#previous-step");
  const nextButton = document.querySelector("#next-step");
  const formActions = document.querySelector("#form-actions");
  let activeStep = 0;

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
    nextButton.textContent = activeStep === steps.length - 1 ? "Revisar hoja" : "Continuar";
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

  updateStep();
})();
