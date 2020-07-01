class Inimigo extends Animacao {
    constructor(columnsSprite, linesSprite, imagem, posicaoXInicial, posicaoYInicial, largura, altura, larguraSprite, alturaSprite, velocidade = 10, numberOfSprite = 0) {
        super(columnsSprite, linesSprite, imagem, posicaoXInicial, posicaoYInicial, largura, altura, larguraSprite, alturaSprite, numberOfSprite)

        this.velocidade = velocidade
     
        this.x = posicaoXInicial
    }

    move() {
        this.x -= this.velocidade

    }

    aparece() {
        this.x = width
    }

    naoVisivel() {
        return this.x < -this.largura
    }
}