
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var survivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}


function setup() {
  //creating monkey
monkey=createSprite(80,315,20,20)
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(400,350,900,10);
  
  ground.x=ground.width/2;
  
 FoodGroup = new Group();
  obstacleGroup = new Group();
  
 

 
  
}
function draw() {
 background(500);
  
 
  
  stroke("black");
  textSize(20);
  fill ("black");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("survivalTime:"+survivalTime,100,50);
  if (ground.x<0){
    ground.x=ground.width/2
  }
    
  
  if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
  } 
   
    monkey.velocityY = monkey.velocityY + 0.8; 
monkey.collide(ground)
  
 spawnBanana();
  spawnObstacle();
  
  drawSprites();
  
  
  if(obstacleGroup.isTouching(monkey)){
  ground.velocityX=0;
    monkey.velocityY=0;
  
    obstacleGroup.setVelocityXEach(0);
    FoodGroup.setVelocityXEach(0);
    obstacleGroup.setLifetimeEach(-1);
    textSize(20);
    FoodGroup.setLifetimeEach(-1);
    stroke("black");
    textSize(20);
    fill("black");
    survivalTime=Math.ceil(frameCount/frameRate())
    
    obstacleGroup.velocityX = obstacleGroup.velocityX - (survivalTime / 100) * 10;
  }
  
  
}

 function spawnObstacle() {
   if(World.frameCount % 300 === 0) {
     var obstacle = createSprite(800,320,10,40); 
     obstacle.velocityX = -6;
     //generate random obstacles
     obstacle.addImage(obstacleImage); obstacle.setCollider("circle",0,0,30);
     //assign scale and lifetime to the obstacle
     obstacle.scale = 0.15;
     obstacle.lifetime = 300;
     //add each obstacle to the group
     obstacleGroup.add(obstacle);
   }
 }

function spawnBanana() {
  //write code here to spawn the clouds
  if (World.frameCount % 80 === 0) {
    var banana = createSprite(400,160,40,10);
    banana.addImage(bananaImage)
 
    
    banana.scale = 0.1;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 134;
    
    //adjust the depth
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
   
    

 
  }
  
}