class Televisor {

    constructor(fabricante, modelo, ligada, canalatual, listacanais, volume) {
        this.fabricante = fabricante;
        this.modelo = modelo;
        this.ligada = false;
        this.canalatual = canalatual; //string pra casar com o objeto
        this.listacanais = [];
        this.volume = numeracao;
    }
    LigarTv() {
        if (this.ligada == false) return this.ligada = true;
    }
    DesligarTv() {
        if (this.ligada == true) return this.ligada = false;
    }
    ColocarVolume() {
        for (let passo = 0; passo <= 100; passo += 10) {
            let numeracao = this.volume.push(passo);
        }
        return numeracao;
    }
    ColocarCanais() {
        //colocar canais no construtor, por exemplo TV aberta:
        // [{'515':'Globo','514':'SBT','512':'TV Cultura','518':'Band',etc}]

    }
    AdicionarCanais() {
        // Filmes (tnt, hbo,fox,cinemax, telecine, outros)
        // Sports (espn, fox sports, etc)
        // Noticia (cnn,news, etc)
        // tipo discovery,
        // pra crianca cartoon etc
    }

    AumentarVolume() {
        if (this.ligada == true) {
            //aumentar volume
        } else {
            return //funcao ligar tv}

        };

    }
    DiminuirVolume() {;
        //mesmo de aumentar tv
    }
}
const volume = new Televisor("Sansung", "LCD25 pol", true, "undefined", "undefined", volume);
console.log(volume.ColocarVolume());;