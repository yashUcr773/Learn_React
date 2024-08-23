import { useState } from "react";
import "./App.css";
import GameContainer from "./components/GameContainer.component";
import GameLog from "./components/GameLog.component";
import Header from "./components/Header.component";
import EndScreen from "./components/EndScreen.component";

const initialBoard = [
	["0", "0", "0"],
	["0", "0", "0"],
	["0", "0", "0"],
];
function App() {
	const [log, setLog] = useState<string[]>([]);
	const [endScreen, setEndScreen] = useState<{ result: "Win" | "Pending" | "Draw"; winner?: "X" | "O" } | null>(null);
	const [players, setPlayers] = useState<{ X: string; O: string }>({ X: "Player 1", O: "Player 2" });
	const [board, setBoard] = useState(initialBoard);

	const onComplete = (result: "Win" | "Pending" | "Draw", winner?: "X" | "O") => {
		setEndScreen({ result, winner });
	};

	const onReset = () => {
		setEndScreen(null);
		setBoard(initialBoard);
		setLog([]);
	};

	const onSetPlayer = (playerSymbol: "X" | "O", newPlayerName: String) => {
		setPlayers((prev) => ({ ...prev, [playerSymbol]: newPlayerName }));
	};

	return (
		<>
			<Header></Header>
			<GameContainer
				setLog={setLog}
				onComplete={onComplete}
				onSetPlayer={onSetPlayer}
				board={board}
				setBoard={setBoard}></GameContainer>
			<GameLog log={log}></GameLog>
			<EndScreen
				result={endScreen?.result}
				winner={players[endScreen?.winner ?? "X"]}
				resetGame={onReset}></EndScreen>
		</>
	);
}

export default App;
