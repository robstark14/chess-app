//to be deleted. Just to show the location of squares
const squares = document.querySelectorAll(".box");
// Array.from(squares).forEach((item) => {
//   // item.innerHTML += `<span>${item.id}</span>`;
// });

class Move {
  constructor(id, color, type, turn) {
    (this.id = id), (this.type = type);
    this.color = color;
    this.currentPieceLocation,
      this.rowPossible,
      this.colPossible,
      (this.turn = turn);
  }

  // changeTurn() {
  //   this.turn = this.turn === "white" ? "black" : "white";
  //   console.log(this.turn);
  // }

  getWhiteMoves() {
    let pieceID = document.getElementById(this.id);

    console.log("hello");
    // }
    pieceID.onclick = (e) => {
      if (this.turn === "white") {
        const squares = document.querySelectorAll(".box");
        let checkPendingTurn = Array.from(squares).some((square) =>
          square.classList.contains("valid-move")
        );

        if (!checkPendingTurn) {
          this.currentPieceLocation = e.currentTarget.parentNode.id;
          console.log(this.currentPieceLocation);
          this.rowPossible = parseInt(this.currentPieceLocation[1]); //get the id number of the possible move
          console.log(this.rowPossible);
          this.colPossible = this.currentPieceLocation[0]; //get the id letter of the possible move
          console.log(this.colPossible);

          ////////////// //white pawn
          if (this.type === "pawn") {
            const whitePawn = new Pawn(
              e.currentTarget.id,
              "white",
              this.rowPossible,
              this.colPossible
            );
            whitePawn.getPawnMove(this.rowPossible, this.colPossible);
            console.log("pawn");
          }
          /////////////  white rook
          if (this.type === "rook") {
            const rook = new Rook(
              e.currentTarget.id,
              "white",
              this.rowPossible,
              this.colPossible
            );
            rook.getRookMove(this.rowPossible, this.colPossible);
            console.log("rook");
          }
          //////// white bishop
          if (this.type === "bishop") {
            const bishop = new Bishop(
              e.currentTarget.id,
              "white",
              this.rowPossible,
              this.colPossible
            );

            bishop.getBishopMove(this.rowPossible, this.colPossible);
            console.log("bishop");
          }
          ////////white knight
          if (this.type === "knight") {
            const knight = new Knight(
              e.currentTarget.id,
              "white",
              this.rowPossible,
              this.colPossible
            );

            knight.getKnightMove(this.rowPossible, this.colPossible);
            console.log("knight");
          }
          // //////////////// white king
          if (this.type === "king") {
            const king = new King(
              e.currentTarget.id,
              "white",
              this.rowPossible,
              this.colPossible
            );
            king.getKingMove(this.rowPossible, this.colPossible);
          } // //////////////// white queen
          if (this.type === "queen") {
            const queen = new Queen(
              e.currentTarget.id,
              "white",
              this.rowPossible,
              this.colPossible
            );
            // Object.assign(
            //   queen,
            //   new Bishop(e.currentTarget.id, this.rowPossible, this.colPossible)
            // );

            queen.getQueenMove(this.rowPossible, this.colPossible);
            queen.getRookMove(this.rowPossible, this.colPossible);
            // queen.getBishopMove(this.rowPossible, this.colPossible);
            console.log("clicked");
          }
        }
      }
    };
  }

  getBlackMoves() {
    // const squares = document.querySelectorAll(".box");
    const squares = document.querySelectorAll(".box");
    let checkPendingTurn = Array.from(squares).some((square) => {
      return square.classList.contains("valid-move");
    });

    if (!checkPendingTurn) {
      let pieceID = document.getElementById(this.id);

      pieceID.onclick = (e) => {
        if (this.turn === "black") {
          const squares = document.querySelectorAll(".box");
          let checkPendingTurn = Array.from(squares).some((square) =>
            square.classList.contains("valid-move")
          );

          if (!checkPendingTurn) {
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
                "black",
                this.rowPossible,
                this.colPossible
              );
              whitePawn.getPawnMove(this.rowPossible, this.colPossible);
              console.log("pawn");
            }
            /////////////  white rook
            if (this.type === "rook") {
              const rook = new Rook(
                e.currentTarget.id,
                "black",
                this.rowPossible,
                this.colPossible
              );
              rook.getRookMove(this.rowPossible, this.colPossible);
              console.log("rook");
            }
            //////// white bishop
            if (this.type === "bishop") {
              const bishop = new Bishop(
                e.currentTarget.id,
                "black",
                this.rowPossible,
                this.colPossible
              );

              bishop.getBishopMove(this.rowPossible, this.colPossible);
              console.log("bishop");
            }
            ////////white knight
            if (this.type === "knight") {
              const knight = new Knight(
                e.currentTarget.id,
                "black",
                this.rowPossible,
                this.colPossible
              );

              knight.getKnightMove(this.rowPossible, this.colPossible);
              console.log("knight");
            }
            // //////////////// white king
            if (this.type === "king") {
              const king = new King(
                e.currentTarget.id,
                "black",
                this.rowPossible,
                this.colPossible
              );
              king.getKingMove(this.rowPossible, this.colPossible);
            } // //////////////// white queen
            if (this.type === "queen") {
              const queen = new Queen(
                e.currentTarget.id,
                "black",
                this.rowPossible,
                this.colPossible
              );

              queen.getQueenMove(this.rowPossible, this.colPossible);
              queen.getRookMove(this.rowPossible, this.colPossible);

              console.log("clicked");
            }
          }
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

    // this.pieceID = pieceID;
  }
  // changeTurn() {
  //   this.turn = this.turn === "black" ? "white" : "black";
  // }
  displayLegalMove(item, pieceID, pieceOldLoc) {
    item.classList.toggle("valid-move");
    item.onclick = () => {
      // pieceID.parentNode.removeChild(pieceID);
      Array.from(squares).forEach((square) => {
        if (square.classList.contains("valid-move")) {
          square.classList.remove("valid-move");
          pieceOldLoc.innerHTML = "";
          item.append(pieceID);
          square.onclick = "";

          // game.newGame();
        }
      });

      game.changeTurn();

      // console.log(this.turn);
    };
  }
  getPawnMove(row, col) {
    let pieceID = document.getElementById(this.id);
    let pieceOldLoc = pieceID.parentNode;

    const squares = document.querySelectorAll(".box");

    Array.from(squares).filter((item) => {
      const possibleMove = item.id.split("");
      let c = possibleMove[0];
      let r = parseInt(possibleMove[1]);

      let adjacentPiece;
      if (this.color === "white") {
        adjacentPiece = document.getElementById(col + (row + 1).toString());
      } else if (this.color === "black") {
        adjacentPiece = document.getElementById(col + (row - 1).toString());
      }

      // console.log("adjacentPiece", adjacentPiece);

      if (!adjacentPiece.hasChildNodes()) {
        if (!pieceID.classList.contains("done-first-move")) {
          for (let i = 1; i < 3; i++) {
            if (
              this.color === "white" &&
              !item.hasChildNodes() &&
              r === row + i &&
              c === col
            ) {
              console.log(264);

              this.displayLegalMove(item, pieceID, pieceOldLoc);
              pieceID.classList.add("done-first-move");
            }

            if (
              this.color === "black" &&
              !item.hasChildNodes() &&
              r === row - i &&
              c === col
            ) {
              console.log(275);

              this.displayLegalMove(item, pieceID, pieceOldLoc);
              pieceID.classList.add("done-first-move");
            }
          }
        } else {
          for (let i = 1; i < 2; i++) {
            if (
              this.color === "white" &&
              !item.hasChildNodes() &&
              r === row + i &&
              c === col
            ) {
              console.log(264);
              this.displayLegalMove(item, pieceID, pieceOldLoc);
              // break;
            }

            if (
              this.color === "black" &&
              !item.hasChildNodes() &&
              r === row - i &&
              c === col
            ) {
              console.log(275);
              this.displayLegalMove(item, pieceID, pieceOldLoc);
              // break;
            }
          }
        }
      }
    });
  }
}
class Rook extends Pawn {
  constructor(id, color, row, col) {
    super(id, color, row, col);
  }

  getRookMove(row, col) {
    let pieceID = document.getElementById(this.id);
    let pieceOldLoc = pieceID.parentNode;
    const squares = document.querySelectorAll(".box");
    Array.from(squares).filter((item) => {
      const possibleMove = item.id.split("");
      let c = possibleMove[0];
      let r = parseInt(possibleMove[1]);

      let adjacentPiece;
      if (this.color === "white") {
        adjacentPiece = document.getElementById(col + (row + 1).toString());
      } else if (this.color === "black") {
        adjacentPiece = document.getElementById(col + (row - 1).toString());
      }

      let colArray = ["A", "B", "C", "D", "E", "F", "G", "H"];
      // let colMatch = colArray.filter((item) => {
      //   if (col === item) {
      //     return item;
      //   }
      // });
      // let colIndex = colArray.indexOf(colMatch.toString());
      // console.log(colIndex);
      // let checkColArr = [];
      // for (let j = colIndex - 1; j >= 0; j--) {
      //   checkColArr.push(document.getElementById(`${colArray[j]}${row}`));
      // }
      // let k = 0;
      // console.log(checkColArr[0]);

      // while (
      //   checkColArr[k].innerHTML === ""
      //   // ||
      //   // checkColArr[k].firstChild.color === "black"
      // ) {
      // console.log(checkColArr[k].childElementCount);
      // checkColArr[k].classList.toggle("valid-move");
      if (!item.hasChildNodes()) {
        if (colArray.includes(c) && r === row && c !== col) {
          this.displayLegalMove(item, pieceID, pieceOldLoc);
          console.log("hello");

          // k++;
        }
        for (let i = 1; i < 8; i++) {
          if (!item.hasChildNodes() && r === row + i && c === col) {
            this.displayLegalMove(item, pieceID, pieceOldLoc);
          }
          if (!item.hasChildNodes() && r === row - i && c === col) {
            this.displayLegalMove(item, pieceID, pieceOldLoc);
          }
        }
      }
    });
  }
}
class Bishop extends Pawn {
  constructor(id, color, row, col) {
    super(id, color, row, col);
  }
  getBishopMove(row, col) {
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
    const colIndexLeft = alphaInvertedArray.indexOf(pieceColLeft.toString());
    let pieceID = document.getElementById(this.id);
    let pieceOldLoc = pieceID.parentNode;
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
          this.displayLegalMove(item, pieceID, pieceOldLoc);
        }
        if (c === alphaArray[colIndexRight - i] && r === row - i) {
          // if (item.id !== currentPieceLocation) {
          this.displayLegalMove(item, pieceID, pieceOldLoc);
        }
      }
      for (let i = 1; i < alphaInvertedArray.length; i++) {
        if (c === alphaInvertedArray[colIndexLeft + i] && r === row + i) {
          // if (item.id !== currentPieceLocation) {
          this.displayLegalMove(item, pieceID, pieceOldLoc);
        }
        if (c === alphaInvertedArray[colIndexLeft - i] && r === row - i) {
          // if (item.id !== currentPieceLocation) {
          this.displayLegalMove(item, pieceID, pieceOldLoc);
        }
      }
    });
  }
}
class Knight extends Pawn {
  constructor(id, color, row, col) {
    super(id, color, row, col);
  }

  getKnightMove(row, col) {
    let pieceID = document.getElementById(this.id);
    let pieceOldLoc = pieceID.parentNode;
    let alphaArray = ["A", "B", "C", "D", "E", "F", "G", "H"];
    const pieceCol = alphaArray.filter((item) => {
      if (col === item) {
        console.log(item);
        return item;
      }
    });

    const colIndex = alphaArray.indexOf(pieceCol.toString());

    const squares = document.querySelectorAll(".box");
    Array.from(squares).filter((item) => {
      const possibleMove = item.id.split("");
      let c = possibleMove[0];
      let r = parseInt(possibleMove[1]);

      let adjacentPiece = document.getElementById(col + (row + 1).toString());
      // console.log(item.childNodes[1].className);
      // let tileChild = () => {
      //   if (item.innerHTML !== "") {
      //     return item.childNodes[1].id;
      //   }
      // };
      // let childArr = [];
      let tileChild = () => {
        if (item.hasChildNodes()) {
          return item.childNodes[1];
        } else {
          return item;
        }
      };
      const child = tileChild();
      // childArr.push(child);
      // console.log(childArr);
      console.log(child.classList.contains("white"));

      if (
        !child.classList.contains("white") &&
        r === row - 1 &&
        c === alphaArray[colIndex - 2]
      ) {
        this.displayLegalMove(item, pieceID, pieceOldLoc);
      }
      if (
        !child.classList.contains("white") &&
        r === row - 2 &&
        c === alphaArray[colIndex - 1]
      ) {
        this.displayLegalMove(item, pieceID, pieceOldLoc);
      }
      if (
        !child.classList.contains("white") &&
        r === row + 1 &&
        c === alphaArray[colIndex + 2]
      ) {
        this.displayLegalMove(item, pieceID, pieceOldLoc);
      }
      if (
        !child.classList.contains("white") &&
        r === row + 2 &&
        c === alphaArray[colIndex + 1]
      ) {
        this.displayLegalMove(item, pieceID, pieceOldLoc);
      }
      if (
        !child.classList.contains("white") &&
        r === row + 1 &&
        c === alphaArray[colIndex - 2]
      ) {
        this.displayLegalMove(item, pieceID, pieceOldLoc);
      }
      if (
        !child.classList.contains("white") &&
        r === row + 2 &&
        c === alphaArray[colIndex - 1]
      ) {
        this.displayLegalMove(item, pieceID, pieceOldLoc);
      }
      if (
        !child.classList.contains("white") &&
        r === row - 1 &&
        c === alphaArray[colIndex + 2]
      ) {
        this.displayLegalMove(item, pieceID, pieceOldLoc);
      }
      if (
        !child.classList.contains("white") &&
        r === row - 2 &&
        c === alphaArray[colIndex + 1]
      ) {
        this.displayLegalMove(item, pieceID, pieceOldLoc);
      }
    });
  }
}
class Queen extends Rook {
  constructor(id, color, row, col) {
    super(id, color, row, col);
  }
  getQueenMove(row, col) {
    // super.getRookMove();
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
    const colIndexLeft = alphaInvertedArray.indexOf(pieceColLeft.toString());
    let pieceID = document.getElementById(this.id);
    let pieceOldLoc = pieceID.parentNode;
    const squares = document.querySelectorAll(".box");
    Array.from(squares).filter((item) => {
      const possibleMove = item.id.split("");
      let c = possibleMove[0];
      let r = parseInt(possibleMove[1]);

      let adjacentPiece = document.getElementById(col + (row + 1).toString());

      // if (!adjacentPiece.hasChildNodes()) {

      for (let i = 1; i < alphaArray.length; i++) {
        if (
          !item.hasChildNodes() &&
          c === alphaArray[colIndexRight + i] &&
          r === row + i
        ) {
          // if (item.id !== currentPieceLocation) {
          this.displayLegalMove(item, pieceID, pieceOldLoc);
        }
        if (
          !item.hasChildNodes() &&
          c === alphaArray[colIndexRight - i] &&
          r === row - i
        ) {
          // if (item.id !== currentPieceLocation) {
          this.displayLegalMove(item, pieceID, pieceOldLoc);
        }
      }
      for (let i = 1; i < alphaInvertedArray.length; i++) {
        if (
          !item.hasChildNodes() &&
          c === alphaInvertedArray[colIndexLeft + i] &&
          r === row + i
        ) {
          // if (item.id !== currentPieceLocation) {
          this.displayLegalMove(item, pieceID, pieceOldLoc);
        }
        if (
          !item.hasChildNodes() &&
          c === alphaInvertedArray[colIndexLeft - i] &&
          r === row - i
        ) {
          // if (item.id !== currentPieceLocation) {
          this.displayLegalMove(item, pieceID, pieceOldLoc);
        }
      }
    });
  }
}
class King extends Pawn {
  constructor(id, color, row, col) {
    super(id, color, row, col);
  }

  getKingMove(row, col) {
    let pieceID = document.getElementById(this.id);
    let pieceOldLoc = pieceID.parentNode;
    // let currentPieceLocation = e.currentTarget.parentNode.id;
    let alphaArray = ["A", "B", "C", "D", "E", "F", "G", "H"];
    const pieceCol = alphaArray.filter((item) => {
      if (col === item) {
        console.log(item);
        return item;
      }
    });

    const colIndex = alphaArray.indexOf(pieceCol.toString());

    const squares = document.querySelectorAll(".box");
    Array.from(squares).filter((item) => {
      const possibleMove = item.id.split("");
      let c = possibleMove[0];
      let r = parseInt(possibleMove[1]);
      //apply opacity on 1st square
      let adjacentPiece = document.getElementById(col + (row + 1).toString());

      // if (!adjacentPiece.hasChildNodes()) {

      if (!item.hasChildNodes() && r === row + 1 && c === col) {
        this.displayLegalMove(item, pieceID, pieceOldLoc);
      }
      if (!item.hasChildNodes() && r === row - 1 && c === col) {
        this.displayLegalMove(item, pieceID, pieceOldLoc);
      }
      if (
        !item.hasChildNodes() &&
        r === row &&
        c === alphaArray[colIndex + 1]
      ) {
        this.displayLegalMove(item, pieceID, pieceOldLoc);
      }
      if (
        !item.hasChildNodes() &&
        r === row &&
        c === alphaArray[colIndex - 1]
      ) {
        this.displayLegalMove(item, pieceID, pieceOldLoc);
      }
      if (
        !item.hasChildNodes() &&
        c === alphaArray[colIndex + 1] &&
        r === row + 1
      ) {
        this.displayLegalMove(item, pieceID, pieceOldLoc);
      }
      if (
        !item.hasChildNodes() &&
        c === alphaArray[colIndex + 1] &&
        r === row - 1
      ) {
        this.displayLegalMove(item, pieceID, pieceOldLoc);
      }
      if (
        !item.hasChildNodes() &&
        c === alphaArray[colIndex - 1] &&
        r === row + 1
      ) {
        this.displayLegalMove(item, pieceID, pieceOldLoc);
      }
      if (
        !item.hasChildNodes() &&
        c === alphaArray[colIndex - 1] &&
        r === row - 1
      ) {
        this.displayLegalMove(item, pieceID, pieceOldLoc);
      }
    });
  }
}
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
    console.log(this.turn);
    console.log("changeTurn", this);
    this.newGame();
  }

  newGame() {
    console.log(this.turn);

    if (this.turn === "black") {
      const bp1 = new Move("bp1", "black", "pawn", "black");
      const bp2 = new Move("bp2", "black", "pawn", "black");
      const bp3 = new Move("bp3", "black", "pawn", "black");
      const bp4 = new Move("bp4", "black", "pawn", "black");
      const bp5 = new Move("bp5", "black", "pawn", "black");
      const bp6 = new Move("bp6", "black", "pawn", "black");
      const bp7 = new Move("bp7", "black", "pawn", "black");
      const bp8 = new Move("bp8", "black", "pawn", "black");
      const br1 = new Move("br1", "black", "rook", "black");
      const br2 = new Move("br2", "black", "rook", "black");
      const bb1 = new Move("bb1", "black", "bishop", "black");
      const bb2 = new Move("bb2", "black", "bishop", "black");
      const bn1 = new Move("bn1", "black", "knight", "black");
      const bn2 = new Move("bn2", "black", "knight", "black");
      const bk = new Move("bk", "black", "king", "black");
      const bq = new Move("bq", "black", "queen", "black");

      bp1.getBlackMoves();
      bp2.getBlackMoves();
      bp3.getBlackMoves();
      bp4.getBlackMoves();
      bp5.getBlackMoves();
      bp6.getBlackMoves();
      bp7.getBlackMoves();
      bp8.getBlackMoves();
      br1.getBlackMoves();
      br2.getBlackMoves();
      bb1.getBlackMoves();
      bb2.getBlackMoves();
      bn1.getBlackMoves();
      bn2.getBlackMoves();
      bk.getBlackMoves();
      bq.getBlackMoves();
      this.turn = "white";
    }
    if (this.turn === "white") {
      const wp1 = new Move("wp1", "white", "pawn", "white");
      const wp2 = new Move("wp2", "white", "pawn", "white");
      const wp3 = new Move("wp3", "white", "pawn", "white");
      const wp4 = new Move("wp4", "white", "pawn", "white");
      const wp5 = new Move("wp5", "white", "pawn", "white");
      const wp6 = new Move("wp6", "white", "pawn", "white");
      const wp7 = new Move("wp7", "white", "pawn", "white");
      const wp8 = new Move("wp8", "white", "pawn", "white");
      const wr1 = new Move("wr1", "white", "rook", "white");
      const wr2 = new Move("wr2", "white", "rook", "white");
      const wb1 = new Move("wb1", "white", "bishop", "white");
      const wb2 = new Move("wb2", "white", "bishop", "white");
      const wn1 = new Move("wn1", "white", "knight", "white");
      const wn2 = new Move("wn2", "white", "knight", "white");
      const wk = new Move("wk", "white", "king", "white");
      const wq = new Move("wq", "white", "queen", "white");

      wp1.getWhiteMoves();
      wp2.getWhiteMoves();
      wp3.getWhiteMoves();
      wp4.getWhiteMoves();
      wp5.getWhiteMoves();
      wp6.getWhiteMoves();
      wp7.getWhiteMoves();
      wp8.getWhiteMoves();
      wr1.getWhiteMoves();
      wr2.getWhiteMoves();
      wb1.getWhiteMoves();
      wb2.getWhiteMoves();
      wn1.getWhiteMoves();
      wn2.getWhiteMoves();
      wk.getWhiteMoves();
      wq.getWhiteMoves();
      this.turn = "black";
      console.log(this.turn);
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
