class Inimigo extends Animacao {
    constructor(columnsSprite, linesSprite, imagem, posicaoXInicial, largura, altura, larguraSprite, alturaSprite) {
        super(columnsSprite, linesSprite, imagem, posicaoXInicial, largura, altura, larguraSprite, alturaSprite)

        this.velocidade = 10
    }

    move() {
        this.x -= this.velocidade

        if (this.x < -this.largura) {
            this.x = width
        }

    }
}