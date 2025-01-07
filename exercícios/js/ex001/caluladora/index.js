const number2 = parseFloat(prompt("Digite um número:"))
const number1 = parseFloat(
    prompt("Digite outro número")
)

const addition = number1 + number2
const subtraction = number1 - number2
const multiplication = number1 * number2
const division = number1 / number2

window.alert(
    "Processando resultado dos cálculos...\n" +
    "\nAdição: " + addition +
    "\nSubtração: " + subtraction + 
    "\nMultiplicação: " + multiplication + 
    "\nDivisão: " + division
)
