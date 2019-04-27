let x = 50; //coordenada x do quadrado
let y = 175; //coordenada y do quadrado
let xe = 400; //coordenada x da elipse
let ye = 190; //coordenada y da elipse
var salto = false;
var yp = 0;
var contFrame = 0;

function setup() {
  createCanvas(400, 400);

}

function draw() {
  createCanvas(400, 400)
  if(y >= 0)
  {
    if(keyIsDown(87) && (! salto)){ //w  |salto|
    salto = true;
    contFrame = 0;
    }
    if (salto) {
		contFrame++; 
		
		yp = 0.25*(contFrame)*(contFrame - 37);
		
		if (yp > 0) { 
			salto = false;
			yp = 0;
        }
    }
  }
  if(x <= 365) // para o objeto não sair do cenario
  {
    if(keyIsDown(68)){ //d
    x += 3;
    }
  }
  if(x >= 0) // para o objeto não sair do cenario
  {
    if(keyIsDown(65)){ //a
     x -= 5;
    }
  }
  ellipse(xe, ye, 40, 40);

    if(xe >= -50)
    {
      xe-=2; //elipse se move na direção -x
    }
    if(xe == -50)
    {
      xe = 450; //elipse retorna para o inicio do cenário
    }
  rect(x, y + yp, 35, 35);
  line(0, 210, 400, 210);
}
  
