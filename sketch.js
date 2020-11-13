var paperBall,Ground;
var dustBin1,dustBin2,dustBin3;
var dustbinimg,paperballimg;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	dustbinimg = loadImage("https://projectsassets.s3.us-east-2.amazonaws.com/dustbingreen.png");
    paperballimg = loadImage("https://projectsassets.s3.us-east-2.amazonaws.com/paper.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var options = {
		isStatic:false,
		restitution:0.3,
		friction:0.5,
		density:1.2,
	}
	
	paperBall = Matter.Bodies.circle(400,500,20,options);
	paperBall = image(paperballimg,400,500);
	Ground = createSprite(400,600,800,50);
	dustBin1 = createSprite(600,520,20,120);
	dustBin2 = createSprite(650,570,100,20);
	dustBin3 = createSprite(700,520,20,120);
	dustbin2 = image(dustbinimg,650,570);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  elipseMode(CENTER);
  elipse(paperBall.position.x,paperBall.position.y,70,70);
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperBall.body,paperBall.Body.postion,{x:85,y:-85});
	}
}

