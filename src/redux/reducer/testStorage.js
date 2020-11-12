import { SET_TASK_LIST } from "../actions";

const initialState = {
	taskList: [],
	currentTask: undefined,
};

function testStorage(state = initialState, action) {
	switch (action.type) {
		case SET_TASK_LIST:
			return { ...state, taskList: action.payload };
		default:
			return state;
	}
}

export default testStorage;
