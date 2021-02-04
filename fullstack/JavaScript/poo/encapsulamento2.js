class Quadrado {
    constructor(lado) {
        this._lado = lado;
    }
    get lado() {
        return this._lado;
    }
    set lado(novolado) {
        if (!(isNaN(novolado)) && (novolado <= 0)) throw "Lado precisa ser numero positivo";
        this._lado = novolado;
    }
}
const quad = new Quadrado(5)
quad._lado = "dez"; // ele esta aceitando a parada
console.log(quad)