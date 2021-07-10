const Engine= Matter.Engine;
const Bodies= Matter.Bodies;
const World =Matter.World;
var drops=[]
var maxdrops=100;
var world,engine;
function preload(){
    thunder1 =loadImage("./images/thunderbolt/1.png");
    thunder2 = loadImage("./images/thunderbolt/2.png");
    thunder3 = loadImage("./images/thunderbolt/3.png");
    thunder4 = loadImage("./images/thunderbolt/4.png");
}

function setup(){
   createCanvas(600,600);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);

 //   drop1= new Drop(300,300,30);
 if(frameCount % 250 ===0){
    for(var i=0; i<maxdrops; i++){
        drops.push(new Drop(random(0,400), random(0,400)));
    }
 }
 umbrellaObj = new Umbrella(300,450);
  
}

function draw(){
    background("black");
    Engine.update(engine);

   var rand = Math.round(random(1,4));
   console.log(rand)
   if(frameCount %100 === 0){
     thunder = createSprite(random(50,550), random(10,50), 50,50)
     var rn = Math.round(random(1,2));
     if(rn===1){
     thunder.velocityX=-25;
     }
     else{
      thunder.velocityX=25; 
     }
      switch(rand){
         case 1: thunder.addImage(thunder1)
         break;
         case 2: thunder.addImage(thunder2);
         break;
         case 3: thunder.addImage(thunder3);
         break;
         case 4: thunder.addImage(thunder4);
         break;
         default: break;
      }
      thunder.scale= random(0.3, 0.6)
   }



 //   drop1.display();
 for(var i = 0; i<maxdrops; i++){
    drops[i].display();
    drops[i].updateY()
    
}
umbrellaObj.display()
drawSprites();
}   

