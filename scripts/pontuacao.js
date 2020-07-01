class Pontuacao {
    constructor() {
        this.pontos = 0
    }

    exibe() {
        textAlign(RIGHT)
        fill("#fff")
        textSize(100)
        text(parseInt(this.pontos),width - 100, 100)
    }

    incrementa() {
        this.pontos += .2    
    }


}