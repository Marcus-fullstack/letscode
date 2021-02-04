class Quadrado {
    constructor(lado) {
        this.lado = lado;
    }
    getareaQuad() { return this.lado * this.lado; }
        //nesse exercicio não precisa usar o metodo set, nem o get, no meu caso chamei um metodo de getareaQuad
}
class Cubo extends Quadrado {
    constructor(lado, comprimento) {
            super(lado)
            this.comprimento = comprimento;
        }
        //getcomprimento() { return this.comprimento; }
        //setcomprimento(novocomprimento) { this.comprimento = novocomprimento; }
    getvolumecubo() { return this.comprimento * this.getareaQuad(); }


}
const cubo1 = new Cubo(5, 8)

console.log(`O cubo tem base e altura iguais que vale ${cubo1.lado} metros e comprimento igual a ${cubo1.comprimento} metros.`);
console.log(`O volume do cubo é ${cubo1.getvolumecubo()} metros cubicos`);