const rStates = []
let option = ""

do {
    option = prompt(
        "Quantidade de imóveis: " + rStates.length +
        "\nEscolha uma das opções abaixo:\n1. Salvar novo imóvel\n2. Lista de imóveis\n3. Sair"
    )

    switch (option) {
        case "1":
            const rState = {}

            rState.owner = prompt("Digite o nome do propietário:")
            rState.bedrooms = parseInt(prompt("Digite a quantidade de quartos"))
            rState.bathrooms = parseInt(prompt("Digite a quantidade de banheiros:"))
            rState.is_garage = prompt("O imóvel possui garagem? (Sim/Não)")

            const confirmState = confirm(
                "Salvar este imóvel?\n" +
                "\nPropietário: " + rState.owner +
                "\nQuantidade de quartos: " + rState.bedrooms +
                "\nQuantidade de banheiros: " + rState.bathrooms +
                "\nPossui garagem? " + rState.is_garage
            )

            if (confirmState) {
                rStates.push(rState)
            }
            break
        case "2":
            for (let i = 0; i < rStates.length; i++) {
                alert(
                    "Imóvel " + (i + 1) +
                    "\nPropietário: " + rStates[i].owner +
                    "\nQuartos: " + rStates[i].bedrooms +
                    "\nBanheiros: " + rStates[i].bathrooms +
                    "\nPossui garagem? " + rStates[i].is_garage
                )
            }
            break
        case "3":
            alert("Saindo...")
            break
        default:
            alert("Opção inválida!")
    }
} while (option !== "3")
