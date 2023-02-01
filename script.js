console.log("Welcome to Tic Tac Toe");
let overMusic = new Audio("media/gameover.wav");
let turnMusic = new Audio("media/click.wav");
let winMusic = new Audio("media/win.wav");
let turn = "x";
let winner = false;

// Change turn
const changeTurn = () => {
  return turn === "x" ? "0" : "x";
};
// Check win
const checkWin = () => {
  let boxTexts = document.getElementsByClassName("boxText");
  win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  win.forEach((e) => {
    if (
      boxTexts[e[0]].innerText === boxTexts[e[1]].innerText &&
      boxTexts[e[0]].innerText === boxTexts[e[2]].innerText &&
      boxTexts[e[0]].innerText !== ""
    ) {
      winner = true;
    }
  });
};
// Game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
  let boxText = element.querySelector(".boxText");
  element.addEventListener("click", () => {
    if (boxText.innerText === "") {
      boxText.innerText = turn;
      turn = changeTurn();
      turnMusic.play();
      checkWin();
      if (winner) {
        winMusic.play();
        document.getElementsByTagName("img")[0].style.height = "30vh";
        turn = changeTurn();
        document.getElementsByClassName("info")[0].innerText = turn + " Wins";
      } else
        document.getElementsByClassName("info")[0].innerText =
          "Turn for " + turn;
    }
  });
});
document.getElementById("reset").addEventListener("click", () => {
  Array.from(boxes).forEach((element) => {
    element.querySelector(".boxText").innerText = "";
  });
  document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
  winner = false;
  document.getElementsByTagName("img")[0].style.height = "0vh";
});
