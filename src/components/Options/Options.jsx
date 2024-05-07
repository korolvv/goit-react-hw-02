export default function Options({ feedback, onUpdate, handleIsClick }) {
	return (
		<>
			<button onClick={(() => onUpdate, handleIsClick)}>Good</button>
			<button onClick={() => onUpdate}>Neutral</button>
			<button onClick={() => onUpdate}>Bad</button>
		</>
	);
}
