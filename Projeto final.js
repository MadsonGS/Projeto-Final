var x = 200;
var y = 450;
var xi = 50;
var yi = -10;
var xt;
var yt;
var tiro = false;
var colisao = false;
var vidas = 5;
var pontos = 0;
var corBranco;


function setup() 
{
  createCanvas(400, 500);
  
}

function draw() 
{
  
  background(0, 0, 0);
  textSize(20);
  fill(135,206,235);
  text("Vidas: "+vidas, 10, 60);
  text("Pontos: " + pontos, 10, 40);
  
  if(keyIsDown(65) && x>=0) //a
  {
   x-=5 
  }
  if(keyIsDown(68) && x<=400) //d
  {
   x+=5 
  }
  if(keyIsDown(87) && y>=0) //w
  {
   y-=5 
  }
  if(keyIsDown(83) && y<=500) //s
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
  if(dist(xi, yi, x, y)<18)
  {
    if ( colisao == false) 
    {
      corBranco = ! corBranco;
      yi = random(0, -20)
      xi = random(0, 400)
      vidas-=1
       colisao = true;
    }
  }
  else 
  {
    colisao = false;
  }
  if ( corBranco ) 
  {
   fill(255);
 }
 else 
 {
   fill(255,0,0);
 }
  
  
  circle(x, y, 16, 16) //corpo do jogador
  circle(xt, yt, 4, 4) //corpo do tiro
  rect(xi, yi, 20, 20) //inimigo
    
}
