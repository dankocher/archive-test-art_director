import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useGetResultIndex } from "../../../../helpers/customHooks/getResultIndex";

import { setTextAreaAnswer } from "../../../../redux/actions/resultActions";

import TextArea from "../../../TextArea/TextArea";

const FROM = 1;
const TO = 2000;

function TextAreaSettings() {
	const dispatch = useDispatch();

	const resultIndex = useGetResultIndex();

	const [localAnswer, setLocalAnswer] = useState("");
	const [localResponseLimitation, setLocalResponseLimitation] = useState({
		from: FROM,
		to: TO,
	});

	const isAnswerSizeLimited = useSelector(
		(state) => state.testStorage.currentTask.data.isAnswerSizeLimited
	);

	const responseLimitation = useSelector(
		(state) => state.testStorage.currentTask.data.responseLimitation
	);

	const currentSubTaskIndex = useSelector(
		(state) => state.testStorage.currentSubTaskIndex
	);

	const answer = useSelector(
		(state) =>
			state.resultStorage.results[resultIndex]?.data[currentSubTaskIndex].answer
	);

	const isNextBtnClicked = useSelector(
		(state) => state.testStorage.isNextBtnClicked
	);

	const saveAnswer = (localAnswer) => {
		if (answer === localAnswer) return;
		dispatch(setTextAreaAnswer(localAnswer, resultIndex, currentSubTaskIndex));
	};

	const validationAnswer = () => {
		if (!isNextBtnClicked) return true;

		if (localAnswer == null) return false;
		if (localAnswer.length < localResponseLimitation.from) return false;
		return true;
	};

	useEffect(() => {
		if (!isAnswerSizeLimited) return;
		setLocalResponseLimitation(responseLimitation);
	}, []);

	return (
		<TextArea
			defaultValue={answer}
			text={localAnswer}
			setText={setLocalAnswer}
			onBlur={saveAnswer}
			maxLength={localResponseLimitation.to}
			defaultHeight={"2.6rem"}
			placeholder={"Текст..."}
			error={!validationAnswer()}
		/>
	);
}

export default TextAreaSettings;
