import React, { useEffect } from "react";
import styles from "./QuestionPage.module.scss";

import Timer from "../Timer/Timer";
import TaskInformation from "../TaskInformation/TaskInformation";
import Button from "../Button/Button";
import QATask from "./QATask/QATask";
import { useDispatch, useSelector } from "react-redux";

import { startTask } from "../../redux/actions/resultActions";

const exportText = {
	time: "05:15",
};

const FROM = 1;
const TO = 2000;

function QuestionPage() {
	const dispatch = useDispatch();

	const task = useSelector((state) => state.testStorage.currentTask);
	const taskId = task._id;
	const isAnswerSizeLimited = task.data.isAnswerSizeLimited;
	const QAList = task.data.questionAnswerList;
	const responseLimitation = task.data.responseLimitation;

	const resultsId = useSelector((state) =>
		state.resultStorage.results.findIndex(
			(element) => element.task_id === taskId
		)
	);

	const isTaskStarted = () => {};

	useEffect(() => {
		const startDate = task.isTimeConsidered ? new Date().getTime() : undefined;
		if (resultsId !== -1) return;
		dispatch(startTask(taskId, startDate));
	}, []);

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
									data={element}
									responseLimitation={
										isAnswerSizeLimited
											? responseLimitation
											: { from: FROM, to: TO }
									}
								/>
							);
						})}

						{/* <QATask
							task={exportText.taskQA}
							description={exportText.descriptionQA}
						/>
						<QATask
							task={exportText.taskQA}
							description={exportText.descriptionQA}
						/> */}
					</div>

					<Button color="white" label="Продолжить" />
				</div>
			</div>
		</>
	);
}

export default QuestionPage;
