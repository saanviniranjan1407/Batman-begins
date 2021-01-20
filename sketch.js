const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var man;

function preload(){    
}

function setup(){ 
    var canvas = createCanvas(900,600);
    engine = Engine.create();
    world = engine.world;

    man = new Umbrella(150,400,10);
}

function draw(){  
    background(0,0,0);  

    man.display();
}