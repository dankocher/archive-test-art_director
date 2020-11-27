import styles from "./sideContainer.module.scss";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import nextButtonHadler from "../../../thunks/nextButtonHadler";
import { useGetResultIndex } from "../../../helpers/customHooks/getResultIndex";

import TaskInformation from "../../TaskInformation/TaskInformation";
import Button from "../../Button/Button";
import RadioButtonAnswers from "./RadioButtonAnswers/RadioButtonAnswers";

function SideContainer() {
	const dispatch = useDispatch();
	const task = useSelector((state) => state.testStorage.currentTask);
	const title = task.name;
	const description = task.description;
	const radioButtonTaskList = task.data?.radioButtonTaskList;
	const currentResultIndex = useGetResultIndex();

	

	const nextButtonClickedHandle = () => {
		dispatch(nextButtonHadler(currentResultIndex));
	};

	const getSideTaskView = ()=>{


	}

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
			<Button
				color="white"
				label="Продолжить"
				onClick={nextButtonClickedHandle}
			/>
		</div>
	);
}

export default SideContainer;
