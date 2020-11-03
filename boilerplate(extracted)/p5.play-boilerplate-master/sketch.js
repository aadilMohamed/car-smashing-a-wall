var car,wall;
var speed,weight;
function setup() {
  createCanvas(1600,400);
  car = createSprite(400, 200, 50, 50);
  wall = createSprite(1500,200,50,200);
  speed = random(55,90)
  car.velocityX = speed;
  weight = random(400,1500)
  wall.shapeColor = color("teal")
}
function draw() {
  background(0,0,0);
  var deformation = 0.5 * weight * speed * speed/22509;
  if(wall.x-car.x<=(car.width+wall.width)/2){
    car.velocityX = 0;
    
    if(deformation>180){
      car.shapeColor = color(25,0,0);
    }
    if(deformation<180 && deformation>100){
      car.shapeColor = color(230,230,0);
    }
    else if(deformation>100){
      car.shapeColor = color(0,255,0);
    }
  }
  drawSprites();
}
