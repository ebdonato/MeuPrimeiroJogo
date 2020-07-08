class Cenario {

    constructor(cenarioInfo) {
        this.imagem = cenarioInfo.imagem
        this.velocidade = cenarioInfo.velocidade
        this.x1 = 0
        this.x2 = cenarioInfo.largura
        this.altura = cenarioInfo.altura
        this.largura = cenarioInfo.largura

    }

    exibe() {
        image(this.imagem, this.x1, 0, this.largura, this.altura)
        image(this.imagem, this.x2, 0, this.largura, this.altura)
    }

    move() {
        this.x1 -= this.velocidade
        this.x2 -= this.velocidade

        if (this.x1 < -this.largura) {
            this.x1 = this.largura
        }

        if (this.x2 < -this.largura) {
            this.x2 = this.largura
        }

    }

}