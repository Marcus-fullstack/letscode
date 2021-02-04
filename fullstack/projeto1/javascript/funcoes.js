function changepicture(foto) {

    document.getElementById("imgvazia").src = foto;
}

function fixarImg() {
    document.getElementById("imgvazia").src = foto;

}

function typeWriter(elemento) {
    const textArray = elemento.innerHTML.split();
    elemento.innerHTML = "";
    textArray.forEach(function(letra, i) {
        setTimeout(() => elemento.innerHTML += letra, 5 * i);
    });
}

//console.log(textArray);

const conteudo = document.querySelector('..\.animation_texto_vitri');