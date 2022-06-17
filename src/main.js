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
  constructor(id, type, turn) {
    (this.id = id), (this.type = type);
    this.currentPieceLocation,
      this.rowPossible,
      this.colPossible,
      (this.turn = turn);
  }

  // changeTurn() {
  //   this.turn = this.turn === "white" ? "black" : "white";
  //   console.log(this.turn);
  // }

  getWhitePossibleMoves() {
    // const squares = document.querySelectorAll(".box");

    let pieceID = document.getElementById(this.id);

    pieceID.onclick = (e) => {
      // if (this.turn === "white") {

      this.currentPieceLocation = e.currentTarget.parentNode.id;
      console.log(this.currentPieceLocation);
      this.rowPossible = parseInt(this.currentPieceLocation[1]); //get the id number of the possible move
      console.log(this.rowPossible);
      this.colPossible = this.currentPieceLocation[0]; //get the id letter of the possible move
      console.log(this.colPossible);
      // e.currentTarget.classList.remove("valid-move");
      ////////////// //white pawn
      if (this.type === "pawn") {
        const whitePawn = new Pawn(
          e.currentTarget.id,
          "white",
          this.rowPossible,
          this.colPossible
        );
        whitePawn.getMove(this.rowPossible, this.colPossible);
      }
      /////////////  white rook
      if (this.type === "rook") {
        const rook = new Rook(
          e.currentTarget.id,
          this.rowPossible,
          this.colPossible
        );
        rook.getMove(this.rowPossible, this.colPossible);
      }
      //////// white bishop
      if (this.type === "bishop") {
        const bishop = new Bishop(
          e.currentTarget.id,
          this.rowPossible,
          this.colPossible
        );

        bishop.getMove(this.rowPossible, this.colPossible);
      }
      // //////////////// white king
      // const king = new King(
      //   e.currentTarget.id,
      //   "white",
      //   this.rowPossible,
      //   this.colPossible
      // );
      // king.getMove(this.rowPossible, this.colPossible);
      // //////////////// white queen
      // const queen = new Queen(
      //   e.currentTarget.id,
      //   "white",
      //   this.rowPossible,
      //   this.colPossible
      // );
      // queen.getMove(e.currentTarget.id);
      // }
    };
    // }
  }
  getBlackPossibleMoves() {
    // const squares = document.querySelectorAll(".box");

    let pieceID = document.getElementById(this.id);

    pieceID.onclick = (e) => {
      // if (this.turn === "white") {

      this.currentPieceLocation = e.currentTarget.parentNode.id;
      console.log(this.currentPieceLocation);
      this.rowPossible = parseInt(this.currentPieceLocation[1]); //get the id number of the possible move
      console.log(this.rowPossible);
      this.colPossible = this.currentPieceLocation[0]; //get the id letter of the possible move
      console.log(this.colPossible);
      // e.currentTarget.classList.remove("valid-move");
      ////////////// //white pawn
      if (this.type === "pawn") {
        const blackPawn = new Pawn(
          e.currentTarget.id,
          "black",
          this.rowPossible,
          this.colPossible
        );
        // if (this.turn === "black") {

        // } else {
        blackPawn.getMove(this.rowPossible, this.colPossible);
      }
      // }
      ///////////////  white rook
      if (this.type === "rook") {
        const rook = new Rook(
          e.currentTarget.id,
          this.rowPossible,
          this.colPossible
        );
        rook.getMove(this.rowPossible, this.colPossible);
      } //////// white bishop
      // const bishop = new Bishop(
      //   e.currentTarget.id,
      //   this.rowPossible,
      //   this.colPossible
      // );
      // bishop.getMove(this.rowPossible, this.colPossible);
      // //////////////// white king
      // const king = new King(
      //   e.currentTarget.id,
      //   "white",
      //   this.rowPossible,
      //   this.colPossible
      // );
      // king.getMove(this.rowPossible, this.colPossible);
      // //////////////// white queen
      // const queen = new Queen(
      //   e.currentTarget.id,
      //   "white",
      //   this.rowPossible,
      //   this.colPossible
      // );
      // queen.getMove(e.currentTarget.id);
      // }
    };
  }
  // getBlackPossibleMoves() {
  //   if (this.turn === "black") {
  //     const squares = document.querySelectorAll(".box");

  //     let pieceID = document.getElementById(this.id);

  //     pieceID.onclick = (e) => {
  //       const currentPieceLocation = e.currentTarget.parentNode.id;
  //       let rowPossible = parseInt(currentPieceLocation[1]); //get the id number of the possible move
  //       let colPossible = currentPieceLocation[0]; //get the id letter of the possible move

  //       //////////////// black pawn
  //       if (e.currentTarget.className === "b-pawn") {
  //         Array.from(squares).filter((item) => {
  //           const possibleMove = item.id.split("");
  //           let col = possibleMove[0];
  //           let row = parseInt(possibleMove[1]);

  //           let adjacentPiece = document.getElementById(
  //             colPossible + (rowPossible - 1).toString()
  //           );

  //           if (!adjacentPiece.hasChildNodes()) {
  //             for (let i = 0; i < 3; i++) {
  //               if (
  //                 item.hasChildNodes() === false &&
  //                 row === rowPossible - i &&
  //                 col === colPossible
  //               ) {
  //                 item.classList.toggle("valid-move");
  //                 item.onclick = () => {
  //                   // item.innerHTML = `<img class="b-pawn" id="bp1" src="./images/bp.png" alt="black pawn" />`;
  //                   item.append(pieceID);
  //                   // pieceID.parentNode.removeChild(pieceID);
  //                   Array.from(squares).forEach((square) => {
  //                     if (square.classList.contains("valid-move")) {
  //                       square.classList.remove("valid-move");
  //                     }
  //                   });
  //                 };
  //                 // if (!e.currentTarget.parentNode.hasChildNodes()) {
  //                 //
  //                 // }
  //               }
  //             }
  //           }
  //         });
  //       }

  //       //////////////// black rook
  //       if (e.currentTarget.className === "b-rook") {
  //         Array.from(squares).filter((item) => {
  //           const possibleMove = item.id.split("");
  //           let col = possibleMove[0];
  //           let row = parseInt(possibleMove[1]);

  //           let adjacentPiece = document.getElementById(
  //             colPossible + (rowPossible - 1).toString()
  //           );

  //           if (!adjacentPiece.hasChildNodes()) {
  //             for (let i = 0; i < 8; i++) {
  //               if (
  //                 item.hasChildNodes() === false &&
  //                 row === rowPossible - i &&
  //                 col === colPossible
  //               ) {
  //                 item.classList.toggle("valid-move");
  //                 item.onclick = () => {
  //                   // item.innerHTML = `<img class="b-rook" id="br1" src="./images/br.png" alt="black rbr.png">`;
  //                   // pieceID.parentNode.removeChild(pieceID);
  //                   item.append(pieceID);
  //                   Array.from(squares).forEach((square) => {
  //                     if (square.classList.contains("valid-move")) {
  //                       square.classList.remove("valid-move");
  //                     }
  //                   });
  //                 };
  //                 // if (!e.currentTarget.parentNode.hasChildNodes()) {
  //                 //
  //                 // }
  //               }
  //             }
  //           }
  //         });
  //       }

  //       //////////////// black king
  //       if (e.currentTarget.className === "b-king") {
  //         Array.from(squares).filter((item) => {
  //           const possibleMove = item.id.split("");
  //           let col = possibleMove[0];
  //           let row = parseInt(possibleMove[1]);

  //           let adjacentPiece = document.getElementById(
  //             colPossible + (rowPossible - 1).toString()
  //           );

  //           if (!adjacentPiece.hasChildNodes()) {
  //             for (let i = 0; i < 6; i++) {
  //               if (
  //                 item.hasChildNodes() === false &&
  //                 row === rowPossible - i &&
  //                 col === colPossible
  //               ) {
  //                 item.classList.toggle("valid-move");
  //                 item.onclick = () => {
  //                   // item.innerHTML = `<img class="b-king" id="bk" src="./images/bk.png" alt="black pawn" />`;
  //                   // pieceID.parentNode.removeChild(pieceID);
  //                   item.append(pieceID);
  //                   Array.from(squares).forEach((square) => {
  //                     if (square.classList.contains("valid-move")) {
  //                       square.classList.remove("valid-move");
  //                     }
  //                   });
  //                 };
  //                 // if (!e.currentTarget.parentNode.hasChildNodes()) {
  //                 //
  //                 // }
  //               }
  //             }
  //           }
  //         });
  //       }

  //       //////////////// black queen
  //       if (e.currentTarget.className === "b-queen") {
  //         Array.from(squares).filter((item) => {
  //           const possibleMove = item.id.split("");
  //           let col = possibleMove[0];
  //           let row = parseInt(possibleMove[1]);

  //           let adjacentPiece = document.getElementById(
  //             colPossible + (rowPossible - 1).toString()
  //           );

  //           if (!adjacentPiece.hasChildNodes()) {
  //             for (let i = 0; i < 9; i++) {
  //               if (
  //                 item.hasChildNodes() === false &&
  //                 row === rowPossible - i &&
  //                 col === colPossible
  //               ) {
  //                 item.classList.toggle("valid-move");
  //                 item.onclick = () => {
  //                   // item.innerHTML = `<img class="b-king" id="bk" src="./images/bk.png" alt="black pawn" />`;
  //                   // pieceID.parentNode.removeChild(pieceID);
  //                   item.append(pieceID);
  //                   Array.from(squares).forEach((square) => {
  //                     if (square.classList.contains("valid-move")) {
  //                       square.classList.remove("valid-move");
  //                     }
  //                   });
  //                 };
  //                 // if (!e.currentTarget.parentNode.hasChildNodes()) {
  //                 //
  //                 // }
  //               }
  //             }
  //           }
  //         });
  //       }
  //     };
  //   }
  // }
}
class Pawn {
  constructor(id, color, row, col) {
    this.id = id;
    this.color = color;
    this.row = row;
    this.col = col;

    // this.pieceID = pieceID;
  }
  // changeTurn() {
  //   this.turn = this.turn === "black" ? "white" : "black";
  // }

  getMove(row, col) {
    let pieceID = document.getElementById(this.id);
    let pieceOldLoc = pieceID.parentNode;
    // let currentPieceLocation = e.currentTarget.parentNode.id;
    const squares = document.querySelectorAll(".box");

    // console.log({
    //   pieceID,
    //   pieceOldLoc,
    //   squares,
    //   color: this.color,
    // })
    Array.from(squares).filter((item) => {
      const possibleMove = item.id.split("");
      let c = possibleMove[0];
      let r = parseInt(possibleMove[1]);

      //apply opacity on 1st square
      let adjacentPiece 
      if (this.color === 'white') {
        adjacentPiece = document.getElementById(col + (row + 1).toString());
      } else if (this.color === 'black') {
        adjacentPiece = document.getElementById(col + (row - 1).toString())
      }

      console.log('adjacentPiece', adjacentPiece)

      if (!adjacentPiece.hasChildNodes()) {
        for (let i = 1; i < 3; i++) {
          if (
            this.color === "white" &&
            !item.hasChildNodes() &&
            r === row + i &&
            c === col
          ) {
            console.log(352)
            item.classList.toggle("valid-move");
            item.onclick = () => {
              // pieceID.parentNode.removeChild(pieceID);
              Array.from(squares).forEach((square) => {
                if (square.classList.contains("valid-move")) {
                  square.classList.remove("valid-move");
                  item.append(pieceID);
                  pieceOldLoc.innerHTML = "";
                }
              });
              game.changeTurn();
              // game.newGame();
            };
            // break;
          }

          if (
            // this.color === "black" &&
            !item.hasChildNodes() &&
            r === row - i &&
            c === col
          ) {
            console.log(376)
            item.classList.toggle("valid-move");
            item.onclick = () => {
              pieceID.parentNode.removeChild(pieceID);
              Array.from(squares).forEach((square) => {
                if (square.classList.contains("valid-move")) {
                  square.classList.remove("valid-move");
                  item.append(pieceID);
                  pieceOldLoc.innerHTML = "";
                }
              });
              game.changeTurn();
              // game.newGame()
            };
            // break;
          }
        }
      }
    });
  }
}
class Rook extends Pawn {
  constructor(id, row, col) {
    super(id, row, col);
  }
  getMove(row, col) {
    let pieceID = document.getElementById(this.id);

    const squares = document.querySelectorAll(".box");
    Array.from(squares).filter((item) => {
      const possibleMove = item.id.split("");
      let c = possibleMove[0];
      let r = parseInt(possibleMove[1]);

      let adjacentPieceWhite = document.getElementById(
        col + (row + 1).toString()
      );
      let adjacentPieceBlack = document.getElementById(
        col + (row - 1).toString()
      );
      if (adjacentPieceWhite.innerHTML === "") {
        if (["A", "B", "C", "D", "E", "F", "G", "H"].includes(c) && r === row) {
          // if (item.id !== currentPieceLocation) {
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
                pieceID.parentNode.innerHtml = "";
                // this.changeTurn();
                // this.turn === "black";
                //
              }
            });
            // this.changeTurn();
          };
          // }
        }

        for (let i = 1; i < 8; i++) {
          if (!item.hasChildNodes() && r === row + i && c === col) {
            item.classList.toggle("valid-move");
            item.onclick = () => {
              // item.innerHTML = `<img class="b-rook" id="br1" src="./images/br.png" alt="black rbr.png">`;
              // pieceID.parentNode.removeChild(pieceID);

              Array.from(squares).forEach((square) => {
                if (square.classList.contains("valid-move")) {
                  square.classList.remove("valid-move");
                  item.append(pieceID); //relocated here
                  pieceID.parentNode.innerHtml = "";
                  // this.turn === "black";
                }
              });
              // this.changeTurn();
            };
          }
        }
      }
    });
  }
}
// class Knight extends Pawn {
//   constructor() {
//     super(id, color, row, col);
//   }
//   getMove() {
//     const piece = new Move(this.id);
//     piece.getBlackPossibleMoves();
//     piece.getWhitePossibleMoves();
//   }
// }
class Bishop extends Pawn {
  constructor(id, row, col) {
    super(id, row, col);
  }
  getMove(row, col) {
    let alphaArray = ["A", "B", "C", "D", "E", "F", "G", "H"];
    let alphaInvertedArray = ["H", "G", "F", "E", "D", "C", "B", "A"];
    const pieceColRight = alphaArray.filter((item) => {
      if (col === item) {
        console.log(item);
        return item;
      }
    });
    const pieceColLeft = alphaInvertedArray.filter((item) => {
      if (col === item) {
        console.log(item);
        return item;
      }
    });
    const colIndexRight = alphaArray.indexOf(pieceColRight.toString());
    const colIndexLeft = alphaInvertedArray.indexOf(pieceColRight.toString());
    let pieceID = document.getElementById(this.id);

    const squares = document.querySelectorAll(".box");
    Array.from(squares).filter((item) => {
      const possibleMove = item.id.split("");
      let c = possibleMove[0];
      let r = parseInt(possibleMove[1]);

      let adjacentPiece = document.getElementById(col + (row + 1).toString());

      // if (!adjacentPiece.hasChildNodes()) {

      for (let i = 1; i < alphaArray.length; i++) {
        if (c === alphaArray[colIndexRight + i] && r === row + i) {
          // if (item.id !== currentPieceLocation) {
          item.classList.toggle("valid-move");
          console.log("hello");
          //this function is repetitive. Let's create a method for this later
          item.onclick = () => {
            //item.append(pieceID); relocated inside
            Array.from(squares).forEach((square) => {
              if (square.classList.contains("valid-move")) {
                square.classList.remove("valid-move");
                item.append(pieceID); //relocated this, here so player can't move the piece if the the squares have no 'valid-move' class
              }
            });
          };
        }
        if (c === alphaArray[colIndexRight - i] && r === row - i) {
          // if (item.id !== currentPieceLocation) {
          item.classList.toggle("valid-move");
          console.log("hello");
          //this function is repetitive. Let's create a method for this later
          item.onclick = () => {
            //item.append(pieceID); relocated inside
            Array.from(squares).forEach((square) => {
              if (square.classList.contains("valid-move")) {
                square.classList.remove("valid-move");
                item.append(pieceID); //relocated this, here so player can't move the piece if the the squares have no 'valid-move' class
              }
            });
          };
        }
      }
      for (let i = 1; i < alphaInvertedArray.length; i++) {
        if (c === alphaInvertedArray[colIndexLeft + i] && r === row + i) {
          // if (item.id !== currentPieceLocation) {
          item.classList.toggle("valid-move");
          console.log("hello");
          //this function is repetitive. Let's create a method for this later
          item.onclick = () => {
            //item.append(pieceID); relocated inside
            Array.from(squares).forEach((square) => {
              if (square.classList.contains("valid-move")) {
                square.classList.remove("valid-move");
                item.append(pieceID); //relocated this, here so player can't move the piece if the the squares have no 'valid-move' class
              }
            });
          };
        }
        if (c === alphaInvertedArray[colIndexLeft - i] && r === row - i) {
          // if (item.id !== currentPieceLocation) {
          item.classList.toggle("valid-move");
          console.log("hello");
          //this function is repetitive. Let's create a method for this later
          item.onclick = () => {
            //item.append(pieceID); relocated inside
            Array.from(squares).forEach((square) => {
              if (square.classList.contains("valid-move")) {
                square.classList.remove("valid-move");
                item.append(pieceID); //relocated this, here so player can't move the piece if the the squares have no 'valid-move' class
              }
            });
          };
        }
      }
    });
  }
}
// class Queen extends Pawn {
//   constructor() {
//     super(id, color, row, col);
//     this.pieceID = pieceID;
//   }
//   getMove(pieceID) {
//     pieceID.onclick = () => {
//       console.log(this.turn);
//       // const piece = new Move(this.id);
//       // piece.getBlackPossibleMoves();
//       // piece.getWhitePossibleMoves();
//       if (this.turn === "white") {
//         Array.from(squares).filter((item) => {
//           const possibleMove = item.id.split("");
//           let col = possibleMove[0];
//           let row = parseInt(possibleMove[1]);

//           let adjacentPiece = document.getElementById(
//             colPossible + (rowPossible + 1).toString()
//           );

//           // if (!adjacentPiece.hasChildNodes()) {
//           for (let i = 0; i < 9; i++) {
//             if (
//               item.hasChildNodes() === false &&
//               row === rowPossible + i &&
//               col === colPossible
//             ) {
//               item.classList.toggle("valid-move");
//               item.onclick = () => {
//                 // item.innerHTML = `<img class="b-king" id="bk" src="./images/bk.png" alt="black pawn" />`;
//                 // pieceID.parentNode.removeChild(pieceID);

//                 Array.from(squares).forEach((square) => {
//                   if (square.classList.contains("valid-move")) {
//                     square.classList.remove("valid-move");
//                     item.append(pieceID);
//                     this.changeTurn();
//                     // renderPieces();
//                     // this.turn === "black";
//                   }
//                 });
//                 this.changeTurn();
//               };
//               if (!e.currentTarget.parentNode.hasChildNodes()) {
//               }
//             }
//           }
//           // }
//         });
//       }
//     };
//   }
// }
// class King extends Pawn {
//   constructor() {
//     super(id, color, row, col);
//   }
//   getMove() {
//     // const piece = new Move(this.id);
//     // piece.getBlackPossibleMoves();
//     // piece.getWhitePossibleMoves();
//     if (e.currentTarget.className === "w-king" && this.turn === "white") {
//       Array.from(squares).filter((item) => {
//         const possibleMove = item.id.split("");
//         let col = possibleMove[0];
//         let row = parseInt(possibleMove[1]);
//         console.log("cl");

//         let adjacentPiece = document.getElementById(
//           colPossible + (rowPossible + 1).toString()
//         );

//         if (!adjacentPiece.hasChildNodes()) {
//           for (let i = 0; i < 3; i++) {
//             if (
//               item.hasChildNodes() === false &&
//               row === rowPossible + i &&
//               col === colPossible
//             ) {
//               item.classList.toggle("valid-move");
//               item.onclick = () => {
//                 console.log("clicked");
//                 // item.innerHTML = `<img class="b-king" id="bk" src="./images/bk.png" alt="black pawn" />`;
//                 // pieceID.parentNode.removeChild(pieceID);

//                 Array.from(squares).forEach((square) => {
//                   if (square.classList.contains("valid-move")) {
//                     item.append(pieceID);
//                     square.classList.remove("valid-move");
//                     // this.changeTurn();
//                     // this.turn === "black";
//                   }
//                 });
//                 this.changeTurn();
//               };
//               // if (!e.currentTarget.parentNode.hasChildNodes()) {
//               //
//               // }
//             }
//           }
//         }
//       });
//     }
//   }
// }
class Game {
  constructor() {
    // this.newGame(), this.initGame();
  }
  initGame() {
    this.turn = "white";
  }
  changeTurn() {
    this.turn = this.turn === "white" ? "black" : "white";
    // console.log(this.turn);
    console.log('changeTurn', this);
    this.newGame()
  }

  newGame() {
    console.log('newGame')
    if (this.turn === "black") {
      const bp1 = new Move("bp1", "pawn", this.turn);
      const bp2 = new Move("bp2", "pawn", this.turn);
      const bp3 = new Move("bp3", "pawn", this.turn);
      const bp4 = new Move("bp4", "pawn", this.turn);
      const bp5 = new Move("bp5", "pawn", this.turn);
      const bp6 = new Move("bp6", "pawn", this.turn);
      const bp7 = new Move("bp7", "pawn", this.turn);
      const bp8 = new Move("bp8", "pawn", this.turn);
      const br1 = new Move("br1", "rook", this.turn);
      const br2 = new Move("br2", "rook", this.turn);
      const bb1 = new Move("bb1", "bishop", this.turn);
      const bb2 = new Move("bb2", "bishop", this.turn);
      const bk = new Move("bk");
      const bq = new Move("bq");

      bp1.getBlackPossibleMoves();
      bp2.getBlackPossibleMoves();
      bp3.getBlackPossibleMoves();
      bp4.getBlackPossibleMoves();
      bp5.getBlackPossibleMoves();
      bp6.getBlackPossibleMoves();
      bp7.getBlackPossibleMoves();
      bp8.getBlackPossibleMoves();
      br1.getBlackPossibleMoves();
      br2.getBlackPossibleMoves();
      bb1.getBlackPossibleMoves();
      bb2.getBlackPossibleMoves();
      bk.getBlackPossibleMoves();
      bq.getBlackPossibleMoves();
    }
    if (this.turn === "white") {
      const wp1 = new Move("wp1", "pawn", this.turn);
      const wp2 = new Move("wp2", "pawn", this.turn);
      const wp3 = new Move("wp3", "pawn", this.turn);
      const wp4 = new Move("wp4", "pawn", this.turn);
      const wp5 = new Move("wp5", "pawn", this.turn);
      const wp6 = new Move("wp6", "pawn", this.turn);
      const wp7 = new Move("wp7", "pawn", this.turn);
      const wp8 = new Move("wp8", "pawn", this.turn);
      const wr1 = new Move("wr1", "rook", this.turn);
      const wr2 = new Move("wr2", "rook", this.turn);
      const wb1 = new Move("wb1", "bishop", this.turn);
      const wb2 = new Move("wb2", "bishop", this.turn);
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
      wb1.getWhitePossibleMoves();
      wb2.getWhitePossibleMoves();
      wk.getWhitePossibleMoves();
      wq.getWhitePossibleMoves();
    }
  }
}
const game = new Game();
game.initGame();
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
