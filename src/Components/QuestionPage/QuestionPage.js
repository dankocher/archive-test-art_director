import React from "react";
import styles from "./QuestionPage.module.scss";

import Timer from "../Timer/Timer";
import TaskInformation from "../TaskInformation/TaskInformation";
import Button from "../Button/Button";
import QATask from "./QATask/QATask";
import { useSelector } from "react-redux";
// import SituationTask from "./SituationTask/SituationTask";

const exportText = {
	time: "05:15",
};

const FROM = 0;
const TO = 2000;

function QuestionPage() {
	const task = useSelector((state) => state.testStorage.currentTask);
	const isAnswerSizeLimited = task.data.isAnswerSizeLimited;
	const QAList = task.data.questionAnswerList;
	const responseLimitation = task.data.responseLimitation;

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
