import styles from "./QuestionPage.module.scss";
import React, { useEffect, useRef, createRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Timer from "../Timer/Timer";
import TaskInformation from "../TaskInformation/TaskInformation";
import Button from "../Button/Button";
import QATask from "./QATask/QATask";

import { startTask } from "../../redux/actions/resultActions";
import { setIsNextBtnClicked } from "../../redux/actions/testActions";
import setNextTaskId from "../../thunks/setNextTaskId";

const exportText = {
	time: "05:15",
};

const FROM = 1;
const TO = 2000;

function QuestionPage() {
	const dispatch = useDispatch();
	const itemsRef = useRef([]);

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
		Array(QAList.length)
			.fill()
			.map((_, i) => itemsRef[i] || createRef());
		// itemsRef.current = Array(QAList.length)
		// 	.fill()
		// 	.map((_, i) => itemsRef.current[i] || createRef());
		// itemsRef.current = itemsRef.current.slice(0, QAList.length);
	}, []);

	useEffect(() => {
		if (resultIndex !== -1) return;

		const startDate = task.isTimeConsidered ? new Date().getTime() : undefined;
		dispatch(startTask(taskId, startDate, QAList));

		if (!isAnswerSizeLimited) return;
		setLocalResponseLimitation(responseLimitation);
	}, []);

	const toNextTask = () => {
		dispatch(setIsNextBtnClicked(true));
		for (const [index, result] of results.entries()) {
			if (result.answer == null) return;
			if (result.answer.length < localResponseLimitation.from) {
				itemsRef.current[index].children[2].children[0].focus({
					preventScroll: true,
				});

				itemsRef.current[index].scrollIntoView({
					behavior: "smooth",
					// block: "center",
					inline: "center",
				});

				return console.log("qwe");
			}
		}

		dispatch(setIsNextBtnClicked(false));
		dispatch(setNextTaskId());
	};

	return (
		<>
			<div className={styles.header}>
				<Timer type={"test"} />
				<TaskInformation />
			</div>
			<div className={styles.centredWrapper}>
				<div className={styles.centredWrapper__container}>
					<h2>{exportText.headingText}</h2>
					<div className={styles.centredWrapper__container__body}>
						{QAList.map((element, key) => {
							return (
								<QATask
									// ref={itemsRef[key]}
									key={key}
									index={key}
									itemsRef={itemsRef}
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
