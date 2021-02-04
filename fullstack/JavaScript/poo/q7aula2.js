/*Crie uma modelagem de classes para uma agenda capaz de armazenar contatos. Através dessa agenda é possível incluir, remover, buscar e listar contatos já cadastrados.*/

class Agenda {

    constructor(nome, fone, email) {
        this.nome = nome;
        this.fone = fone;
        this.email = email;
    }

    get incluirContatos() {
        return `nome: ${this.nome}, fone: ${this.fone}, email: ${this.email}`;
    }
    set incluirContatos(_newnome, newfone, newemail) {
        this.nome = newnome;
        this.fone = newfone;
        this.email = newemail,
    }

    excuirContatos(contact) {
        let deletarcontato;
        for (let cont = 0, cont <= Agenda.length, cont++) {
            if (buscarcontato === contact.name[cont]) {
                return deletarcontato.remove(contact)
            } else { console.error("Contato não encontrado") }
        }
    }
    buscarContato(contact) {
        let buscarcontato;
        for (let cont = 0, cont <= Agenda.length, cont++) {
            if (buscarcontato === contact.name[cont]) {
                return buscarcontato.push(contact)
            } else { console.error("Contato não encontrado") }
        }

    }
    listarContato(lista) {
        let lista = contato
        return lista;

    }
};
const contato = new Agenda('nome', 'fone', 'email@email');
console.log(contato.incluirContatos("marcus", "00000000", "acc@acc.com"))
console.log(contato.excluirContatos("nome"))
console.log(lista)