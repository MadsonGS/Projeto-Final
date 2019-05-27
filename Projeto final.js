var x = 200;
var y = 450;
var xi = 50;
var yi = -10;
var xt;
var yt;
var tiro = false;
var colisao = false;
var fome = 600;
var saude = 100
var corBranco;
var posX = []
var posY = []
var tela = 0
var aux = 0    //Auxiliar para regeneração da saúde
var aux1 = 0
var nivel = 1


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
  
  //Tela inicial
  
   if ( tela == 0) 
   {
    
    background(0)
    textSize(40)
    fill(1,206,235)
    text("Precione ENTER", 50, 370);
    if (keyIsDown(ENTER) ) {
       tela = 1 
    }
   }
  
  if(tela == 1)
  {
  
  //texto de tela
  
  background(0, 0, 0);
  textSize(20);
  fill(135,206,235);
  text("Fome: " + fome, 10, 40);
  text("Saúde: " + saude, 10, 20)
  text("Saúde: " + aux1 + " " + nivel, 10, 60)
  
  
  
  
  
  
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
  
  
for(i=0; i<20; i++)
{
  if(i<=5)
  {

    //Comida saudável
  
    if (i%2 == 0) 
    {
      fill(255, 0 , 0);
      circle(posX[i], posY[i], 20, 20) 
    }

    //Comida não saudável

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
    
    aux1++
    
    if(aux1 >= 15000) //Nivel 2
    {
      nivel = 2
    }    
  }
  if(i>5 && i <=7 && nivel == 2) //No nivel 2 aumenta a quantidade de objetos
  {
    
    //Comida saudável
  
    if (i%2 == 0) 
    {
      fill(255, 0 , 0);
      circle(posX[i], posY[i], 20, 20) 
    }

    //Comida não saudável

    if(i%2 != 0)
    {
      fill(0,255,0);
      circle(posX[i], posY[i], 20, 20)
    }
  
      posY[i] += i //Velocidade
    
      if(posY[i] >= 500)
      {
        posY[i] = random(-200, -10)
        posX[i] = random(0, 400)
      }
    
  }
  
  
}
  
  //Fome
  
  fome--  
  
  //colisão
  
  
  for(i=0; i<5; i++)
  {
    //Quando colidir com o alvo desejado ganha pontos
    
    if(i%2 == 0)
    {
      if(dist(x, y, posX[i], posY[i])<=30)
    
      {
        if ( colisao == false) 
        {
          
          posX[i] = random(0, 400)
          posY[i] = random(-200, -10)
          corBranco = !corBranco;
          fome+=100
          colisao = true;
          if(saude < 100)
          {
            aux++
          }
          
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
          fome+=50
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
if(aux == 5 && saude < 100)
{
  saude+=5
  aux = 0
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


  
  
//Objetos
  
circle(x, y, 20, 20) //corpo do jogador
circle(xt, yt, 4, 4) //corpo do tiro
circle(200, 0, 50, 50) //inimigo
}
  
  
//Game Over
  
if(fome <= 0 || saude <= 0)
{
  tela = 3
}
  if(tela == 3)
  {
    background(0)
    textSize(40)
    fill(1,206,235)
    text("Você morreu", 60, 250);
    if (keyIsDown(ENTER) ) 
    {
      //resetando tudo
      
      tela = 1
      fome = 600
      saúde = 100
      x = 200
      y = 450
      for(i=0; i<5; i++)
      {
        posX[i] = random(0, 400)
        posY[i] = random(-200, -10)
      }
      
      
    }
  }
}
