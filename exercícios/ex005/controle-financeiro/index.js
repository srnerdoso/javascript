// Exercício ainda sem correção //

let amountMoney = parseFloat(prompt(
    "Olá cliente. Quanto dinheiro você tem disponível?"
))

let isRemove = false
let addRemove = 0
do {
    isRemove = confirm(
        "Você tem R$" + amountMoney + " disponível." +
        "\nDeseja sacar ou adicionar mais dinheiro? (Ok/Cancelar)"
    )
    
    addRemove = (isRemove == true) ? prompt("Você deseja sacar ou depositar? (Sacar/Depositar)") : alert("Você escolheu cancelar.")
    
    if (addRemove === "Sacar") {
        addRemove = parseFloat(prompt("Quanto dinheiro você deseja sacar?"))

        amountMoney = (amountMoney >= addRemove) ? amountMoney - addRemove : alert("Você não possui esta quantidade de dinheiro disponível para saque. Por favor tente novamente.")
    } else if (addRemove === "Depositar") {
        addRemove = parseFloat(prompt("Quanto dinheiro você deseja depositar?"))

        amountMoney += addRemove
    }
} while(isRemove)
