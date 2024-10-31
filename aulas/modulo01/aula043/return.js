// Retorno é a saída da função

// O retorno é usado para armazenarmos a saída da função em uma variável
// Se não explicitarmos qual deve ser a saída da função, sua saída será undefined
function calculadoraMedia(a, b) {
    const media = (a + b) / 2
}
const resultado = calculadoraMedia(5, 9)
console.log(resultado)

// Para definirmos o retorno de uma função, usamos o comando 'return'
function criarProduto(nome, preco) {
    const produto = { nome, preco, estoque: 1 }
    return produto
}

const notebook = criarProduto("PC Gamer AMD Ryzen 5 5600 12GB RX6600", 5999.99)
console.log(notebook)
// Também podemos jogar a saída de uma função dentro dos parâmetros de outra
console.log(criarProduto("Smartphone Samsung Galaxy A03", 2999.99))

// E o retorno não precisa ser uma variável,
// pode ser o resultado de qualquer expressão
function areaRetangulo(base, altura) {
    return base * altura
}
console.log(areaRetangulo(10, 5))
// Ou até o retorno de outra função
function areaQuadrada(lado) {
    return areaRetangulo(lado, lado)
}
console.log(areaQuadrada(5))

// Uma função só pode ter uma saída, depois do return nada é executado
// Repare que o VS Code nos avisa que nosso código não será executado
function olaMundo() {
    let texto = "..."
    return texto
    texto = "ola mundo"
    console.log(texto)
}
console.log(olaMundo())

// No entanto, diferentes ramificações dentro
// da função podem ter diferentes retornos
function maioridade(idade) {
    if (idade >= 18) {
        return "maior de idade"
    } else {
        return "menor de idade"
    }
}
console.log(maioridade(15))
console.log(maioridade(25))