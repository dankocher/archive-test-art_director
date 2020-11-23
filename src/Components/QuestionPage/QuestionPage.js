import React, { useEffect } from "react";
import styles from "./QuestionPage.module.scss";

import Timer from "../Timer/Timer";
import TaskInformation from "../TaskInformation/TaskInformation";
import Button from "../Button/Button";
import QATask from "./QATask/QATask";
import { useDispatch, useSelector } from "react-redux";

import { startTask } from "../../redux/actions/resultActions";
import { setIsNextBtnClicked } from "../../redux/actions/testActions";
import { useState } from "react";

const exportText = {
	time: "05:15",
};

const FROM = 1;
const TO = 2000;

function QuestionPage() {
	const dispatch = useDispatch();

	const [localResponseLimitation, setLocalResponseLimitation] = useState({
		from: FROM,
		to: TO,
	});

	const task = useSelector((state) => state.testStorage.currentTask);
	const taskId = task._id;
	const isAnswerSizeLimited = task.data.isAnswerSizeLimited;
	const QAList = task.data.questionAnswerList;
	const responseLimitation = task.data.responseLimitation;

	const resultIndex = useSelector((state) => {
		const results = state.resultStorage.results;
		if (results == null || results.length === 0) return -1;
		return results.findIndex((element) => element.task_id === taskId);
	});

	const results = useSelector(
		(state) => state.resultStorage.results[resultIndex]?.data
	);

	useEffect(() => {
		if (resultIndex !== -1) return;

		const startDate = task.isTimeConsidered ? new Date().getTime() : undefined;
		dispatch(startTask(taskId, startDate, QAList));

		if (!isAnswerSizeLimited) return;
		setLocalResponseLimitation(responseLimitation);
	}, []);

	const toNextTask = () => {
		console.log("asdad");
		dispatch(setIsNextBtnClicked(true));
		for (const result of results) {
			if (result.answer == null) return;
			if (result.answer.length < localResponseLimitation.from)
				return console.log("qwe");
		}
	};

	return (
		<>
			<div className={styles.header}>
				<Timer time={exportText.time} />
				<TaskInformation />
			</div>
			<div className={styles.centredWrapper}>
				<div className={styles.centredWrapper__container}>
					<h2>{exportText.headingText}</h2>
					<div className={styles.centredWrapper__container__body}>
						{QAList.map((element, key) => {
							return (
								<QATask
									key={key}
									index={key}
									data={element}
									resultIndex={resultIndex}
									responseLimitation={localResponseLimitation}
								/>
							);
						})}
					</div>

					<Button color="white" label="Продолжить" onClick={toNextTask} />
				</div>
			</div>
		</>
	);
}

export default QuestionPage;
