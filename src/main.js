//to be deleted. Just to show the location of squares
const squares = document.querySelectorAll('.box');
Array.from(squares).forEach((item) => {
	// item.innerHTML += `<span>${item.id}</span>`;
});
//

class Move {
	constructor (id) {
		this.id = id;
		this.turn = 'white';
	}

	changeTurn () {
		this.turn = this.turn === 'white' ? 'black' : 'white';
	}

	getWhitePossibleMoves () {
		const squares = document.querySelectorAll('.box');

		let pieceID = document.getElementById(this.id);

		pieceID.onclick = (e) => {
			//fow white pawn
			const currentPieceLocation = e.currentTarget.parentNode.id;
			let rowPossible = parseInt(currentPieceLocation[1]); //get the id number of the possible move
			let colPossible = currentPieceLocation[0]; //get the id letter of the possible move
			if (e.currentTarget.className === 'w-pawn') {
				//filter the possible moves
				Array.from(squares).filter((item) => {
					const possibleMove = item.id.split('');
					let col = possibleMove[0];
					let row = parseInt(possibleMove[1]);
					//apply opacity on 1st square
					for (let i = 1; i < 3; i++) {
						if (item.hasChildNodes() === false && row === rowPossible + i && col === colPossible) {
							item.style.opacity = '0.2';
						}
					}
				});
			}
			if (e.currentTarget.className === 'w-rook') {
				Array.from(squares).filter((item) => {
					const possibleMove = item.id.split('');
					let col = possibleMove[0];
					let row = parseInt(possibleMove[1]);
					//apply opacity on 1st square
					for (let i = 1; i < 8; i++) {
						if (item.hasChildNodes() === false && row === rowPossible + i && col === colPossible) {
							item.style.opacity = '0.2';
							console.log('roooookkkkk');
						}
					}
				});
			}
		};
	}

	getBlackPossibleMoves () {
		const squares = document.querySelectorAll('.box');

		let pieceID = document.getElementById(this.id);

		pieceID.onclick = (e) => {
			const currentPieceLocation = e.currentTarget.parentNode.id;
			let rowPossible = parseInt(currentPieceLocation[1]); //get the id number of the possible move
			let colPossible = currentPieceLocation[0]; //get the id letter of the possible move

			// black pawn 1
			if (e.currentTarget.className === 'b-pawn') {
				Array.from(squares).filter((item) => {
					const possibleMove = item.id.split('');
					let col = possibleMove[0];
					let row = parseInt(possibleMove[1]);

					let adjacentPiece = document.getElementById(colPossible + (rowPossible - 1).toString());

					if (!adjacentPiece.hasChildNodes()) {
						for (let i = 0; i < 3; i++) {
							if (item.hasChildNodes() === false && row === rowPossible - i && col === colPossible) {
								item.classList.toggle('valid-move');
								item.onclick = () => {
									item.innerHTML = `<img class="b-pawn" id="bp1" src="./images/bp.png" alt="black pawn" />`;
									pieceID.parentNode.removeChild(pieceID);
									Array.from(squares).forEach((square) => {
										if (square.classList.contains('valid-move')) {
											square.classList.remove('valid-move');
										}
									});
								};
								if (!e.currentTarget.parentNode.hasChildNodes()) {
									break;
								}
							}
						}
					}
				});
			}

			// black rook 1
			if (e.currentTarget.className === 'b-rook') {
				Array.from(squares).filter((item) => {
					const possibleMove = item.id.split('');
					let col = possibleMove[0];
					let row = parseInt(possibleMove[1]);

					let adjacentPiece = document.getElementById(colPossible + (rowPossible - 1).toString());

					if (!adjacentPiece.hasChildNodes()) {
						for (let i = 0; i < 8; i++) {
							if (item.hasChildNodes() === false && row === rowPossible - i && col === colPossible) {
								item.classList.toggle('valid-move');
								item.onclick = () => {
									item.innerHTML = `<img class="b-rook" id="br1" src="./images/br.png" alt="black rbr.png">`;
									pieceID.parentNode.removeChild(pieceID);
									Array.from(squares).forEach((square) => {
										if (square.classList.contains('valid-move')) {
											square.classList.remove('valid-move');
										}
									});
								};
								if (!e.currentTarget.parentNode.hasChildNodes()) {
									break;
								}
							}
						}
					}
				});
			}

			// black king
			if (e.currentTarget.className === 'b-king') {
				Array.from(squares).filter((item) => {
					const possibleMove = item.id.split('');
					let col = possibleMove[0];
					let row = parseInt(possibleMove[1]);

					let adjacentPiece = document.getElementById(colPossible + (rowPossible - 1).toString());

					if (!adjacentPiece.hasChildNodes()) {
						for (let i = 0; i < 7; i++) {
							if (item.hasChildNodes() === false && row === rowPossible - i && col === colPossible) {
								item.classList.toggle('valid-move');
								item.onclick = () => {
									item.innerHTML = `<img class="b-king" id="bk" src="./images/bk.png" alt="black pawn" />`;
									pieceID.parentNode.removeChild(pieceID);
									Array.from(squares).forEach((square) => {
										if (square.classList.contains('valid-move')) {
											square.classList.remove('valid-move');
										}
									});
								};
								if (!e.currentTarget.parentNode.hasChildNodes()) {
									break;
								}
							}
						}
					}
				});
			}
		};
	}

	nextTurn () {}
}

//Just to run the method. How do we make this new instance argument dynamic?
const p1 = new Move('bp1');
const p2 = new Move('bp2');
const p3 = new Move('bp3');
const p4 = new Move('bp4');
const p5 = new Move('bp5');
const p6 = new Move('bp6');
const p7 = new Move('bp7');
const p8 = new Move('bp8');
const r1 = new Move('br1');
const r2 = new Move('br2');
const bk = new Move('bk');

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
