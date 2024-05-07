export default function Feedback({ values }) {
	return (
		<>
			<p>Good: {values.good}</p>
			<p>Neutral: {values.neutral}</p>
			<p>Bad: {values.bad}</p>
		</>
	);
}
