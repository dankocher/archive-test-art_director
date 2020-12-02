export const LOGIN = "LOGIN";
export const START_TASK = "START_TASK";
export const SET_TEXT_AREA_DATA = "SET_TEXT_AREA_DATA";
export const SET_WORD_ANSWER = "SET_WORD_ANSWER";

export const login = (name, email, currentTestId) => ({
	type: LOGIN,
	payload: { name, email, currentTestId },
});

export const startTask = (
	taskId,
	startData,
	taskList,
	radioButtonTaskList
) => ({
	type: START_TASK,
	payload: { taskId, startData, taskList, radioButtonTaskList },
});

export const setTextAreaAnswer = (answer, resultIndex, index) => ({
	type: SET_TEXT_AREA_DATA,
	payload: answer,
	resultIndex,
	index,
});

export const setAnswerOfWordsRadioButtons = (
	choosenOption,
	resultIndex,
	dataIndex,
	answersIndex
) => ({
	type: SET_WORD_ANSWER,
	payload: choosenOption,
	resultIndex,
	dataIndex,
	answersIndex,
});
