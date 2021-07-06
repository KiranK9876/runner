var path, pathimg
var runner1, runner1Img
var boundary1
var boundary2


function preload(){
  //pre-load images
  pathimg= loadImage("path.png")
  runner1Img = loadAnimation("Runner-1.png","Runner-2.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite(200,200,20,400)
  path.addImage(pathimg)

  path.velocityY=4

  runner1 = createSprite(200,300,20,20)
  runner1.addAnimation("R1", runner1Img)
  runner1.scale = 0.1

  boundary1 = createSprite(30,200,60,400)
  boundary2 = createSprite(370,200,60,400)

  boundary1.visible=false
  boundary2.visible=false



}
function draw() {
  background(0);
  runner1.x = World.mouseX



  if(path.y>400){
    path.y=height/2
  }


  runner1.collide(boundary1)
  runner1.collide(boundary2)




  drawSprites()

  

}
