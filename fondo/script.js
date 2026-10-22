(() => {
  "use strict";

  const canvas = document.getElementById("forest");

  if (!canvas) return;

  const ctx = canvas.getContext("2d");

  let W = 0;
  let H = 0;
  let trees = [];

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 1.25);

    W = canvas.clientWidth;
    H = canvas.clientHeight;

    canvas.width = Math.round(W * dpr);
    canvas.height = Math.round(H * dpr);

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    createForest();
    drawForest();
  }

  function createForest() {
    trees = [];

    // Menos árboles para mejorar el rendimiento.
    const count = Math.max(10, Math.floor(W / 42));

    for (let i = 0; i < count; i++) {
      const depth = Math.random();

      trees.push({
        x: (i / Math.max(1, count - 1)) * W +
          (Math.random() - 0.5) * 22,
        ground: H * (0.78 + depth * 0.20),
        scale: (0.48 + depth * 0.9) * Math.min(1, H / 600),
        depth,
        phase: Math.random() * Math.PI * 2,
        lean: (Math.random() - 0.5) * 0.1
      });
    }

    trees.sort((a, b) => a.depth - b.depth);
  }

  function drawBranch(x, y, angle, length, level, id, tree) {
    if (level <= 0 || length < 2.5 * tree.scale) return;

    const endX = x + Math.sin(angle) * length;
    const endY = y - Math.cos(angle) * length;

    ctx.beginPath();
    ctx.lineWidth = Math.max(
      0.4,
      (0.85 + tree.depth * 1.5) *
        tree.scale *
        Math.pow(0.68, 4 - level)
    );

    ctx.moveTo(x, y);
    ctx.quadraticCurveTo(
      x + Math.sin(angle) * length * 0.55,
      y - length * 0.52,
      endX,
      endY
    );
    ctx.stroke();

    const spread = 0.34 + ((id * 17) % 7) * 0.045;

    drawBranch(
      endX, endY, angle - spread,
      length * 0.68, level - 1, id * 2 + 1, tree
    );

    drawBranch(
      endX, endY, angle + spread,
      length * 0.66, level - 1, id * 2 + 2, tree
    );

    if (level >= 3) {
      drawBranch(
        endX, endY, angle + spread * 0.12,
        length * 0.46, level - 2, id * 3 + 1, tree
      );
    }
  }

  function drawTree(tree) {
    const { x, ground, scale, depth, phase, lean } = tree;

    const trunk = (155 + depth * 175) * scale;

    // Ángulo fijo: el árbol ya no se balancea.
    const sway = 0;

    ctx.save();
    ctx.translate(x, ground);

    ctx.strokeStyle = `rgba(9, 14, 20, ${0.5 + depth * 0.48})`;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    const segments = 10;
    let px = 0;
    let py = 0;

    for (let i = 1; i <= segments; i++) {
      const p = i / segments;

      const bend =
        Math.sin(p * 2 + phase) * p * p * 3.5 * scale +
        lean * p * trunk * 0.12;

      const nextY = -trunk * p;
      const nextX = bend;

      ctx.beginPath();
      ctx.lineWidth = Math.max(
        0.7,
        (1.1 + depth * 2.1) * scale * (1 - p * 0.8)
      );

      ctx.moveTo(px, py);
      ctx.lineTo(nextX, nextY);
      ctx.stroke();

      px = nextX;
      py = nextY;
    }

    for (let i = 0; i < 6; i++) {
      const p = 0.23 + i * 0.095;
      const y = -trunk * p;

      const trunkX =
        Math.sin(p * 2 + phase) * p * p * 3.5 * scale;

      const side = i % 2 === 0 ? -1 : 1;
      const angle = side * (0.55 + (i % 3) * 0.12);
      const length = trunk * (0.15 + (1 - p) * 0.13);

      drawBranch(trunkX, y, angle, length, 4, i + 10, tree);
    }

    ctx.beginPath();
    ctx.lineWidth = Math.max(0.45, scale * 0.8);
    ctx.moveTo(0, -trunk * 0.91);
    ctx.lineTo(lean * 4, -trunk * 1.04);
    ctx.stroke();

    ctx.restore();
  }

  function drawForest() {
    ctx.clearRect(0, 0, W, H);

    for (const tree of trees) {
      drawTree(tree);
    }
  }

  window.addEventListener("resize", resize);

  resize();
})();
