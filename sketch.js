var bg,bgimage
var mainplayer,mainplayerImage
var mainplayertwo,mainplayerimagetwo
var bulletfire,bulletfireimage
var bullet,bulletimage
var bullet2,bullet2image
var bulletcount=0


function preload(){
  bgimage=loadImage("bg.jpg");
mainplayerimagetwo=loadImage("main player 2.png")
  mainplayerImage=loadImage("main player.png")
bulletfireimage=loadImage("bullet fire.png")
  bulletimage=loadImage("bullet.png")
  bullet2image=loadImage("bullet2.png")

}

function setup() {
  createCanvas(1500,600);
  mainplayer=createSprite(395,425,50,50)
  mainplayer.addImage("hero",mainplayerImage)
  mainplayertwo=createSprite(918,448,50,50)
  mainplayertwo.addImage("zero",mainplayerimagetwo)
  mainplayertwo.scale=0.5;
  bullet=createSprite(518,422,50,50);
  bullet.addImage("goli",bulletimage);
  bullet.scale=0.3;
  healthone=createSprite(335,145,200,20);
  healthone.shapeColor="red";
  healthtwo=createSprite(886,145,200,20);
  healthtwo.shapeColor="red";
  mainplayertwo.setCollider("circle",0,0,90)
  //mainplayertwo.debug=true;
bullet2=createSprite(802,422,50,50);
  bullet2.addImage("goli2",bullet2image);
  bullet2.scale=0.3;
  mainplayer.setCollider("circle",0,0,90)
  //mainplayer.debug=true;
  

}

function draw() {
  background(bgimage);
  text(mouseX+","+mouseY, mouseX, mouseY);
  if(keyDown("SPACE")){ 
    bullet.velocityX=5;
    //bullet.addImage("goli",bulletfireimage);  
    }
  if(bullet.collide(mainplayertwo)){

  healthtwo.width=healthtwo.width-40;
  }
  if(keyDown("ENTER")){ 
    bullet2.velocityX=-5;
    //bullet.addImage("goli2",bullet2fireimage);  
    }
    if(bullet2.collide(mainplayer)){

      healthone.width=healthone.width-40;
      }
  drawSprites();
  
}
  
  
    
  


