import styles from "./bigText.module.scss";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useGetResultIndex } from "../../../../helpers/customHooks/getResultIndex";
import startTaskThunk from "../../../../thunks/startTaskThunk";

const exportText = "Майндфулнесс";

function BigTextMainContainer(props) {
	const dispatch = useDispatch();

	const task = useSelector((state) => state.testStorage.currentTask);
	const taskId = task._id;
	const wordList = task.data.wordList;
	const radioButtonTaskList = task.data.radioButtonTaskList;
	const currentSubTaskIndex = useSelector(
		(state) => state.testStorage.currentSubTaskIndex
	);

	const word = task.data.wordList[currentSubTaskIndex]?.word;

	const resultIndex = useGetResultIndex(taskId);
	useEffect(() => {
		dispatch(
			startTaskThunk(taskId, resultIndex, wordList, radioButtonTaskList)
		);
	}, []);

	console.log(word);
	return (
		<div className={styles.container}>
			<h1 className={styles.container__bigText}>{word}</h1>
		</div>
	);
}

export default BigTextMainContainer;
