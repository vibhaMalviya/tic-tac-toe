import Square from "../Square/Square";
import "./Board.css";

function Board({ squares, onSquareClick, line}) {
	const [a,b,c] = line;
	return <div className="board">
			{squares.map((square, index) => {
				return <Square key={index}
				               value={square}
				               clickHandler={() => onSquareClick(index)}
				               highlight={(index === a || index === b || index === c)}/>
			})}
		</div>;
}

export default Board;
