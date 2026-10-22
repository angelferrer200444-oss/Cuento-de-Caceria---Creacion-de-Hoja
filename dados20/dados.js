(() => {
  const esMovil = window.matchMedia("(max-width: 768px)").matches;

  const todosLosDados = document.querySelectorAll(".dado-volador");

  todosLosDados.forEach((dado, indice) => {
    if (esMovil && indice > 0) {
        dado.remove();
    }
    });

    const dados = document.querySelectorAll(".dado-volador");


  if (!dados.length) {
    console.warn("No se encontraron dados con la clase .dado-volador");
    return;
  }

  const size = 200;

  const gravedad = 0.75;
  const reboteSuelo = 0.45;
  const rebotePared = 0.65;

  dados.forEach((dado, indice) => {
    const die = dado.querySelector(".die");

    if (!die) return;

    // Una sombra independiente para cada dado
    const sombra = document.createElement("div");
    sombra.className = "sombra-dado";
    document.body.appendChild(sombra);

    // Posición y velocidad independientes
    let x = Math.random() * Math.max(0, window.innerWidth - size);
    let y = -size - 20;

    let vx = (Math.random() < 0.5 ? -1 : 1) *
      (6 + Math.random() * 4);

    let vy = 1;

    // Rotación tridimensional
    let rotX = -53;
    let rotY = Math.random() * 360;
    let rotZ = 0;

    let spinX = 11;
    let spinY = 14;
    let spinZ = 7;

    let enSuelo = false;
    let detenido = false;
    let ultimoTiempo = 0;

    function dibujar(maxY) {
      dado.style.transform =
        `translate3d(${x}px, ${y}px, 0)`;

      die.style.transform =
        `rotateX(${rotX}deg) ` +
        `rotateY(${rotY}deg) ` +
        `rotateZ(${rotZ}deg)`;

      // Sombra propia
      const altura = Math.max(0, maxY - y);
      const escala = Math.max(0.25, 1 - altura / 650);

      sombra.style.left = `${x + size / 2 - 50}px`;
      sombra.style.top = `${window.innerHeight - 32}px`;
      sombra.style.transform = `scale(${escala})`;
      sombra.style.opacity = `${0.45 * escala}`;
    }

    function actualizar(tiempo) {
      if (detenido) return;

      if (!ultimoTiempo) ultimoTiempo = tiempo;

      const dt = Math.min(
        (tiempo - ultimoTiempo) / 16.667,
        2
      );

      ultimoTiempo = tiempo;

      const maxX = Math.max(0, window.innerWidth - size);
      const maxY = Math.max(0, window.innerHeight - size);

      x = Math.min(Math.max(0, x), maxX);

      if (!enSuelo) {
        // Caída por gravedad
        vy += gravedad * dt;
        x += vx * dt;
        y += vy * dt;

        // Pared izquierda
        if (x <= 0) {
          x = 0;
          vx = Math.abs(vx) * rebotePared;
          spinY *= -0.9;
        }

        // Pared derecha
        if (x >= maxX) {
          x = maxX;
          vx = -Math.abs(vx) * rebotePared;
          spinY *= -0.9;
        }

        // Techo
        if (y <= 0) {
          y = 0;
          vy = Math.abs(vy) * reboteSuelo;
        }

        // Suelo
        if (y >= maxY) {
          y = maxY;

          if (Math.abs(vy) > 2.5) {
            vy = -Math.abs(vy) * reboteSuelo;

            vx *= 0.88;
            spinX *= 0.84;
            spinY *= 0.84;
            spinZ *= 0.84;
          } else {
            vy = 0;
            enSuelo = true;
          }
        }
      } else {
        // Deslizamiento final
        y = maxY;
        x += vx * dt;

        vx *= Math.pow(0.975, dt);

        spinX *= Math.pow(0.94, dt);
        spinY *= Math.pow(0.94, dt);
        spinZ *= Math.pow(0.94, dt);

        if (x <= 0) {
          x = 0;
          vx = Math.abs(vx) * 0.55;
        }

        if (x >= maxX) {
          x = maxX;
          vx = -Math.abs(vx) * 0.55;
        }

        // Detener este dado sin afectar a los demás
        if (
            Math.abs(vx) < 0.22 &&
            Math.abs(spinX) < 0.12 &&
            Math.abs(spinY) < 0.12 &&
            Math.abs(spinZ) < 0.12
            ) {
            detenido = true;
            dibujar(maxY);

            // Comprobar si todos los dados terminaron
            const dadosTerminados = [...dados].every((otroDado) => {
                return otroDado.dataset.terminado === "true" ||
                otroDado === dado;
            });

            dado.dataset.terminado = "true";

            const todosTerminados = [...dados].every((otroDado) => {
                return otroDado.dataset.terminado === "true";
            });

            if (todosTerminados) {
                document.body.classList.add("animacion-terminada");

                if (window.parent !== window) {
                    window.parent.postMessage("dados-terminados", "*");
                }
            }


            return;
            }

      }

      rotX += spinX * dt;
      rotY += spinY * dt;
      rotZ += spinZ * dt;

      dibujar(maxY);

      requestAnimationFrame(actualizar);
    }

    // Adaptación a móviles y cambios de orientación
    window.addEventListener("resize", () => {
      const maxX = Math.max(0, window.innerWidth - size);
      const maxY = Math.max(0, window.innerHeight - size);

      x = Math.min(Math.max(0, x), maxX);

      if (enSuelo) {
        y = maxY;
      } else {
        y = Math.min(y, maxY);
      }

      dibujar(maxY);
    });

    requestAnimationFrame(actualizar);
  });
})();
