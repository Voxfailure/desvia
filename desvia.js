var mosca
var aranha
var sangue
var gameoverIMG
var sangueIMG , moscaIMG , aranhaIMG
var sanguegrup
var aranhagroup

var play=1;
var end=0;
var gamestate=1;

function preload(){

 moscaIMG= loadImage("moscaIMG.png");
 aranhaIMG = loadImage("aranhaIMG.png");
 sangueIMG = loadImage("sangueIMG.png");
 gameoverIMG = loadImage("gameoverIMG.png");









}

function setup() {
 
    createCanvas(600, 600);
  

   mosca=createSprite(40,200,20,20);
   mosca.addImage(moscaIMG);
   mosca.scale=0.7
  
  mosca.setCollider("rectangle",0,0,40,40);

  score=0;
  sanguegrup=createGroup();
  aranhagroup=createGroup();
}

function draw() {
    background("lightblue");
  
    if(gameState===PLAY){
      
      sangue();
      aranha();
      
      
      mosca.y=World.mouseY;
      mosca.x=World.mouseX;
    
      
      if(sanguegrup.isTouching(mosca)){
        sanguegrup.destroyEach();
         }
      else
      {
        
        if(aranhagroup.isTouching(mosca)){
          gameState=END;
             
          
          sanguegrup.destroyEach();
          aranhagroup.destroyEach();
          sanguegrup.setVelocityXEach(0);
          aranhagroup.setVelocityXEach(0);
          
          
         
  
          if(mosca.isTouching(sanguegrup)){
           score=score+1;
              
        }   
    }
}
                                   



drawSprites();
  //Exibir pontuação
  textSize(25);
  text("Score : "+ score,250,50);
}


function aranha(){
  if(World.frameCount%200===0){
    aranha=createSprite(400,200,20,20);
    aranha.y=Math.round(random(100,550));
    
    aranha.velocityX = -(8+(score/10));
    aranha.setLifetime=50;
    
    aranhagroup.add(aranha);
  }
}

function sangue(){
  if(World.frameCount%80===0){
    position = Math.round(random(1,2));
    sangue=createSprite(400,200,20,20);
    
     
    
    if(position==1)
    {
    sangue.x=600;
    
    sangue.velocityX=  -4(8+(score/10));
    }
    else
    {
      if(position==2){
      sangue.x=0;
      
     
      sangue.velocityX=  -4(8+(score/10));
      }
    }
    
    sangue.scale=0.2;
     

    
    sangue.y=Math.round(random(50,550));
   
    
    sangue.setLifetime=100;
    
    sanguegrup.add(sangue);
  }
}
}
