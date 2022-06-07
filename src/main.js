//to be deleted. Just to show the location of squares
const squares = document.querySelectorAll(".box");
Array.from(squares).forEach((item) => {
  item.innerHTML += `<span>${item.id}</span>`;
});
//

class Move {
  constructor(id) {
    this.id = id;
  }

  getPossibleMove() {
    const squares = document.querySelectorAll(".box");

    let pieceID = document.getElementById(this.id);

    pieceID.onclick = (e) => {
      //fow white pawn
      if (e.currentTarget.className === "w-pawn") {
        const currentPieceLocation = e.currentTarget.parentNode.id;
        let rowPossible = parseInt(currentPieceLocation[1]); //get the id number of the possible move
        let colPossible = currentPieceLocation[0]; //get the id letter of the possible move
        //filter the possible moves
        Array.from(squares).filter((item) => {
          const possibleMove = item.id.split("");
          let col = possibleMove[0];
          let row = parseInt(possibleMove[1]);
          //apply opacity on 1st square
          if (row === rowPossible + 1 && col === colPossible) {
            item.style.opacity = "0.2";
          }
          //apply opacity on 2nd square
          if (row === rowPossible + 2 && col === colPossible) {
            item.style.opacity = "0.2";
          }
        });
      }
    };
  }
}

//Just to run the method. How do we make this new instance argument dynamic?
const pawn = new Move("wp1");

pawn.getPossibleMove();
