
let gameInProgress = true;

let move ="O"
let board = [
  [null,null,null],
  [null,null,null],
  [null,null,null]
];

//audio section
const audio1 = new Audio('sounds/mortal_kombat start.mp3');
audio1.volume = 0.02;

function playDraw() {
  const audio = new Audio('sounds/laughing.mp3');
  audio.play();
  audio.volume = 0.3
}

function gameEnds() {
  const audio = new Audio('sounds/sound.mp3');
  audio.play();
  audio.volume = 0.3
   $('.cell').off();

}

function play() {
  const audio1 = new Audio('sounds/mortal_kombat start.mp3');

  audio1.play();
  audio1= audio1.pause()
  audio1.volume = 0.03

}

//restart section
function restart() {
  setUpEvenListeners()
  audio1.play();
  gameInProgress = true;
  move = "O";
  board = [
    [null,null,null],
    [null,null,null],
    [null,null,null]
  ];

  for (let i=0; i < 9; i ++) {
    $(`#${i}`).text('');
    $(`#${i}`).removeClass('cross--y')
    $(`#${i}`).removeClass('cross--x')
    $(`#${i}`).removeClass('cross--diagonal-a')
    $(`#${i}`).removeClass('cross--diagonal-b')
  }
  $('#header').html('Current Player: <label id="player">x</label>')
}


//player changes
function alternateMove() {
  move = move === 'X' ? 'O' : 'X';
  return move

}
// check winner
function checkWin() {
  let hasMoves = false;

for(let i=0; i < board.length; i++) {
  let comboRow = [];
  let comboCol = [];


  for(let j=0; j <board.length; j++) {
    if(!board[j][i]) hasMoves = true; // checking if we have empty cells aka null
    comboCol.push(board[j][i]);
    comboRow.push(board[i][j]);

};
if(comboCol[0] !== null && new Set(comboCol).size ==1) {
  gameInProgress = false;
  $('#header').text(`Player ${comboCol[0]} wins!`)

  $(`#${i}`).addClass('cross--y')
  $(`#${3+i}`).addClass('cross--y')
  $(`#${6+i}`).addClass('cross--y')
  gameEnds()

}
if(comboRow[0] !== null && new Set(comboRow).size == 1) {
  gameInProgress = false;
  $('#header').text(`Player ${comboRow[0]} wins`)
  $(`#${i*3}`).addClass('cross--x')
  $(`#${i*3+1}`).addClass('cross--x')
  $(`#${i*3+2}`).addClass('cross--x')
  gameEnds()
}
}

//diagonal check

let comboA = [board[0][0], board[1][1], board[2][2]];
let comboB = [board [0][2], board[1][1], board[2][0]];

if (comboA[0] && new Set(comboA).size == 1) {
  gameInProgress =false;
  $('#header').text(`Player ${comboA[0]} wins!`)
  $(`#4`).addClass('cross--diagonal-a')

  gameEnds()
}
if (comboB[0] && new Set(comboB).size == 1) {
  gameInProgress =false;
  $('#header').text(`Player ${comboB[0]} wins!`)
  $(`#4`).addClass('cross--diagonal-b')

  gameEnds()
}
if (!hasMoves && gameInProgress) {
  gameInProgress = false;
  $("#header").text ('Draw game!')
  playDraw()
}
}

function setUpEvenListeners() {
  $('.cell').on('click',function(event) {
     const cellId = + event.target.id;
     const row = Math.trunc( cellId / 3 ); // whole number
     const col = cellId % 3;
     if(!board[row][col]) {
       // null ===false if "!" means 'true'
       $('#player').text(move)
       const currentMove = alternateMove();
       board[row][col] = currentMove;
       event.target.innerHTML = currentMove;
       checkWin()

       }
     });
}


// dom manipulation
$(document).ready(function() {
 setUpEvenListeners()
});
