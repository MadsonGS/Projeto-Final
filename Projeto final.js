var x = 200
var y = 450
var xi = 20
var yi = -10
function setup() 
{
  createCanvas(400, 500);
  
}

function draw() 
{
  background(0, 0, 0);
  if(keyIsDown(65) && x>=0) //a
  {
   x-=5 
  }
  if(keyIsDown(68) && x<=365) //d
  {
   x+=5 
  }
  if(keyIsDown(87) && y>=0) //w
  {
   y-=5 
  }
  if(keyIsDown(83) && y<=465) //s
  {
   y+=5 
  }
  if(yi<400)
  {
    yi+=5
  }
   random(rect(xi, yi, 10, 10))

  rect(x, y, 30, 30)
}

