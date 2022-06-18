class Abertura {
    constructor(aberturaInfo) {
        this.imagem = aberturaInfo.imagem
        this.altura = aberturaInfo.altura
        this.largura = aberturaInfo.largura
        this.fonte = aberturaInfo.fonte

        this.botao = createButton("Iniciar")
    }

    draw() {
        this._fundo()
        this._texto()
        this._botao()
    }

    _fundo() {
        image(this.imagem, 0, 0, this.largura, this.altura)
    }

    _texto() {
        fill(0)
        strokeWeight(2)
        stroke(245, this.opacity)
        textAlign(CENTER)
        textSize(50)
        textFont(this.fonte)
        text("Meu Primeiro Jogo", this.largura / 2, this.altura / 3)
        textSize(150)
        text("Bruxinha Linda", this.largura / 2, (this.altura / 5) * 3)
        //textFont('Georgia')
    }

    _botao() {
        this.botao.position(this.largura / 2, (this.altura / 7) * 5)
        this.botao.center("horizontal")
        this.botao.addClass("botao-tela-inicial")
        this.botao.mousePressed(() => this.alteraCena())
    }

    alteraCena() {
        this.botao.remove()

        cenaAtual = "jogo"
    }
}
