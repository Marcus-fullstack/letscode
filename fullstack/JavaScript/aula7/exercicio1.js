let produtos = [{ produto: 'computador', preco: 1750 }, { produto: 'mouse', preco: 25 }, { produto: 'impressora', preco: 4000 }, { produto: 'teclado', preco: 120 }, { produto: 'monitor', preco: 670 }, { produto: 'dvd', preco: 250 }, { produto: 'scanner', preco: 400 }, { produto: 'playstation5', preco: 2200 }, { produto: 'cdgame', preco: 120 }, { produto: 'canetamouse', preco: 300 }];
let black_friday = produtos.map(produto => {
    let decrease;
    if (produtos.preco <= 200) decrease = 5 / 100
    else if (produtos.preco <= 400) decrease = 10 / 100
    else if (produtos.preco <= 2000) decrease = 15 / 100
    else decrease = 20 / 100
    return {...produto, preco: produto.preco * (1 - decrease) }
})
console.log(black_friday)