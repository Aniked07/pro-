
var bullet;
var wall;
var speed,weight;
var thickness , 


function setup() {
  createCanvas(800,400);
  
speed=random(223,312);
  weight=random(30,52);
 thickness = random(22,83);

       wall =createSprite(650,350,thickness,height);
  bullet =createSprite(30,200,50,50);
  
}

function draw() {
  background(255,255,255);  
  
if(wall.x-bullet.x<(bullet.width+wall.width)/2){
 bullet.velocityX=0;
  var deformation = 0.5 *width*speed* speed/22509;
  if(deformation >223)
  {
    bullet.shapeColor=color(250,0,0);
  }
    if(deformation <180 && deformation >100 )
  {
    bullet.shapeColor=color(230,230,0);
  }
    if(deformation <100)
  {
    bullet.shapeColor=color(0,255,0);
  }
}

bullet.shapeColor=color(80,80,80);

bullet.velocityX=speed;
  drawSprites();

}