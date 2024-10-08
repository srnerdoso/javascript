const number = parseFloat( prompt("Digite um número:"))
let multiplication = ""

for (let i = 1; i <= 20; i++) {
    multiplication += number + " * " + i + " = " + (number * i) + "\n"
}

alert(
    "Tabuada de " + number + ":" + "\n" +
    multiplication
)
