function setup() {
  createCanvas(400, 400); //this makes a canvas that is 4000px by 400px
}

function draw() {
  background(217,128,203);//this makes the background canvas into a color using RGB codes
  noStroke();//this gets rid of the black outline on the ellipse
  ellipse(mouseX,mouseY,70,100);
  fill(mouseX,mouseY,61);//this makes the ellipse a color using RGB codes. Using mouse changes the color when moving the mouse
  
  console.log(mouseX);
  console.log(mouseY);
}