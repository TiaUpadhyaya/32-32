const Engine = Matter.Engine;
 const World = Matter.World; 
 const Bodies = Matter.Bodies;
 const Constraint = Matter.Constraint;
var a;
var ground,stand,b1,b2,b3,b4,b5,b6,b7,b8,b9,b10;
var b11,b12,b13,b14,b15,b16;
var polygon; 
var score = 0;
var circles=[];

function preload() {
  polygonImg = loadImage("polygon.png");
}

function setup() {
  createCanvas(1000,800);
  engine = Engine.create();
  world = engine.world;
  
  polygon =Bodies.circle(50,200,20);
  World.add(world,polygon);
  
  stroke(255)
  
  ground= new Ground(500,750,1000,20);
  stand= new Ground(390,285,450,20);
  slingShot = new Slingshot(this.polygon,{x:100,y:200});
 
  
  //1
  b1 = new Box(300,275,30,40);
  b2 = new Box(330,275,30,40);
  b3 = new Box(360,275,30,40);
  b4 = new Box(390,275,30,40);
  b5 = new Box(420,275,30,40);
  b6 = new Box(450,275,30,40);
  b7 = new Box(480,275,30,40);
  //2
  b8 = new Box(330,235,30,40);
  b9 = new Box(360,235,30,40);
  b10 = new Box(390,235,30,40);
  b11 = new Box(420,235,30,40);
  b12 = new Box(450,235,30,40);
  //3
  b13 = new Box(360,195,30,40);
  b14 = new Box(390,195,30,40);
  b15 = new Box(420,195,30,40);
  //top
  b16 = new Box(390,155,30,40);

  a=height;
  circles.push(width/2)
}

function draw() {
  //camera.zoom=camera.zoom+1
  background(0);  
  Engine.update(engine);
  fill("pink");
  textSize(20);
  text ("Score:"+score,200,20);
  strokeWeight(4);
 
  imageMode(CENTER)
  image(polygonImg,polygon.position.x,polygon.position.y,40,40);
 ground.display();
 stand.display();
 slingShot.display();
 b1.display();
 b2.display();
 b3.display();
 b4.display();
 b5.display();
 b6.display();
 b7.display();
 b8.display();
 b9.display();
 b10.display();
 b11.display();
 b12.display();
 b13.display();
 b14.display();
 b15.display();
 b16.display();
 b1.score();
 b2.score();
 b3.score();
 b4.score();
 b5.score();
 b6.score();
 b7.score();
 b8.score();
 b9.score();
 b10.score();
 b11.score();
 b12.score();
 b13.score();
 b14.score();
 b15.score();
 b16.score();

  a=a-1;
  for (i=0;i<circles.length;i++)
{
	circle(circles[i], height/2,20)
}
if(camera.position.x%width===0)
{
	circles.push(camera.position.x+width/2)
}
 
 drawSprites();
}

function keyPressed ()
{
  if(keyCode === RIGHT_ARROW)
  {
  }
} 

function keyPressed ()
{
  if(keyCode === 32)
  {
    slingShot.attach(this.polygon);
  }
} 
function mouseDragged(){
  Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingShot.fly();
}
