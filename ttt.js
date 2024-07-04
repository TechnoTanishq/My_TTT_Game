let boxes = document.querySelectorAll("#box");
let resetBtn = document.querySelector("#reset");
let label1 = document.querySelector("#label");

const player1Name = localStorage.getItem('player1Name') || 'Player 1';
const player2Name = localStorage.getItem('player2Name') || 'Player 2';

let nameofX = document.querySelector("#plyr");
nameofX.innerText = player1Name;

let turn1 = true; // player1 = X (true)
let count = 0;

const winPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const winnerCheck = () => {
  for (let p of winPattern) {
    let pos1 = boxes[p[0]].innerText;
    let pos2 = boxes[p[1]].innerText;
    let pos3 = boxes[p[2]].innerText;

    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 == pos2 && pos2 == pos3) {
        console.log("Winner is ", pos1);
        label1.innerText = `Congratulations ${pos1 === 'X' ? player1Name : player2Name} is the Winner!`;
        boxes.forEach((box) => {
          box.disabled = true;
        });
        return;
      }
    }
  }

  // Check for a draw
  count++;
  if (count === 9) {
    label1.innerText = "Match Draw, Play Again";
  }
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (box.innerText === "") {
      if (turn1) {
        box.innerText = "X";
        label1.innerText = `${player2Name}'s turn`;
        turn1 = false;
      } else {
        box.innerText = "O";
        label1.innerText = `${player1Name}'s turn`;
        turn1 = true;
      }
      winnerCheck();
    }
  });
});

// reset btn
resetBtn.addEventListener("click", () => {
  boxes.forEach((box) => {
    box.innerText = "";
    box.disabled = false;
  });
  turn1 = true;
  count = 0;
  label1.innerText = "Play";
});

// home btn functionality
let homeBtn = document.querySelector("#home");
homeBtn.addEventListener("click", () => {
  console.log("home btn clicked");
  let res = confirm(
    "Are you sure you want to go back? You will lose your progress"
  );
  if (res) {
    window.location.href = "index.html";
  }
});
