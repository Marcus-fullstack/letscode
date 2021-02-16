const roupa = [];
const peca = "Calca jeans"
roupa.push(peca)
const peca1 = "Camisa Polo"
console.log(roupa)
roupa.push(peca1)
console.log(roupa)
console.log(roupa.length)
class Vestuario {
    constructor(roupas, calcados) {
        this.roupas = {};
        this.calcados = calcados;
    }
}
class Estacao extends Vestuario {
    constructor(roupas, tipos, estacao) {
        super(roupas, tipos)
        this.estacao = estacao;
    }
}
class Pecas extends Estacao {
    constructor(roupas, tipos) {
        super(roupas)
        this.tipos = {}; //ou array
    }
}

class Modelo extends Peca {
    constructor(roupas, tipos, estacao, tamanho, marca) {
        super(roupas, tipos, estacao)
        this.marca = marca;
        this.tamanho = tamanho;
    }

}