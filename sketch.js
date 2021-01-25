var bg,bgImg;
var bird,birdImg;
var pipeUpGroup,pipeUpImg1,pipeUpImg2,pipeUpImg3;
var pipeDoenGroup,pipeDownImg1,pipeDownImg2,pipeDownImg3;
var ran;

function preload(){
  bgImg=loadImage("Img/skye.png");
  birdImg=loadImage("Img/bird.png");
  pipeUpImg1=loadImage("Img/pipeUp1.png");
  pipeUpImg2=loadImage("Img/pipeUp2.png");
  pipeUpImg3=loadImage("Img/pipeUp3.png");
  pipeDownImg1=loadImage("Img/pipeDown1.png");
  pipeDownImg2=loadImage("Img/pipeDown2.png");
  pipeDownImg3=loadImage("Img/pipeDown3.png");
  
}
function setup() {
  createCanvas(displayWidth,displayHeight);
  bg=createSprite(displayWidth/2,displayHeight/2,displayWidth*5,height);
  bg.addImage("bg",bgImg,);
bg.scale=1.25;


bird=createSprite(displayWidth-1800,displayHeight/2,50,50);
bird.addImage(birdImg);

pipeUpGroup=new Group();
pipeDownGroup=new Group();
}

function draw() {
  background(0); 
  fill("black")
  text(mouseX+","+mouseY,mouseX,mouseY)



  if(keyDown("space") ) {
    bird.velocityY = -5;
  }

  bird.velocityY = bird.velocityY + 0.2  ;
 spawnPipesUp();
 spawnPipesDown();
  drawSprites();
}

function spawnPipesUp() {
  //write code here to spawn the pipeUps
  if ((frameCount % 150 === 0) || (frameCount%75===0)){
    var pipeUp = createSprite(camera.x+width/2,20,40,10);
   ran=Math.round(random(1,3));
   switch(ran) {
    case 1: pipeUp.addImage(pipeUpImg1);
            break;
    case 2: pipeUp.addImage(pipeUpImg2);
            break;
    case 3: pipeUp.addImage(pipeUpImg3);
            break;
    
    default: break;
  }

    pipeUp.scale = 2.5;
    pipeUp.velocityX = -20;
    
     //assign lifetime to the variable
    pipeUp.lifetime = 200;
    
    
    
    //add each pipeUp to the group
    pipeUpGroup.add(pipeUp);
  }
}

function spawnPipesDown() {
  //write code here to spawn the pipeUps
  if ((frameCount % 150 === 0) || (frameCount%75===0)){
    var pipeDown = createSprite(camera.x+width/2,displayHeight,40,10);
   ran=Math.round(random(1,3));
   switch(ran) {
    case 1: pipeDown.addImage(pipeDownImg1);
            break;
    case 2: pipeDown.addImage(pipeDownImg2);
            break;
    case 3: pipeDown.addImage(pipeDownImg3);
            break;
    
    default: break;
  }

    pipeDown.scale = 2.5;
    pipeDown.velocityX = -20;
    
     //assign lifetime to the variable
    pipeDown.lifetime = 200;
    
    
    
    //add each pipeDown to the group
    pipeDownGroup.add(pipeDown);
  }
}