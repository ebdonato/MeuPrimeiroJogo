class Pontuacao {
    constructor() {
        this.ponto = 0
    }

    exibe() {
        textAlign(RIGHT)
        fill("#fff")
        textSize(100)
        text(parseInt(this.ponto),width - 100, 100)
    }

    incrementa() {
        this.ponto += .2    
    }

}