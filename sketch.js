let imagemCenario
let imagemGameOver
let imagemPersonagem
let imagemInimigo
let imagemInimigoGrande
let imagemInimigoVoador
let somJogo
let somPulo
let config

let cenaJogo
let cenaAbertura
let cenaAtual = "inicial"
let cenas

function preload() {
    imagemAbertura = loadImage("assets/telaInicial.png")
    imagemCenario = loadImage("assets/floresta.png")
    imagemGameOver = loadImage("assets/game-over.png")
    imagemPersonagem = loadImage("assets/correndo.png")
    imagemInimigo = loadImage("assets/gotinha.png")
    imagemInimigoGrande = loadImage("assets/troll.png")
    imagemInimigoVoador = loadImage("assets/gotinha-voadora.png")
    imagemVida = loadImage("assets/coracao.png")
    somJogo = loadSound("assets/trilha_jogo.mp3")
    somPulo = loadSound("assets/somPulo.mp3")

    config = loadJSON("config.json")

    fonteTelaInicial = loadFont("assets/fonteTelaInicial.otf")
}

function keyPressed() {
    cenaJogo.keyPressed()
}

function setup() {
    const largura = windowWidth > 1366 ? 1366 : windowWidth

    const altura = Math.floor((9 / 16) * largura)

    createCanvas(largura, altura)
    console.log("🚀 ~ largura, altura", largura, altura)

    const cenarioInfo = {
        imagem: imagemCenario,
        velocidade: 2,
        largura: largura,
        altura: altura,
    }

    const aberturaInfo = {
        imagem: imagemAbertura,
        fonte: fonteTelaInicial,
        largura: largura,
        altura: altura,
    }

    const personagemInfo = {
        linhas: 4,
        colunas: 4,
        imagem: imagemPersonagem,
        x: 0,
        y: 30,
        largura: 110,
        altura: 135,
        larguraSprite: 220,
        alturaSprite: 270,
        som: somPulo,
    }

    const vidasInfo = {
        imagem: imagemVida,
        maxima: config.vidas.maxima,
        inicial: config.vidas.inicial,
    }

    cenaJogo = new Jogo(cenarioInfo, personagemInfo, vidasInfo)
    cenaJogo.setup()
    cenaJogo.adicionaInimigo(4, 7, imagemInimigo, width, 30, 52, 52, 104, 104)
    cenaJogo.adicionaInimigo(5, 6, imagemInimigoGrande, width, -25, 380, 380, 400, 400, 28)
    cenaJogo.adicionaInimigo(3, 6, imagemInimigoVoador, width, 200, 100, 75, 200, 150, 16)

    cenaAbertura = new Abertura(aberturaInfo)

    cenas = {
        jogo: cenaJogo,
        inicial: cenaAbertura,
    }

    frameRate(40)
    somJogo.loop()
}

function draw() {
    cenas[cenaAtual].draw()
}
