var screen = 0;
var y=-20;
var x=200;
var speed = 2;
var score= 0;

function setup() {
  createCanvas(600, 400);
}

function draw() {
	if(screen == 0){
    startScreen()
  }else if(screen == 1){
  	gameOn()
  }else if(screen==2){
  	endScreen()
  }	
}

function startScreen(){
		background(floresta)
		fill(30,600,20)
		textAlign(CENTER);
		text('Proteja a Floresta', width / 2, height / 2)
		text('Pressione Para Começar', width / 2, height / 2 + 20);
		reset();
}

function gameOn(){
	background(floresta)
  text("Pontos = " + score, 30,20)
  image(fogo,x,y,20,20)
  rectMode(CENTER)
  image(balde,mouseX,height-25,50,30)
	y+= speed;
  if(y>height){
  	screen =2
	 }
  if(y>height-10 && x>mouseX-40 && x<mouseX+40){
  	y=-20
    speed+= 0.5
    score+= 1
  }
	if(y==-20){
  	pickRandom();
  }
}

function pickRandom(){
	x= random(20,width-20)
}

function endScreen(){
        fill(500,200,0)
		background(queimada)
		textAlign(CENTER);
		text('QUEIMOU!!!', width / 2, height / 2)
  	text("PONTOS = " + score, width / 2, height / 2 + 20)
		text('Pressione Para Tentar Novamente', width / 2, height / 2 + 40);
}

function mousePressed(){
	if(screen==0){
  	screen=1
  }else if(screen==2){
  	screen=0
  }
}

function reset(){
	  score=0;
  	speed=2;
  	y=-20;
}

function preload(){
  balde = loadImage("agua.png")
  fogo = loadImage("NaoFosforo.gif")
  floresta = loadImage("Floresta.png")
  queimada = loadImage("FlorestaFogo.jpg")
}

