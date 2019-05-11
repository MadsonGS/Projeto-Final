var x = 200;
var y = 450;
var xi = 50;
var yi = -10;
var xt;
var yt;
var tiro = false;

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
  
  if(yi<520) //enemy
  {
    yi+=5
    if(yi > 500)
    {
      yi = -10
      xi = random(0, 400)
    }
    if(dist(yi, y) <= 10)
    {
     yi = -10 
    }
  }
  
  if(keyIsDown(17) && (!tiro)) //condição para disparar
  {
    tiro = true //tiro
    yt = y
    xt = x
  }
    if(tiro)
    {
    
     yt-=7
    
      if(yt < 0)
      {
       tiro = false
      }
    
    }
  circle(x, y, 15, 15) //corpo do jogador
  circle(xt, yt, 4, 4) //corpo do tiro
  rect(xi, yi, 10, 10) //inimigo
    
}
  
