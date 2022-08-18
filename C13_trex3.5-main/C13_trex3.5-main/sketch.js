var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;


var score = 0;

var cloud, cloudsGroup, cloudImage;

var obs1, obs2, obs3, obs4, obs5, obs6

var newImage;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadAnimation("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  
  cloudImage = loadImage("cloud.png");
 
  obs1Image = loadImage("obstacle1.png");
  obs2Image = loadImage("obstacle2.png");
  obs3Image = loadImage("obstacle3.png");
  obs4Image = loadImage("obstacle4.png");
  obs5Image = loadImage("obstacle5.png");
  obs6Image = loadImage("obstacle6.png");
}

function setup() {
  createCanvas(600, 200);

  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  // trex.addAnimation("collided",trex_collided)
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  console.log("Hello"+ 5)
  
}

function draw() {
  background(180);
  



  //score display
  text("Score :" + score, 50,10);


  
  if(keyDown("space")&& trex.y >= 100) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  trex.collide(invisibleGround);
  
  //spawn the clouds + obstacles
  spawnClouds();
  spawnObstacles();
  

  drawSprites();
}

function spawnClouds() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    cloud = createSprite(600,100,40,10);
    cloud.addImage(cloudImage)
    cloud.y = Math.round(random(10,60))
    cloud.scale = 0.4;
    cloud.velocityX = -3;
    
    
    //assigning lifetime to the variable
    cloud.lifetime = 134
    
    //adjust the depth
    cloud.depth = trex.depth
    trex.depth = trex.depth + 1;
    }
}

function spawnObstacles () {
  if (frameCount % 60 === 0) {
    obs = createSprite(600,165,10,40);
    obs.scale = 0.4;
    obs.velocityX = -3;

    var obsrand = Math.round(random(1,6));

    switch (obsrand) {
      case 1 : obs.addImage(obs1Image);break;
      case 2 : obs.addImage(obs2Image);break;
      case 3 : obs.addImage(obs3Image);break;
      case 4 : obs.addImage(obs4Image);break;
      case 5 : obs.addImage(obs5Image);break;
      case 6 : obs.addImage(obs6Image);break;
      default:break;
    }
    obs.lifetime = 200;
  
  }

  





}