import {
	SET_TASK_LIST,
	SET_CURRENT_TEST_ID,
	SET_CURRENT_TASK_ID,
	SET_CURRENT_TASK,
} from "../actions/testActions";

const initialState = {
	taskList: [],
	// currentTaskId: "5f720a047e5e6f4b670dfb5a",
	currentTaskId: undefined,
	currentTask: undefined,
};

function testStorage(state = initialState, action) {
	switch (action.type) {
		case SET_CURRENT_TEST_ID:
			return { ...state, currentTestId: action.payload };
		case SET_TASK_LIST:
			return { ...state, taskList: action.payload };
		case SET_CURRENT_TASK_ID:
			return { ...state, currentTaskId: action.payload };
		case SET_CURRENT_TASK:
			return { ...state, currentTask: action.payload };
		default:
			return state;
	}
}

export default testStorage;
