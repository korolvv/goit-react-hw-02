import "./App.module.css";
import { useEffect, useState } from "react";
import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification";

function App() {
	const [isClick, setIsClick] = useState(false);
	const [feedback, setFeedback] = useState(() => {
		const savedFeedback = localStorage.getItem("feedback-data");
		if (savedFeedback !== null) {
			let data = JSON.parse(savedFeedback);
			if (data.good !== 0) {
				setIsClick(!isClick);
				return data;
			}
			return data;
		} else {
			isClick === true ? setIsClick(!isClick) : isClick;
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
		isClick === false ? setIsClick(!isClick) : isClick;
	};

	const resetFeedback = () => {
		setFeedback({
			good: 0,
			neutral: 0,
			bad: 0,
		});
		setIsClick(!isClick);
	};

	const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

	const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);

	return (
		<>
			<Description />
			<Options
				onUpdate={updateFeedback}
				isClick={isClick}
				onReset={resetFeedback}
			/>
			{isClick ? (
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
