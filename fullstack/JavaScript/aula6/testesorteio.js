function shuffle(array) {
    let currentIndex = array.length;
    let temporaryValue;
    let randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}
let vetor_serie = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "A", "b", "B", "c", "C", "d", "D", "e",
    "E", "F", "f"
];
shuffle(vetor_serie);
let serie = vetor_serie.join("");

console.log(serie);