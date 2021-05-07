const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var drops = [];
var maxDrops =100;
var thunderF =0;
function preload(){
    thunder1 = loadImage("images/thunderbolt/1.png");
    thunder2 = loadImage("images/thunderbolt/2.png");
    thunder3 = loadImage("images/thunderbolt/3.png");
    thunder4 = loadImage("images/thunderbolt/4.png");
}

function setup(){
    createCanvas(1300, 700);
	engine = Engine.create();
	world = engine.world;
    umbrella = new Umbrella(200,500)
    if (frameCount%150===0){
        for(var i =0;i<maxDrops;i++){
            drops.push(new Drop(random(0,400),random(0,400)));
        }
    }
}

function draw(){
    Engine.update (engine);
    background(0);
    rand = Math.round(random(1,4));
    
}   

