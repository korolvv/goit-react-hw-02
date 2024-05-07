export default function Options({ onUpdate }) {
	return (
		<>
			<button onClick={() => onUpdate("good")}>Good</button>
			<button onClick={() => onUpdate("neutral")}>Neutral</button>
			<button onClick={() => onUpdate("bad")}>Bad</button>
		</>
	);
}
