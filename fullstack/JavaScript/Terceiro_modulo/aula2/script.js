const elEntrada = document.querySelector('#entrada');
const elButton = document.querySelector('button');
const elLista = document.querySelector('#lista');
const elcheckboxc = document.querySelector('#concluida')
const elcheckboxi = document.querySelector('#iniciada')
const elcheckboxp = document.querySelector('#parada')

elEntrada.focus()
elcheckboxc.focus()
elcheckboxp.focus()
elcheckboxi.focus()
const checkiniciada = iniciada.value
const checkparada = parada.value
const checkconcluida = concluida.value

const opcao = [checkconcluida, checkiniciada, checkparada]

const addItem = (lista, entrada, opcao) => {
    const texto = entrada.value;
    let indice = 0;
    let result = "";
    while (indice <= opcao.length) {
        if (texto, opcao[indice]) {
            if (indice === 0) {
                result = opcao[0]
                result.value;
            } else {
                entrada.value = ""
                elEntrada.focus()
                parada.value = ""
                concluida.value = ""
                iniciada.value = ""
            }
            if (indice === 1) {
                result = opcao[1]
                result.value
            } else {
                entrada.value = ""
                elEntrada.focus()
                concluida.value = ""


            }
            if (indice === 2) {
                result = opcao[2]
                result.value
            } else {
                entrada.value = ""
                elEntrada.focus()
                parada.value = ""
                concluida.value = ""
                iniciada.value = ""
            }

        }
        indice++
    }
    lista.innerHTML = `<li>${texto} ${result}<button>Remover</button></li>` + lista.innerHTML;


}
const addByClick = (evt) => {
    evt.preventDefault();
    addItem(elLista, elEntrada, opcao)
}

const addByEnter = evt => {
    if (evt.keyCode === 13) {
        evt.preventDefault()
        addItem(elLista, elEntrada, opcao)
    }
}

const removeItem = evt => {
    if (evt.target.nodeName === "BUTTON") {
        const item = evt.target.parentNode

    }
    elEntrada.focus()
}

elButton.addEventListener("click", addByClick)
elEntrada.addEventListener("keyPressed", addByEnter)
elLista.addEventListener("click", removeItem)