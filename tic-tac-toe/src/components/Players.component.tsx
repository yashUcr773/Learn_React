import Player from "./Player.component";

export default function Players({
	activePlayer,
	onSetPlayer,
}: {
	activePlayer: "X" | "O";
	onSetPlayer: (playerSymbol: "X" | "O", newPlayerName: String) => void;
}) {
	return (
		<ol id="players" className="highlight-player">
			<Player
				onSetPlayer={onSetPlayer}
				playerName="Player 1"
				playerSymbol="X"
				isActive={activePlayer == "X" ? true : false}></Player>
			<Player
				onSetPlayer={onSetPlayer}
				playerName="Player 2"
				playerSymbol="O"
				isActive={activePlayer == "O" ? true : false}></Player>
		</ol>
	);
}
