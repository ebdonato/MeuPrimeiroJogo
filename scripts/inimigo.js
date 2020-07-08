class Inimigo extends Animacao {
    constructor(columnsSprite, linesSprite, imagem, posicaoXInicial, posicaoYInicial, largura, altura, larguraSprite, alturaSprite, numberOfSprite = 0) {
        super(columnsSprite, linesSprite, imagem, posicaoXInicial, posicaoYInicial, largura, altura, larguraSprite, alturaSprite, numberOfSprite)

        this.velocidade = 0
     
    }

    reset() {
        this.velocidade = 0
        this.x = this.xInicial
        this.y = this.ground
    }

    move() {
        this.x -= this.velocidade

    }

    aparece(posicao) {
        this.x = posicao
    }

    naoVisivel() {
        return this.x < -this.largura
    }
}