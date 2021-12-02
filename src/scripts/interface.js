let squares = document.querySelectorAll('.squere');
let resutls = document.querySelector('.results')

document.addEventListener('DOMContentLoaded', () => {

  // let squares = document.querySelectorAll('.squere');

  squares.forEach((square) => {
    square.addEventListener('click', handleClick);
  })
})

function handleClick (event) {

  let square = event.target;
  let postion = square.id;

  if(handleMove(postion)) {
    let symbol
    setTimeout(() => {
      // alert(`O Jogo Acabou - O Vencedor foi ${playerTime}`)
      if(playerTime === 0) {
        symbol = '🐹'
      } else {
        symbol = '🦊'
      }
      resutls.innerHTML = `O Jogo Acabou - O Vencedor foi o ${symbol}`
    }, 10);
  };
  updateSquare(postion);
}

function updateSquare(postion) {
  let square = document.getElementById(postion.toString());
  let symbol = board[postion];
  square.innerHTML = `<div class=${symbol}></div>`
}

const restartButton = document.querySelector('.startGame');

restartButton.addEventListener("click", () => {
  handleReset();
});

//Resetando o Button
function handleReset() {
  clearBoard();
  resetPlayerTurn();
  resetGameOverState();
  resutls.innerHTML = ""
  squares.forEach((square) => {
    square.classList.remove('x');
    square.classList.remove('o');
    square.innerHTML = ""
  });
}

