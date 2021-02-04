const readline = require("readline-sync");
const fs = require("fs")

let opcao
const registers = readFiles()

function readFiles() {
    let emptyArray = []
    let registerFile = fs.readFileSync('./books/books.txt', 'utf8')
    let array = registerFile.split(';')
    console.log(array)
    for (let i in array) {
        console.log(vetor[i])
    }
    console.log(emptyArray)
    return emptyArray
}

function create_books() {
    let nome = readline.question("Nome do Livro: ")
    let author = readline.question("Escritor: ")
    let editora = readline.question("Editora: ")
    let sessao = readline.question("Sessão: ")
    let sinopse = readline.question("Sinopse: ")
    let quant = readline.question("Quantidade: ")

    function shuffle(array) {
        let indice_atual = array.length;
        let valor_temporario;
        let indice_random;
        while (0 !== indice_atual) {
            indice_random = Math.floor(Math.random() * indice_atual);
            indice_atual -= 1;
            valor_temporario = array[indice_atual];
            array[indice_atual] = array[indice_random];
            array[indice_random] = valor_temporario;
        }
        return array;
    }
    let vetor_serie = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "A", "b", "B", "c", "C", "d", "D", "e",
        "E", "F", "f"
    ];
    shuffle(vetor_serie);
    let serie = vetor_serie.join("");
    console.log(registers)
    fs.appendFileSync('./books/books.txt', `;{Name:'${nome}',Author:'${author}',Editora:'${editora}',Sessao:'${sessao}',Sinopse:'${sinopse}',Serie:'${serie}',Quantidade:${quant}}`, function(err) {
        if (err) throw err;
        console.log('Livros Adicionados!')
    })
}


function list_books() {
    list_books()
    for (let i in registers) {
        console.log(`Name: ${registers[i].nome} Author: ${registers[i].author} E-mail: ${registers[i].editora} Sessao: ${registers[i].sessao} Sinopse: ${registers[i].sinopse} Serie: ${registers[i].serie} Quantidade: ${registers[i].quant}`)
    }
}

function change_Books() {
    list_books()
    let change = readline.question("Qual o livro que deseja trocar: ")
    let trocarCampo = ""
    let campo = parseInt(readline.question(`Escolha os campos que deseja atualizar: 
    1 - Nome do livro
    2 - Author
    3 - Editora 
    4 - Sessão
    5 - Sinopse
    Digite uma opcao: `))
    if (campo == 1) {
        trocarCampo = "nome"
    }
    if (campo == 2) {
        trocarCampo = "author"
    }
    if (campo == 3) {
        trocarCampo = "editora"
    }
    if (campo == 4) {
        trocarCampo = "sessao"
    }
    if (campo == 5) {
        trocarCampo = "sinopse"
    }
    registers[change - 1][trocarCampo] = readline.question("Digite o novo valor: ")
    serie = shuffle(vetor_serie);
    quant = 1;
}

function del_books() {
    list_books()
    let deletar = readline.question("Qual livro sera deletado: ")
    registers.splice(deletar - 1, 1)
    console.log(`Registro ${deletar}, removido com sucesso`)
}

while (opcao != 0) {
    opcao = readline.question(`Menu:
    1 - Adicionar Livros
    2 - Consultar Livros
    3 - Trocar Livros
    4 - Remover Livros
    0 - Finalizar rograma
    Digite uma opcao: `)
    if (opcao == 1) {
        create_books()
    } else if (opcao == 2) {
        list_books()
    } else if (opcao == 3) {
        change_Books()
    } else if (opcao == 4) {
        del_books()
    } else if (opcao == 0) {
        console.log("Saindo")
    } else {
        console.log("Opcao invalida")
    }
}