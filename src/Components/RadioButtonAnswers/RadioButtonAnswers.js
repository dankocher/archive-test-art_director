import React from "react";
import "./RadioButtonAnswers.css";

const exportText = {
	answerTitleFirst: "Актуальность",
	answerTitleSecond: "Качество",
	answer: "Обе работы современны по стилистике",
};

function RadioButtonAnswers(props) {
	const chooseColor = () => {
		return props.color === "red" ? {color: "#EB5757"} : {color: "#a0a0a0"};
	};
	return (
		<div className="body-answers--radioButtonAnswers">
			<h3 style={chooseColor()} className="answer-title--radioButtonAnswers">
				{exportText.answerTitleFirst}
			</h3>
			<div className="answer--radioButtonAnswers">
				<div className="wrapper-radioButton--radioButtonAnswers">
					<input style={chooseColor()} type="radio" value="true" />
				</div>
				<span style={chooseColor()}>{exportText.answer}</span>
			</div>
		</div>
	);
}

export default RadioButtonAnswers;
