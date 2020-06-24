let imagemFundo
let imagemPersonagem
let cenario
let somJogo
let somPulo
let personagem
let imagemInimigo
let inimigo

function preload() {
    imagemFundo = loadImage('assets/floresta.png')
    imagemPersonagem = loadImage('assets/correndo.png')
    imagemInimigo = loadImage('assets/gotinha.png')
    somJogo = loadSound('assets/trilha_jogo.mp3')
    somPulo = loadSound('assets/somPulo.mp3')
}

function keyPressed() {
    if (keyCode === UP_ARROW) {
        personagem.pula()
    }

}

function setup() {
    createCanvas(windowWidth, windowHeight)
    cenario = new Cenario(imagemFundo, 2)
    personagem = new Personagem(4, 4, imagemPersonagem, 0, 110, 135, 220, 270, somPulo)
    inimigo = new Inimigo(4, 7, imagemInimigo, width - 52, 52, 52, 104, 104)
    frameRate(40)
    somJogo.loop()
}

function draw() {
    cenario.exibe()
    cenario.move()
    personagem.exibe()
    personagem.aplicaGravidade()
    inimigo.exibe()
    inimigo.move()

    if (personagem.estaColidindo(inimigo)) {
        noLoop()
    }

}