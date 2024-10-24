let numbers = []

const calculatorInput = document.getElementById('calculatorInput')


function numberClicked(number) {
    calculatorInput.value += number

    numbers.push(number)
}

let a; let b; let mathSymbol
function findValues() {
    a = ''; b = ''
    let foundSymbol = false

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === '+' || numbers[i] === '-' || numbers[i] === '*' || numbers[i] === '/') {
            mathSymbol = numbers[i]
            foundSymbol = true
        } else if (!foundSymbol) {
            a += numbers[i]
        } else {
            b += numbers[i]
        }
    }

    a = parseFloat(a)
    b = parseFloat(b)

    return { a, b, mathSymbol }
}


function buttonClicked(button) {
    if (button === 'C') {
        calculatorInput.value = ''
        numbers = []
        a = ''; b = ''; mathSymbol = ''
    } else {
        calculatorInput.value = calculatorInput.value.slice(0, -1)
        numbers = numbers.slice(0, -1)
    }
}



function operation(symbol) {
    calculatorInput.value += symbol
    numbers.push(symbol)
}


function equal() {
    const { a, b, mathSymbol } = findValues()
    calculatorInput.value = ''

    if (mathSymbol === '+') {
        calculatorInput.value = a + b
    } else if (mathSymbol === '-') {
        calculatorInput.value = a - b
    } else if (mathSymbol === '*') {
        calculatorInput.value = a * b
    } else if (mathSymbol === '/') {
        calculatorInput.value = a / b
    } else {
        calculatorInput.placeholder = 'Digite um valor válido'
    }
}