export const SET_TASK_LIST = "SET_TASK_LIST";
export const SET_CURRENT_TASK_ID = "SET_CURRENT_TASK_ID";
export const SET_CURRENT_TASK = "SET_CURRENT_TASK";
export const SET_CURRENT_TEST_ID = "SET_CURRENT_TEST_ID";
export const SET_IS_NEXT_BUTTON_CLICKED = "SET_IS_NEXT_BUTTON_CLICKED";

export const setTaskList = (TaskList) => ({
	type: SET_TASK_LIST,
	payload: TaskList,
});

export const setCurrentTestId = (currentTestId) => ({
	type: SET_CURRENT_TEST_ID,
	payload: currentTestId,
});

export const setCurrentTaskId = (currentTaskId) => ({
	type: SET_CURRENT_TASK_ID,
	payload: currentTaskId,
});

export const setCurrentTask = (currentTask) => ({
	type: SET_CURRENT_TASK,
	payload: currentTask,
});

export const setIsNextBtnClicked = (isNextBtnClicked) => ({
	type: SET_IS_NEXT_BUTTON_CLICKED,
	payload: isNextBtnClicked,
});
