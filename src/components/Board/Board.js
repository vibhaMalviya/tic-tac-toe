import React, { useState } from 'react';
import calculateWinner from '../../utils/CalculateWinner';
import Square from "../Square/Square";
import "./Board.css";

function Board() {
	const [squares, setSquare] = useState(Array(9).fill(null));
	const [isXNext, setNext] = useState(true);
	const onSquareClick = (i) => {
		if(calculateWinner(squares) || squares[i]) {
			return;
		}
		const squares1 = squares.slice();
		squares1[i] = isXNext ? 'X' : '0';
		setSquare(squares1);
		setNext(!isXNext);
	};
	
	const resetBoard = () => {
		setSquare(Array(9).fill(null));
		setNext(true);
	};
	
	return <div>
		{'Winner is ' + calculateWinner(squares)}
		<div className="board">
			{squares.map((square, index) => {
				return <Square key={index}
				               value={square}
				               clickHandler={() => onSquareClick(index)}/>
			})}
		</div>
		<button onClick={resetBoard}>Restart Game</button>
	</div>
}

export default Board;
