export default function EndScreen({
	winner,
	resetGame,
	result,
}: {
	result?: "Win" | "Pending" | "Draw";
	winner?: string;
	resetGame: () => void;
}) {
	if (!result || result == "Pending") return null;
	return (
		<div id="game-over">
			<h2>Game Over!</h2>
			{result === "Win" && <h1>{winner} Wins!</h1>}
			{result === "Draw" && <h1>Draw!</h1>}
			<p>
				<button onClick={resetGame}>Play Again</button>
			</p>
		</div>
	);
}
