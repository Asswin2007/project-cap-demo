var car,carImg;
var space,spaceImg;
var ufo,ufoImg,ufoGroup;
var gameState = "play"
var coin,coinGroup,coinImg;

function preload(){

    carImg = loadImage("rocket.png");
    spaceImg = loadImage("space.png");
    ufoImg = loadImage("ufo.png");
    coinImg = loadImage("coin.png");
}

function setup(){
    createCanvas(600,600);
 

    space = createSprite(300,300);
    space.addImage(spaceImg);
    space.scale = 1;
    space.velocityY = 3;

    car = createSprite(300,550,10,10);
    car.addImage(carImg);
    car.scale = 0.3;

    ufoGroup = new Group();
   coinGroup = new Group();


    score = 0;
}

function draw(){

    background(0);

 textSize(30);
 fill(255); 
 text("score :",300,30);

    if(gameState === "play"){
 if(space.y > 500){
    space.y = 300;
 }

 

 if(keyDown("right_arrow")){
    car.velocityX = 3;
 }

 if(keyDown("left_arrow")){
    car.velocityX = -3;
 }

 if(keyDown("down_arrow")){
    car.velocityY = 3;
 }

 if(keyDown("up_arrow")){
    car.velocityY = -3;
 }

if(ufoGroup.isTouching(car)){

    gameState = "end";
    car.destroy();
   

}


if (coinGroup.isTouching(car)){

    score = score+1;
    coinGroup.destroyEach();
}



}

if (gameState === "end"){

    background("red");
    stroke("black")
    textSize(30);
    text("gameOver",290,200,)

 space.destroyEach();
   coin.destroyEach();
  ufo.destroyEach();
}
   spawnufo();
   spawncoin();

    drawSprites();
}

function spawnufo(){
if (frameCount % 260 == 0){

ufo = createSprite(Math.round(random(20,540)),0);

ufo.addImage(ufoImg);

ufo.scale = 0.3;

ufo.velocityY = 2;

ufo.lifeTime  = 800;

ufoGroup.add(ufo);

}

}


function spawncoin(){
    if (frameCount % 120 == 0){
    
    coin = createSprite(Math.round(random(21,430)),0);
    
    coin.addImage(coinImg);
    
    coin.scale = 0.5;
    
    coin.velocityY = 2;
    
    coin.lifeTime  = 800;
    
    coinGroup.add(coin);
    
    }
    
    }
    

