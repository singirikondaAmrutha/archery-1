const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
  class ComputerBase{
    constructor(x,y,width,height){
     var options = {
       isStatic:true};
    
    
    this.body = Bodies.rectangle(x,y,width,height,option);
    this.width = width;
    this.height = height;
    this.image = loadImage("./assrts/base2.png");
    
    
    world.add(wold, this.body);
    }


 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

  class ComputerBase{
    constructor(x,y,width,height){
     var options = {
       isStatic:true};
    
    
    this.body = Bodies.rectangle(x,y,width,height,option);
    this.width = width;
    this.height = height;
    this.image = loadImage("./assrts/base2.png");
    
    
    world.add(wold, this.body);
    }

    playerBase = new PlayerBase(300,random(450,heiht-300),180,150);
    player = new Player(285,playerBase.body.position.y-153,50,180);

}
