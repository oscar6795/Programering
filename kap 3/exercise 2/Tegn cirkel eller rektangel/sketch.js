 function setup() {
  createCanvas(1920,1080);
  strokeWeight (50);
 background (240);
}

function draw() {
 

if (mouseIsPressed == true) {
  if(mouseButton == LEFT) {
   ellipse (mouseX, mouseY, 2, 2)
  }
}
}
else if (mouseIsPressed == true) {
  (mouseButton == RIGHT) {
   rect (mouseX, mouseY, 2, 2)
  }
}
