const car_A = parseFloat(prompt("Insira a velocidade do carro A:"))
const car_B = parseFloat(prompt("Insira a velocidade do carro B:"))

if (car_A > car_B) {
    alert("O carro A é mais rápido!")
} else if (car_A === car_B) {
    alert("Ambos os carros têm a mesma velocidade!")
} else {
    alert("O carro B é mais rápido!")
}
