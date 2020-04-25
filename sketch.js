const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;



function setup() {
  createCanvas(600,400);
  engine = Engine.create();
  world = engine.world;

  castle1 = new Castle(100,380,65,350);
  castle2 = new Castle(165,380,65,300);
  castle3 = new Castle(235,380,75,250);
  castle4 = new Castle(300,380,65,300);
  castle5 = new Castle(365,380,65,350);
  castle6 = new Castle(55,380,10,500);
  castle7 = new Castle(410,380,10,500);

  ground = new ground(300,390,800,20);
}

function draw() {
  background(0);  
  castle1.display();
  castle2.display();
  castle3.display();
  castle4.display();
  castle5.display();
  castle6.display();
  castle7.display();
  ground.display();
  triangle(68,205,100,155,133,205);
  triangle(197,255,230,175,267,255);
  triangle(332,205,363,155,400,205);
  fill(255);
}