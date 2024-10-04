const turistName = prompt("Digite seu nome:")

let isVisit = confirm("Você já visitou alguma cidade? (Ok/Cancelar)")

let listCityes = ""
let amountVisit = 0

while (isVisit == true) {
    let cityVisit = prompt("Digite o nome da cidade que você visitou")

    listCityes += " - " + cityVisit + "\n"
    amountVisit++

    isVisit = confirm("Você já visitou alguma outra cidade? (Ok/Cancelar)")
}

alert(
    "Aqui estão suas informações.\n" +
    "\nNome: " + turistName +
    "\nQuantidade de cidades visitadas: " + amountVisit +
    "\nLista de cidades visitadas:\n" +
    listCityes
)
