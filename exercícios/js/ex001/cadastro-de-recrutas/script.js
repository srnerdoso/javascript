const firstName = prompt("Escreva seu primeiro nome:")
const middleName = prompt("Escreva seu segundo nome:")
const fildOfStudy = prompt("Escreva seu campo de estudo:")
const birthYear = parseFloat(
    prompt("Escreva o ano do seu nascimento:")
)

window.alert(
    "Recruta cadastrado com sucesso!\n" +
    "\nNome: " + firstName + " " + middleName + 
    "\nCampo de estudo: " + fildOfStudy + 
    "\nIdade: " + (2024 - birthYear)
)
