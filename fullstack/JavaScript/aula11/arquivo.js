const fs = require('fs')

let dadosEscrita = {nome: 'Lucas Maia', idade: 26}
fs.writeFileSync('dados.json', JSON.stringify(dadosEscrita))

let dadosLeitura = JSON.parse(fs.readFileSync('dados.json').toString())
console.log(dadosLeitura)