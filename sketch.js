var blackbg;
var maxHeight;
var bat, batAnimation;
var gameState="serve";
var score=0;
function preload(){
 bgAnimation=loadAnimation("bg0.png","bg1.png","bg2.png","bg3.png","bg4.png","bg5.png","bg6.png","bg7.png","bg9.png","bg10.png")
  maxHeightImage=loadImage("maxHeight.png");
  batAnimation=loadAnimation("bat-0.png","bat-1.png","bat-2.png","bat-3.png");
  obstacleAnimation=loadAnimation("bomb0.png","bomb1.png","bomb2.png","bomb3.png","bomb4.png","bomb5.png","bomb6.png","bomb7.png","bomb8.png","bomb9.png")
}

function setup(){
  createCanvas(1320,800);
/*blackbg=createSprite(680,480,1740,480);
blackbg.addImage(blackbgImage);
blackbg.velocityX=-3;

maxHeight=createSprite(681,0.000009,1600,140);
maxHeight.addImage(maxHeightImage);
maxHeight.scale=1.1;
maxHeight.velocityX=-3;
maxHeight.x=maxHeight.width/2;*/

bat=createSprite(600,400,30,30);
bat.addAnimation("flying",batAnimation);
bat.velocityY=3;
bat.scale=0.7;

play=createSprite(600,600,30,60);
play.shapeColor="white";

obstacleGroup=new Group();

}

function draw(){
  background("grey");
  fill("white");
  text(mouseX+","+mouseY,mouseX,mouseY); 
  
  if(gameState==="serve"){
    
    
    play.visible=true;
    bat.velocityY=0;

    if(mousePressedOver(play)){
      gameState="play";
    }
  }

  if (gameState==="play"){
    
    play.visible=false;
 
    score = score + Math.round(getFrameRate()/60);
    fill("white");
    textSize(50);
    text("SCORE:"+score,100,100);
    obstacles();
   
    /*if(maxHeight.x<=540){
      maxHeight.x=maxHeight.width/2;
    }
    if(blackbg.x<=650){
      blackbg.x=blackbg.width/2;
    }
*/
    if(keyDown(UP_ARROW)&&bat.y>=56){
      bat.velocityY=-6;
     
    }
    else if(bat.y>=724){
      bat.velocityY=0
  
    }
    else{
      bat.velocityY=3;
    }

  }
  
drawSprites();
}

function obstacles(){
  if(frameCount%80===0){
    obstacle=createSprite(1300,500,20,20);
    obstacle.addAnimation("flying",obstacleAnimation);
    obstacle.velocityX=-5;
    obstacle.scale=0.5;
    obstacle.y=Math.round(random(10,720));
    obstacleGroup.add(obstacle);
  }
}

