import { useState } from "react";

export default function Player({
	playerName,
	playerSymbol,
	isActive,
	onSetPlayer,
}: {
	playerName: string;
	playerSymbol: "X" | "O";
	isActive: boolean;
	onSetPlayer: (playerSymbol: "X" | "O", newPlayerName: String) => void;
}) {
	const [isEditing, setIsEditing] = useState(false);
	const [newPlayerName, setNewPlayerName] = useState(playerName);

	const saveName = () => {
		setIsEditing(false);
		onSetPlayer(playerSymbol, newPlayerName);
	};

	const editName = () => {
		setIsEditing(true);
	};

	return (
		<li className={isActive ? "active" : ""}>
			<span className={`player`}>
				{isEditing ? (
					<input
						className="player-name"
						value={newPlayerName}
						onChange={(e) => setNewPlayerName(e.target.value)}
					/>
				) : (
					<span className="player-name">{newPlayerName}</span>
				)}
				<span className="player-symbol">{playerSymbol}</span>
			</span>
			{isEditing ? <button onClick={saveName}>Save</button> : <button onClick={editName}>Edit</button>}
		</li>
	);
}
