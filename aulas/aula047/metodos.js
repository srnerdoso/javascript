let pessoa = {
    nome: "Nerdoso",
    idade: 21,
    dizerOla() {
        console.log("Olá, mundo! Meu nome é " + this.nome)
    }
}

console.log(pessoa)

pessoa.dizerOla()