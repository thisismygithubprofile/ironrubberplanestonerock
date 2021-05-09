const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    rubber = new Rubber(900,450,70)
    iron = new Iron(300,350)
    stone1 = new Stone(100,100,10)
    stone2  = new Stone(200,200,13)
    stone3 = new Stone(300,300,16)
    stone4  = new Stone(400,400,11)


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
rubber.display();
iron.display();  
stone1.display();
stone2.display();
stone3.display();
stone4.display();  
 
}