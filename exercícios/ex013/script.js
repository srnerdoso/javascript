const options = ["x", "o"];
const winers = [];

const p1Name = document.getElementById("p1Name")
const p2Name = document.getElementById("p2Name")

const playersContainer = document.getElementById("playersContainer").children;
const player1Li = playersContainer[0];
const player2Li = playersContainer[1];

function getPlayersNames() {
  if (p1Name.value !== "" && p2Name.value === "") {
    player1Li.innerText = p1Name.value
  } else if (p2Name.value !== "" && p1Name === "") {
    player2Li.innerText = p2Name.value
  } else if (p1Name.value !== "" && p2Name.value !== "") {
    player1Li.innerText = p1Name.value
    player2Li.innerText = p2Name.value
  }
}

let buttonIndex = 0;
function initializeGameScene() {
  getPlayersNames()

  document.getElementById("home-screen").style.display = "none";
  document.getElementById("game-screen").style.display = "block";
}

let playerIndex = 0;

function getCurrentPLayer() {
  if (playerIndex === 0) {
    return player1Li.innerText
  } else {
    return player2Li.innerText
  }
}

function getCurrentOption() {
  return options[playerIndex];
}

function switchPlayer() {
  playerIndex = (playerIndex + 1) % options.length;

  togglePlayer(player1Li, player2Li);
}

function switchSquareHover(optionClass, option) {
  document.querySelectorAll(optionClass).forEach(function (optionIndex) {
    optionIndex.classList = option;
  });
}

function togglePlayer(player1, player2) {
  if (playerIndex === 0) {
    player1.className = "selected-player";
    player2.className = "player-select";

    switchSquareHover(".squares-o", "squares-x");
  } else {
    player1.className = "player-select";
    player2.className = "selected-player";

    switchSquareHover(".squares-x", "squares-o");
  }
}

function createModalWin() {
  const div = document.createElement("div");
  const h2 = document.createElement("h2");
  const p = document.createElement("p");
  const button = document.createElement("button");

  div.id = "winner-modal";
  h2.innerText = "WIN!";
  p.innerText = getCurrentPLayer() + " VENCEU!";
  button.onclick = "resetGame()";
  button.innerText = "Jogar novamente";

  div.append(h2, p, button);
  document.querySelector("main").appendChild(div);
}

function disableSquares(optionClass) {
  document.querySelectorAll(optionClass).forEach(function (option) {
    option.className = "squares-clicked";
    option.disabled = true;
  });
}

function getPlayerMove(buttonSquare) {
  let win = false;
  buttonSquare.addEventListener("click", function () {
    togglePlayer(player2Li, player1Li);

    buttonSquare.className = "squares-clicked";
    buttonSquare.innerText = getCurrentOption().toUpperCase();
    buttonSquare.disabled = true;

    for (let i = 0; i < 8; i++) {
      if (checkWin(i)) {
        win = checkWin(i);
        createModalWin();
        
        break;
      }
    }

    if (!win) {
      switchPlayer();
    } else if (playerIndex === 0) {
      disableSquares(".squares-x");
    } else if (playerIndex === 1) {
      disableSquares(".squares-o");
    }
  });
}

function play() {
  initializeGameScene();

  document
    .getElementById("buttons-container")
    .childNodes.forEach(function (square) {
      getPlayerMove(square);
    });
}

function resetGame() {
  document.getElementById("winner-modal").style.display = "none"

  const squares = document.querySelectorAll(".squares-clicked");
  squares.forEach(function (square) {
    square.classList = "squares-x";
    square.innerText = "";
    square.disabled = false;
  });
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

  const squares = document.getElementById("buttons-container").children;

  let optionsIndex0 = options[0].toUpperCase();

  let position1 = squares[wins[index].position1].innerText == optionsIndex0;
  let position2 = squares[wins[index].position2].innerText == optionsIndex0;
  let position3 = squares[wins[index].position3].innerText == optionsIndex0;

  return position1 + position2 + position3 === 3;
}

function checkGameOutcome() {}

const playBtn = document.getElementById("playBtn");
playBtn.addEventListener("click", function () {
  document.querySelector("main").id = "display";
  document.querySelector("h1").id = "tic-tac-hoe";

  play();
});
