import React from "react";
import "./QuestionContainer.css";

import TextField from "../TextField/TextField";

function QuestionContainer(props) {
	return (
		<div className="container--QuestionPage">
			{props.taskType}
			<TextField />
		</div>
	);
}

export default QuestionContainer;
