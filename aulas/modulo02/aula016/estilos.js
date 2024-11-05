function useLightTheme() {
    document.body.style.color = '#212529'
    document.body.style.backgroundColor = '#f1f5f9'
}

function useDarkTheme() {
    document.body.style.color = '#f1f5f9'
    document.body.style.backgroundColor = '#212529'
}

function switchTheme() {
    document.body.classList.toggle('is-light')
    document.body.classList.toggle('is-dark')
}

document.getElementById('lightBtn').addEventListener('click', useLightTheme)
document.getElementById('darkBtn').addEventListener('click', useDarkTheme)
document.getElementById('switchBtn').addEventListener('click', switchTheme)


// Fazer um sistema para quando o player passar o mouse por cima da casa aparecer um pouco apagado o simbolo que ele está jogando (X ou O)