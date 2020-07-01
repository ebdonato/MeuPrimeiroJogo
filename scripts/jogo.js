class Jogo {
    constructor() {
        this.inimigoAtual = 0
        
        this.mapa = config.mapa

    }

    setup() {
        cenario = new Cenario(imagemCenario, 2)
        personagem = new Personagem(4, 4, imagemPersonagem, 0, 30, 110, 135, 220, 270, somPulo)
        pontuacao = new Pontuacao()
        const inimigo = new Inimigo(4, 7, imagemInimigo, width, 30, 52, 52, 104, 104)
        const inimigoGrande = new Inimigo(5, 6, imagemInimigoGrande, width, 0, 200, 200, 400, 400, 10, 28)
        const inimigoVoador = new Inimigo(3, 6, imagemInimigoVoador, width, 200, 100, 75, 200, 150, 25, 16)

        inimigos.push(inimigo)
        inimigos.push(inimigoGrande)
        inimigos.push(inimigoVoador)

        vidas = new Vidas(imagemVida, config.config.vidasMaxima, config.config.vidasInicial)
    }

    draw() {
        cenario.exibe()
        cenario.move()

        vidas.draw()

        personagem.exibe()
        personagem.aplicaGravidade()

        pontuacao.exibe()
        pontuacao.incrementa()

        if (pontuacao.pontos % 200 < 0.2) {
            vidas.ganharVida()
        }

        const linhaAtualMapa = this.mapa[this.inimigoAtual]
        const inimigo = inimigos[linhaAtualMapa.inimigo]
        inimigo.velocidade = linhaAtualMapa.velocidade + pontuacao.pontos / 10

        inimigo.exibe()
        inimigo.move()

        if (personagem.estaColidindo(inimigo)) {
            console.log("d'oh!")
            vidas.perderVida()

            if (vidas.quantidade < 0) {
                image(imagemGameOver, width / 2 - 206, height / 2 - 39)
                noLoop()
                somJogo.stop()

            }
        }

        if (inimigo.naoVisivel()) {

            console.log(`Inimigo ID: ${this.inimigoAtual}`)

            this.inimigoAtual++


            if (this.inimigoAtual >= this.mapa.length) {
                this.inimigoAtual = 0
            }


            inimigo.aparece()

        }
    }

    keyPressed(key) {
        if (key === UP_ARROW || key === 32) { // 32 é espaço
            personagem.pula()
        }
    }

}