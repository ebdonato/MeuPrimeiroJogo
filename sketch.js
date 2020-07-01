let cenario
let imagemCenario
let imagemGameOver

let personagem
let imagemPersonagem
let imagemInimigo
let imagemInimigoGrande
let imagemInimigoVoador

let somJogo
let somPulo

let pontuacao

let cenaJogo
let cenaInicial
let cenaAtual = "inicial"

let cenas

let botao

let vidas

let config

const inimigos = []

function preload() {
    imagemAbertura = loadImage('assets/telaInicial.png');
    imagemCenario = loadImage('assets/floresta.png')
    imagemGameOver = loadImage('assets/game-over.png')
    imagemPersonagem = loadImage('assets/correndo.png')
    imagemInimigo = loadImage('assets/gotinha.png')
    imagemInimigoGrande = loadImage('assets/troll.png')
    imagemInimigoVoador = loadImage('assets/gotinha-voadora.png')
    imagemVida = loadImage('assets/coracao.png')
    somJogo = loadSound('assets/trilha_jogo.mp3')
    somPulo = loadSound('assets/somPulo.mp3')

    config = loadJSON('config.json')
    console.log(config)

    fonteTelaInicial = loadFont('assets/fonteTelaInicial.otf');

}

function keyPressed() {
    cenaJogo.keyPressed(keyCode)

}

function setup() {
    createCanvas(windowWidth, windowHeight)

    cenaJogo = new Jogo()
    cenaJogo.setup()

    cenaInicial = new Abertura()

    cenas = {
        jogo: cenaJogo,
        inicial: cenaInicial
    }

    botao = new BotaoGerenciador("Iniciar", width/2,height/2)

    frameRate(40)
    somJogo.loop()
}

function draw() {

    cenas[cenaAtual].draw()

}