class MatrizSpriteGenerator {
    constructor(colunas, linhas, largura, altura, qtd = 0) {

        this.linhas = linhas
        this.colunas = colunas
        this.largura = largura
        this.altura = altura
        this.length = qtd || (this.linhas * this.colunas)


    }

    position(index) {

        const i = (index < 0 || index >= this.length) ? 0 : index

        return {
            y: Math.trunc(i / this.colunas) * this.altura,
            x: (i % this.colunas) * this.largura // de 0 até colunas - 1 
        }
    }
}