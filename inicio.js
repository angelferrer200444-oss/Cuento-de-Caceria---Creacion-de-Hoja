(() => {
    "use strict";

    const canvas = document.getElementById("snow-effect");
    const ctx = canvas.getContext("2d");

    let width = 0;
    let height = 0;
    let flakes = [];
    let lastTime = 0;

    // Configuración de la nevada
    const config = {
        density: 0.00013,
        maxFlakes: 260,
        minFlakes: 45,
        minSize: 0.5,
        maxSize: 4.2,
        speed: 0.7,
        wind: 0.12
    };

    // Crear una partícula de nieve
    function createFlake(randomY = false) {
        return {
            x: Math.random() * width,
            y: randomY ? Math.random() * height : -10,

            radius:
                config.minSize +
                Math.random() * (config.maxSize - config.minSize),

            speed: 0.3 + Math.random() * 1.2,

            drift: (Math.random() - 0.5) * 0.5,

            // Transparencia variable para un efecto ambiental
            opacity: 0.025 + Math.random() * 0.19,

            // Algunas partículas parecen estar fuera de foco
            blur: Math.random() < 0.3 ? 2.5 : 0,

            phase: Math.random() * Math.PI * 2
        };
    }

    // Ajustar el canvas al tamaño de la ventana
    function resize() {
        const dpr = Math.min(
            window.devicePixelRatio || 1,
            2
        );

        width = window.innerWidth;
        height = window.innerHeight;

        canvas.width = Math.round(width * dpr);
        canvas.height = Math.round(height * dpr);

        canvas.style.width = width + "px";
        canvas.style.height = height + "px";

        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

        const amount = Math.min(
            config.maxFlakes,
            Math.max(
                config.minFlakes,
                Math.floor(width * height * config.density)
            )
        );

        flakes = Array.from(
            { length: amount },
            () => createFlake(true)
        );
    }

    // Dibujar y animar la nieve
    function animate(time = 0) {
        requestAnimationFrame(animate);

        const delta = lastTime
            ? Math.min((time - lastTime) / 16.67, 2)
            : 1;

        lastTime = time;

        ctx.clearRect(0, 0, width, height);

        for (const flake of flakes) {
            // Movimiento irregular y ligero balanceo
            flake.phase += 0.008 * delta;

            flake.x += (
                flake.drift +
                Math.sin(flake.phase) * 0.25 +
                config.wind
            ) * delta;

            flake.y +=
                flake.speed * config.speed * delta;

            // Reaparecer por arriba al salir de la pantalla
            if (flake.y > height + 10) {
                flake.y = -10;
                flake.x = Math.random() * width;
            }

            // Mantener las partículas dentro del ancho visible
            if (flake.x > width + 10) {
                flake.x = -10;
            }

            if (flake.x < -10) {
                flake.x = width + 10;
            }

            ctx.beginPath();

            ctx.fillStyle =
                `rgba(225, 232, 240, ${flake.opacity})`;

            ctx.shadowBlur = flake.blur;

            ctx.shadowColor =
                "rgba(210, 220, 235, 0.3)";

            ctx.arc(
                flake.x,
                flake.y,
                flake.radius,
                0,
                Math.PI * 2
            );

            ctx.fill();
        }

        ctx.shadowBlur = 0;
    }

    // Inicialización
    window.addEventListener("resize", resize);

    resize();
    animate();
})();

const startButton = document.getElementById("startButton");
const startStatus = document.getElementById("startStatus");
const createCharacterButton = document.getElementById("createCharacterButton");
const transitionDuration = 2200;

createCharacterButton.addEventListener("click", () => {
    window.location.href = "index.html";
});

startButton.addEventListener("click", (event) => {
    if (document.body.classList.contains("lights-out")) {
        return;
    }

    const rect = startButton.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 1.8;
    const ripple = document.createElement("span");

    ripple.className = "ripple";
    ripple.style.width = size + "px";
    ripple.style.height = size + "px";
    ripple.style.left = (event.clientX - rect.left - size / 2) + "px";
    ripple.style.top = (event.clientY - rect.top - size / 2) + "px";

    startButton.appendChild(ripple);
    ripple.addEventListener("animationend", () => ripple.remove());

    startStatus.textContent = "El viaje comienza ahora…";
    startStatus.classList.remove("visible");

    requestAnimationFrame(() => startStatus.classList.add("visible"));

    document.body.classList.add("lights-out");
    startButton.disabled = true;

    window.setTimeout(() => {
        document.body.classList.add("portada-final");
        document.body.classList.remove("lights-out");
    }, transitionDuration);

});
