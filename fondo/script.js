const canvas = document.getElementById("forest");
const ctx = canvas.getContext("2d");

let W = 0;
let H = 0;
let trees = [];

function resize() {
  const dpr = Math.min(window.devicePixelRatio || 1, 2);

  W = canvas.clientWidth;
  H = canvas.clientHeight;

  canvas.width = Math.round(W * dpr);
  canvas.height = Math.round(H * dpr);

  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

  createForest();
}

function createForest() {
  trees = [];

  const count = Math.max(15, Math.floor(W / 22));

  for (let i = 0; i < count; i++) {
    const depth = Math.random();

    trees.push({
      x: (i / (count - 1)) * W + (Math.random() - 0.5) * 22,
      ground: H * (0.78 + depth * 0.20),
      scale: (0.48 + depth * 0.9) * Math.min(1, H / 600),
      depth,
      phase: Math.random() * Math.PI * 2,
      speed: 0.65 + Math.random() * 0.7,
      lean: (Math.random() - 0.5) * 0.1
    });
  }

  // Los árboles del fondo se dibujan primero.
  trees.sort((a, b) => a.depth - b.depth);
}

function drawBranch(x, y, angle, length, level, id, sway, tree) {
  if (level <= 0 || length < 2.5 * tree.scale) return;

  // Las puntas se mueven más que las ramas gruesas.
  const flexibility = 0.25 + (4 - level) * 0.27;

  const gust =
    Math.sin(performance.now() * 0.0012 * tree.speed + tree.phase) *
    0.035;

  const a = angle + sway * flexibility + gust * flexibility;

  const endX = x + Math.sin(a) * length;
  const endY = y - Math.cos(a) * length;

  ctx.beginPath();
  ctx.lineWidth = Math.max(
    0.4,
    (0.85 + tree.depth * 1.5) *
      tree.scale *
      Math.pow(0.68, 4 - level)
  );

  ctx.moveTo(x, y);

  ctx.quadraticCurveTo(
    x + Math.sin(a) * length * 0.55,
    y - length * 0.52,
    endX,
    endY
  );

  ctx.stroke();

  const spread = 0.34 + ((id * 17) % 7) * 0.045;

  drawBranch(
    endX, endY, a - spread,
    length * 0.68, level - 1,
    id * 2 + 1, sway, tree
  );

  drawBranch(
    endX, endY, a + spread,
    length * 0.66, level - 1,
    id * 2 + 2, sway, tree
  );

  // Una ramita adicional para que el árbol se vea más natural.
  if (level >= 3) {
    drawBranch(
      endX, endY, a + spread * 0.12,
      length * 0.46, level - 2,
      id * 3 + 1, sway, tree
    );
  }
}

function drawTree(tree, time) {
  const {
    x, ground, scale, depth, phase, speed, lean
  } = tree;

  const trunk = (155 + depth * 175) * scale;

  // Balanceo lento, con pequeñas ráfagas irregulares.
  const breeze =
    Math.sin(time * 0.00048 * speed + phase) * 0.075 +
    Math.sin(time * 0.00091 + phase * 1.8) * 0.025;

  const sway = breeze * (0.7 + depth * 0.7);

  ctx.save();
  ctx.translate(x, ground);

  ctx.strokeStyle = `rgba(9, 14, 20, ${0.5 + depth * 0.48})`;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";

  // Tronco segmentado: la base permanece casi inmóvil.
  const segments = 10;
  let px = 0;
  let py = 0;

  for (let i = 1; i <= segments; i++) {
    const p = i / segments;

    const bend =
      Math.sin(p * 2 + phase) * p * p * 3.5 * scale +
      lean * p * trunk * 0.12 +
      sway * p * p * trunk * 0.32;

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

  // Ramas que nacen a distintas alturas del tronco.
  for (let i = 0; i < 9; i++) {
    const p = 0.23 + i * 0.075;
    const y = -trunk * p;

    const trunkX =
      Math.sin(p * 2 + phase) * p * p * 3.5 * scale +
      sway * p * p * trunk * 0.32;

    const side = i % 2 === 0 ? -1 : 1;

    const angle =
      side * (0.55 + (i % 3) * 0.12) +
      sway * 0.35;

    const length = trunk * (0.15 + (1 - p) * 0.13);

    drawBranch(
      trunkX, y, angle, length,
      4, i + 10, sway, tree
    );
  }

  // Punta superior del árbol.
  ctx.beginPath();
  ctx.lineWidth = Math.max(0.45, scale * 0.8);
  ctx.moveTo(sway * trunk * 0.3, -trunk * 0.91);
  ctx.lineTo(
    sway * trunk * 0.4 + lean * 4,
    -trunk * 1.04
  );
  ctx.stroke();

  ctx.restore();
}

function animate(time) {
  ctx.clearRect(0, 0, W, H);

  for (const tree of trees) {
    drawTree(tree, time);
  }

  requestAnimationFrame(animate);
}

window.addEventListener("resize", resize);

resize();
requestAnimationFrame(animate);
