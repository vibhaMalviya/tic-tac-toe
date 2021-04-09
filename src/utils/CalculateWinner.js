function calculateWinner(squares) {
	const lines = [
		[0,1,2],
		[3,4,5],
		[6,7,8],
		[0,3,6],
		[1,4,7],
		[2,5,8],
		[0,4,8],
		[2,4,6]
	];
	let i =0;
	for(i=0; i<lines.length; i++) {
		const [a,b,c] = lines[i];
		if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
			return {
				winner: squares[a],
				line: lines[i]
			}
		}
	}
	if (i === lines.length && (squares.findIndex((a) => a === null) === -1)) {
		return { winner: 'DRAW', line: []};
	}
	return { winner : '', line: [] };
}

export default calculateWinner;
