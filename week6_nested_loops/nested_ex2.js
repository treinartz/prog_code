function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  for (let y = 0; y < 300; y += 50) {
    for (let x = 0; x < 300; x += 50) {
      push();
      translate(x + 25, y + 25);
      rotate((x + y) * 0.01);
      rect(-15, -15, 30, 30);
      pop();
    }
  }
}
