import css from "./Options.module.css";

export default function Options({ onUpdate, total, onReset }) {
	return (
		<>
			<button onClick={() => onUpdate("good")}>Good</button>
			<button onClick={() => onUpdate("neutral")}>Neutral</button>
			<button onClick={() => onUpdate("bad")}>Bad</button>
			{total !== 0 && <button onClick={onReset}>Reset</button>}
		</>
	);
}
