class Televisor {

    constructor(fabricante, modelo, listaDeCanais, volume = -20) {
        this.fabricante = fabricante;
        this.modelo = modelo;
        this.listaDeCanais = listaDeCanais;
        this.canalAtual = listaDeCanais.length > 0 ? listaDeCanais[0] : undefined;
        this.volume = volume > 100 ? 100 : (volume < 0 ? 0 : volume);
        /*
        if (volume > 100) {
            this.volume = 100;
        } else if (volume < 0) {
            this.volume = 0;
        } else {
            this.volume = volume;
        }
        */
    }

    volumeUp() {
        if (this.volume >= 100) {
            console.log('O volume já está no máximo');
            return;
        }
        this.volume++;
    }

    volumeDown() {
        if (this.volume <= 0) {
            console.log('O volume já está no mínimo');
            return;
        }
        this.volume--;
    }

    isChannelInChannelList(channel) {
        return this.listaDeCanais.includes(channel);
    }

    addChannel(newChannel) {
        // const canAdd = this.listaDeCanais.filter(canal => canal === newChannel).length === 0;
        const canAdd = !this.isChannelInChannelList(newChannel);
        // const canAdd = this.listaDeCanais.findIndex(canal => canal === newChannel) !== -1;
        if (canAdd) {
            this.listaDeCanais.push(newChannel);
            return;
        }
        console.log('Esse canal já está sintonizado!');
    }

    changeChannel(channel) {
        if (this.isChannelInChannelList(channel)) {
            this.canalAtual = channel;
            return;
        }
        console.log(`O canal ${channel} não está sintonizado!!`);
    }
}

const tv = new Televisor('LG', 'SmarTV Top', [], 30);
tv.volumeUp();
tv.volumeUp();
tv.volumeUp();
tv.volumeUp();
tv.volumeUp();
console.log(tv.volume);

tv.volumeDown();
tv.volumeDown();
tv.volumeDown();
console.log(tv.volume);

tv.addChannel('ESPN');
tv.addChannel('SporTV');
tv.addChannel('E!');
tv.changeChannel('SporTV');
tv.changeChannel('Globo');

console.log(tv);
//exercicio 6
class ControleRemoto {

    constructor(televisor) {
        if (!(televisor instanceof Televisor)) {
            throw "televisor must be of type Televisor"
        }
        this.televisor = televisor;
    }

    volumeUp() {
        this.televisor.volumeUp();
    }

    volumeDown() {
        this.televisor.volumeDown();
    }

    addChannel(newChannel) {
        this.televisor.addChannel(newChannel);
    }

    changeChannel(channel) {
        this.televisor.changeChannel(channel);
    }

}

const remoteControl = new ControleRemoto(tv);
remoteControl.volumeUp();
remoteControl.volumeUp();
remoteControl.volumeUp();
remoteControl.volumeUp();
remoteControl.volumeUp();
console.log(remoteControl.televisor.volume);

remoteControl.volumeDown();
remoteControl.volumeDown();
remoteControl.volumeDown();
console.log(remoteControl.televisor.volume);

remoteControl.addChannel('Discovery Channel');
remoteControl.addChannel('FOX');
remoteControl.addChannel('Viva');
remoteControl.changeChannel('FOX');
remoteControl.changeChannel('Home & Health');
console.log(remoteControl);