const options = ["x", "o"];
const players = []

let buttonIndex = 0;
function initializeGameScene() {
  const div = document.createElement("div");
  div.id = "buttons-container";
  document.querySelector("main").appendChild(div);

  const playersContainer = document.getElementById("players-container")
  const p1Name = document.getElementById("p1Name").value
  const p2Name = document.getElementById("p2Name").value

  players.push(p1Name, p2Name)

  const h2 = document.createElement("h2")
  h2.innerText = "Jogadores:"
  playersContainer.appendChild(h2)

  const p1 = document.createElement("p")
  p1.className = "player-select"
  p1.innerText = p1Name
  const p2 = document.createElement("p")
  p2.className = "player-select"
  p2.innerText = p2Name

  playersContainer.append(p1, p2)
  playersContainer.id = "playersContainer"

  for (let i = 0; i < 9; i++) {
    const button = document.createElement("button");
    // button.id = "square-" + buttonIndex;
    button.className = "squares";

    buttonIndex++;

    div.appendChild(button);
  }

  document.getElementById("player1").remove()
  document.getElementById("player2").remove()
}

let playerIndex = 0;

function getCurrentPLayer() {
  return players[playerIndex]
}

function getCurrentOption() {
  return options[playerIndex];
}

function switchPlayer() {
  playerIndex = (playerIndex + 1) % players.length;

  const playersList = document.querySelectorAll("p")
  togglePlayer(playersList[0], playersList[1])
}

function togglePlayer(player1, player2) {
  if (playerIndex === 0) {
    player1.className = "selected-player"
    player2.className = "player-select"
  } else {
    player1.className = "player-select"
    player2.className = "selected-player"
  }
}

function getPlayerMove(buttonSquare) {
  const playersList = document.querySelectorAll("p")
  togglePlayer(playersList[0], playersList[1])
  
  let mouseoverEvent = function () {
    buttonSquare.className = "squares-" + getCurrentOption() + "-hover";
  };

  buttonSquare.addEventListener("mouseover", mouseoverEvent);

  let win = false
  buttonSquare.addEventListener("click", function () {
    buttonSquare.removeEventListener("mouseover", mouseoverEvent);

    buttonSquare.className = "squares-clicked";
    buttonSquare.innerText = getCurrentOption().toUpperCase();

    buttonSquare.disabled = true;

    for (let i = 0; i < 8; i++) {
      if (checkWin(i)) {
        win = checkWin(i)
        break
      }
    }

    if (win) {
      for (let i = 0; i < 9; i++) {
        const buttons = document.getElementById("buttons-container").children
        buttons[i].removeEventListener("mouseover", mouseoverEvent)
        // buttons[i].className = "squares-clicked"   Sem funcionar por enquanto, tentarei resolver amanhã
        buttons[i].disabled = true
      }

      console.log("FUNCIONOU!!!!!!!")
    }

    switchPlayer();
  });

  return;
}

function play() {
  initializeGameScene();

  document.querySelectorAll(".squares").forEach(function (square) {
    getPlayerMove(square);
  });
}

function resetGame() {
  const squares = document.querySelectorAll(".squares");
  squares.forEach(function (square) {
    square.remove();
  });

  play();
}

function checkWin(index) {
  const wins = [
    { position1: 0, position2: 1, position3: 2 },
    { position1: 3, position2: 4, position3: 5 },
    { position1: 6, position2: 7, position3: 8 },

    { position1: 0, position2: 3, position3: 6 },
    { position1: 1, position2: 4, position3: 7 },
    { position1: 2, position2: 5, position3: 8 },

    { position1: 0, position2: 4, position3: 8 },
    { position1: 2, position2: 4, position3: 6 },
  ];

  const squares = document.getElementById("buttons-container").children

  let optionsIndex0 = options[0].toUpperCase()

  let position1 = squares[wins[index].position1].innerText == optionsIndex0
  let position2 = squares[wins[index].position2].innerText == optionsIndex0
  let position3 = squares[wins[index].position3].innerText == optionsIndex0

  return position1 + position2 + position3 === 3
}

function checkGameOutcome() {}

const playBtn = document.getElementById("playBtn");
playBtn.addEventListener("click", function () {
  document.querySelector("main").id = "display";
  document.querySelector("h1").id = "tic-tac-hoe";

  play();

  playBtn.remove();
});
