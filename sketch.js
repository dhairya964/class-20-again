var car,wall;
var speed,weight;

function setup() {
  createCanvas(1600,400);

  car = createSprite(200, 200, 20, 20);
  car.shapeColour("white")
}

function draw() {
  background(black);  
  drawSprites();
}