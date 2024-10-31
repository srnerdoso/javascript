// High order functions são funções que recebem outra função como parâmetro

function calcular(a, b, operacao) {
    console.log("Realizando uma operação")
    const resultado = operacao(a, b)
    return resultado
}

function somar(x, y) {
    console.log("Realizando uma soma:")
    return x + y
}

console.log(calcular (8, 4, somar))

console.log(calcular (8, 4, function (x, y){
    console.log("Realizando uma subtração:")
    return x - y
}))

// Exemplo real de HOF  ( High order function )

function exibirElemento(elemento, indice, array) {
    console.log({
        elemento,
        indice,
        array
    })
}

const lista = ["Maçã", "Pudim", "Coxinha", "Pastel"]

// for (let i = 0; i < lista.length; i++) {
//     exibirElemento(lista[i], i, lista)
// }

// forEach

lista.forEach(exibirElemento)

lista.forEach(function (elemento, indice, array) {
    console.log({
        elemento,   
        indice,
        array
    })
})