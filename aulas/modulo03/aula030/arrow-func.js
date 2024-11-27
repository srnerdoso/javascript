function normalSum(a, b) {
    return a + b
}
console.log(`Soma normal: ${normalSum(2, 5)}`)

const anonymousSum = function (a, b) {
    return a + b
}
console.log(`Soma anônima: ${anonymousSum(2, 5)}`)

const arrowSum = (a, b) => {
    return a + b
}
console.log(`Soma de seta: ${arrowSum(2, 5)}`)

const subtract = (a, b) => {
    return a - b
}
console.log(`Subtração: ${subtract(2, 5)}`)

const double = number => `O dobro de ${number} é ${number * 2}`
const number = 50
console.log(double(number))

const friends = ['Levi', 'GolpeBaixo', 'Batata', 'Obanai', 'Luiz']
const startWithL = friends.filter(friend => friend[0] === "L")
console.log(startWithL)