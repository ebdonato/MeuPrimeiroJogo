class Vidas {
    constructor(imagem, maximo, inicial) {
        this.maximo = maximo
        this.inicial = inicial
        this.quantidade = inicial
        this.imagem = imagem
        this.invencivel = false

        this.tamanho = 50
        this.margemX = 10
        this.margemY = 30
    }

    draw() {

        for (let i = 0; i < this.quantidade; i++) {

            image(this.imagem, (i + 1) * this.tamanho + i * this.margemX, this.margemY, this.tamanho, this.tamanho)

        }

    }

    estaInvencivel() {
        return this.invencivel
    }

    tornarInvencivel() {
        this.invencivel = true
        setTimeout(() => { this.invencivel = false }, 1000)
    }

    ganharVida() {
        console.log('ganharVida')
        if (this.quantidade < this.maximo) {
            this.quantidade++
        }
    }

    perderVida() {
        if (!this.estaInvencivel()) {
            this.quantidade--
            this.tornarInvencivel()

        }
    }

}