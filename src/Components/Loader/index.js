import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import {
	WELCOME_SCREEN,
	ILLUSTRATION_RADIO_BUTTONS,
	QUSETION_ANSWER,
	WORDS_RADIO_BUTTONS,
	ILLUSTRATIONS_ANSWERS,
} from "../../helpers/taskTypes";

import Authorization from "../Authorization/Authorization";

import { getTaskIdListFromServer } from "../../helpers/workWithApi";

const getPage = (taskType) => {
	switch (taskType) {
		case undefined:
			return <Authorization />;
		// case WELCOME_SCREEN:
		// 	return <WelcomeScreen />;
		// case ILLUSTRATION_RADIO_BUTTONS:
		// 	return <SplitScreen rightSide={<Illustrations />} />;
		// case ILLUSTRATIONS_ANSWERS:
		// 	return <Illustrations />;
		// case QUSETION_ANSWER:
		// 	return <QAList />;
		// case WORDS_RADIO_BUTTONS:
		// 	return <SplitScreen rightSide={<WordList />} />;
		default:
			return <></>;
			break;
	}
};

function Loader() {
	const currentTask = useSelector((state) => state.testStorage.currentTask);

	useEffect(() => {
		if (currentTask != null) return;
		getTaskIdListFromServer().then((res) => {
			console.log(res);
		});
	}, []);
	return <>{getPage(undefined)}</>;
}

export default Loader;
