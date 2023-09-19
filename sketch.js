
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var btn1;
var btn2;
var con;
var ball;
var top_wall;

var angle=60;
var fan1,fan2,fan3,fan4;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   fan1 = new Ground(50,370,50,30);
   fan2 = new Ground(150,370,50,30);
   fan3 = new Ground(250,370,50,30);
   fan4 = new Ground(350,370,50,30);
   var ground_options ={
     isStatic: true
   };
  
   btn2 = createImg('up.png');
  btn2.position(350,30);
  btn2.size(50,50);
  btn2.mouseClicked(vForce);

  //ground1 = Bodies.rectangle(100,300,100,20,ground_options);
  //World.add(world,ground1);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
 
  ground = Bodies.rectangle(100,400,650,20,ground_options);
  World.add(world,ground); 
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
  
con = Matter.Constraint.create({
pointA:{x:200,y:20},
bodyB:ball,
pointB:{x:0,y:0},
length:100,
stiffness:0.1
});
World.add(world,con);



}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  

 
fan1.display();
fan2.display();
fan3.display();
fan4.display();
  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,650,20);
  stroke("white");
  strokeWeight(5);
 line (con.pointA.x,con.pointA.y,ball.position.x,ball.position.y);

//console.log(ground.position.y);

  
  
}

function vForce()
{
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.5,y:0});
}
  