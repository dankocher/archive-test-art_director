export const SET_TASK_LIST = "SET_TASK_LIST";
export const SET_CURRENT_TASK = "SET_CURRENT_TASK";

export const setTaskList = (TaskList) => ({
	type: SET_TASK_LIST,
	payload: TaskList,
});

export const setCurrentTask = (currentTask) => ({
	type: SET_CURRENT_TASK,
	payload: currentTask,
});
