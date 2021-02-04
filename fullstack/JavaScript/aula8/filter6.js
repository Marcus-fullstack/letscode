let array_primo = num => {
    num = Math.abs(num)
    let divisores = []
    for (let i = 1; i <= num / 2; i++) {
        if (num % i === 0) divisores.push(i)
    }
    return divisores.length === 1
}
console.log([-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].filter(array_primo))