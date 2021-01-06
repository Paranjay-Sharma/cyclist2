var path,mainCyclist;

var horn;

 var over,overImg;

var pathImg,mainRacerImg1,mainRacerImg2;

var cyclist1,cyclist2,cyclist3;

var pinkCG, yellowCG, redCG;

var pinkImg, yellowImg, redImg;

var END =0;
var PLAY =1;
var gameState = PLAY;

var cyclist1Img1,cyclist2Img1,cyclist3Img1;

var distance=0;

function preload(){
  pathImg = loadImage("images/Road.png");
  mainRacerImg1 = loadAnimation("images/mainPlayer1.png","images/mainPlayer2.png");
  mainRacerImg2= loadAnimation("images/mainPlayer3.png");
  pinkImg=loadAnimation("images/opponent1.png","images/opponent2.png");
  pinkImg2=loadAnimation("images/opponent3.png")
  yellowImg=loadAnimation("images/opponent4.png","images/opponent5.png");
  yellowImg2=loadAnimation("images/opponent6.png");
  overImg = loadImage("images/gameOver.png");
  redImg = loadAnimation("images/opponent7.png","images/opponent8.png");
  redImg2=loadAnimation("images/opponent9.png");
}

function setup(){
  
createCanvas(500,300);
  
// Moving background
path=createSprite(100,150);
path.addImage(pathImg);
path.velocityX = -5;

//creating boy running

//creating boy running
mainCyclist  = createSprite(100,150,20,20);
mainCyclist.addAnimation("SahilRunning",mainRacerImg1);
mainCyclist.scale=0.05;
  
pinkCG= new Group();  
yellowCG= new Group();
  
redCG= new Group();  

  
}

function draw() {
  background(0);
  drawSprites();
  textSize(15);
fill (255,255,0);
  
  text("Distance(in m): "+ distance,350,30);
  distance=distance+frameCount%2;
   //code to reset the background
    if(path.x < 0 ){
    path.x = width/2;
  }
  
  if(gameState===PLAY){
  
   mainCyclist.y = World.mouseY;
  
   edges= createEdgeSprites();
   mainCyclist .collide(edges);
  
   
    
  pinkCyclist();
  yellowCyclist();
    redCyclist();
    var selectCyclist= Math.round(random(1,3));
switch (selectCyclist){
  case 1: pinkCyclist();
          break;
  case 2: yellowCyclist();
          break;
  case 3: redCyclist();
    break;
  default: break;
}
  
   if(pinkCG.isTouching(mainCyclist)){
    gameState= END;
    cyclist1.addAnimation("opponentPlayer1",pinkImg2);
    cyclist1.velocityY=0;

   } 
   if (yellowCG.isTouching(mainCyclist)){
    cyclist2.addAnimation("opponentPlayer2",yellowImg2);
    gameState=END;
    cyclist2.velocityY=0;
  } 
    if(redCG.isTouching(mainCyclist)){
      cyclist3.addAnimation("opponentPlayer3",redImg2);
      gameState=END
      cyclist3.velocityY=0;
    }

   }
   if (gameState===END){
  mainCyclist.addAnimation("sahilFalling",mainRacerImg2);  
 
  mainCyclist.velocityY=0;
  redCG.setVelocityXEach (0) ;
  yellowCG.setVelocityXEach (0);
  pinkCG.setVelocityXEach (0);   
   path.velocityX=0;

}
}
  


function pinkCyclist() {
  if(frameCount%120===0){
  cyclist1=createSprite(1200,200,20,20);
  cyclist1.y=Math.round(random(50,250));
  cyclist1.velocityX=-6;
  cyclist1.scale=0.05;
  cyclist1.setLifetime=170;
  cyclist1.addAnimation("opponentCyclist1",pinkImg);
  pinkCG.add(cyclist1);
  } 
}
function yellowCyclist() {
  if(frameCount%90===0){
  cyclist2=createSprite(1200,200,20,20);
  cyclist2.y=Math.round(random(50,250));
  cyclist2.velocityX=-8;
  cyclist2.scale=0.05;
  cyclist2.setLifetime=170;
  cyclist2.addAnimation("opponentCyclist2",yellowImg);
  yellowCG.add(cyclist2);
    
}
}
function redCyclist(){
 if(frameCount%80===0){
  cyclist3=createSprite(1200,200,20,20);
  cyclist3.y=Math.round(random(100,250));
  cyclist3.velocityX= -10;
  cyclist3.scale=0.05;
  cyclist3.setLifetime=170;
  cyclist3.addAnimation("opponentCyclist3",redImg);
 redCG.add(cyclist3);  
}
}
