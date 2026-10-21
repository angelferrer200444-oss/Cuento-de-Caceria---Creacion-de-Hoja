(() => {
  "use strict";

  const canvas = document.querySelector("#snow-effect");

  if (!canvas) {
    return;
  }

  const context = canvas.getContext("2d");
  const config = {
    density: 0.00013,
    maxFlakes: 260,
    minFlakes: 45,
    minSize: 0.5,
    maxSize: 4.2,
    speed: 0.7,
    wind: 0.12
  };
  let flakes = [];
  let height = 0;
  let lastTime = 0;
  let width = 0;

  function createFlake(randomY = false) {
    return {
      blur: Math.random() < 0.3 ? 2.5 : 0,
      drift: (Math.random() - 0.5) * 0.5,
      opacity: 0.025 + Math.random() * 0.19,
      phase: Math.random() * Math.PI * 2,
      radius: config.minSize + Math.random() * (config.maxSize - config.minSize),
      speed: 0.3 + Math.random() * 1.2,
      x: Math.random() * width,
      y: randomY ? Math.random() * height : -10
    };
  }

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    context.setTransform(dpr, 0, 0, dpr, 0, 0);

    const amount = Math.min(
      config.maxFlakes,
      Math.max(config.minFlakes, Math.floor(width * height * config.density))
    );

    flakes = Array.from({ length: amount }, () => createFlake(true));
  }

  function animate(time = 0) {
    requestAnimationFrame(animate);

    const delta = lastTime ? Math.min((time - lastTime) / 16.67, 2) : 1;
    lastTime = time;
    context.clearRect(0, 0, width, height);

    flakes.forEach((flake) => {
      flake.phase += 0.008 * delta;
      flake.x += (flake.drift + Math.sin(flake.phase) * 0.25 + config.wind) * delta;
      flake.y += flake.speed * config.speed * delta;

      if (flake.y > height + 10) {
        flake.y = -10;
        flake.x = Math.random() * width;
      }

      if (flake.x > width + 10) {
        flake.x = -10;
      } else if (flake.x < -10) {
        flake.x = width + 10;
      }

      context.beginPath();
      context.fillStyle = `rgba(255, 255, 255, ${flake.opacity})`;
      context.shadowBlur = flake.blur;
      context.shadowColor = "rgba(210, 220, 235, .3)";
      context.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
      context.fill();
    });

    context.shadowBlur = 0;
  }

  window.addEventListener("resize", resize);
  resize();
  animate();
})();
