function MatrizSpriteGenerator(colunas, linhas, largura, altura) {

    this.linhas = linhas
    this.colunas = colunas
    this.largura = largura
    this.altura = altura
    this.length = this.linhas * this.colunas

    this.position = function (index) {

        const i = (index < 0 || index >= this.length) ? 0 : index

        return {
            y: Math.trunc(i / this.colunas) * this.altura, 
            x: (i % this.colunas) * this.largura  // de 0 até colunas - 1 
        }
    }

}

// const c = 4
// const l = 4
// const lg = 220
// const al = 270 


// const a = new MatrizSpriteGenerator(c,l,lg,al)

// for (let i=0;i<a.length;i++) {
//     console.log(`${i}: ${a.position(i).x}, ${a.position(i).y}`)
// }