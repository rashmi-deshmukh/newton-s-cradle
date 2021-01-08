
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
var roof1,bob1,bob2,bob3,bob4,bob5,rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  roof1 = new Roof(400,100,500,80);
  bob1 =new Bob(200,675,50)
  bob2 =new Bob(300,675,50)
  bob3 =new Bob(400,675,50)
  bob4 =new Bob(500,675,50)
  bob5 =new Bob(600,675,50)
  
  rope1= new Rope(bob1.body,{x:200,y:100});
	rope2= new Rope(bob2.body,{x:300,y:100});
	rope3= new Rope(bob3.body,{x:400,y:100});
	rope4= new Rope(bob4.body,{x:500,y:100});
	rope5= new Rope(bob5.body,{x:600,y:100});
}


function draw() {
  rectMode(CENTER);
  background("red");
  roof1.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  //bob1.options.isStatic = true;
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}



function keyPressed () {
  if (keyCode === UP_ARROW ){
    Matter.Body.applyForce( bob1.body,bob1.body.position,{x:-290,y:-290 })    
  }
 
}
