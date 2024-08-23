import { useState } from "react";
import GameBoard from "./GameBoard.component";
import Players from "./Players.component";

export default function GameContainer({
	setLog,
	onComplete,
	onSetPlayer,
	board,
	setBoard,
}: {
	setLog: React.Dispatch<React.SetStateAction<string[]>>;
	onComplete: (result: "Win" | "Pending" | "Draw", winner?: "X" | "O") => void;
	onSetPlayer: (playerSymbol: "X" | "O", newPlayerName: String) => void;
	board: string[][];
	setBoard: React.Dispatch<React.SetStateAction<string[][]>>;
}) {
	const [activePlayer, setActivePlayer] = useState<"X" | "O">("X");

	const changeActivePlayer = () => {
		setActivePlayer((prevPlayer) => (prevPlayer === "X" ? "O" : "X"));
	};

	return (
		<main>
			<div id="game-container">
				<Players activePlayer={activePlayer} onSetPlayer={onSetPlayer}></Players>
				<GameBoard
					userSymbol={activePlayer}
					changeActivePlayer={changeActivePlayer}
					setLog={setLog}
					board={board}
					setBoard={setBoard}
					onComplete={onComplete}></GameBoard>
			</div>
		</main>
	);
}
