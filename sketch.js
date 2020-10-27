const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var maximumWaterDrops=50;
var rain=[];
var lightning;
var drops;

function preload(){
    lightningImage=loadImage("images/thunderbolt/1.png")
}

function setup(){
    createCanvas(600, 600);
    engine = Engine.create();
   world = engine.world;

   lightning=createSprite(200,20);
   lightning.addImage(lightningImage);
   lightning.visible=false;

   person=new Umbrella(200,450,300,500)
   drops=new Drop(random(50,550),0)
   Engine.run(engine);
}

function draw(){
 background("black")    
 Engine.update(engine);

 if(frameCount%200===0){
    lightning.visible=true;
} else if(frameCount%220===0){
    lightning.visible=false;
}
if(frameCount % 1 === 0) {
    rain.push(new Drop(random(50, 350), 10))
  }

  for(var i = 0; i < rain.length; i++) {
    rain[i].display();
  }

  drops.display();
person.display();
  drawSprites();
}   

