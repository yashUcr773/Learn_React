const checkWinner = (grid: string[][], symbol: string) => {
	for (let i = 0; i < grid.length; i++) {
		// check all rows
		if (grid[i][0] == symbol && grid[i][1] == symbol && grid[i][2] == symbol) return true;

		// check all cols
		if (grid[0][i] == symbol && grid[1][i] == symbol && grid[2][i] == symbol) return true;
	}

	// check diagonal 1
	if (grid[0][0] == symbol && grid[1][1] == symbol && grid[2][2] == symbol) return true;

	// check diagonal 2
	if (grid[2][0] == symbol && grid[1][1] == symbol && grid[0][2] == symbol) return true;

	return false;
};

const handleWinner = (grid: string[][]) => {
	if (checkWinner(grid, "X")) {
		return { result: "Win", winner: "X" as "X" | "O" };
	} else if (checkWinner(grid, "O")) {
		return { result: "Win", winner: "O" as "X" | "O" };
	} else if (grid.flat().every((cell) => cell !== "0")) {
		return { result: "Draw" };
	} else {
		return { result: "Pending" };
	}
};

export default function GameBoard({
	userSymbol,
	changeActivePlayer,
	setLog,
	onComplete,
	board,
	setBoard,
}: {
	userSymbol: string;
	changeActivePlayer: () => void;
	setLog: React.Dispatch<React.SetStateAction<string[]>>;
	onComplete: (result: "Win" | "Pending" | "Draw", winner?: "X" | "O") => void;
	board: string[][];
	setBoard: React.Dispatch<React.SetStateAction<string[][]>>;
}) {
	const handleSquareSelect = (row: number, col: number, symbol: string) => {
		console.log("clicked");
		if (board[row][col] !== "0") return;
		setBoard((prevBoard) => {
			const newBoard = [...prevBoard.map((r) => [...r])];
			newBoard[row][col] = symbol;
			setLog((prev) => [...prev, `${symbol} played at row ${row}, col ${col}`]);
			let result = handleWinner(newBoard);
			onComplete(result.result as "Win" | "Draw" | "Pending", result.winner);
			return newBoard;
		});
		changeActivePlayer();
	};

	return (
		<ol id="game-board">
			{board.map((row, rowIndex) => (
				<li key={rowIndex}>
					<ol>
						{row.map((cell, cellIndex) => (
							<li key={cellIndex} className="cell">
								<button onClick={() => handleSquareSelect(rowIndex, cellIndex, userSymbol)}>
									{cell == "0" ? "" : cell}
								</button>
							</li>
						))}
					</ol>
				</li>
			))}
		</ol>
	);
}
