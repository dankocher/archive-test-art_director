import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
	WELCOME_SCREEN,
	ILLUSTRATION_RADIO_BUTTONS,
	QUSETION_ANSWER,
	WORDS_RADIO_BUTTONS,
	ILLUSTRATIONS_ANSWERS,
} from "../../helpers/taskTypes";

import Authorization from "../Authorization/Authorization";
import WelcomeScreen from "../WelcomeScreen/WelcomeScreen";

import { setTaskList, setCurrentTask } from "../../redux/actions/testActions";

import {
	getTaskIdListFromServer,
	getTaskFromServer,
} from "../../helpers/workWithApi";

const getPage = (taskType) => {
	switch (taskType) {
		case WELCOME_SCREEN:
			return <WelcomeScreen />;
		// case ILLUSTRATION_RADIO_BUTTONS:
		// 	return <SplitScreen rightSide={<Illustrations />} />;
		// case ILLUSTRATIONS_ANSWERS:
		// 	return <Illustrations />;
		// case QUSETION_ANSWER:
		// 	return <QAList />;
		// case WORDS_RADIO_BUTTONS:
		// 	return <SplitScreen rightSide={<WordList />} />;
		default:
			return <Authorization />;
	}
};

function Loader() {
	const dispatch = useDispatch();
	const currentTaskId = useSelector((state) => state.testStorage.currentTaskId);
	const taskType = useSelector((state) => state.testStorage.currentTask?.type);

	useEffect(() => {
		// if (currentTaskId != null) return;
		getTaskIdListFromServer().then((res) => {
			dispatch(setTaskList(res.tasks));
			console.log(res);
		});
	}, []);

	useEffect(() => {
		if (currentTaskId == null) return;
		getTaskFromServer(currentTaskId).then((res) => {
			console.log(res.task);
			dispatch(setCurrentTask(res.task));
		});
	}, [currentTaskId]);

	return <>{getPage(taskType)}</>;
}

export default Loader;
