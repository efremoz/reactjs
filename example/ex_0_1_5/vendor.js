button.style.backgroundColor = 'black';

let weCanDraw = false;
let isClicked = false;

button.addEventListener('click', function () {
  if (isClicked) {
    isClicked = false;
    weCanDraw = false;
  } else {
    isClicked = true;
    weCanDraw = true;
  }
});

function setup() {
  createCanvas(windowWidth - 20, windowHeight - 20);
}

function draw() {
  textSize(74);

  if (weCanDraw) {
    text('рџ–¤', mouseX, mouseY);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}