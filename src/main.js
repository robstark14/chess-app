//to be deleted. Just to show the location of squares
// const squares = document.querySelectorAll(".box");
// Array.from(squares).forEach((item) => {
//   item.innerHTML += `<span>${item.id}</span>`;
// });
//
// class piece{
//   constructor(color,pattern,currentLocation){
//     this.color=color,
//     this.pattern=pattern,
//     this.currentLocation=currentLocation
//   }

// }
class Move {
  constructor(id) {
    this.id = id;
  }

  getWhitePossibleMoves() {
    const squares = document.querySelectorAll(".box");

    let pieceID = document.getElementById(this.id);

    pieceID.onclick = (e) => {
      //fow white pawn
      const currentPieceLocation = e.currentTarget.parentNode.id;
      let rowPossible = parseInt(currentPieceLocation[1]); //get the id number of the possible move
      let colPossible = currentPieceLocation[0]; //get the id letter of the possible move
      if (e.currentTarget.className === "w-pawn") {
        //filter the possible moves
        Array.from(squares).filter((item) => {
          const possibleMove = item.id.split("");
          let col = possibleMove[0];
          let row = parseInt(possibleMove[1]);
          //apply opacity on 1st square
          if (row === rowPossible + 1 && col === colPossible) {
            item.classList.toggle("valid-move");
          }
          //apply opacity on 2nd square
          if (row === rowPossible + 2 && col === colPossible) {
            item.classList.toggle("valid-move");
          }
        });
      }
      //move pattern for the white rook
      if (e.currentTarget.className === "w-rook") {
        Array.from(squares).filter((item) => {
          const possibleMove = item.id.split("");
          let col = possibleMove[0];
          let row = parseInt(possibleMove[1]);
          //apply opacity on 1st square
          let adjacentPiece = document.getElementById(
            colPossible + (rowPossible + 1).toString()
          );
          // let blackOnPossibleCapture = document.querySelectorAll(".black");
          // let possibleCapture = document.getElementById(
          //   colPossible + (rowPossible + 1).toString()
          // );
          // let possibleCapture=Array.from(blackOnPossibleCapture).firstChild.id
          if (!adjacentPiece.hasChildNodes()) {
            for (let i = 1; i < 8; i++) {
              if (
                !item.hasChildNodes() &&
                row === rowPossible + i &&
                col === colPossible
              ) {
                item.classList.toggle("valid-move");
                item.onclick = () => {
                  item.innerHTML = `<img class="w-rook" id="wr1" src="./images/wr.png" alt="white rook" />`;
                  pieceID.parentNode.removeChild(pieceID);
                };
                if (!e.currentTarget.parentNode.hasChildNodes()) {
                  break;
                }
                console.log("roooookkkkk");
              }
            }
          }
        });
      }
    };
  }
}

//Just to run the method. How do we make this new instance argument dynamic?
const piece = new Move("wr1");

piece.getWhitePossibleMoves();
