const elEntrada = document.querySelector("#entrada");
const elButton = document.querySelector('button');
const elLista = document.querySelector("#lista"); //ul
elEntrada.focus()
elButton.addEventListener('click', evt => {

});

const addItem = (lista, entrada) => {
    const texto = entrada.value;
    if (texto) lista.innerHTML = '<li>${texto}<button>Remover</button></li>' + lista.innerHTML;
    entrada.value = '';
}
const addByClick = evt => {
    evt.preventDefault();
    addItem(elLista, elEntrada)
}
const addByEnter = evt => {
    if (evt.keyCode === 13) {
        evt.prevent.preventDefault();
        addItem(elLista, elEntrada)
    }
}
const removeItem = evt => {
    if (evt.target.parentNode === 'BUTTON')
        addItem.remove()
}
elButton.addEventListener('click', addByClick)
elEntrada.addEventListener("keyPressed", addByEnter)
elLista.addEventListener('click', removeItem)