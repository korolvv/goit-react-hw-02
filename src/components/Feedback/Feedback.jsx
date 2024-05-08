export default function Feedback({ values, total, positive }) {
	return (
		<>
			<p>Good: {values.good}</p>
			<p>Neutral: {values.neutral}</p>
			<p>Bad: {values.bad}</p>
			<p>Total: {total}</p>
			<p>Positive: {positive}%</p>
		</>
	);
}
