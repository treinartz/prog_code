let img;

function preload() {
  // Load an image before setup
  img = loadImage("flower2.jpg"); // Make sure a pic.jpg is in your sketch folder
}

function setup() {
  createCanvas(img.width, img.height * 2);
  noLoop(); // Only draw once
}

function draw() {
  background(220);

  // Display the original image at the top
  image(img, 0, 0);

  // Display red-tint filter at bottom
  image(applyRedTint(img), 0, img.height);
}

// ------------------------------
// Filter Function
// ------------------------------

// Red-tint filter: currently keeps red high, reduced green and blue
//experiment with the values, then turn red off
function applyRedTint(sourceImg) {
  let newImg = createImage(sourceImg.width, sourceImg.height);
  newImg.loadPixels();

  for (let x = 0; x < sourceImg.width; x++) {
    for (let y = 0; y < sourceImg.height; y++) {
      let c = sourceImg.get(x, y);
      newImg.set(x, y, color(red(c), green(c) * 0.3, blue(c) * 0.3));
    }
  }

  newImg.updatePixels();
  return newImg;
}
