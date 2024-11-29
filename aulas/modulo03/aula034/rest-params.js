function sum(...numbers) {
    return numbers.reduce((accum, num) => accum + num, 0)
}

console.log(sum(1, 2, 3))
console.log(sum(50, 20, 30, 100, 200, 3.5))
