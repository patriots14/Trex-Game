
var trex ,trex_running;
var groundImage;
function preload(){
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png")
  groundImage=loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200)
 trex=createSprite (50,180,20,40)
 trex.addAnimation("running",trex_running)
 trex.scale=0.5
 ground=createSprite (300,190,600,20)
 ground.addImage("ground",groundImage)
trex.debug=true
ground.debug=true
}

function draw(){
  background("white")
  drawSprites()
  trex.collide(ground)
if (keyDown("space")||keyDown(UP_ARROW)){
  trex.velocityY= - 10
}
trex.velocityY=trex.velocityY+0.5
}
