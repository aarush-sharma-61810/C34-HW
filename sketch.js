
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;


function setup() {
  createCanvas(500,400);
  
  engine = Engine.create();
  world = engine.world;
  ball = Bodies.circle(300,300,20)
  World.add(world,ball)
  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
}


function draw() 
{
  if()
  background("skyblue");
  Engine.update(engine);
  ellipse(ball.position.x,ball.position.y,20,20)
  
}

