let x;
let y;
let x2; //kat x
let y2; //kat y
let speed = 3;
let speed2 = 2; // kat fart x2
let speed3 = 2; // kat fart y2
let a = speed;
let a2 = speed2;
let b = 0;
let b2 = 2;
let d = 20;
let d2 = 30;
let imgSize = 100;
let img2Size = 100;
let img3Size = 200;
let m;

function preload() {
  img = loadImage("jerry.png");
  img2 = loadImage("tom.png");
  img3 = loadImage("Game over.png");
}

function setup() {
  createCanvas(1280, 550);
  x = random(0, width);
  y = random(0, height);
  x2 = random(0, width);
  y2 = random(0, height);
}

function draw() {
  background(220);
  image(img, x, y, 100, 100); //circle(x,y,d)
  x += speed * a;
  y += speed * b;

  image(img2, x2, y2, 150, 150);
  x2 += speed2 * a2;
  y2 += speed2 * b2;
  borderCheck();
  collision();
}

function borderCheck() {
  if (x + d / 2 >= width - imgSize) {
    a = -speed;
    b = 0;
  }
  if (x - d / 2 <= 0) {
    a = speed;
    b = 0;
  }
  if (y + d / 2 >= height - imgSize) {
    a = 0;
    b = -speed;
  }
  if (y - d / 2 < 0) {
    a = 0;
    b = speed;
  }

  if (x2 + d2 / 2 >= width - img2Size) {
    a2 = -speed2;
    b2 = random(1, 5);
  }
  if (x2 - d2 / 2 <= 0) {
    a2 = speed2;
    b2 = random(0, 6);
  }
  if (y2 + d2 / 2 >= height - img2Size) {
    a2 = -speed3;
    b2 = random(-6, -1);
  }
  if (y2 - d2 / 2 < 0) {
    a2 = speed3;
    b2 = random(1, 5);
  }
}

function collision() {
  m = dist(x, y, x2, y2);
  print(1);

  if (m < 70) {
    print("hit");
    speed = 0;
    speed2 = 0;
    speed3 = 0;
    image(img3, 300, -80, 700, 700);
  }
}

function keyPressed() {
  if (keyCode === DOWN_ARROW) {
    b = speed;
    a = 0;
  }
  if (keyCode === UP_ARROW) {
    b = -speed;
    a = 0;
  }
  if (keyCode === LEFT_ARROW) {
    b = 0;
    a = -speed;
  }
  if (keyCode === RIGHT_ARROW) {
    b = 0;
    a = speed;
  }
}
