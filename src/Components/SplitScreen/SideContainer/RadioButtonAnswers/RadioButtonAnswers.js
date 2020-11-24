import styles from "./RadioButtonAnswers.module.scss";

import React, { useState, useEffect } from "react";

import { uid } from "uid";

import RadioButton from "../../../RadioButton/RadioButton";

const exportText = {
	answerTitleFirst: "Актуальность",
	answerTitleSecond: "Качество",
	answer: "Обе работы современны по стилистике",
};

function RadioButtonAnswers(props) {
	const chooseColor = () => {
		return props.color === "red" ? { color: "#EB5757" } : { color: "#323232" };
	};

	const [rbId, setRBId] = useState();

	useEffect(() => {
		setRBId(uid());
	}, []);

	return (
		<>
			<h3 style={chooseColor()} className={styles.title}>
				{exportText.answerTitleFirst}
			</h3>
			<div className={styles.container}>
				<RadioButton
					id={rbId}
					name={exportText.answerTitleSecond}
					color={"#EB5757"}
					// value={exportText.answer}
					label={exportText.answer}
				/>
				<RadioButton
					id={rbId}
					name={exportText.answerTitleSecond}
					// value={exportText.answer}
					label={exportText.answer}
				/>
				<RadioButton
					id={rbId}
					name={exportText.answerTitleSecond}
					// value={exportText.answer}
					label={exportText.answer}
				/>
			</div>
		</>
	);
}

export default RadioButtonAnswers;
