import React from "react";
import "./QATask.css";

function QATask(props) {
	return (
		<div className="container--qATask">
			<p className="question--qATask">{props.task}</p>
			<p className="description--qATask">{props.description}</p>
		</div>
	);
}

export default QATask;
