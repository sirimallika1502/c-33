var bg;
var catimg,cat,catimg2,catimg3,catimg4,catimg5;
var snow,snowimg;
function setup() {
  createCanvas(800,400);
 cat=createSprite(400, 200, 50, 50);
 cat.scale=0.05
 //cat.addAnimation("tom",catimg,catimg2,catimg3,catimg4)
 cat.addAnimation("tom",catimg5);
 cat.velocityY=0
 cat.velocityX=-4

 snow=createSprite(400,50,50,50);
snow.addAnimation("snow", snowimg)
 snow.scale=0.08
 snow.velocityY=1
}
function preload(){
bg=loadImage("snow3.jpg");
catimg=loadAnimation("cat4.png");
catimg2=loadAnimation("cat1.png");
catimg3=loadAnimation("cat2.png");
catimg4=loadAnimation("cat3.png");
snowimg=loadAnimation("snow4.webp");
catimg5=loadAnimation("cat4.png","cat2.png","cat3.png","cat1.png")

}
function draw() {
  background(bg);  

  drawSprites();
}