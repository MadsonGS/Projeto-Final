//Madson Garcia da Silva

var x = 200;
var y = 450;
var xp = 200
var yp = 250
var xp2 = 200
var yp2 = -250
var colisao = false;
var fome = 500;
var peso = 100
var corBranco;
var posX = []
var posY = []
var tela = 0
var aux = 0    //Auxiliar para regeneração da peso
var nivel = 1
var n = 0
var gordo = []
var cont = 0
var contl = 0
var anima;



function preload() 
{
  
  //tela inicial
  obeso = loadImage('obeso.png');
  gordotela = loadImage('gordotela.png');
  forte = loadImage('forte.png');
  
  //jogador
  for(i=0; i<4; i++)
  {
  gordo[i] = loadImage('gordoa_'+i+'.png');
  }
  //pista
  pista = loadImage('pista.jpg');
  pista2 = loadImage('pista.jpg');
  
  //
  
  balança = loadImage('Peso.png');
  prato = loadImage('prato.png');
  
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
  
   if (tela == 0) 
   {
    
    background(0)
    imageMode(CENTER)
    image(gordotela, 200, 250)
    textSize(40)
    fill(0,255,0)
    textFont('Georgia')
    text("Pressione ENTER", 40, 370);
     
    if (keyIsDown(ENTER)) 
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
  
  
  if(nivel == 1 && n <= 820)
  {
  fill(0, 255, 0)  
  imageMode(CENTER)
  image(balança, 50, 30) //Figura da balança
  text("Peso: " + peso, 70, 35)
  
  imageMode(CENTER)
  image(prato, 250, 30)
  text("Fome: " + fome, 270, 39);
  }
  if(nivel == 2 && n <= 1820)
  {
  fill(0, 255, 0) 
  imageMode(CENTER)
  image(balança, 50, 30) //Figura da balança
  text("Peso: " + peso, 70, 35)
  }
  if(nivel == 3)
  {
  fill(0, 255, 0) 
  imageMode(CENTER)
  image(prato, 50, 30)
  text("Fome: " + fome, 70, 39);
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
  if(n <= 800)
  {
    posY[i] += 5
  }
  
  if(posY[i] <= 550 && posY[i] >= 0 && n > 800 && nivel == 1)
  {
    posY[i] += 5
  }
  if(nivel == 3)
  {
    posY[i]+=5
  }
  
  
  //Comida saudável
  
  if(i < 10 && nivel == 1 || i < 20 && nivel == 3) //Quantidade de inimigos de acordo com o nivel
  {
  
   
    
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
      if(n >= 1000 && n <= 1800)
      {
      posY[i] += 5
      }
      if(posY[i] <= 550 && posY[i] >= -5 && n > 1800)
      {
      posY[i] += 5
      }
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
    if(posY[i] >= 500 && nivel == 1 && n <= 800)
    {
      
      posY[i] = random(-2000, 0)
      posX[i] = random(0, 400)
      
    }
   if(posY[i] >= 500 && nivel == 2 && n <= 1800)
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
      if(dist(x, y, posX[i], posY[i])<=25)
      {
        if (colisao == false) 
        {
          
          posX[i] = random(0, 400)
          posY[i] = random(-2000, 0)
          corBranco = !corBranco;
          fome+=100
          colisao = true;
          
          if(peso > 100)
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
      
      if(dist(x, y, posX[i], posY[i])<=25)
      {
        if (colisao == false) 
        {
          posX[i] = random(0, 400)
          posY[i] = random(-2000, 0)
          corBranco = !corBranco;
          fome+=50
          peso+= 10
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
      if(dist(x, y, posX[i], posY[i])<=25)
      {
        if ( colisao == false) 
        {
          posX[i] = random(0, 400)
          posY[i] = random(-100, 0)
          corBranco = !corBranco;
          colisao = true;
          peso += 10
          fome+=50
        }
    
      }
      else 
      {
        colisao = false;
      }
    }
}

if(aux == 5 && peso > 100)
{
  peso-=5
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
    
if(n >= 1000) //nivel 2
{
  nivel = 2
}
if(n >= 2000) //nivel 3
{
  nivel = 3
}


//Objetos

anima = gordo[cont] 
imageMode(CENTER) 
image(anima, x, y)
//circle(x, y, 20, 20) //corpo do jogador

contl++
  if(contl > 7)
  {
    cont++
    contl = 0
  }
    
if(cont > 3)
{
  cont = 0
}
    
}

  
  
//Game Over
  
if(nivel == 1 && fome <= 0 || nivel == 1 && peso <= 0 || nivel == 2 && peso <=0 || nivel == 3 && fome <= 0)
{
  tela = 3
}
  if(tela == 3)
  {
    background(100)
    imageMode(CENTER)
    image(obeso, 200, 150)
    image(prato, 220, 180)
    image(refri, 160, 180)
    textSize(40)
    fill(0, 255, 0)
    text("Você Está Obeso!", 50, 250);
    textSize(20)
    text("Pressione Enter para tentar novamente", 30, 300);

    
    if (keyIsDown(ENTER)) 
    {
      
      //resetando tudo
      
      peso = 100
      fome = 500
      nivel = 1
      n = 0
      x = 200
      y = 450
      yp = 250
      yp2 = -250
      aux = 0
      
      for(i=0; i<20; i++)
      {
        posX[i] = random(0, 400)
        posY[i] = random(-1000, 0)
      }
      tela = 1
      console.log(tela)
    }
  }
  if(n >= 3000)
  {
    tela = 4
  }
  if(tela == 4)
  {
    background(100)
    imageMode(CENTER)
    image(forte, 200, 350)
    textSize(40)
    fill(0, 255, 0)
    text("Parabens!!", 100, 150);
    text("Você Emagreceu", 50, 250);
  }
}
