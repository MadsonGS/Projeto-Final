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
var posX = []
var posY = []


function setup() 
{
  createCanvas(400, 500);
  
  for(i=0; i<20; i++)
  {
    posX[i] = random(0, 400)
    posY[i] = random(-200, 0)
  }
  
}

function draw() 
{
  
  background(0, 0, 0);
  textSize(20);
  fill(135,206,235);
  text("Vidas: "+vidas, 10, 60);
  text("Pontos: " + pontos, 10, 40);
  
  
  
  
  
  //Movimento do jogador
  
  if(keyIsDown(65) && x>=0) //Esquerda - A
  {
   x-=5 
  }
  if(keyIsDown(68) && x<=400) //Direita - D
  {
   x+=5 
  }
  if(keyIsDown(87) && y>=0) //Cima - W
  {
   y-=5 
  }
  if(keyIsDown(83) && y<=500) //Baixo - s
  {
   y+=5 
  }
  
  
  
  
  //Comida
  
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
  for(i=0; i<5; i++)
  {
    circle(posX[i], posY[i], 20, 20)
    posY[i] += 1.5*i
    
    if(posY[i] >= 500)
    {
      
      posY[i] = random(-200, -10)
      posX[i] = random(0, 400)
      
    }
    
  }
  
  
  
  
  
  //disparo
  
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
  
  
  
  //colisão
  
  if(dist(posX[i], posY[i], x, y)<18)
  {
    if ( colisao == false) 
    {
      corBranco = ! corBranco;
      posX[i] = random(0, 400)
      posY[i] = random(-200, -10)
      pontos+=5
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
  circle(200, 0, 50, 50) //inimigo
    
}
