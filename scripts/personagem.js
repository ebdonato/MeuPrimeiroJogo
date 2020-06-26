class Personagem extends Animacao {
    constructor(columnsSprite, linesSprite, imagem, posicaoXInicial, posicaoYInicial, largura, altura, larguraSprite, alturaSprite, somPulo) {
        super(columnsSprite, linesSprite, imagem, posicaoXInicial, posicaoYInicial, largura, altura, larguraSprite, alturaSprite)

        this.velocidadePulo = 0
        this.gravidade = 3

        this.somPulo = somPulo

        this.maximoPulos = 2
        this.quantidadePulos = 0

    }

    pula() {
        if (this.quantidadePulos < this.maximoPulos) {
            this.velocidadePulo = -30
            somPulo.play()
            this.quantidadePulos++
        }
    }

    aplicaGravidade() {
        this.y += this.velocidadePulo
        this.velocidadePulo += this.gravidade

        if (this.y > this.ground) {
            this.y = this.ground
            this.quantidadePulos = 0
        }
    }
}