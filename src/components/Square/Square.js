import "./Square.css"

function Square(props) {
	return <button className="square" onClick={props.clickHandler}>{props.value}</button>
}

export default Square;
