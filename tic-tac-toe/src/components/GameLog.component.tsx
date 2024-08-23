export default function GameLog({ log }: { log: string[] }) {
	return (
		<ol id="log">
			{log.map((entry, index) => (
				<li key={index}>{entry}</li>
			))}
		</ol>
	);
}
