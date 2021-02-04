function desconto(porcentagem) {
    return function(preco) {
        return (preco * (1 - porcentagem / 100));
    }

}
let desc1 = desconto(15)
let desc2 = desconto(20)
let desc3 = desconto(25)
console.log(desc1(100))
console.log(desc2(100))
console.log(desc3(100))