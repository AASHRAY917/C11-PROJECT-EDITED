var jaxon,jaxon_running;
var path, pathImg, boyImg;
var rightBoundary,leftBoundary;

function preload()
{
  //pre-load images

  jaxon_running = loadAnimation("Runner-1.png","Runner-2.png");
  pathImg = loadImage("path.png");

}



function setup()
{
  createCanvas(400,400);
  //create sprites here

  path = createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY = 4;

  jaxon = createSprite(180,340,30,30);
  jaxon.addAnimation("running",jaxon_running);
  jaxon.scale = 0.08;

  rightBoundary = createSprite(410,0,100,800);
  rightBoundary.visible = false;

  leftBoundary=createSprite(0,0,100,800);
  leftBoundary.visible = false;
  
  
  


  
}

function draw() 
{
  background(0);

  if(path.y > 500)
  {
    path.y = height/2;
  }

  jaxon.x = World.mouseX; 
  
  jaxon.collide(rightBoundary);
  jaxon.collide(leftBoundary); 
  drawSprites();

}
