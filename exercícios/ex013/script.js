const players = ["x", "o"];

let buttonIndex = 0;
function createButtons() {
  const div = document.createElement("div");
  div.id = "buttons-container";
  document.querySelector("main").appendChild(div);

  for (let i = 0; i < 9; i++) {
    const button = document.createElement("button");
    button.id = "square-" + buttonIndex;
    button.className = "squares";

    buttonIndex++;

    div.appendChild(button);
  }
}

let playerIndex = 0;
function getCurrentPlayer() {
  return players[playerIndex];
}

function switchPlayer() {
  playerIndex = (playerIndex + 1) % players.length;
}

function getPlayerMove(buttonSquare) {
  let mouseoverEvent = function () {
    buttonSquare.className = "squares-" + getCurrentPlayer() + "-hover";
  };

  buttonSquare.addEventListener("mouseover", mouseoverEvent);

  buttonSquare.addEventListener("click", function () {
    buttonSquare.removeEventListener("mouseover", mouseoverEvent);

    buttonSquare.className = "squares-clicked";
    buttonSquare.innerText = getCurrentPlayer().toUpperCase();

    buttonSquare.disabled = true;

    switchPlayer();
  });

  return;
}

function play() {
  createButtons();

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

function checkWin() {
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

  const squares = document.querySelectorAll(".squares");

  const verifyList = [];

  let pos1;
  let pos2;
  let pos3;
  for (let i = 0; i < 8; i++) {
    pos1 =
      squares[wins[i].position1].textContent === getCurrentPlayer().toUpperCase();
    pos2 =
      squares[wins[i].position2].textContent === getCurrentPlayer().toUpperCase();
    pos3 =
      squares[wins[i].position3].textContent === getCurrentPlayer().toUpperCase();

    if (pos1 && pos2 && pos3) {
      verifyList.push(pos1, pos2, pos3);
    }
  }
}

function checkGameOutcome() {}

const playBtn = document.getElementById("playBtn");
playBtn.addEventListener("click", function () {
  document.querySelector("main").id = "display";
  document.querySelector("h1").id = "tic-tac-hoe";

  play();

  playBtn.remove();
});
