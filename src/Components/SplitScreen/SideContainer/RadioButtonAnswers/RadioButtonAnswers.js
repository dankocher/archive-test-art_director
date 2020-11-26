import styles from "./RadioButtonAnswers.module.scss";

import React, { useState, useEffect } from "react";

import { uid } from "uid";

import RadioButton from "../../../RadioButton/RadioButton";
import { useSelector } from "react-redux";

const exportText = {
	answerTitleFirst: "Актуальность",
	answerTitleSecond: "Качество",
	answer: "Обе работы современны по стилистике",
};

function RadioButtonAnswers(props) {
	const { index, radioButtonTask } = props;

	const [checkedValue, setCheckedValue] = useState("");

	const chooseColor = () => {
		return props.color === "red" ? "#EB5757" : "#323232";
	};

	const chooseOption = (event) => {
		const value = event.target.value;
		setCheckedValue(value);
	};

	return (
		<>
			<h3 style={{ color: chooseColor() }} className={styles.title}>
				{radioButtonTask.question}
			</h3>
			<div className={styles.container}>
				{radioButtonTask.radioButtonOptionList.map((element, key) => {
					return (
						<RadioButton
							key={key}
							id={`${element.option}-${key + element.id}`}
							name={`${radioButtonTask.question}-${index}`}
							color={chooseColor()}
							value={`${element.id}`}
							label={element.option}
							onChange={chooseOption}
							checkedValue={checkedValue}
						/>
					);
				})}
			</div>
		</>
	);
}

export default RadioButtonAnswers;
