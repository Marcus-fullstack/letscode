const rangeCategorias = [
    'Lanches',
    'Brasileira',
    'Japonesa'
];

class Restaurante {

    /* Atributos 
    capacidade
    categoria
    nome
    endereço
    horario de funcionamento
    menu
    */
    // menu = [];

    constructor(
        nome,
        categoria,
        capacidade,
        horario_funcionamento
    ) {
        this._nome = nome;
        this._categoria = categoria;
        this.capacidade = capacidade;
        this.horario_funcionamento = horario_funcionamento;
        this._menu = [];
    }

    get nome() {
        return this._nome;
    }

    set nome(novoNome) {
        if (typeof(novoNome) !== 'string') throw "novo Nome deve ser uma string!!!";
        this._nome = novoNome;
    }

    get categoria() { return this._categoria; }

    set categoria(novaCategoria) {
        const categoriaValida = rangeCategorias.find((categoria) => {
            return categoria.toLowerCase().trim() === novaCategoria.toLowerCase().trim();
        });
        if (!categoriaValida) throw "A categoria não é uma categoria válida!";
        this._categoria = categoriaValida;
    }

    get menu() { return this._menu; }

    addToMenu(...itensCardapio) {
        const todosSaoValidos = itensCardapio.reduce((acc, item) => {
            return acc && (item instanceof ItemCardapio);
        }, true);
        if (!todosSaoValidos) throw "itemCardapio deve ser uma instância da classe ItemCardapio";
        // for (let item of itensCardapio) {
        //     if (!(item instanceof ItemCardapio)) {
        //         throw "itemCardapio deve ser uma instância da classe ItemCardapio";
        //     }
        // }
        this.menu.push(...itensCardapio);
    }

    introductionText() {
        return `Bem-vindo ao ${this.nome}!!
A ${this.categoria} mais amada!
A lotação máxima do nosso estabelecimento é de ${this.capacidade} pessoas. Mas devido à pandemia, estamos operando em 50% da capacidade: ${Math.floor(this.capacidade / 2)} pessoas.
Estaremos abertos a partir das ${this.horario_funcionamento} para atendê-lo.`;
    }

    getFormattedMenu() {
        const formattedMenu = this.menu.reduce((currentText, currentItem, currentIdx) => {
            return currentText + `${currentIdx + 1} - ${currentItem.toItemString()}\n`;
        }, '');
        return formattedMenu;
    }

    run() {
        console.log(this.introductionText());
        console.log(this.getFormattedMenu());
    }
}

class ItemCardapio {

    constructor(nome, preco, categoria) {
        this.nome = nome;
        this.preco = preco;
        this.categoria = categoria;
    }

    toItemString() {
        return `${this.nome} ------------ ${this.preco}
${this.categoria}`;
    }
}
class Prato extends ItemCardapio {
    constructor(nome, preco, categoria, nporcoes, ingredientes, ) {
        super(nome, preco, categoria);
        this.nporcoes = nporcoes;
        this.ingredientes = ingredientes;
    }
    toItemString() {
        const ingredientesarray = this.ingredientes.join(',')
        return `${super.toItemString()}, Serve ${this.nPorcoes} pessoas`;
    }
}
class Bebida extends ItemCardapio {

    constructor(nome, preco, categoria, qntdMl) {
        super(nome, preco, categoria);
        this.qntdMl = qntdMl;
    }

    toItemString() {
        return `${super.toItemString()}, ${this.qntdMl}ml`;
    }
}
class Pizza extends Prato {
    constructor(nome, preco, catergoria, nporcoes, tamanho, massa) {
        super(nome, preco, categoria, nporcoes, ingredientes);
        this.tamanho = tamanho;
        this.massa = massa;

    }
    toItemString() {
        return `${super.toItemString()}, ${this.tamanho} - ${this.massa} \n ${ingredientes}`;
    }
}
class Sobremesa extends ItemCardapio {
    constructor(nome, preco, categoria, tipo) {
        super(nome, preco, categoria);
        this.tipo = tipo;
    }
    toItemString() {
        return `${super.toItemString()}, ${this.tipo}`;
    }
}
class Sorvete extends Sobremesa {
    constructor(nome, preco, categoria, tipo, sabores, nbolas, cobertura) {
        super(nome, preco, categoria, tipo);
        this.sabores = [];
        this.nbolas = nbolas;
        this.cobertura = cobertura;
    }
    toItemString() {
        return `${super.toItemString()}, ${this.sabores}`;

    }
}

const restaurante = new Restaurante(123, 'Cafeteria', 50, '14:00');
//const pizza1 = new Pizza('Calabresa', 35.00, 'Pizza', "2", 'Molho de tomate temperado, calabreza, cebola e azeitona preta', 'Broto', 'fina');
//const pizza2 = new ItemCardapio('Abobrinha', 33.00, 'Pizza');
// restaurante.categoria = ' lanches ';
restaurante.addToMenu(pizza1, 'pizza2');
restaurante.run();
// console.log(restaurante);



const pizza1 = new Pizza('Calabresa', 28.00, 'Pizza', 3, ['Molho de tomate temperado', 'calabreza', 'cebola',
    'azeitona preta'
], ' Broto', 'fina ');
const pizza2 = new Pizza('Abobrinha', 33.00, 'Pizza', 3, ['Molho de tomate temperado', 'abrobrinha moida', 'pimentao vermelho e verde', 'coberta com catupiry', 'alho poro', 'azeitona preta'], 'Media', 'Grossa');
const bebida = new Bebida('Suco de Maracujá', 8.00, 'Suco', 300);
// restaurante.categoria = ' lanches ';
restaurante.addToMenu(pizza1, pizza2, bebida);
restaurante.run();