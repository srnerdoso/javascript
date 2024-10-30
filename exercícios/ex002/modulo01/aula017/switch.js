const result = prompt(
    "Escolha uma alternativa:\na)\nb)\nc)")

const resultNumber = parseFloat(prompt("Escolha as alternativas:\n1.\n2.\n3."))

switch (resultNumber) {
    case 1:
        alert("O resultado é 1")
        break
    case 2:
        alert("O resultado é 2")
        break
    case 3:
        alert("O resultado é 3")
        break
    default:
        alert("Finalizando...")
}
