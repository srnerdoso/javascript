function checkForPlayer() {
    if (document.getElementById('player-1') === null) {
        const teamList = document.getElementById('teamList')
        const h2 = document.createElement('h2')
        h2.innerText = 'Time'
        teamList.appendChild(h2)
    }
}

function addPlayer() {
    const position = document.getElementById('position').value
    const name = document.getElementById('name').value
    const number = document.getElementById('number').value

    const player = position + ": " + name + " (" + number + ")"

    const confirmation = confirm(
        "Confirmar informações do jogador?\n\n" + player
    )

    if (confirmation) {
        checkForPlayer()

        const teamList = document.getElementById('teamList')
        const playerItem = document.createElement('li')
        playerItem.id = 'player-' + number
        playerItem.innerText = player
        teamList.appendChild(playerItem)

        document.getElementById('position').value = ''
        document.getElementById('name').value = ''
        document.getElementById('number').value = ''
    }
}

function removePlayer() {
    const number = document.getElementById('numberToRemove').value
    const playerToRemove = document.getElementById('player-' + number)

    const confirmation = confirm('Remover o jogador: ' + playerToRemove.innerText + '?')

    if (confirmation) {
        document.getElementById('teamList').removeChild(playerToRemove)
        document.getElementById('numberToRemove').value = ''
    }
}