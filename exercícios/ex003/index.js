const measure = parseFloat(prompt("Digite um comprimento em metros:"))

const measureUnit = prompt("Escolha qual unidade de medida você deseja converter:\nmm\ncm\ndm\ndam\nhm\nkm")

let measureCalc = measure
let measureVar
switch (measureUnit) {
    case "mm":
        measureCalc = measure * 1000
        measureVar = "milímetros"
        break
    case "cm":
        measureCalc = measure * 100
        measureVar = "centímetros"
        break
    case "dm":
        measureCalc = measure * 10
        measureVar = "decímetros"
        break
    case "dam":
        measureCalc = measure * 0.1
        measureVar = "decâmetros"
        break
    case "hm":
        measureCalc = measure * 0.01
        measureVar = "hectômetros"
        break
    case "km":
        measureCalc = measure * 0.001
        measureVar = "quilômetros"
        break
    default:
        alert("Opção inválida")
}

(measureCalc != measure) ? alert("O resultado de " + measure + "m em " + measureVar + " é: " + measureCalc + measureUnit) : console.log("Erro na escolha de unidade de medida: MEDIDA INVÁLIDA OU INEXISTENTE")
