function setup() 
{ 
 createCanvas(120, 120); 
} 
function draw() 
{ 
 background(204); 
 if (keyIsPressed) {  //hvad er denne variable mon for en type? // det er en boolsk fordi den kan være sand eller falsk atså 2 verdier
  if ((key == 'h') || (key == 'H')) { line(30, 60, 90, 60); }  
  // hvis man trykker på h eller h og shift og så tegner den en vandret streg
  if ((key == 'n') || (key == 'N')) { line(30, 20, 90, 100); } 
  //hvis man stykker på n og n og shift laver den en skrå streg
 } 
line(30, 20, 30, 100); 
line(90, 20, 90, 100); 
//her laver den de to lodrette streger som er vist konstant uden nogle tryk
} 