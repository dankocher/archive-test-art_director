import { SET_NAME, SET_EMAIL } from "../actions/resultActions";

const initialState = {
	name: undefined,
	email: undefined,
	test_id: undefined,
	results: [
		{
			task_id: undefined,
			data: {},
		},
	],
};

function resultStorage(state = initialState, action) {
	switch (action.type) {
		case SET_NAME:
			return { ...state, name: action.payload };
		case SET_EMAIL:
			return { ...state, email: action.payload };
		default:
			return state;
	}
}

export default resultStorage;
