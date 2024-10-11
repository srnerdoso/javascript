let fila = []
let opcao = ""

do {
    let pacientes = ""
    for (let i = 0; i < fila.length; i++) {
        pacientes += (i + 1) + "º - " + fila[i] + "\n"
    }

    opcao = prompt(
        "Pacientes:\n" +
        pacientes +
        "\nEscolha uma açao:\n1. Novo paciente\n2. Consultar paciente\n3. Sair"
    )

    switch (opcao) {
        case "1":
            const novoPaciente = prompt("Qual é o nome do paciente?")
            fila.push(novoPaciente)
            break
        case "2":
            const pacienteConsultado = fila.shift()
            if (!pacienteConsultado) {
                alert("Não há pacientes na fila!")
            } else {
                alert(pacienteConsultado + " foi removido da fila.")
            }
            break
        case "3":
            alert("Encerrando...")
            break
        default:
            alert("Opção inválida!")
    }
} while (opcao !== "3");

/*
let waitingList = []
let isRegister = prompt(
    "Lista de espera:\n" +
    "Lista vazia\n\n" +
    "1. Novo paciente\n" +
    "2. Sair"
)

for (let indice = 1;isRegister == 1; indice++) {
    let registerPacient = prompt("Digite o nome do paciente:")
    waitingList.push(" " + indice + "º " + registerPacient)

    let isConsult = prompt(
        "Atender o primeiro paciente da fila?\n" +
        "\n1. Sim" +
        "\n2. Não"
    )
    if (isConsult == 1) {
        waitingList.shift()
    }

    isRegister = prompt(
        "Lista de espera:\n" +
        waitingList + "\n" +
        "1. Novo paciente\n" +
        "2. Sair"
    )
}
*/