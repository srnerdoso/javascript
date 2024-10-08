let queuePacients = []
let isRegister = ""
let isConsult = ""

do {
    isRegister = (prompt(
        "Nenhum paciente na fila.\n" +
        "1. Novo paciente\n" +
        "2. Sair"
    ))
    if (isRegister != 1 && isRegister != 2) {
        alert("Opção inválida! Tente novamente!")
    }

} while ((isRegister != "1" && isRegister != "2"))

for (i = 1; isRegister == 1; i++) {
    queuePacients.push(" " + i + "º " + prompt("Digite o nome do paciente:"))
    isRegister = prompt(
        "Lista de pacientes na fila:" + queuePacients +
        "\n1. Novo paciente" +
        "\n2. Sair"
    )

    isConsult = prompt(
        "Consultar próximo paciente?\n" +
        "1. Sim\n" +
        "2. Não"
    )

    if (isConsult == "1") {
        queuePacients.pop()
    }
}
