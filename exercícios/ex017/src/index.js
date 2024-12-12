import './styles/style.css'

const hello = "Olá mundo! Este é o meu projeto moderno feito do zero!"
const body = document.querySelector('body')
const p = document.createElement('p')
p.innerText = `${hello} E este é um elemento html de parágrafo criado!
Abra o console e veja se está tudo funcionando corretamente :)`
body.appendChild(p)

console.log(hello)
