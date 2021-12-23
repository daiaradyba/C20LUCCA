var retfixo, retmovendo;
function setup() {
  createCanvas(800,400);
  retfixo = createSprite(200,200,50,50);
  retmovendo = createSprite(200,200,50,50);
}

function draw() {
  background(255,255,255);  
  retmovendo.x = World.mouseX;
  retmovendo.y = World.mouseY;
  if(retmovendo.x - retfixo.x<retmovendo.width/2+retfixo.width/2){
    retmovendo.shapeColor = "green";
    retfixo.shapeColor = "green";
  }
  else{
    retmovendo.shapeColor = "red";
    retfixo.shapeColor = "red";
  }
  
  drawSprites();
}
