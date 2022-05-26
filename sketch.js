// motor de física
const Engine = Matter.Engine;
// mundo para criar os objetos
const World = Matter.World;
// cria os obejtos
const Bodies = Matter.Bodies;


let engine;
let world;
var ball;
var ground;
var wedge;
var angle=60;
var poly;
var radius = 20;
var ground_width = 400;
var ground_height = 20;


function setup() {
  createCanvas(400, 400);

  engine = Engine.create();
  world = engine.world;

  var ball_options = {
    // elasticidade
    restitution: 0.95, 
    // atrito do ar no objeto
    frictionAir: 0.01
  }
  
  ball = Bodies.circle(100, 10, radius, ball_options);
  World.add(world, ball);

  ground = Bodies.rectangle(200, 390, ground_width, ground_height, {isStatic: true})
  World.add(world, ground);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background("black");

  Engine.update(engine);

  // testar criar um chão com sprite e ver se a bola quica

  ellipse(ball.position.x, ball.position.y, radius);
  rect(ground.position.x, ground.position.y, ground_width, ground_height);
  
}
