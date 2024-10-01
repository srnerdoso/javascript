// Apresentação //
alert(
    "Olá jogar! Seja bem-vindo à calculadora de dano."
)

// Informações do personagem A //
const charA = prompt("Insira o nome do seu personagem:")
const powerCharA = parseFloat(prompt("Insira o poder de ataque do seu personagem:"))

alert(
    "Processando informações do personagem..." +
    "\nNome de personagem escolhido! Seja bem-vindo: " + charA + "!" +
    "\nA sua força é de: " + powerCharA + " pontos!"
)

// Informações do personagem B //
const charB = prompt("Insira o nome do seu oponente:")
let lifeCharB = parseFloat(prompt("Insira a quantidade de pontos vida do seu oponente:"))
const defCharB = parseFloat(prompt("Insira a quantidade de pontos de defesa do seu oponente:"))
const isShield = confirm("Seu oponente terá escudo? Clique em OK ou em CANCELAR.")

alert(
    "Processando informações do oponente..." +
    "\nNome: " + charB +
    "\nPontos de vida: " + lifeCharB +
    "\nPontos de defesa: " + defCharB +
    "\nPossui escudo? " + isShield
)

alert(
    "*De repente um som amendrontador aparece no local de treinamento!" +
    "\nEra " + charB + " despertando após ser invocado por um mortal tentando o desafiar!" +
    "\nSerá que " + charA + " conseguirá lhe causar algum dano? ..." +
    "\nQue a luta comece!"
)

/*
Variável referente ao dano do personagem
Caso haja algum erro no cálculo, uma mensagem será exibida no console
*/
let damage = alert("Calculando dano recebido por " + charB + "...")

// Condições de dano recebido pelo personagem B //
if (powerCharA > defCharB) {
    damage = isShield ? (powerCharA - defCharB) / 2 : powerCharA - defCharB
    lifeCharB -= damage

    // Verifica se há algum valor negativo no cálculo da vida do personagem B //
    lifeCharB = lifeCharB < 0 ? lifeCharB *= -1 : lifeCharB
} else {
    damage = 0
}

alert(
    "O dano efetuado foi de: " + damage + "." +
    "\nPontos de vida de " + charB + " após receber o ataque: " + lifeCharB + "."
)
