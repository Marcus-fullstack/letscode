class Cozinha {
    constructor() {
        let pedidoscozinha = []; //pedidos que estao em espera
        let pedidoEntregue = []; // pedidos na mesa do cliente
        this.confirmarPedido = (pedido) => {
                pedidoscozinha = [...pedidoscozinha, pedido];
                if (pedidoscozinha.length >= 7) throw "A cozinha está cheia de pedidos, aguarde até terminar o prato";
                return;
            } //é a espera
        this.toString = () => {
            return pedidoscozinha.join(', ');
        }
        this.terminarPedido = () => {
                //pedidoEntregue.push(this.confirmarPedido[0])
                const PedidoEntregue = this.confirmarPedido.splice(0, 1)[0];
                return PedidoEntregue;
            } //mesa do cliente
        this.toString = () => {
            return PedidoEntregue.join(', ');
        }

    }
}

class Atendente {
    constructor() {
            let pedidocliente = [];
            let pedidoenviado;
            this.anotarPedido = (pedido) => {
                pedidocliente = [...pedidocliente, pedido] //pedido anotado
            }

            this.toString = () => {
                return pedidocliente.join(', ');
            }
            this.enviarPedido = () => {
                if (confirmarPedido()) {
                    pedidoenviado = pedidocliente
                    pedidoscozinhas = [...pedidoscozinhas, pedidoenviado]
                }
                if (terminarPedido()) {
                    Pedidoenviado = pedidocliente.splice(1, 0)[0]; //arrumar
                }
                return pedidoenviado;
            }
            this.toString = () => {
                return pedidosenviado.join(', ');
            }
        } //construtor
} //classe atendende
const cliente = new Atendente();

cliente.anotarPedido('Virado a Paulista');
cliente.anotarPedido('Buchada de Bode');
cliente.anotarPedido('Bife à Cavalo');
cliente.anotarPedido('Filé a Parmegiana')
cliente.anotarPedido('Macarrão ao Sugo')
cliente.anotarPedido('Chouriço')
console.log(`O pedido dos clientes foram anotado: ${cliente.toString()}`);
cliente.enviarPedido()
console.log(cliente.toString().length);
cliente.confirmarPedido()
console.log(`O pedido dos clientes estão sendo preparado: ${cliente.toString()}`);
cliente.terminarPedido()
console.log(cliente.toString())