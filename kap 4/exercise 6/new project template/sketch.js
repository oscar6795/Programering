function setup() { 
  createCanvas(120, 120); 
  strokeWeight(30); 
  } 
  function draw() { 
   background(204); 
   stroke(102); 
   line(40, 0, 70, height); 
   if (mouseIsPressed) { //hvor kommer denne variable fra? //når man trykker på musen sker der noget
    if (mouseButton == LEFT) { //og hvad med den? // og hvis det er venstre tast laver den en farvet streg
     stroke(255); 
    } 
    else { 
     stroke(0);  // ellers skal den lave en hvid streg
    } 
    line(0, 70, width, 50); //det her er stregen som altid er der
    } 
  } 