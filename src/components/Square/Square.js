import "./Square.css"

function Square(props) {
	const highlightClass = props.highlight ? 'highlight' : '';
	return <button className={`square ${highlightClass}`} onClick={props.clickHandler}>{props.value}</button>
}

export default Square;
