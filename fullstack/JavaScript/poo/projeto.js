class Restaurante {
    /* Atributos: capacidade, categoria,nome, horario de funcionamento,menu
    endereço
    */
    constructor(nome, categoria, capacidade, horario_funcionamento) {
        this.nome = nome;
        this.categoria = categoria;
        this.categoria = categoria;
        this.capacidade = capacidade;
        this.horario_funcionamento = horario_funcionamento;
        this.menu = [];
    }

    addToMenu(...itemCardapios) {
        // itemCardapios = ['Pizza', 'Hamburguer', 'Coca']
        this.menu.push(...itemCardapios);
        // menu = ['Batata Frita', 'Pizza', 'Hamburguer', 'Coca']
    }

    introductionText() {
        return `Bem-vindo ao ${this.nome}!!
A ${this.categoria} mais amada!
A lotação máxima do nosso estabelecimento é de ${this.capacidade} pessoas. Mas devido à pandemia, estamos operando em 50% da capacidade: ${Math.floor(this.capacidade / 2)} pessoas.
Estaremos abertos a partir das ${this.horario_funcionamento} para atendê-lo.`;
    }

    getFormattedMenu() {
        const formattedMenu = this.menu.reduce((currentText, currentItem, currentIdx) => {
            return currentText + `${currentIdx + 1} - ${currentItem.toString()}\n`;
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

    toString() {
        return `${this.nome} ------------ ${this.preco}
${this.categoria}`;
    }
}

const restaurante = new Restaurante('Pietro\'s Cafe', 'Cafeteria', 50, '8:00');
// const restaurante2 = new Restaurante('Pietro\'s Bar', 'Adega', 200, '20:00');
const pizza1 = new ItemCardapio('Calabresa', 35.00, 'Pizza');
const pizza2 = new ItemCardapio('Abobrinha', 33.00, 'Pizza');
const burguer1 = new ItemCardapio('Monstro Burguer', 17.00, 'Lanches');

restaurante.addToMenu(pizza1, pizza2, burguer1);

restaurante.run();



// // restaurante.addToMenu(pizza2);
// // restaurante.addToMenu(burguer1);

// addToRestaurantMenu(restaurante, pizza1);

// console.log(restaurante);