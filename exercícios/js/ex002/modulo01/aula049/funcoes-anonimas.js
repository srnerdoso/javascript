function somar(a, b) {
    return a + b
}

let operacao = somar

console.log(operacao(2, 3))

operacao = function (a, b) {
    return a - b
}
console.log(operacao(36, 13))

// Funções anônimas servem para armazenar uma função em uma variável
// e isso pode ser usado de forma mais flexivel 

// OBS: funções anônimas, diferente de funções normais, são
// executadas apenas após chamadas. Veja o exemplo abaixo
olaMundo()
oiMundo()


function olaMundo() {
    console.log("ola mundo")
}

const oiMundo = function () {
    console.log("oi mundo")
}
