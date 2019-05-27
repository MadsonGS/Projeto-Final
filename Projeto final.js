var x = 200;
var y = 450;
var xi = 50;
var yi = -10;
var xt;
var yt;
var tiro = false;
var colisao = false;
var vidas = 5;
var fome = 600;
var saude = 100
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
  
  //texto de tela
  
  background(0, 0, 0);
  textSize(20);
  fill(135,206,235);
  text("Vidas: "+vidas, 10, 60);
  text("Fome: " + fome, 10, 40);
  text("Saúde; " + saude, 10, 20)
  
  
  
  
  
  //Movimento do jogador
  
  if(keyIsDown(65) && x>=0) //Esquerda - A
  {
   x-=6 
  }
  if(keyIsDown(68) && x<=400) //Direita - D
  {
   x+=6
  }
  if(keyIsDown(87) && y>=0) //Cima - W
  {
   y-=6
  }
  if(keyIsDown(83) && y<=500) //Baixo - s
  {
   y+=6
  }
  
  
  
  
  //Comida
  
  
for(i=0; i<5; i++)
{
  if (i%2 == 0) 
{
  fill(255, 0 , 0);
  circle(posX[i], posY[i], 20, 20) 
}

if(i%2 != 0)
{
  fill(0,255,0);
  circle(posX[i], posY[i], 20, 20)
}
    posY[i] += 1.5*i //Velocidade
    
    if(posY[i] >= 500)
    {
      
      posY[i] = random(-200, -10)
      posX[i] = random(0, 400)
      
      
    }
    
  }
  
  //Fome
  
  fome--
  
  
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
  
  
  
  
  for(i=0; i<5; i++)
  {
    //Quando colidir com o alvo desejado ganha pontos
    
    if(i%2 == 0)
    {
      if(dist(x, y, posX[i], posY[i])<=20)
    
      {
        if ( colisao == false) 
        {
          
          posX[i] = random(0, 400)
          posY[i] = random(-200, -10)
          corBranco = !corBranco;
          fome+=100
          colisao = true;
          
        }
    
      }
      else 
      {
        colisao = false;
      }
    }
    
    //Quando colidir com o alvo não dejesado perde vida
    
    if(i%2 != 0)
    {
      if(dist(x, y, posX[i], posY[i])<=20)
    
      {
        if ( colisao == false) 
        {
          posX[i] = random(0, 400)
          posY[i] = random(-200, -10)
          corBranco = !corBranco;
          saude-= 5
          colisao = true;
      
        }
    
      }
      else 
      {
        colisao = false;
      }
    }
  }
  
  
  
if (i%2 == 0 && corBranco) 
{
  fill(0, 0, 255);
}
else 
{
  if(i%2 != 0 && corBranco)
  {
   fill(255,0,0);
  }
  else
  {
    fill(0, 255, 0)
  }
}

  
//Fome

  
  
//Objetos
  
circle(x, y, 20, 20) //corpo do jogador
circle(xt, yt, 4, 4) //corpo do tiro
circle(200, 0, 50, 50) //inimigo
    
}
