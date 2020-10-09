function setup() {
  createCanvas(800,400);
   car =createSprite(50, 200, 50, 50);
   speed=random(50,100)
   car.velocityX=speed
   wall=createSprite(700,200,50,200)
   weight=random(500,1500)
}

function draw() {
  background(255,255,255);  
  if(isTouching(car,wall)){
    car.velocityX=0
    deformation=0.5*weight*speed*speed/22509
    if(deformation>180){
      car.shapeColor='red'
    }
    if(deformation>100&&deformation<180){
      car.shapeColor='yellow'
   
    }    if(deformation<100){
      car.shapeColor='green'
    }

  }
  
  drawSprites();
}