class Inimigo extends Animacao {
    constructor(columnsSprite, linesSprite, imagem, posicaoXInicial, posicaoYInicial, largura, altura, larguraSprite, alturaSprite, delay = 0, velocidade = 10, numberOfSprite = 0) {
        super(columnsSprite, linesSprite, imagem, posicaoXInicial, posicaoYInicial, largura, altura, larguraSprite, alturaSprite, numberOfSprite)

        this.velocidade = velocidade
        this.delay = delay
        this.x = posicaoXInicial + delay
    }

    move() {
        this.x -= this.velocidade

        if (this.x < -this.largura - this.delay - 100) {
            this.x = width
        }

        //TODO melhorar como e qunado o inimigo volta para a posicão inicial

    }

    naoVisivel() {
        return this.x < -this.largura
    }
}