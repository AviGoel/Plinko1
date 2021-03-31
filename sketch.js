const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var particle=[];
var plinko=[];
var division=[];
var divisionHeight=300;
var ground;
var world,engine;
function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(480,800);
  ground=new Ground(240,790);
}

function draw() {
  background(255,255,255);
  Engine.update(engine);

    for(var k = 0; k<=width; k=k+80){
    division.push(new Division(k,height-divisionHeight/2, 10 ,divisionHeight));
  }
  
    for(var j = 40; j<=width; j=j+50){
    plinko.push(new Plinko(j,75));
  }
    for(var j = 15; j<=width; j=j+50){
      plinko.push(new Plinko(j,175));
    }
    for(var j =40; j<=width; j=j+50){
        plinko.push(new Plinko(j,275));
      }
    for(var j = 15; j<=width; j=j+50){
          plinko.push(new Plinko(j,375));
        }

    if(frameCount%60===0){
      particle.push(new Particle(random(width/2-10)(width/2+10),10,10));
    }


    ground.display();

    for(j=0;j<particle.length;j++){
      particle[j].display();
    }
    for(k=0;k<division.length;k++){
      division[k].display();
    }
    for(j=0;j<plinko.length;j++){
      plinko[j].display();
    }
  drawSprites();
}