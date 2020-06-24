class Animacao {
    constructor(columnsSprite, linesSprite, imagem, posicaoXInicial, largura, altura, larguraSprite, alturaSprite) {
        this.imagem = imagem
        this.linesSprite = linesSprite
        this.columnsSprite = columnsSprite
        this.matriz = new MatrizSpriteGenerator(columnsSprite, linesSprite, larguraSprite, alturaSprite)
        this.largura = largura
        this.altura = altura
        this.x = posicaoXInicial
        this.ground = height - altura
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
        const colisao = collideRectRect(
            this.x,
            this.y,
            this.largura * precisao,
            this.altura * precisao,
            algo.x,
            algo.y,
            algo.largura * precisao,
            algo.altura * precisao,
        )

        return colisao
    }

}