var monkey, monkeyAnimation, backdrop, backdropImage, banana, bananaImage, stone, stoneImage, score, bananaGroup, obstaclesGroup;

function preload() {
  backdropImage = loadImage("jungle.png");
  monkeyAnimation = loadAnimation("Monkey_01.png", "Monkey_02.png", "Monkey_03.png", "Monkey_04.png", "Monkey_05.png", "Monkey_06.png", "Monkey_07.png", "Monkey_08.png", "Monkey_09.png", "Monkey_10.png");
  bananaImage = loadImage("banana.png");
  stoneImage = loadImage("stone.png");
}

function setup() {
  createCanvas(400, 400);
  
  var monkey = createSprite(100, 340, 20, 50);
  monkey.addAnimation("monkey", monkeyAnimation);
  monkey.scale = 0.1;
  
  ground = createSprite(200,180,400,20);
  ground.x = ground.width / 2;
  ground.velocityX = -2;
  ground.visible = false;
  
  backdrop.addImage("jungle", backdropImage);
  backdrop.velocityX = -2;
  backdrop.x = backdrop.width / 2;
  
  bananaGroup = new Group();
  obstaclesGroup = new Group();
}

function draw() {
  background(220);
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: " + score, 500, 50);
  
  if (bananaGroup.isTouching(monkey)) {
    bananaGroup.destroyEach();
    score = score + 2;
  }
  
  switch(score) {
    case 10:
      monkey.scale = 0.12
      break;
    case 20:
      monkey.scale = 0.14;
      break;
    case 30:
      monkey.scale = 0.16;
      break;
    case 40:
      monkey.scale = 0.18;
      break;
    default:
      break;
  }

  if (obstaclesGroup.isTouching(monkey)) {
    monkey.scale = 0.1; 
  }
  
  drawSprites();
}

function createBanana () {
  if (World.frameCount % 60 === 0) {
    var banana = createSprite(400, randomNumber(120,200), 30, 10);
    banana.addAnimation("banana", bananaImage);
    banana.scale = 0.05;
    banana.velocityX = -4;
    banana.lifetime = 100;
    bananaGroup.add(banana);
  }
}

function makeObstacles () {
  if(World.frameCount % 300 === 0) {
    var obstacle = createSprite(400, 333, 30, 10);
    obstacle.addAnimation("stone", stoneImage);
    obstacle.scale = 0.1;
    obstacle.velocityX = -4;
    obstacle.lifetime = 100;
    obstaclesGroup.add(obstacle);
  }
}
