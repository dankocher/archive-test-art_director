export const LOGIN = "LOGIN";
export const START_TASK = "START_TASK";
export const SET_QA_DATA = "SET_QA_DATA";

export const login = (name, email, currentTestId) => ({
	type: LOGIN,
	payload: { name, email, currentTestId },
});

export const startTask = (taskId, startData, QAList) => ({
	type: START_TASK,
	payload: { taskId, startData, QAList },
});

export const setAnswerOfQA = (answer, resultIndex, index) => ({
	type: SET_QA_DATA,
	payload: answer,
	resultIndex,
	index,
});
