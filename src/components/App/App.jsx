import "./App.module.css";
import { useEffect, useState } from "react";
import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification";

function App() {
	const [feedback, setFeedback] = useState(() => {
		const savedFeedback = localStorage.getItem("feedback-data");
		if (savedFeedback !== null) {
			let data = JSON.parse(savedFeedback);
			if (data.good !== 0 || data.neutral !== 0 || data.bad !== 0) {
				return data;
			}
			return data;
		} else {
			return {
				good: 0,
				neutral: 0,
				bad: 0,
			};
		}
	});

	useEffect(() => {
		localStorage.setItem("feedback-data", JSON.stringify(feedback));
	}, [feedback]);

	const updateFeedback = (feedbackType) => {
		setFeedback({
			...feedback,
			[feedbackType]: feedback[feedbackType] + 1,
		});
	};

	const resetFeedback = () => {
		setFeedback({
			good: 0,
			neutral: 0,
			bad: 0,
		});
	};

	const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

	const positiveFeedback =
		(totalFeedback > 0 &&
			feedback.good &&
			Math.round((feedback.good / totalFeedback) * 100)) ||
		0;

	return (
		<>
			<Description />
			<Options
				onUpdate={updateFeedback}
				total={totalFeedback}
				onReset={resetFeedback}
			/>
			{totalFeedback ? (
				<Feedback
					values={feedback}
					total={totalFeedback}
					positive={positiveFeedback}
				/>
			) : (
				<Notification />
			)}
		</>
	);
}

export default App;
