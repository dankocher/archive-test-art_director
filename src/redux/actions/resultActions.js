export const LOGIN = "LOGIN";
export const START_TASK = "START_TASK";

export const login = (name, email, currentTestId) => ({
	type: LOGIN,
	payload: { name, email, currentTestId },
});

export const startTask = (taskId, startData) => ({
	type: START_TASK,
	payload: { taskId, startData },
});
