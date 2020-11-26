import styles from "./sideContainer.module.scss";
import React from "react";
import { useSelector } from "react-redux";

import TaskInformation from "../../TaskInformation/TaskInformation";
import Button from "../../Button/Button";
import RadioButtonAnswers from "./RadioButtonAnswers/RadioButtonAnswers";

function SideContainer(props) {
	const task = useSelector((state) => state.testStorage.currentTask);
	const title = task.name;
	const description = task.description;
	const radioButtonTaskList = task.data?.radioButtonTaskList;

	return (
		<div className={styles.contentWrapper}>
			<TaskInformation />

			<div className={styles.contentWrapper__body}>
				<article className={styles.container}>
					<h2>{title}</h2>
					<p>{description}</p>
				</article>

				{radioButtonTaskList?.map((radioButtonTask, key) => {
					return (
						<RadioButtonAnswers
							key={key}
							index={key}
							color={"red"}
							radioButtonTask={radioButtonTask}
						/>
					);
				})}
			</div>
			<Button color="white" label="Продолжить" />
		</div>
	);
}

export default SideContainer;
