import { SET_TASK_LIST, SET_CURRENT_TASK } from "../actions/testActions";

const initialState = {
	taskList: [],
	currentTask: undefined,
};

function testStorage(state = initialState, action) {
	switch (action.type) {
		case SET_TASK_LIST:
			return { ...state, taskList: action.payload };
		case SET_CURRENT_TASK:
			return { ...state, currentTask: action.payload };
		default:
			return state;
	}
}

export default testStorage;
