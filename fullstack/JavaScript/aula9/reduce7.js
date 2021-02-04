function map(fn, vector) {
    return vector.reduce((state, element) => [...state, fn(element)], [])
}
let result = map(x => 2 * x, [1, 2, 3, 4, 5])
console.log(result)

function map(fn, vector) {
    return vector.reduce((state, element) => {
        state.push(fn(element))
        return state
    }, [])
}
let result1 = map(x => 2 * x, [1, 2, 3, 4, 5])
console.log(result1)

function filter(fn, vector) {
    return vector.reduce((state, element) => [...state, fn(element)], [])
}
result = filter(x => 2 * x, [1, 2, 3, 4, 5])
console.log(result)

function filter(fn, vector) {
    return vector.reduce((state, element) => {
        if (fn(element)) state.push(fn(element))
        return state
    }, [])
}

result1 = filter(x => x ** 2, [1, 2, 3, 4, 5])
console.log(result1)