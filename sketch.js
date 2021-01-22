
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, dustbin, ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    paper = new Paper(100, 100, 70);
    dustbin = new Dustbin(680,600);
    ground = new Ground(400,610,800,10)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("blue");
  
  paper.display(); 
  dustbin.display(); 
  ground.display(); 
  
  keyPresssed();

  drawSprites();
 
}
//What values can I put to make the ball fall in the dustbin by using only the up arrow? With these values, you can make the ball fly up by pressing the up key but we have to press the down key to make the ball fall in the dustbin
function keyPresssed(){
  if (keyCode === UP_ARROW){
    Matter.Body.applyForce(paper.body, paper.body.position, {x:1, y:-4});
  }
}



