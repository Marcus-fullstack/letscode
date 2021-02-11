class Cozinha {
    constructor() {
        let pedidoscozinha = [];
        let pedidoEntregue = [];
        this.confirmarPedido = (pedido) => { //talvez tenho que chamar anotar pedido aqui 
            pedidoscozinha = [...pedidoscozinha, pedido];
            if (pedidoscozinha.length >= 7) throw "A cozinha está cheia de pedidos, aguarde até terminar o prato";
            return;
        }
        this.terminarPedido = () => {
            //aqui ele deleta o 1 item, tenho que dar um jeito dele copiar o primeiro item em outro vetor e depois fazer a linha debaixo
            pedidoEntregue.push(this.confirmarPedido[0])
            const PedidoRestante = this.confirmarPedido.splice(0, 1)[0];
            return PedidoEntregue, PedidoRestante;
        }
        this.toString = () => {

            return pedidoscozinha.join(', ');
        }
    }
}

class Atendente {
    constructor() {
        let pedidocliente = [];
        let pedidoEnviado;
        this.anotarPedido = (pedido) => {
            pedidocliente = [...pedidocliente, pedido] //pedido anotado
        }

        this.toString = () => {
            return (pedidocliente.join(', '));
        }
        this.enviarPedido = () => { //aqui eu acho que tenho que criar uma outra funcao para enviar apenas um valor
            this.pedidoEnviado = this.anotarPedido();
            confirmarPedido(this.pedidoEnviado); //arrumar
            const PedidoRestante = pedidocliente.splice(1, 0)[0]; //arrumar
            return pedidoEnviado[0];

        }
    }
}
const cliente = new Atendente();

cliente.anotarPedido('Virado a Paulista');
cliente.anotarPedido('Buchada de Bode');
cliente.anotarPedido('Bife à Cavalo');
cliente.anotarPedido('Filé a Parmegiana')
cliente.anotarPedido('Macarrão ao Sugo')
cliente.anotarPedido('Chouriço')
cliente.enviarPedido()
console.log(cliente.confirmarPedido())


console.log(`O pedido dos clientes foram anotado: ${cliente.toString()}`);
console.log(cliente.toString().length);