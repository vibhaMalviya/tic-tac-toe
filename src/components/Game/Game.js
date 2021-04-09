import React, { useState } from 'react';

import Board from "../Board/Board";
import "./Game.css";
import calculateWinner from "../../utils/CalculateWinner";

function Game() {
	const [history, setHistory] = useState([Array(9).fill(null)]);
	const [isXNext, setNext] = useState(true);
	const [step, setStep] = useState(0);
	
	const onSquareClick = (i) => {
		const squares = history.slice(0, step + 1);
		const current = [...squares[step]];
		if(calculateWinner(current) || current[i]) {
			return;
		}
		current[i] = isXNext ? 'X' : 'O';
		setHistory([...squares, current]);
		setStep(squares.length);
		setNext(!isXNext);
	};
	
	const stepClickHandler = (step) => {
		setStep(step);
		setNext(step%2 === 0);
	};
	
	return <div className="game">
		<h1>{'Winner is ' + calculateWinner(history[step])}</h1>
		<Board squares={history[step]} onSquareClick={onSquareClick}/>
		<ul>
			{history.map((squares, step) => {
				return <li><button key={step} onClick={() => stepClickHandler(step)}>{step ? `Go to step #${step}` : 'Restart game'}</button></li>;
			})}
		</ul>
	</div>;
}

export default Game;
