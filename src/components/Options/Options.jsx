import css from "./Options.module.css";

export default function Options({ onUpdate, isClick, onReset }) {
	return (
		<>
			<button onClick={() => onUpdate("good")}>Good</button>
			<button onClick={() => onUpdate("neutral")}>Neutral</button>
			<button onClick={() => onUpdate("bad")}>Bad</button>
			{isClick && <button onClick={onReset}>Reset</button>}
		</>
	);
}
