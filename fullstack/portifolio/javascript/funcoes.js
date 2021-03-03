function changepicture(foto) {

    document.getElementById("imgvazia").src = foto;
}

function fixarImg() {
    document.getElementById("imgvazia").src = foto;

}
//acima foi usado para outro arquivo
// abaixo é o piscar do led no article
function typeWriter(elemento) {
    const textArray = elemento.innerHTML.split();
    elemento.innerHTML = "";
    textArray.forEach(function(letra, i) {
        setTimeout(() => elemento.innerHTML += letra, 5 * i);
    });
}
$(function() {
    let $winHeight = $(window).height()
    $('.menu_article').height($winHeight);
});

//console.log(textArray);

const conteudo = document.querySelector('..\.animation_texto_vitri');