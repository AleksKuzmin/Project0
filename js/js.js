



let move ="o"
let board = [
  [null,null,null],
  [null,null,null],
  [null,null,null]
];




function alternateMove() {
  move = move === 'x' ? 'o' : 'x';
  return move
  // if(move === 'x') {
  //   move = 'o'
  // }else {
  //   move = 'x'
  // }
}

for (let i =0; board.length; i++) {
    let rows = board[i];
    console.log(rows)

 }
// function checkWin () {
//  for (let i =0; board.length; i++) {
//    let rows = board[i];
//
//  }
// }
//  for (let j = 0; j < innerArrayLength; j++) {
//    if(
//  }
//   //// TODO: implement method to check if game has a winner or draw

//




$(document).ready(function() {


 $('.cell').on('click',function(event) {
      const cellId = + event.target.id;


      const row = Math.trunc( cellId / 3 );
      const col = cellId % 3;

      if(!board[row][col]) {
        // null ===false if "!" means 'true'
        $('#player').text(move)
        const currentMove = alternateMove();
        board[row][col] = currentMove;
        event.target.innerHTML = currentMove;
        //heckWin()
      }

      console.table(board)
      console.log(row,col)

    });
    });

   // const cellID = event.target.id
   // // select all cells with class 'cells'
   // //event-eventlistener reacts on click
   // //target - gets all ID from cells, so we get ID's by simpy clicking a cell.
   // console.dir(cellID)




  // $('#0').on('click', function () {
  //   $('#0').text("x")
  //
  //
  //
  // });
  //
  // $('#1').on('click', function () {
  //   $('#1').text("x")
  //
  //
  // });
  // $('#2').on('click', function () {
  // $('#2').text("x")
  //
  //
  // });
  // $('#3').on('click', function () {
  //   $('#3').text("x")
  //
  // });
  // $('#4').on('click', function () {
  //   $('#4').text("x")
  //
  // });
  // $('#5').on('click', function () {
  //   $('#5').text("x")
  //
  // });
  // $('#6').on('click', function () {
  //   $('#6').text("x")
  //
  // });
  // $('#7').on('click', function () {
  //   $('#7').text("x")
  //
  // });
  // $('#8').on('click', function () {
  //   $('#8').text("x")
  //
  // });
  //


// $(document).ready(function() {
// $('#11').on('click', function (){
//   $('#11').addClass('cross');
// });
//
// $('#12').on('click', function () {
//   $('#12').addClass('cross');
// });
// $('#13').on('click', function () {
//   $('#13').addClass('cross');
// });
// $('#21').on('click', function () {
//   $('#21').addClass('cross');
// });
// $('#22').on('click', function () {
//   $('#22').addClass('cross');
// });
// $('#23').on('click', function () {
//   $('#23').addClass('cross');
// });
// $('#31').on('click', function () {
//   $('#31').addClass('cross');
// });
// $('#32').on('click', function () {
//   $('#32').addClass('cross');
// });
//
// $('#33').on('click', function () {
//   $('#33').addClass('cross');
// });
//
// });
// Use your Development Tools (console.log, inspector, alert statements, etc) to debug and solve problems
// Work through the lessons in class, ask questions and come to office hours when you need to. Think about adding relevant code to your Tic Tac Toe game each night, instead of, you know... procrastinating.
// Commit early, commit often. Don’t be afraid to break something because you can always go back in time to a previous version.
// Check out Tutorial and Documentation resources (jQuery tutorial) at home to better understand what you’ll be getting into.
