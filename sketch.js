let imagemFundo
let imagemPersonagem
let cenario
let somJogo
let personagem

function preload() {
  imagemFundo = loadImage('assets/floresta.png')
  imagemPersonagem = loadImage('assets/correndo.png')
  somJogo = loadSound('assets/trilha_jogo.mp3')
}

function setup() {
  createCanvas(windowWidth, windowHeight)
  cenario = new Cenario(imagemFundo, 2)
  personagem = new Personagem(imagemPersonagem)
  frameRate(40)
  somJogo.loop() 
  
}

function draw() {
  cenario.exibe()
  cenario.move()
  personagem.exibe()
  
}