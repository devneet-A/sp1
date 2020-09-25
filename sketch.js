 var player,playerImg;
 var backgroundImage,ObsImg,ObsImg2;
 var background1;
 var ground;
 var rock;
 var score = 0 ;
 
 
function preload(){
 playerImg = loadAnimation("CH1.png","CH2.png","CH3.png","CH4.png","CH5.png","CH6.png","CH7.png","CH8.png","CH9.png","CH10.png",);
 backgroundImage = loadImage("Images/Forest1.gif");
 obsImg = loadImage("Images/Bush.png");
 obsImg2 = loadImage("Images/rock.png");
}
 function setup() {
  createCanvas(displayWidth,displayHeight);
 
 
  ground = createSprite(displayWidth/2,900,displayWidth,5);
   background1 = createSprite(displayWidth/2,displayHeight/2);
  background1.addImage(backgroundImage)
  background1.scale =4.5;
 
  player = createSprite(200,900);
  player.addAnimation("player",playerImg);
}


function draw() {
  
 
 background1.velocityX = -5;

 if(background1.x<600){
   background1.x = displayWidth/2 ;
   
 }
 
 if(keyDown("space") && player.y>650){
   player.velocityY = -10;

 }
 player.velocityY = player.velocityY + 0.8;
  
 
 player.collide(ground);
 obstacles();
 
 drawSprites();
 textSize(25);
 fill("black")
 textFont("Times New Roman")
 score = score+1
 text("Score :" + score ,displayWidth/2+500,100);  
}
 function obstacles(){
  /*if (frameCount % 150 === 0){
    var obstacle = createSprite(displayWidth,900,0,0);
    obstacle.velocityX = -3;
    var Ran = Math.round(random(1,6));
    switch(Ran){
      case 1:obstacle.addImage(obsImg);
      break;
      case 6:obstacle.addImage(obsImg2);
      break;
      default : break;

    }
   */ 
   if (frameCount % 300 === 0){
    var obstacle = createSprite(displayWidth,950,0,0);
    obstacle.velocityX = -8;
    obstacle.addImage(obsImg);
    obstacle.lifetime = displayWidth/3;
    obstacle.scale = 0.4;
   }

    if (frameCount % 900 === 0){
      var rock = createSprite(displayWidth,950,0,0);
      rock.velocityX = -8;
      rock.addImage(obsImg2);
     rock.lifetime = displayWidth/3;
     rock.scale = 0.5;
     
    }
   
  }
 

 //function powerups(){

 //}