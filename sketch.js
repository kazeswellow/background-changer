var box;

function setup() {
  createCanvas(400,400);
  box=createSprite(200,200,30,30);
}

function draw() 
{
  background("lightgreen");

  if(keyIsDown(UP_ARROW)){
    box.y=box.y-10;
    background("blue");
  }

  if(keyIsDown(DOWN_ARROW)){
    box.y=box.y+10;
    background("yellow");
  }

  if(keyIsDown(LEFT_ARROW)){
    box.x=box.x-10;
    background("green");
  }

  if(keyIsDown(RIGHT_ARROW)){
    box.x=box.x+10;
    background("red");
  }

  drawSprites();
}