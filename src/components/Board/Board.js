import Square from "../Square/Square";
import "./Board.css";

function Board() {
	return <div>
		<div className="boardRow">
			<Square/>
			<Square/>
			<Square/>
		</div>
		<div className="boardRow">
			<Square/>
			<Square/>
			<Square/>
		</div>
		<div className="boardRow">
			<Square/>
			<Square/>
			<Square/>
		</div>
	</div>
}

export default Board;
