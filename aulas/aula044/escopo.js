// Escopo é o contexto onde a variável foi declarada podendo ser
// mais externo, ou mais interno (se estiver dentro de um bloco)

// Variáveis no escopo mais externo podem ser
// usadas dentro de escopos mais internos
let pokemon = "Charmander"

function evoluir() {
    pokemon = "Charmeleon"
}

console.log(pokemon)
evoluir()
console.log(pokemon)


// Variáveis no escopo mais interno não podem ser
// usadas fora dele em escopos mais internos
// function criarAnimal() {
//     let animal = "Cachorro"
// }

// criarAnimal()
// console.log(animal) // ReferenceError


// Apenas variáveis declaradas com var ficam
// disponíveis em um escopo mais externo
function avaliarNota(nota) {
    if (nota > 60) {
        var aprovado = true
        let situacao = "aprovado"
    } else {
        var aprovado = false
        let situacao = "reprovado"
    }

    console.log(nota)
    console.log(aprovado)
    // console.log(situacao) // // ReferenceError
}

avaliarNota(70)
avaliarNota(50)


// Mas mesmo o var não consegue "sair" para fora do escopo da função
function ola() {
    var texto = "ola mundo"
}
// console.log(texto) // // ReferenceError


// Apenas variáveis declaradas com var são carregadas
// sempre no começo do código, acima de todo o resto
console.log(nome)
// console.log(sobrenome) // // undefined
var nome = "Nerdoso"
let sobrenome = "Nerd da Silva"
console.log(nome)
console.log(sobrenome)