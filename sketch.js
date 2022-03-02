
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bg;
var stone,tree,apple1,apple2,apple3,apple4,apple5,apple6,apple7,apple8,apple9,apple10,apple11,apple12,apple13;
var sky,rightWall,leftWall;
var slingshot;

function setup() {
  createCanvas(windowWidth, windowHeight,400);

  engine = Engine.create();
  world = engine.world;
  
  sky = new Sky(windowWidth/2, 100, 2000, 2000);

  grass = new Grass(windowWidth/2, windowHeight-500, 2000, 1000);

  tree = new Tree(windowWidth-325, windowHeight-470, 500, 500);

  slingshot = new Slingshot(225, windowHeight-350, 500, 300);

  createApple();
}


function draw()
{
  background(51);
  Engine.update(engine);

  sky.display();
  grass.display();
  tree.display();
  apple1.display();
  apple2.display();
  apple3.display();
  apple4.display();
  apple5.display();
  apple6.display();
  apple7.display();
  apple8.display();
  apple9.display();
  apple10.display();
  apple11.display();
  apple12.display();
  apple13.display();
  slingshot.display();

}


function createApple()
{
  apple1 = new Apple(windowWidth-130, windowHeight-540, 75, 75);
  apple2 = new Apple(windowWidth-180, windowHeight-475, 75, 75);
  apple3 = new Apple(windowWidth-240, windowHeight-520, 75, 75);
  apple4 = new Apple(windowWidth-190, windowHeight-595, 75, 75);
  apple5 = new Apple(windowWidth-280, windowHeight-585, 75, 75);
  apple6 = new Apple(windowWidth-330, windowHeight-530, 75, 75);
  apple7 = new Apple(windowWidth-330, windowHeight-530, 75, 75);
  apple8 = new Apple(windowWidth-330, windowHeight-530, 75, 75);
  apple9 = new Apple(windowWidth-340, windowHeight-650, 75, 75);
  apple10 = new Apple(windowWidth-380, windowHeight-585, 75, 75);
  apple11 = new Apple(windowWidth-440, windowHeight-530, 75, 75);
  apple12 = new Apple(windowWidth-460, windowHeight-610, 75, 75);
  apple13 = new Apple(windowWidth-510, windowHeight-500, 75, 75);

}
