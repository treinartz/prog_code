// ------------------------------
// Beginner-Friendly Image Filters
// ------------------------------

let img;

function preload() {
  // Load an image before setup
  img = loadImage("flower.jpg"); // Make sure pic.jpg is in your sketch folder
}

function setup() {
  createCanvas(img.width * 2, img.height * 2); // Make canvas bigger to show multiple filters
  noLoop(); // Only draw once
}

function draw() {
  background(220);

  // Display the original image in the top-left
  image(img, 0, 0);

  // Display grayscale filter in top-right
  image(applyGrayscale(img), img.width, 0);

  // Display red-tint filter in bottom-left
  image(applyRedTint(img), 0, img.height);

  // Display invert filter in bottom-right
  image(applyInvert(img), img.width, img.height);
}

// ------------------------------
// Filter Functions
// ------------------------------

// Grayscale filter: average RGB values
function applyGrayscale(sourceImg) {
  let newImg = createImage(sourceImg.width, sourceImg.height);
  newImg.loadPixels();

  // Nested loops to go through each pixel
  for (let x = 0; x < sourceImg.width; x++) {
    for (let y = 0; y < sourceImg.height; y++) {
      let c = sourceImg.get(x, y); // Get the color at (x, y)
      let gray = (red(c) + green(c) + blue(c)) / 3;
      newImg.set(x, y, color(gray)); // Set new color
    }
  }

  newImg.updatePixels();
  return newImg;
}

// Red-tint filter: keep red high, reduce green and blue
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

// Invert filter: subtract each RGB value from 255
function applyInvert(sourceImg) {
  let newImg = createImage(sourceImg.width, sourceImg.height);
  newImg.loadPixels();

  for (let x = 0; x < sourceImg.width; x++) {
    for (let y = 0; y < sourceImg.height; y++) {
      let c = sourceImg.get(x, y);
      newImg.set(x, y, color(255 - red(c), 255 - green(c), 255 - blue(c)));
    }
  }

  newImg.updatePixels();
  return newImg;
}
