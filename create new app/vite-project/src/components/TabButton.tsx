export default function TabButton({
	children,
	onSelect,
	isSelected,
}: {
	children: string;
	onSelect: () => void;
	isSelected: boolean;
}) {
	return (
		<li>
			<button className={isSelected ? "active" : ""} onClick={onSelect}>
				{children}
			</button>
		</li>
	);
}
