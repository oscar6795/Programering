let x;   //erklærer x
let justHitRightWall;
let xspeed = 3;

function setup() { 
  createCanvas(400, 400);
  x = width / 2; //x = canvas width delt med to alstå i centrum af løredet på det led
} 

function draw() { 
  background(220);
  if (x > width - 25 || x < 0 + 25) { /* Hvis x er større end læredsbredte-25 som er cirklens radius 
  eller mindre end bredten plus 25 radius alså når den rammer venstre eller højre kant på canvas */
    xspeed *= -1;
  }
  
  //Move //det er en note om at det her arbejder med bevægelse
  x += xspeed; //farten er horisontal
  ellipse(x, height/2, 50, 50); //cirkel centrum har farten der er vist over radius er 25
}