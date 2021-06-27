
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup,fruit;
var score,score2;         
var land,monkey;
var Gamestate;

function preload(){
  
  
  monkey_running =            loadImage("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(500,400)
  
  //creating land
  land=createSprite(250,300,700,5)
  land.velocityX=-3
  land.shapeColor="green"

  // creating monkey
  monkey=createSprite(50,250,10,10)
  monkey.addAnimation("monkey",monkey_running)
  monkey.scale=0.12
  
  score=0
  
  obstacleGroup=new Group();
  
  Gamestate="play"
}
//scoring system
 
//score2=0
/*monkey.setCollider("rectangle",0,0,monkey.width,monkey.height);
monkey.debug = true */
 
 
function draw() {
  background(225) 
 
  if(Gamestate==="play"){   
   if(land.x<150){
    land.x=300  
  } 
 // console.log(monkey.y)
  // jumping monkey
  
  
  if(keyDown("space") && (monkey.y>250)){
    monkey.velocityY=-10 
  }
  

 // setting gravity
  monkey.velocityY =monkey.velocityY + 0.6
   
  monkey.collide(land)
  
   if(frameCount % 50 === 0){
    score=score+1
  }
   
   if(obstacleGroup.isTouching(monkey)){
    Gamestate="over"
  }
    spawnfruits();
  spawnobstacles()
  drawSprites();
 }
  //scoring system\
  textSize(20)
  text("Survival time = " + score,180,50)
  
 if(Gamestate==="over"){
   background(1)
   textSize(50)   
   text("GAME OVER",100,200)
 } 
  
  
 
}


function spawnfruits(){
  if(frameCount % 100 === 0){
  fruit=createSprite(550,200)
    fruit.velocityX=-5
    fruit.addImage(bananaImage)
    fruit.scale=0.05
    fruit.lifetime=150
    fruit.y=random(110,250)
  }
}

function spawnobstacles(){
 if(frameCount % 120 === 0){
   obstacle=createSprite(600,275);
  obstacle.addImage(obstacleImage)
  obstacle.scale=0.11 
  obstacle.velocityX=-11
  obstacle.x=random(550,750)
   obstacle.lifetime=200
   obstacleGroup.add(obstacle)
 }
}



