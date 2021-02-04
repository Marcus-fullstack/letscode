class Retangulo {
    constructor(base, altura) {
        this._base = base;
        this._altura = altura;
    }
    get base() {
        return this._base;
    }
    set base(novabase) {
        if (typeof(novabase) !== 'number') throw "O valor de base precisa ser numero"
        this._base = novabase;
    }

    get altura() {
        return this._altura;
    }
    set altura(novaaltura) {
        if (typeof(novaaltura) !== 'number') throw "O valor de altura precisa ser numero"
        this._altura = novaaltura;
    }
    get area() { return this._base * this._altura }
        /* get base() {
            throw "_base é um atributo privado"

        }
        set base() {
            throw "_base é um atributo privado"
        }*/
}
const rect = new Retangulo(5, 10)
console.log(rect);
rect._base = 10;
rect._altura = 12;
console.log(rect)
console.log(rect.area)