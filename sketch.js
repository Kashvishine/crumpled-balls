
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var rect1,rect2,rect3
var paperObject
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
rect1=createSprite(500,400,20,150)
rect2=createSprite(615,480,250,20)
rect3=createSprite(730,400,20,150)
paperObject=new PaperObject

rect1.shapeColor="cyan"
rect2.shapeColor="cyan"
rect3.shapeColor="cyan"




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("blue");
 ellipse(620, 430, 55, 55);


  drawSprites();
 
}

function keyPressed(){
if(keyCode===UP_ARROW)	{
	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:85})
}
	}
	



