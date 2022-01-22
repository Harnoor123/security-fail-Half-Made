var wall1; 
var wall2;  
var wall3;   
var wall4;   
var laser;
var laser2;   
var laser3;   
var laser4;   
var laser5;   
var thief;     
var diamond;   
var diamondimg;
var thiefimg;

function preload(){
  thiefimg=loadImage("skeleton.gif");
  diamondimg=loadImage("diamond3.png");
  playSound("sound://category_music/clear_evidence_loop1.mp3", true);
}


function setup(){
wall1 = createSprite(200, 5, 400, 10);
wall2= createSprite(5, 200, 10, 400);
wall3= createSprite(200, 395, 400, 10);
 wall4   = createSprite(395, 200, 10, 400);
 laser  = createSprite(200, 320, 40, 10);
 laser2  = createSprite(200, 305, 40, 10);
 laser3  = createSprite(200, 200, 113 ,5);
 laser4  = createSprite(200, 80, 60, 10);
laser5 = createSprite(200, 95, 60, 10);
 thief = createSprite(50, 360, 10, 10);
 thief.scale =0.3;
diamond = createSprite(355,40, 10, 10);
diamond.scale=0.13;
diamond.addImage(diamondimg);
thief.addImage(thiefimg);
laser.velocityX = 14;
laser2.velocityX = -14;
laser3.velocityX = 19;
laser4.velocityX = 12;
laser5.velocityX = -12;
laser2.shapeColor = "red";
laser3.shapeColor = "red";
laser.shapeColor = "red";
laser4.shapeColor = "red";
laser5.shapeColor = "red";
wall1.shapeColor = "green";
wall2.shapeColor = "green";
wall3.shapeColor = "green";
wall4.shapeColor = "green";

}

function draw() {
  background("yellow");
  laser.bounceOff(wall4)|| laser.bounceOff(wall2);
  laser2.bounceOff(wall4)|| laser2.bounceOff(wall2);
  laser3.bounceOff(wall4)|| laser3.bounceOff(wall2);
  laser4.bounceOff(wall4)|| laser4.bounceOff(wall2);
  laser5.bounceOff(wall4)|| laser5.bounceOff(wall2);

  if(keyDown("left")) {
    if (thief.x >40) {
    thief.x = thief.x-5;
  }
  }
  if(keyDown("right")) {
    if (thief.x <360) {
    thief.x = thief.x+5;
  }
  }
   if (keyDown("up")) {
    if (thief.y >40) {
     thief.y = thief.y-5;
    }
  }
  
  if (keyDown("down")) {
   if (thief.y <360) {
     thief.y = thief.y+5;
   }
  }
  if(thief.isTouching(laser)||
     thief.isTouching(laser2)||
     thief.isTouching(laser3)||
     thief.isTouching(laser4)||
     thief.isTouching(laser5))
  {
     thief.x = 50;
     thief.y = 360;
  }
  if(thief.isTouching(diamond)) {
    textSize(30);
    fill("black")
    text("SECURITY FAIL",100,140);
    laser.velocityX = 0;
    laser2.velocityX = 0;
    laser3.velocityX = 0;
    laser4.velocityX = 0;
    laser5.velocityX = 0; 

  }



  drawSprites();
}