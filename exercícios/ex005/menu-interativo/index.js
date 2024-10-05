let options = 1

do {
    options = parseInt(prompt(
        "Escolha uma das opções abaixo:" +
        "\nOpção um (1)" +
        "\nOpção dois (2)" + 
        "\nOpção três (3)" +
        "\nOpção quatro (4)" +
        "\nEncerrar (5)"
    ))

    if (options < 1 || options > 5) {
        alert("Opção inválida. Tente novamente")
    } else {
        switch (options) {
            case 1: 
                alert("Opção escolhida: um")
                break
            case 2:
                alert("Opção escolhida: dois")
                break
            case 3:
                alert("Opção escolhida: três")
                break
            case 4:
                alert("Opção escolhida: quatro")
                break
            case 5:
                alert("Programa encerrado.")
        }
    }
} while (options != 5)

    alert("Programa finalizado.")
