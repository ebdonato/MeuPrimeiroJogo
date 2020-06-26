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

const inimigos = []

function preload() {
    imagemCenario = loadImage('assets/floresta.png')
    imagemGameOver = loadImage('assets/game-over.png')
    imagemPersonagem = loadImage('assets/correndo.png')
    imagemInimigo = loadImage('assets/gotinha.png')
    imagemInimigoGrande = loadImage('assets/troll.png')
    imagemInimigoVoador = loadImage('assets/gotinha-voadora.png')
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
    cenario = new Cenario(imagemCenario, 2)
    personagem = new Personagem(4, 4, imagemPersonagem, 0, 30, 110, 135, 220, 270, somPulo)
    pontuacao = new Pontuacao()
    const inimigo = new Inimigo(4, 7, imagemInimigo, width, 30, 52, 52, 104, 104)
    const inimigoGrande = new Inimigo(5, 6, imagemInimigoGrande, width, 0, 200, 200, 400, 400, 1000, 10, 28)
    const inimigoVoador = new Inimigo(3, 6, imagemInimigoVoador, width, 200, 100, 75, 200, 150, 3000, 25, 16)

    inimigos.push(inimigo)
    inimigos.push(inimigoGrande)
    inimigos.push(inimigoVoador)

    frameRate(40)
    //somJogo.loop()
}

function draw() {
    cenario.exibe()
    cenario.move()

    personagem.exibe()
    personagem.aplicaGravidade()

    pontuacao.exibe()
    pontuacao.incrementa()

    inimigos.forEach(inimigo => {
        inimigo.exibe()
        inimigo.move()

        if (personagem.estaColidindo(inimigo)) {
            console.log("d'oh!")
            image(imagemGameOver, width / 2 - 206, height / 2 - 39)
            noLoop()
        }
    }

    )

}