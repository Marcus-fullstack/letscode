class Retangulo {

    constructor(ladoa, ladob) {
        if ((isNaN(ladoa)) || (isNaN(ladob)))
            throw "lado precisa ser numero";
        this.ladoa = ladoa;
        this.ladob = ladob;

    }
    calcularArea() {
        const area = this.ladoa * this.ladob;
        return area;
    }
}
const retangulo1 = new Retangulo(10, 5);
console.log(retangulo1)
console.log(`os Lados do retandulo é  ${retangulo1.ladoa} metros e ${retangulo1.ladob} metros`)
const area = retangulo1.calcularArea()
console.log(`Area é ${area} metros quadrado`)