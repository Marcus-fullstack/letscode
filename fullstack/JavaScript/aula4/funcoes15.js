function numero(num) {
    let x;
    let y;
    x = num % 10;
    y = parseInt(num / 10);

    while (y > 0) {
        console.log(`\r${x}`);
        x = y % 10;
        y = parseInt(y / 10);

    }
    console.log(`\r${x}`);
}
numero(12338844)

/*
function algo(frase) {
    let palavra = frase.split('');
    let novaspalavras = [];
    for (let palavra of palavra) {
        novaspalavras.push(palavra[0].toUpperCase().palavra.)
    }
}*/