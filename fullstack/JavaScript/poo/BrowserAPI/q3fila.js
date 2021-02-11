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
                return basement1.join(', ');
            }
            //Segundo andar
        this.estacionar2 = vagas => {

            if (basement1.length === 5) return;
            basement2 = [...basement2, vagas];
            if (basement2.length === 6) throw `
                    O Segundo andar está lotado, vá para o andar de cima `;
        }
        this.toString2 = () => {
                return basement2.join(', ');
            }
            //Terceiro andar
        this.estacionar3 = vagas => {
            if (basement2.length === 5) return;
            basement3 = [...basement3, vagas];
            if (basement3.length === 6) throw `
                    Os três andares estão lotados, espere alguem do primeiro andar sair `;
        }
        this.toString3 = () => {
            return basement3.join(', ');
        }
        this.remove = () => {
            const freespace1 = basement1.splice(0, 1)[0]; //retirou o carro na posicao 0
            return freespace1;
        }

        function verificar_vagas() {
            if (basement2.length > 0) {
                const freespace2 = basement2.splice(0, 1)[0];
            }
            return freespace2;

        }



    }
}

let PrimeiroAndar = new Parking();
let SegundoAndar = new Parking();
let TerceiroAndar = new Parking();
PrimeiroAndar.estacionar1('Opala');
PrimeiroAndar.estacionar1('Fusca');
PrimeiroAndar.estacionar1('Ka');
PrimeiroAndar.estacionar1('Monza');
PrimeiroAndar.estacionar1('Gol');
//PrimeiroAndar.estacionar1('Belina');ok
//console.log(PrimeiroAndar.toString1());

SegundoAndar.estacionar2('Belina');
SegundoAndar.estacionar2('Fusca');
SegundoAndar.estacionar2('Del_Rey');
SegundoAndar.estacionar2('Gipe');
SegundoAndar.estacionar2('Calhambeque');
//SegundoAndar.estacionar2('Saveiro');ok


console.log(PrimeiroAndar.toString1());
console.log(SegundoAndar.toString2());
//PrimeiroAndar.estacionar1(SegundoAndar);
//console.log(PrimeiroAndar.toString(SegundoAndar));
TerceiroAndar.estacionar3('Gipe');
TerceiroAndar.estacionar3('Belina');
TerceiroAndar.estacionar3('Ka');
TerceiroAndar.estacionar3('Monza');
TerceiroAndar.estacionar3('Brasilia');
//TerceiroAndar.estacionar3('Astra')
console.log(TerceiroAndar.toString3());
PrimeiroAndar.remove();
console.log('--------------------------')
console.log(PrimeiroAndar.toString1())
console.log(SegundoAndar.toString2())
console.log(TerceiroAndar.toString3())