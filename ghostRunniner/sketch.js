var towerImage, tower;
var doorImage, doorGroup, door;
var climberImage, climber, climberGroup
var ghost, ghostImage;
var invisibleBlock, invisibleBlockGroup;



function preload(){
  towerImage = loadImage("tower.png");
  doorImage = loadImage("door.png");
  climberImage = loadImage("climber.png");
  ghostImage = loadImage("ghost-standing.png")
  
}

function setup(){
  createCanvas(600,600);
  tower = createSprite(300,300);
  tower.addImage("tower.png",towerImage);
  tower.velocityY = 1;
  
   ghost = createSprite(200,200,50,50);
  ghost.addImage("ghost-standing.png",ghostImage);
  ghost.scale = 0.3;
  
  doorGroup = new Group();
  climberGroup = new Group();
  invisibleBlockGroup = new Group();
}


function draw(){
  background(0);
  
  if (tower.y>400){
    tower.y = 300;
  }
  if (keyDown("left_Arrow")){
    ghost.x = ghost.x -3;
  }
  if (keyDown("right_Arrow")){
    ghost.x = ghost.x +3;
  }
  if (keyDown("space")){
    ghost.velocityY = -6.5;
  }
  ghost.velocityY = ghost.velocityY +0.8;
  spawnDoors();
  
  
  
  if (climberGroup.isTouching(ghost)){
    ghost.velocityY = 0;
  }
  
  if (invisibleBlockGroup.isTouching(ghost) ||  ghost.y> 600){
    ghost.destroy();
  }
  drawSprites();
}
function spawnDoors() {
  //write code here to spawn the clouds
  if (frameCount % 200 === 0) {
    var door = createSprite(200,-50);
    door.x = Math.round(random(120,400));
    door.addImage(doorImage);
    door.velocityY = 1;
    
     //assign lifetime to the variable
    door.lifetime = 800;
    
    //add each cloud to the group
    doorGroup.add(door);
    
     var climber = createSprite(200,10);
    climber.x = door.x;
    climber.addImage(climberImage);
    climber.velocityY = +1;
    
     //assign lifetime to the variable
    climber.lifetime = 800;
    
    //add each cloud to the group
    climberGroup.add(climber);
    
     var invisibleBlock = createSprite(200,15);
    invisibleBlock.width = climber.width; invisibleBlock.height = 2;
    invisibleBlock.x = door.x;
     invisibleBlock.velocityY = +1;
    invisibleBlock.lifetime = 800;
    ghost.depth = door.depth;
    ghost.depth = ghost.depth +1;
    
  }
  
}