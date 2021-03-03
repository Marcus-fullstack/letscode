let mensagem = document.getElementById('entrada');
let tag_ul = document.querySelector('#lista');
let btnAcrescentar = document.querySelector('#additem');

btnAcrescentar.addEventListener('click', function(e) {
    e.preventDefault();
    let txtmensagem = mensagem.value;
    AdicionarItens(txtmensagem)
});
//criar as tag li filha de ul
function AdicionarItens(txtmensagem) {
    let result = document.createTextNode(txtmensagem)
    let tag_li = document.createElement("li");
    let respostatela = tag_li.appendChild(result)
    tag_ul.appendChild(tag_li).innerText = respostatela;
}