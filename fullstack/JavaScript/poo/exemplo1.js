class quadrado {
    /*Atributos
     lado*/
    constructor(lado, cor) {
        if (isNaN(lado)) throw "lado precisa ser numero";
        this.lado = lado;
        //this.cor = undefined;

    }
    calcularArea() {
        const area = this.lado * this.lado;
        return area;
    }
    calcularPerimetro() {
        const perimetro = this.lado * 4
        return perimetro;
    }

}
const quadrado1 = new quadrado(10);
console.log(quadrado1)
console.log(quadrado1.lado)
const area = quadrado1.calcularArea()
const perimetro = quadrado1.calcularPerimetro()
console.log(area)
console.log(perimetro)