const letters = []
let options = ""

do {
    options = prompt(
        "Cartas na pilha:\n" +
        letters.length + "\n\n" +
        "Escolha uma das opções abaixo:\n1. Adicionar uma carta\n2. Puxar uma carta\n3. Sair"
    )

    switch (options) {
        case "1":
            const letterName = prompt("Qual será o nome da carta?")
            letters.unshift(letterName)
            break
        case "2":
            const removedLetter = letters.shift()
            if (!removedLetter) {
                alert("Não há nenhuma carta no baralho!")
            } else {
                alert("Removendo carta " + removedLetter + "...")
            }
            break
        case "3":
            alert("Saindo...")
            break
        default:
            alert("Opção inválida!")
    }
} while (options !== "3");
