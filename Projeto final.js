var x = 200;
var y = 450;
var xp = 200
var yp = 250
var xp2 = 200
var yp2 = -250
var colisao = false;
var fome = 600;
var saude = 100
var corBranco;
var posX = []
var posY = []
var tela = 0
var aux = 0    //Auxiliar para regeneração da saúde
var nivel = 1
var n = 0



function preload() 
{
  //jogador
  gordo = loadImage('gordo .png');
  
  //pista
  pista = loadImage('pista.jpg');
  pista2 = loadImage('pista.jpg');
  
  //saudavel
  maça = loadImage('apple.png');
  banana = loadImage('banana.png');
  broc = loadImage('broc.png')
  uva = loadImage('uva.png')
  cenoura = loadImage('cenoura.png')
  
  //não saudavel
  pizza = loadImage('pizza.png');
  hotdog = loadImage('hotdog.png');
  refri = loadImage('refri.png');
  batata = loadImage('batata.png');
  bebida = loadImage('bebida.png');
  
  //nivel 2
  chocolate = loadImage('choc.png');
  chocolateb = loadImage('chocb.png');
  rosquinha = loadImage('rosq.png');
  biscoito = loadImage('bisco.png');
  bolo = loadImage('bolo.png');
  chocolate2 = loadImage('choc2.png');
  chocolate3 = loadImage('choc3.png');
  chocolate4 = loadImage('choc4.png');
  biscoito2 = loadImage('bisco2.png');
  chocolate5 = loadImage('choc5.png')
  
  //nivel 3
  maçav = loadImage('maçav.png');
  melancia = loadImage('melan.png');
  abacaxi = loadImage('abac.png');
  beringela = loadImage('berin.png');
  laranja = loadImage('laranja.png');
  
}



function setup() 
{
  createCanvas(400, 500);
  
  for(i=0; i<20; i++)
  {
    posX[i] = random(0, 400)
    posY[i] = random(-1000, 0)
  }
  
}

function draw() 
{
   if ( tela == 0) 
   {
    
    background(0)
    textSize(40)
    fill(1,206,235)
    textFont('Georgia')
    text("Pressione ENTER", 40, 370);
     
    if (keyIsDown(ENTER) ) 
    {
       tela = 1 
    }
   }
  
  if(tela == 1)
  {
  
  //texto de tela
  
  
  background(0, 0, 0);
  textSize(20);
  fill(135,206,235);
    
  //Imagem do cenario 
    
  image(pista2, xp2, yp2)
  image(pista, xp, yp)
  
  //movimento do cenario
  
  yp += 5
  yp2 += 5
  
  //reposicionando cenario
    
  if(yp >= 750)
  {
    yp = -250
  }
  if(yp2 >= 750)
  {
    yp2 = -250
  }
    
  if(yp )
  
  if(nivel == 1)
  {
  text("Fome: " + fome, 10, 40);
  text("Saúde: " + saude, 10, 20)
  }
  if(nivel == 2)
  {
  text("Saúde: " + saude, 10, 20)
  }
  if(nivel == 3)
  {
  text("Fome: " + fome, 10, 40);
  }
  
  
  
  
  
  
  
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

  //Comida saudável
  
  if(i < 10 && nivel == 1 || i < 25 && nivel == 3) //Quantidade de inimigos de acordo com o nivel
  {
  
   posY[i] += 5
    
  if (i%2 == 0 && nivel == 1 || i%2 == 0 && nivel == 3) 
  {
    fill(255, 0 , 0);
    //circle(posX[i], posY[i], 20, 20)
  
    //Figuras dos objetos
    
    if(i==4)
    {
    imageMode(CENTER)
    image(maça, posX[i], posY[i])
    }
    if(i==2)
    {
    imageMode(CENTER)
    image(banana, posX[i], posY[i])
    }
    if(i==0)
    {
    imageMode(CENTER)
    image(broc, posX[i], posY[i])
    }
    if(i==6)
    {
    imageMode(CENTER)
    image(uva, posX[i], posY[i])
    }
    if(i==8)
    {
    imageMode(CENTER)
    image(cenoura, posX[i], posY[i])
    }
    
    if(i==10)
    {
    imageMode(CENTER)
    image(maçav, posX[i], posY[i])
    }
    if(i==12)
    {
    imageMode(CENTER)
    image(laranja, posX[i], posY[i])
    }
    if(i==14)
    {
    imageMode(CENTER)
    image(abacaxi, posX[i], posY[i])
    }
    if(i==16)
    {
    imageMode(CENTER)
    image(beringela, posX[i], posY[i])
    }
    if(i==18)
    {
    imageMode(CENTER)
    image(melancia, posX[i], posY[i])
    }
  }
  

  //Comida não saudável

   if(i%2 != 0 && nivel == 1)
    {
    fill(0,255,0);
    //circle(posX[i], posY[i], 20, 20)
      
      //Figuras dos objetos
      
      if(i==3)
      {
      imageMode(CENTER)
      image(pizza, posX[i], posY[i])
      }
      if(i==1)
      {
      imageMode(CENTER)
      image(hotdog, posX[i], posY[i])
      }
      if(i==5)
      {
      imageMode(CENTER)
      image(refri, posX[i], posY[i])
      }
      if(i==7)
      {
      imageMode(CENTER)
      image(batata, posX[i], posY[i])
      }
      if(i==9)
      {
      imageMode(CENTER)
      image(bebida, posX[i], posY[i])
      }
    }
  }
  
     if(i >= 10 && i < 20 && nivel == 2) //objetos do nivel 2
    {
      posY[i] += 5
      fill(250)
      //circle(posX[i], posY[i], 20, 20)
      
      if(i==10)
      {
      imageMode(CENTER)
      image(chocolate, posX[i], posY[i])
      }
      if(i==11)
      {
      imageMode(CENTER)
      image(chocolateb, posX[i], posY[i])
      }
      if(i==12)
      {
      imageMode(CENTER)
      image(rosquinha, posX[i], posY[i])
      }
      if(i==13)
      {
      imageMode(CENTER)
      image(biscoito, posX[i], posY[i])
      }
      if(i==14)
      {
      imageMode(CENTER)
      image(bolo, posX[i], posY[i])
      }
      if(i==15)
      {
      imageMode(CENTER)
      image(chocolate2, posX[i], posY[i])
      }
      if(i==16)
      {
      imageMode(CENTER)
      image(chocolate3, posX[i], posY[i])
      }
      if(i==17)
      {
      imageMode(CENTER)
      image(chocolate4, posX[i], posY[i])
      }
      if(i==18)
      {
      imageMode(CENTER)
      image(biscoito2, posX[i], posY[i])
      }
       if(i==19)
      {
      imageMode(CENTER)
      image(chocolate5, posX[i], posY[i])
      }
      
   
      
  
    }
    if(posY[i] >= 500 && nivel == 1 && n < 100)
    {
      
      posY[i] = random(-2000, 0)
      posX[i] = random(0, 400)
      
    }
   if(posY[i] >= 500 && nivel == 2)
    {
      
      posY[i] = random(-100, 0)
      posX[i] = random(0, 400)
      
    }
  if(posY[i] >= 500 && nivel == 3)
    {
      
      posY[i] = random(-200, 0)
      posX[i] = random(0, 400)
      
    }
  }  


  
  //colisão
  
  
  
  for(i=0; i<20; i++)
  {

    //Quando colidir com o alvo desejado ganha pontos
    
    if(i%2 == 0 && i<10 && nivel == 1 || i%2 == 0 && i<10 && nivel == 3)
    {
      if(dist(x, y, posX[i], posY[i])<=20)
      {
        if (colisao == false) 
        {
          
          posX[i] = random(0, 400)
          posY[i] = random(-2000, 0)
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
    
    if(i%2 != 0 && i<10 && nivel == 1)
    {
      
      if(dist(x, y, posX[i], posY[i])<=20)
      {
        if (colisao == false) 
        {
          posX[i] = random(0, 400)
          posY[i] = random(-2000, 0)
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
    
    //colisão no nivel 2
    
    if(i>=10 && i<20 && nivel == 2 || i>=10 && i<20 && nivel == 3)
    {
      if(dist(x, y, posX[i], posY[i])<=20)
      {
        if ( colisao == false) 
        {
          
          posX[i] = random(0, 400)
          posY[i] = random(-100, 0)
          corBranco = !corBranco;
          colisao = true;
          saude -= 10
          fome+=50
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


//Fome
  
if(nivel == 1)
{
  fome--
}
if(nivel == 2)
{
  fome = 1000
}
if(nivel == 3)
{
  fome-= 2
}
   
n++ //ponto imaginario
    
if(n >= 200) //nivel 2
{
  nivel = 2
}
if(n >= 800) //nivel 3
{
  nivel = 3
}


//Objetos

circle(x, y, 20, 20) //corpo do jogador
    
  }
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
    text("Você Está Obeso!", 60, 250);
    text("Pressione 'Enter' para tentar novamente", 60, 300);
    if (keyIsDown(ENTER) ) 
    {
      //resetando tudo
      
      tela = 1
      fome = 600
      saúde = 100
      x = 200
      y = 450
      for(i=0; i<20; i++)
      {
        posX[i] = random(0, 400)
        posY[i] = random(-2000, 0)
      }
      
      
    }
  }

