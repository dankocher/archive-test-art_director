import styles from "./RadioButtonAnswers.module.scss";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// import { uid } from "uid";

import RadioButton from "../../../RadioButton/RadioButton";

import { setAnswerOfWordsRadioButtons } from "../../../../redux/actions/resultActions";
import { useGetResultIndex } from "../../../../helpers/customHooks/getResultIndex";

function RadioButtonAnswers(props) {
	const { index, radioButtonTask } = props;

	const dispatch = useDispatch();

	// const [checkedValue, setCheckedValue] = useState("");

	const resultIndex = useGetResultIndex();
	const currentSubTaskIndex = useSelector(
		(state) => state.testStorage.currentSubTaskIndex
	);
	const checkedValue = useSelector(
		(state) =>
			state.resultStorage?.results[resultIndex]?.data[currentSubTaskIndex]
				?.answers[index]?.optionId
	);

	const isNextBtnClicked = useSelector(
		(state) => state.testStorage.isNextBtnClicked
	);

	const chooseOption = (event) => {
		const value = parseInt(event.target.value);
		dispatch(
			setAnswerOfWordsRadioButtons(
				value,
				resultIndex,
				currentSubTaskIndex,
				index
			)
		);
	};

	const isValid = () => {
		if (!isNextBtnClicked) return true;
		if (checkedValue != null) return true;
		return false;
	};

	const chooseColor = () => {
		return isValid() ? "#323232" : "#EB5757";
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
							id={`${element.option}-${index}-${key + element.id}`}
							name={`${radioButtonTask.question}-${index}`}
							color={chooseColor()}
							value={`${element.id}`}
							label={element.option}
							onChange={chooseOption}
							checkedValue={`${checkedValue}`}
						/>
					);
				})}
			</div>
		</>
	);
}

export default RadioButtonAnswers;
