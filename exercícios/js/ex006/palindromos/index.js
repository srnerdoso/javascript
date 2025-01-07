const word = prompt("Escreva uma palavra:").toUpperCase()
let palindrome = ""

for (i = word.length - 1; i >= 0; i--) {
    palindrome += word[i]
}

if (word === palindrome) {
    alert(word + " é um palíndromo!")
} else {
    alert(
        "Esta palavra não é um palíndromo:\n" +
        word + "\n" +
        palindrome
    )
}