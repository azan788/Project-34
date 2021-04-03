const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var sky;
var hero, rope, monster;
var ground;
var blockStack1 = [];
var blockStack2 = [];
var blockStack3 = [];
var blockStack4 = [];

function preload() {
//preload the images here
  sky = loadImage("GamingBackground.png");
}

function setup() {
  createCanvas(1667/1.5, 833.5/1.5);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2, height, width, 20);

  // create sprites here
  hero = new Hero(200,200,455.25/1.5,157/1.5);

  rope = new Rope(hero.body, {x : 360, y : 200})

  //monster = new Monster(200,200,0);

  for(var i = 0; i <= height; i = i + 30){
    blockStack1.push(new Block(660, i, 30, 30));
  }
  for(var e = 0; e <= height - 100; e = e + 30){
    blockStack2.push(new Block(740, e, 30, 30));
  }
  for(var r = 0; r <= height-200; r = r + 30){
    blockStack3.push(new Block(820, r, 30, 30));
  }
  for(var t = 0; t <= height + 10; t = t + 30){
    blockStack4.push(new Block(900, t, 30, 30));
  }
}

function draw() {
  background(sky);
  Engine.update(engine);
  //console.log(mouseX , mouseY);

  ground.display();
  rope.display();
  hero.display();
  //monster.display();
  for(var b1 = 1; b1 < blockStack1.length; b1++){
    blockStack1[b1].display();
  }
  for(var b2 = 1; b2 < blockStack2.length; b2++){
    blockStack2[b2].display();
  }
  for(var b3 = 1; b3 < blockStack3.length; b3++){
    blockStack3[b3].display();
  }
  for(var b4 = 1; b4 < blockStack4.length; b4++){
    blockStack4[b4].display();
  }
}
function mouseDragged(){
  if(mouseY > 175){
    Matter.Body.setPosition(hero.body, {x : mouseX , y : mouseY});
    Matter.Body.setVelocity(hero.body, {x : 0, y : 0});
    Matter.Body.scale(monster.body, {x:0.5,y:0.5})
  }
}
function mouseReleased(){
  
}
