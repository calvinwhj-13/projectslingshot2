const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var box1,box2,box3,box4;
var box5,box6,box7;
var slingshot;

function setup() {
  var canvas = createCanvas(1200,400);
 var engine = Engine.create();
  world = engine.world;

  platform = new Ground(600,200,200,20);

  box1 = new Box(575,160,50,60);
  box2 = new box(525,160,50,60);
  box3 = new Box(625,160,50,60);
  box4 = new Box(675,160,50,60);

  box5 = new Box(600,120,50,60);
  box6 = new Box(550,120,50,60);
  box7 = new Box(650,120,50,60);

  polygon = Bodies.circle(50,20,20);
  World.add(world,polygon);

  slingshot = new SlingShot(this.polygon,{x:100,y:200});

}

function draw() {

  background("grey");

  Engine.update(engine);

  platform.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();

  slingshot.display();

}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode === 32){
      slingshot.attach(polygon.body);
  }
}