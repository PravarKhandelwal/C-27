
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var bob1,bob2,bob3,bob4,bob5;
var roof1;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;


	//Create the Bodies Here.
bob1 = new bob(200,700,40);
bob2 = new bob(280,700,40);
bob3= new bob(360,700,40);
bob4 = new bob(440,700,40);
bob5 = new bob(520,700,40);


roof1 = new roof(400,200,600,40);

rope1 = new rope(bob1.body,roof1.body,160,200)
rope2 = new rope(bob2.body,roof1.body,80,200)
rope3 = new rope(bob3.body,roof1.body,0,200)
rope4 = new rope(bob4.body,roof1.body,-80,200)
rope5 = new rope(bob5.body,roof1.body,-160,200)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255,255,255);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof1.display();
  rope1.display()
  rope2.display()  
  rope3.display()
  rope4.display()
  rope5.display()
 
  drawSprites();
 
}

function keyPressed()
{
  if(keyCode === 32)
  {
    Matter.Body.applyForce(bob5.body,bob5.body.position,{x:-700,y:-700})
  }
}

