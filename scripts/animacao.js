class Animacao {
    constructor(columnsSprite, linesSprite, imagem, posicaoXInicial, posicaoYInicial, largura, altura, larguraSprite, alturaSprite, numberOfSprites = 0) {
        this.imagem = imagem
        this.linesSprite = linesSprite
        this.columnsSprite = columnsSprite
        this.matriz = new MatrizSpriteGenerator(columnsSprite, linesSprite, larguraSprite, alturaSprite, numberOfSprites)
        this.largura = largura
        this.altura = altura
        this.x = posicaoXInicial
        this.xInicial = posicaoXInicial
        this.yInicial = posicaoYInicial
        this.ground = height - altura - posicaoYInicial
        this.y = this.ground
        this.larguraSprite = larguraSprite
        this.alturaSprite = alturaSprite

        this.frameAtual = 0
    }

    exibe() {

        const posicaoSprite = this.matriz.position(this.frameAtual)

        image(this.imagem, this.x, this.y, this.largura, this.altura, posicaoSprite.x, posicaoSprite.y, this.larguraSprite, this.alturaSprite)

        this.anima()

    }

    anima() {
        this.frameAtual++

        if (this.frameAtual >= this.matriz.length - 1) {
            this.frameAtual = 0
        }

    }

    estaColidindo(algo) {
        const precisao = .7

        const colisao = collideCircleCircle(
            this.x + this.largura / 2,
            this.y + this.altura / 2,
            (this.altura > this.largura ? this.altura : this.largura) * precisao,
            algo.x + algo.largura / 2,
            algo.y + algo.altura / 2,
            (algo.altura > algo.largura ? algo.altura : algo.largura) * precisao
        )

        return colisao
    }

}