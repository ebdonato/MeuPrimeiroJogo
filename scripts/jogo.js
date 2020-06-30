class Jogo {
    constructor() {
        this.inimigoAtual = 0
        
    }

    setup() {
        cenario = new Cenario(imagemCenario, 2)
        personagem = new Personagem(4, 4, imagemPersonagem, 0, 30, 110, 135, 220, 270, somPulo)
        pontuacao = new Pontuacao()
        const inimigo = new Inimigo(4, 7, imagemInimigo, width, 30, 52, 52, 104, 104)
        const inimigoGrande = new Inimigo(5, 6, imagemInimigoGrande, width, 0, 200, 200, 400, 400, 0, 10, 28)
        const inimigoVoador = new Inimigo(3, 6, imagemInimigoVoador, width, 200, 100, 75, 200, 150, 0, 25, 16)
    
        inimigos.push(inimigo)
        inimigos.push(inimigoGrande)
        inimigos.push(inimigoVoador)
    }

    draw() {
        cenario.exibe()
        cenario.move()
    
        personagem.exibe()
        personagem.aplicaGravidade()
    
        pontuacao.exibe()
        pontuacao.incrementa()
    
        const inimigo = inimigos[this.inimigoAtual]
    
        inimigo.exibe()
        inimigo.move()
    
        if (personagem.estaColidindo(inimigo)) {
            console.log("d'oh!")
            image(imagemGameOver, width / 2 - 206, height / 2 - 39)
            noLoop()
        }
    
        if (inimigo.naoVisivel()) {
            
            console.log(`Inimigo ID: ${this.inimigoAtual}`)
            
            this.inimigoAtual++
    
    
            if (this.inimigoAtual >= inimigos.length) {
                this.inimigoAtual = 0
            }
    
            inimigo.velocidade = parseInt(random(10, 30))
    
        }
    }

    keyPressed(key) {
        if (key === UP_ARROW) {
            personagem.pula()
        }
    }

}