/* 
Questao 1
Crie uma classe chamada Ponto2D que possui os atributos x e y(ambos privados), crie o construtor dessa classe e um método calcularDistancia() que recebe como parâmetro uma outra instância de Ponto2D => raizQuadrada(x² + y²)
Questao 2
Crie uma classe herda de Ponto2D chamda Ponto3D que tem como atributo adicional "z", reimplemente o método calcularDistancia() na classe Ponto3D que desta vez deve receber uma outra instância de Ponto3D => raizQuadrada(x² + y² + z²)
*/

class Ponto2D {
    constructor(x, y) {
        this._x = x;
        this._y = y;
    }
    get valorX() { return this._x; }
    get valorY() { return this._y; }
    set valorX(novovalorx) { this._x = novovalorx; }
    set valorY(novovalory) { this._y = novovalory; }
    calcularDistancia() {
        const distquad = Math.pow(this._x, 2) + Math.pow(this._y, 2)
        return Math.pow(distquad, 0.5).toFixed(3)
    }
}
class Ponto3D extends Ponto2D {
    constructor(x, y, z) {
        super(x, y);
        this._z = z;
    }
    calculardistancia3d() {
        const distanciatridimensao = Math.pow(this._x, 2) + Math.pow(this._y, 2) + Math.pow(this._z, 2);
        return Math.pow(distanciatridimensao, .5).toFixed(3);
    }
}
const distancia2d = new Ponto2D(5, 9);
const resultado = distancia2d.calcularDistancia();
console.log(`Os Lados dos triangulos são ${distancia2d}`);
console.log(`A hipotenusa do triangulo retangulo é ${resultado}`);
const coordenadas_espacial = new Ponto3D(5, 9, 2);
//console.log(resultado);
console.log(coordenadas_espacial.calculardistancia3d());