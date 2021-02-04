// Capitulo 5 e 6
let autor = new Object();
autor.name = 'Marcus';
let literal = autor.toString;
let literal1 = JSON.stringify(autor);

function stringify(estrutura) {
    if (typeof estrutura == "string") {
        return '"' + String(estrutura) + '"'; //de acordo com ECMASCRIPT
    }
    if (typeof estrutura == "object") {
        let parcial = new Array();
        for (let chave in estrutura) {
            let valor = estrutura[chave];
            valor = stringify(valor);
            parcial.push(chave + ":" + valor);
        }
        valor = (parcial.length === 0) ? '{}' : '{' + parcial.join(' , ') + '}'
        return valor;
    }
}
console.log(autor); //objeto autor
console.log(literal); //usando toString
console.log(literal1); //stringfy
//let str = JSON.parse("abc123");
//console.log(str) //da um erro de caracterinexperado
let str1 = JSON.parse("\"abc123\"");
//console.log(str1); //string

let jsontext = '{"name":"fulano","age":20,"pets":[{"name":"bob","age":3.5},{"name":"bia","age":4}]}'; //ja esta com stringify
let algo = JSON.parse(jsontext);
let string1 = JSON.stringify(algo);
console.log(string1);
console.log("str")
console.log(algo);
console.log(JSON.stringify(algo, null, 4)); //com padding=4 posições
let exemplo = eval("\"Sentença com uma nova linha \\Ua000a...nova linha\"")
console.log(exemplo);
let reviver = function(k, v) {
    return v;
}
let exemplo1 = JSON.parse(jsontext, reviver);
console.log(exemplo1);

class Person {
    contructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    getpeoplename() { return this.name; }
    getpeopleage() { return this.age; }
    getpeoplegender() { return this.gender; }

    setpeoplename(name1) { this.name = name1; }
    setpeopleage(age1) { this.age = age1; }
    setpeoplegender(gender1) { this.gender = gender1; }
}
const p = new Person("Ciclano", 30, "male");
console.log(p instanceof Person);
let stringobj = JSON.stringify(p);
console.log(stringobj instanceof Person); //falso
function revivernew(key, value) {
    if (key === "") { value = new Person() }
    return value;
}
let parsejson = JSON.parse(stringobj, revivernew);
console.log(parsejson instanceof Person);