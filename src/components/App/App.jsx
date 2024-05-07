import "./App.module.css";
import { useEffect, useState } from "react";
import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";

function App() {
	const [feedback, setFeedback] = useState({
		good: 0,
		neutral: 0,
		bad: 0,
	});

	const [isClick, setIsClick] = useState(false);

	const handleIsClick = () => {
		setIsClick(!isClick);
	};

	const updateFeedback = (feedbackType) => {
		setFeedback({
			...feedback,
			feedbackType: feedback.feedbackType + 1,
		});
	};

	useEffect(() => {
		console.log(feedback);
	}, [feedback]);

	return (
		<>
			<Description />
			<Options
				feedback={feedback}
				onUpdate={updateFeedback}
				onClick={handleIsClick}
			/>
			{!isClick && <Feedback values={feedback} />}
		</>
	);
}

export default App;
