let velocidade = 60

while (velocidade > 0) {
    alert("O carro está a " + velocidade + "km/h")
    velocidade -= 20
    alert("Diminuindo 20km/h")
    
/* Também é possível utilizar outras estruturas dentro do while:

    if (velocidade === 40) {
        break
    }
*/
}

alert("O carro parou.")