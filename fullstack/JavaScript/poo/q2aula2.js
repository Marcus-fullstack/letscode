/*Crie uma classe Bola cujos atributos são cor e raio. Crie um método que imprime a cor da bola. Crie um método para calcular a área dessa bola. Crie um método para calcular o volume da bola. Crie um objeto dessa classe e calcule a área e o volume, imprimindo ambos em seguida.*/
class Bola {
    constructor(cor, raio) {
        this.cor = cor;
        this.raio = raio;
    }
    imprimirCor() {
        console.log(this.cor);
    }
    calcularAreaBola() {
        return (Math.pow((2 * this.raio), 2) * Math.PI).toFixed(3)
    }
    volumeBola() {
        return (Math.pow(this.raio, 3) * 4 * Math.PI / 3).toFixed(3);
    }
}
const bola = new Bola('green', 10)
const area_bola = bola.calcularAreaBola();
const volume_bola = bola.volumeBola();
console.log(`A bola tem raio ${bola.raio} mm`);
console.log(`Volume: ${volume_bola} milimetro cubico`);
console.log(`Area: ${area_bola} milimetro quadrado`);
bola.imprimirCor();