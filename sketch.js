
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var roof1,rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);




	engine = Engine.create();
	world = engine.world;
   
	roof1= new Roof (400,300,500,10);
	 bobObject1 = new Bob(480,620,20);
	 bobObject2 = new Bob(440,620,20);
	bobObject3 = new Bob(400,620,20);
	bobObject4 = new Bob(360,620,20);
	bobObject5 = new Bob(320,620,20);
	rope1 = new Rope(bobObject3,{x:400,y:300});

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 bobObject1.display();
 roof1.display();
 
 bobObject2.display();
 bobObject3.display(); 
 bobObject4.display();
 bobObject5.display();
rope1.display();
  drawSprites();
 
}



