export const LOGIN = "LOGIN";
export const START_TASK = "START_TASK";
export const SET_QA_DATA = "SET_QA_DATA";

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

export const setAnswerOfQA = (answer, resultIndex, index) => ({
	type: SET_QA_DATA,
	payload: answer,
	resultIndex,
	index,
});
