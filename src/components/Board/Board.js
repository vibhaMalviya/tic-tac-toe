import Square from "../Square/Square";
import "./Board.css";

function Board({ squares, onSquareClick}) {
	return <div className="board">
			{squares.map((square, index) => {
				return <Square key={index}
				               value={square}
				               clickHandler={() => onSquareClick(index)}/>
			})}
		</div>;
}

export default Board;
