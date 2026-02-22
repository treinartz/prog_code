let img;

function preload() {
  //Load an image before setup
  //upload a 200x200 px image (press the + button on the laf)
  //replace "flower.jpg" with the name of your image
  //look for the word 'adjust' below to make your own version of this filter
  img = loadImage("flower2.jpg"); 
}

function setup() {
  createCanvas(img.width, img.height * 2);//make room for 2 images
  noLoop(); 
}

function draw() {
  background(220);
  // Display the original image at the top
  image(img, 0, 0);
  // Display red-tint filter at bottom
  image(applyRedTint(img), 0, img.height);
}

//Red-tint filter: currently keeps red high, reduced green and blue
function applyRedTint(sourceImg) {
  let newImg = createImage(sourceImg.width, sourceImg.height);
  newImg.loadPixels();

  for (let x = 0; x < sourceImg.width; x++) {
    for (let y = 0; y < sourceImg.height; y++) {
      let c = sourceImg.get(x, y);
      let r = red(c);
      let g = green(c);
      let b = blue(c);
      let a = alpha(c);
      //adjust the values below to make your own filter!
      newImg.set(x, y, color(r, g * 0.3, b * 0.3, a));
    }
  }
  newImg.updatePixels();
  return newImg;
}

function keyPressed() {
  if (key === "s") {
    save("redFilter.jpg");
  }
}
