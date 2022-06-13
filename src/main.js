//to be deleted. Just to show the location of squares
const squares = document.querySelectorAll(".box");
Array.from(squares).forEach((item) => {
  // item.innerHTML += `<span>${item.id}</span>`;
});
//

//Just to run the method. How do we make this new instance argument dynamic?
// window.onload = () => {
//   renderPieces();
// };
class Move {
  constructor(id) {
    this.id = id;
    this.turn = "white";
  }

  changeTurn() {
    this.turn = this.turn === "white" ? "black" : "white";
    console.log(this.turn);
  }

  getWhitePossibleMoves() {
    this.turn = "white";
    const squares = document.querySelectorAll(".box");

    let pieceID = document.getElementById(this.id);

    pieceID.onclick = (e) => {
      if (this.turn === "white") {
        const currentPieceLocation = e.currentTarget.parentNode.id;
        let rowPossible = parseInt(currentPieceLocation[1]); //get the id number of the possible move
        let colPossible = currentPieceLocation[0]; //get the id letter of the possible move
        e.currentTarget.classList.remove("valid-move");
        ////////////// //white pawn
        const pawn = new Pawn(
          e.currentTarget.id,
          "white",
          this.rowPossible,
          this.colPossible
        );
        pawn.getMove(this.rowPossible, this.colPossible);

        /////////////////  white rook
        const rook = new Rook(
          e.currentTarget.id,
          "white",
          this.rowPossible,
          this.colPossible
        );
        rook.getMove(this.rowPossible, this.colPossible);
        //////////////// white king
        const king = new King(
          e.currentTarget.id,
          "white",
          this.rowPossible,
          this.colPossible
        );
        king.getMove(this.rowPossible, this.colPossible);
        //////////////// white queen
        const queen = new Queen(
          e.currentTarget.id,
          "white",
          this.rowPossible,
          this.colPossible
        );
        queen.getMove(this.rowPossible, this.colPossible);
      }
    };
  }

  getBlackPossibleMoves() {
    if (this.turn === "black") {
      const squares = document.querySelectorAll(".box");

      let pieceID = document.getElementById(this.id);

      pieceID.onclick = (e) => {
        const currentPieceLocation = e.currentTarget.parentNode.id;
        let rowPossible = parseInt(currentPieceLocation[1]); //get the id number of the possible move
        let colPossible = currentPieceLocation[0]; //get the id letter of the possible move

        //////////////// black pawn
        if (e.currentTarget.className === "b-pawn") {
          Array.from(squares).filter((item) => {
            const possibleMove = item.id.split("");
            let col = possibleMove[0];
            let row = parseInt(possibleMove[1]);

            let adjacentPiece = document.getElementById(
              colPossible + (rowPossible - 1).toString()
            );

            if (!adjacentPiece.hasChildNodes()) {
              for (let i = 0; i < 3; i++) {
                if (
                  item.hasChildNodes() === false &&
                  row === rowPossible - i &&
                  col === colPossible
                ) {
                  item.classList.toggle("valid-move");
                  item.onclick = () => {
                    // item.innerHTML = `<img class="b-pawn" id="bp1" src="./images/bp.png" alt="black pawn" />`;
                    item.append(pieceID);
                    // pieceID.parentNode.removeChild(pieceID);
                    Array.from(squares).forEach((square) => {
                      if (square.classList.contains("valid-move")) {
                        square.classList.remove("valid-move");
                      }
                    });
                  };
                  // if (!e.currentTarget.parentNode.hasChildNodes()) {
                  //
                  // }
                }
              }
            }
          });
        }

        //////////////// black rook
        if (e.currentTarget.className === "b-rook") {
          Array.from(squares).filter((item) => {
            const possibleMove = item.id.split("");
            let col = possibleMove[0];
            let row = parseInt(possibleMove[1]);

            let adjacentPiece = document.getElementById(
              colPossible + (rowPossible - 1).toString()
            );

            if (!adjacentPiece.hasChildNodes()) {
              for (let i = 0; i < 8; i++) {
                if (
                  item.hasChildNodes() === false &&
                  row === rowPossible - i &&
                  col === colPossible
                ) {
                  item.classList.toggle("valid-move");
                  item.onclick = () => {
                    // item.innerHTML = `<img class="b-rook" id="br1" src="./images/br.png" alt="black rbr.png">`;
                    // pieceID.parentNode.removeChild(pieceID);
                    item.append(pieceID);
                    Array.from(squares).forEach((square) => {
                      if (square.classList.contains("valid-move")) {
                        square.classList.remove("valid-move");
                      }
                    });
                  };
                  // if (!e.currentTarget.parentNode.hasChildNodes()) {
                  //
                  // }
                }
              }
            }
          });
        }

        //////////////// black king
        if (e.currentTarget.className === "b-king") {
          Array.from(squares).filter((item) => {
            const possibleMove = item.id.split("");
            let col = possibleMove[0];
            let row = parseInt(possibleMove[1]);

            let adjacentPiece = document.getElementById(
              colPossible + (rowPossible - 1).toString()
            );

            if (!adjacentPiece.hasChildNodes()) {
              for (let i = 0; i < 6; i++) {
                if (
                  item.hasChildNodes() === false &&
                  row === rowPossible - i &&
                  col === colPossible
                ) {
                  item.classList.toggle("valid-move");
                  item.onclick = () => {
                    // item.innerHTML = `<img class="b-king" id="bk" src="./images/bk.png" alt="black pawn" />`;
                    // pieceID.parentNode.removeChild(pieceID);
                    item.append(pieceID);
                    Array.from(squares).forEach((square) => {
                      if (square.classList.contains("valid-move")) {
                        square.classList.remove("valid-move");
                      }
                    });
                  };
                  // if (!e.currentTarget.parentNode.hasChildNodes()) {
                  //
                  // }
                }
              }
            }
          });
        }

        //////////////// black queen
        if (e.currentTarget.className === "b-queen") {
          Array.from(squares).filter((item) => {
            const possibleMove = item.id.split("");
            let col = possibleMove[0];
            let row = parseInt(possibleMove[1]);

            let adjacentPiece = document.getElementById(
              colPossible + (rowPossible - 1).toString()
            );

            if (!adjacentPiece.hasChildNodes()) {
              for (let i = 0; i < 9; i++) {
                if (
                  item.hasChildNodes() === false &&
                  row === rowPossible - i &&
                  col === colPossible
                ) {
                  item.classList.toggle("valid-move");
                  item.onclick = () => {
                    // item.innerHTML = `<img class="b-king" id="bk" src="./images/bk.png" alt="black pawn" />`;
                    // pieceID.parentNode.removeChild(pieceID);
                    item.append(pieceID);
                    Array.from(squares).forEach((square) => {
                      if (square.classList.contains("valid-move")) {
                        square.classList.remove("valid-move");
                      }
                    });
                  };
                  // if (!e.currentTarget.parentNode.hasChildNodes()) {
                  //
                  // }
                }
              }
            }
          });
        }
      };
    }
  }
}
class Pawn {
  constructor(id, color, row, col) {
    this.id = id;
    this.color = color;
    this.row = row;
    this.col = col;
  }
  getMove(row, col) {
    // const piece = new Move(this.id);
    // piece.getBlackPossibleMoves();
    // piece.getWhitePossibleMoves();
    //white pawn
    // if (e.currentTarget.className === "w-pawn" && this.turn === "white") {
    Array.from(squares).filter((item) => {
      const possibleMove = item.id.split("");
      let c = possibleMove[0];
      let r = parseInt(possibleMove[1]);
      //apply opacity on 1st square
      let adjacentPiece = document.getElementById(col + (row + 1).toString());

      if (!adjacentPiece.hasChildNodes() && this.turn === "white") {
        for (let i = 1; i < 3; i++) {
          if (!item.hasChildNodes() && r === row + i && c === col) {
            item.classList.toggle("valid-move");
            item.onclick = () => {
              // item.innerHTML = `<img class="b-pawn" id="bp1" src="./images/bp.png" alt="black pawn" />`;

              // pieceID.parentNode.removeChild(pieceID);
              Array.from(squares).forEach((square) => {
                if (square.classList.contains("valid-move")) {
                  square.classList.remove("valid-move");
                  item.append(pieceID);

                  // this.turn === "black";
                }
              });
              this.changeTurn();
            };
          }
        }
      }
    });
    // }
  }
}
class Rook extends Pawn {
  constructor() {
    super(id, color, row, col);
  }
  getMove() {
    // const piece = new Move(this.id);
    // piece.getBlackPossibleMoves();
    // piece.getWhitePossibleMoves();
    if (e.currentTarget.className === "w-rook" && this.turn === "white") {
      Array.from(squares).filter((item) => {
        const possibleMove = item.id.split("");
        let col = possibleMove[0];
        let row = parseInt(possibleMove[1]);

        let adjacentPiece = document.getElementById(
          colPossible + (rowPossible + 1).toString()
        );

        if (!adjacentPiece.hasChildNodes()) {
          if (
            ["A", "B", "C", "D", "E", "F", "G", "H"].includes(col) &&
            row === rowPossible &&
            this.turn === "white"
          ) {
            if (item.id !== currentPieceLocation) {
              item.classList.toggle("valid-move");
              //this function is repetitive. Let's create a method for this later
              item.onclick = () => {
                //item.append(pieceID); relocated inside
                Array.from(squares).forEach((square) => {
                  if (
                    square.classList.contains("valid-move") &&
                    this.turn === "white"
                  ) {
                    square.classList.remove("valid-move");
                    item.append(pieceID); //relocated this, here so player can't move the piece if the the squares have no 'valid-move' class

                    // this.changeTurn();
                    // this.turn === "black";
                    //
                  }
                  if (
                    !document
                      .getElementById(currentPieceLocation)
                      .hasChildNodes()
                  ) {
                  }
                });
                this.changeTurn();
              };
            }
          }

          for (let i = 1; i < 8; i++) {
            if (
              item.hasChildNodes() === false &&
              row === rowPossible + i &&
              col === colPossible &&
              this.turn === "white"
            ) {
              item.classList.toggle("valid-move");
              item.onclick = () => {
                // item.innerHTML = `<img class="b-rook" id="br1" src="./images/br.png" alt="black rbr.png">`;
                // pieceID.parentNode.removeChild(pieceID);

                Array.from(squares).forEach((square) => {
                  if (square.classList.contains("valid-move")) {
                    square.classList.remove("valid-move");
                    item.append(pieceID); //relocated here

                    // this.turn === "black";
                  }
                  if (
                    !document
                      .getElementById(currentPieceLocation)
                      .hasChildNodes()
                  ) {
                  }
                });
                this.changeTurn();
              };
            }
          }
        }
      });
    }
  }
}
class Knight extends Pawn {
  constructor() {
    super(id, color, row, col);
  }
  getMove() {
    const piece = new Move(this.id);
    piece.getBlackPossibleMoves();
    piece.getWhitePossibleMoves();
  }
}
class Bishop extends Pawn {
  constructor() {
    super(id, color, row, col);
  }
  getMove() {
    const piece = new Move(this.id);
    piece.getBlackPossibleMoves();
    piece.getWhitePossibleMoves();
  }
}
class Queen extends Pawn {
  constructor() {
    super(id, color, row, col);
  }
  getMove() {
    // const piece = new Move(this.id);
    // piece.getBlackPossibleMoves();
    // piece.getWhitePossibleMoves();
    if (e.currentTarget.className === "w-queen" && this.turn === "white") {
      Array.from(squares).filter((item) => {
        const possibleMove = item.id.split("");
        let col = possibleMove[0];
        let row = parseInt(possibleMove[1]);

        let adjacentPiece = document.getElementById(
          colPossible + (rowPossible + 1).toString()
        );

        // if (!adjacentPiece.hasChildNodes()) {
        for (let i = 0; i < 9; i++) {
          if (
            item.hasChildNodes() === false &&
            row === rowPossible + i &&
            col === colPossible
          ) {
            item.classList.toggle("valid-move");
            item.onclick = () => {
              // item.innerHTML = `<img class="b-king" id="bk" src="./images/bk.png" alt="black pawn" />`;
              // pieceID.parentNode.removeChild(pieceID);

              Array.from(squares).forEach((square) => {
                if (square.classList.contains("valid-move")) {
                  square.classList.remove("valid-move");
                  item.append(pieceID);
                  this.changeTurn();
                  // renderPieces();
                  // this.turn === "black";
                }
              });
              this.changeTurn();
            };
            if (!e.currentTarget.parentNode.hasChildNodes()) {
            }
          }
        }
        // }
      });
    }
  }
}
class King extends Pawn {
  constructor() {
    super(id, color, row, col);
  }
  getMove() {
    // const piece = new Move(this.id);
    // piece.getBlackPossibleMoves();
    // piece.getWhitePossibleMoves();
    if (e.currentTarget.className === "w-king" && this.turn === "white") {
      Array.from(squares).filter((item) => {
        const possibleMove = item.id.split("");
        let col = possibleMove[0];
        let row = parseInt(possibleMove[1]);
        console.log("cl");

        let adjacentPiece = document.getElementById(
          colPossible + (rowPossible + 1).toString()
        );

        if (!adjacentPiece.hasChildNodes()) {
          for (let i = 0; i < 3; i++) {
            if (
              item.hasChildNodes() === false &&
              row === rowPossible + i &&
              col === colPossible
            ) {
              item.classList.toggle("valid-move");
              item.onclick = () => {
                console.log("clicked");
                // item.innerHTML = `<img class="b-king" id="bk" src="./images/bk.png" alt="black pawn" />`;
                // pieceID.parentNode.removeChild(pieceID);

                Array.from(squares).forEach((square) => {
                  if (square.classList.contains("valid-move")) {
                    item.append(pieceID);
                    square.classList.remove("valid-move");
                    // this.changeTurn();
                    // this.turn === "black";
                  }
                });
                this.changeTurn();
              };
              // if (!e.currentTarget.parentNode.hasChildNodes()) {
              //
              // }
            }
          }
        }
      });
    }
  }
}
class Game {
  constructor() {
    this.newGame();
  }
  newGame() {
    const p1 = new Move("bp1");
    const p2 = new Move("bp2");
    const p3 = new Move("bp3");
    const p4 = new Move("bp4");
    const p5 = new Move("bp5");
    const p6 = new Move("bp6");
    const p7 = new Move("bp7");
    const p8 = new Move("bp8");
    const r1 = new Move("br1");
    const r2 = new Move("br2");
    const bk = new Move("bk");
    const bq = new Move("bq");

    p1.getBlackPossibleMoves();
    p2.getBlackPossibleMoves();
    p3.getBlackPossibleMoves();
    p4.getBlackPossibleMoves();
    p5.getBlackPossibleMoves();
    p6.getBlackPossibleMoves();
    p7.getBlackPossibleMoves();
    p8.getBlackPossibleMoves();
    r1.getBlackPossibleMoves();
    r2.getBlackPossibleMoves();
    bk.getBlackPossibleMoves();
    bq.getBlackPossibleMoves();

    const wp1 = new Move("wp1");
    const wp2 = new Move("wp2");
    const wp3 = new Move("wp3");
    const wp4 = new Move("wp4");
    const wp5 = new Move("wp5");
    const wp6 = new Move("wp6");
    const wp7 = new Move("wp7");
    const wp8 = new Move("wp8");
    const wr1 = new Move("wr1");
    const wr2 = new Move("wr2");
    const wk = new Move("wk");
    const wq = new Move("wq");

    wp1.getWhitePossibleMoves();
    wp2.getWhitePossibleMoves();
    wp3.getWhitePossibleMoves();
    wp4.getWhitePossibleMoves();
    wp5.getWhitePossibleMoves();
    wp6.getWhitePossibleMoves();
    wp7.getWhitePossibleMoves();
    wp8.getWhitePossibleMoves();
    wr1.getWhitePossibleMoves();
    wr2.getWhitePossibleMoves();
    wk.getWhitePossibleMoves();
    wq.getWhitePossibleMoves();
  }
}
const game = new Game();
game.newGame();
// const p1 = new Piece("bp1");
// const p2 = new Piece("bp2");
// const p3 = new Piece("bp3");
// const p4 = new Piece("bp4");
// const p5 = new Piece("bp5");
// const p6 = new Piece("bp6");
// const p7 = new Piece("bp7");
// const p8 = new Piece("bp8");
// const r1 = new Piece("br1");
// const r2 = new Piece("br2");
// const bk = new Piece("bk");
// const bq = new Piece("bq");

// p1.getBlackPossibleMoves();
// p2.getBlackPossibleMoves();
// p3.getBlackPossibleMoves();
// p4.getBlackPossibleMoves();
// p5.getBlackPossibleMoves();
// p6.getBlackPossibleMoves();
// p7.getBlackPossibleMoves();
// p8.getBlackPossibleMoves();
// r1.getBlackPossibleMoves();
// r2.getBlackPossibleMoves();
// bk.getBlackPossibleMoves();
// bq.getBlackPossibleMoves();

// const wp1 = new Piece("wp1");
// const wp2 = new Piece("wp2");
// const wp3 = new Piece("wp3");
// const wp4 = new Piece("wp4");
// const wp5 = new Piece("wp5");
// const wp6 = new Piece("wp6");
// const wp7 = new Piece("wp7");
// const wp8 = new Piece("wp8");
// const wr1 = new Piece("wr1");
// const wr2 = new Piece("wr2");
// const wk = new Piece("wk");
// const wq = new Piece("wq");

// wp1.getWhitePossibleMoves();
// wp2.getWhitePossibleMoves();
// wp3.getWhitePossibleMoves();
// wp4.getWhitePossibleMoves();
// wp5.getWhitePossibleMoves();
// wp6.getWhitePossibleMoves();
// wp7.getWhitePossibleMoves();
// wp8.getWhitePossibleMoves();
// wr1.getWhitePossibleMoves();
// wr2.getWhitePossibleMoves();
// wk.getWhitePossibleMoves();
// wq.getWhitePossibleMoves();
//back-up
