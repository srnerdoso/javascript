function calcAreaTriangle() {
    const base = parseFloat(prompt("Informe a base do triângulo:"))
    const height = parseFloat(prompt("Informe a altura do triângulo:"))
    return base * height / 2
}

function calcAreaRetangle() {
    const base = parseFloat(prompt("Informe a base do retângulo:"))
    const height = parseFloat(prompt("Informe a altura do retângulo:"))
    return base * height
}

function calcAreaSquare() {
    const side = parseFloat(prompt("Informe a área do quadrado:"))
    return side * side
}

function calcAreaTrapezium() {
    const biggerBase = parseFloat(prompt("Informe a base maior do trapézio:"))
    const smallerBase = parseFloat(prompt("Informe a base menor do trapézio:"))
    const height = parseFloat(prompt("Informe a altura do trapézio:"))
    return (biggerBase + smallerBase) * height / 2
}

function calcAreaCircle() {
    const radius = parseFloat(prompt("Informe o raio do circulo:"))
    return 3.14 * radius * radius
}

function menu() {
    return prompt(
        "Calculadora geométrica\n" +
        "\n1. Área do triângulo\n" +
        "2. Área do retângulo\n" +
        "3. Área do quadrado\n" +
        "4. Área do trapézio\n" +
        "5. Área do círculo\n" +
        "6. Sair\n"
    )
}

function execute() {
    let option = ""

    do {
        option = menu()
        let result

        switch (option) {
            case "1":
                result = calcAreaTriangle()
                alert("Área do triângulo: " + result)
                break
            case "2":
                result = calcAreaRetangle()
                alert("Área do retângulo: " + result)
                break
            case "3":
                result = calcAreaSquare()
                alert("Área do quadrado: " + result)
                break
            case "4":
                result = calcAreaTrapezium()
                alert("Área do trapézio: " + result)
                break
            case "5":
                result = calcAreaCircle()
                alert("Área do círculo: " + result)
                break
            case "6":
                alert("Finalizando...")
                break
            default:
                alert("Opção inválida!")
        }

        if (result) {
            alert("Resultado: " + result)
        }

    } while (option !== "6")
}

execute()
