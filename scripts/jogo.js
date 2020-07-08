class Jogo {
    constructor(cenarioInfo, personagemInfo, vidasInfo) {
        this.inimigoAtual = 0
        
        this.mapa = config.mapa

        this.cenarioInfo = cenarioInfo

        this.personagemInfo = personagemInfo

        this.vidasInfo = vidasInfo

        this.inimigos = []

        this.botao = createButton("Jogar Novamente")

    }

    setup() {
        this.cenario = new Cenario(this.cenarioInfo)
        
        this.personagem = new Personagem(
            this.personagemInfo.linhas,
            this.personagemInfo.colunas,
            this.personagemInfo.imagem,
            this.personagemInfo.x,
            this.personagemInfo.y,
            this.personagemInfo.largura,
            this.personagemInfo.altura,
            this.personagemInfo.larguraSprite,
            this.personagemInfo.alturaSprite,
            this.personagemInfo.som)

        this.pontuacao = new Pontuacao()
        
        this.vidas = new Vidas(this.vidasInfo.imagem, this.vidasInfo.maxima, this.vidasInfo.inicial)
    }

    adicionaInimigo(columnsSprite, linesSprite, imagem, posicaoXInicial, posicaoYInicial, largura, altura, larguraSprite, alturaSprite, numberOfSprite = 0) {
    
        const inimigo = new Inimigo(columnsSprite, linesSprite, imagem, posicaoXInicial, posicaoYInicial, largura, altura, larguraSprite, alturaSprite, numberOfSprite)

        this.inimigos.push(inimigo)
    }

    draw() {
        this.cenario.exibe()
        this.cenario.move()

        this.vidas.draw()

        this.personagem.exibe()
        this.personagem.aplicaGravidade()

        this.pontuacao.exibe()
        this.pontuacao.incrementa()

        if (this.pontuacao.pontos % 200 < 0.2) {
            this.vidas.ganharVida()
        }

        const linhaAtualMapa = this.mapa[this.inimigoAtual]
        const inimigo = this.inimigos[linhaAtualMapa.inimigo]
        inimigo.velocidade = linhaAtualMapa.velocidade + this.pontuacao.pontos / 10

        inimigo.exibe()
        inimigo.move()

        if (this.personagem.estaColidindo(inimigo)) {
            console.log("d'oh!")
            this.vidas.perderVida()

            if (this.vidas.quantidade < 0) {
                image(imagemGameOver, this.cenarioInfo.largura / 2 - 206, this.cenarioInfo.altura / 2 - 39)
                noLoop()
                somJogo.stop()

                this.botao.show()
                this.botao.position(this.cenarioInfo.largura / 2, this.cenarioInfo.altura / 7 * 5)
                this.botao.center('horizontal')
                this.botao.addClass('botao-tela-inicial')
                this.botao.mousePressed(() => this.reset())

            }
        }

        if (inimigo.naoVisivel()) {

            this.inimigoAtual++


            if (this.inimigoAtual >= this.mapa.length) {
                this.inimigoAtual = 0
            }

            this.inimigoAtual = Math.floor(Math.random() * this.mapa.length)

            inimigo.aparece(this.cenarioInfo.largura)

        }
    }

    reset() {
    
        this.personagem.reset()

        this.inimigos.forEach(inimigo => inimigo.reset())

        this.pontuacao.reset()

        this.vidas.reset()

        this.botao.hide()

        loop()


    }

    keyPressed() {
        
            this.personagem.pula()
      
    }

}