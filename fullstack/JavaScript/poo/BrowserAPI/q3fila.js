class Parking {
    constructor() {
        let basement1 = [];
        let basement2 = [];
        let basement3 = [];
        //primeiro andar
        this.estacionar1 = vagas => {
            basement1 = [...basement1, vagas];
            if (basement1.length === 6) throw `O primeiro andar está lotado, vá para o andar de cima`;
        }
        this.toString1 = () => {
                return basement1.join(', '); //deu certo, mensagem de erro
            }
            //Segundo andar
        this.estacionar2 = vagas => {
            if (basement1.length === 5) basement2 = [...basement2, vagas];
            if (basement2.length === 6) throw ` O Segundo andar está lotado, vá para o andar de cima `;
        }
        this.toString2 = () => {
                return basement2.join(', '); //deu certo mensagem de erro
            }
            //Terceiro andar
        this.estacionar3 = vagas => {
            if (basement2.length === 5) basement3 = [...basement3, vagas];
            if (basement3.length === 6) throw `Os três andares estão lotados, espere alguem do primeiro andar sair `;
        }
        this.toString3 = () => {
                return basement3.join(', '); //deu certo, mensagem error
            }
            //feito estacionar carro
        let freespace1;
        let freespace2;
        let freespace3;

        this.remove = (freespace1, freespace2, freespace3) => {
            freespace1 = basement1.splice(0, 1)[0]; //retirou o carro na posicao 0 primeiro andar
            if (basement2.length < 1) {
                return;
            }
            freespace2 = basement2.splice(0, 1)[0]; //retira o carro do 2, caso tenha
            basement1 = [...basement1, freespace2]; //poe o carro do 2 no 1
            if (basement3.length < 1) {
                return;
            }
            freespace3 = basement3.splice(0, 1)[0]; //retira o carro do 3
            basement2 = [...basement2, freespace3]; //poe no 2, se tiver carro
            return freespace1;
        }
        this.toString = () => {
            return `${basement1.join(', ')},
            ${basement2.join(', ')},
            ${basement3.join(', ')}`;
        }
    }
}
console.info('Controle de estacionamento');
console.info('Esse estacionamento contem 5 vagas em cada andar');
console.log('--------------------------');
let PrimeiroAndar = new Parking();
let SegundoAndar = new Parking();
let TerceiroAndar = new Parking();
PrimeiroAndar.estacionar1('Opala');
PrimeiroAndar.estacionar1('Fusca');
PrimeiroAndar.estacionar1('Ka');
PrimeiroAndar.estacionar1('Monza');
PrimeiroAndar.estacionar1('Gol');
//PrimeiroAndar.estacionar1('Belina');ok, mensagem default
console.log(PrimeiroAndar.toString1()); //eu certo

SegundoAndar.estacionar2('Belina');
SegundoAndar.estacionar2('Fusca');
SegundoAndar.estacionar2('Del_Rey');
SegundoAndar.estacionar2('Gipe');
SegundoAndar.estacionar2('Calhambeque');
//SegundoAndar.estacionar2('Saveiro');ok, mensagem default
console.log(SegundoAndar.toString2()); //deu certo

TerceiroAndar.estacionar3('Gipe');
TerceiroAndar.estacionar3('Belina');
TerceiroAndar.estacionar3('Ka');
TerceiroAndar.estacionar3('Monza');
TerceiroAndar.estacionar3('Brasilia');
//TerceiroAndar.estacionar3('Astra')
console.log(TerceiroAndar.toString3()); //deu certo
console.log('--------------------------');
PrimeiroAndar.remove();
console.log(PrimeiroAndar.toString());