function MatrizSpriteGenerator(colunas, linhas, largura, altura, qtd = 0) {

    this.linhas = linhas
    this.colunas = colunas
    this.largura = largura
    this.altura = altura
    this.length = qtd || (this.linhas * this.colunas)

    this.position = function (index) {

        const i = (index < 0 || index >= this.length) ? 0 : index

        return {
            y: Math.trunc(i / this.colunas) * this.altura,
            x: (i % this.colunas) * this.largura  // de 0 até colunas - 1 
        }
    }

}

// const c = 5
// const l = 6
// const lg = 400
// const al = 400 


// const a = new MatrizSpriteGenerator(c,l,lg,al,28)

// for (let i=0;i<a.length;i++) {
//     console.log(`${i}: ${a.position(i).x}, ${a.position(i).y}`)
// }