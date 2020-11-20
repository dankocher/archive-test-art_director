import { LOGIN } from "../actions/resultActions";

const result = {
	task_id: undefined,
	data: [{}],
};

const initialState = {
	name: undefined,
	email: undefined,
	test_id: undefined,
	results: [],
};

function resultStorage(state = initialState, action) {
	switch (action.type) {
		case LOGIN:
			return {
				...state,
				name: action.payload.name,
				email: action.payload.email,
				test_id: action.payload.currentTestId,
			};
		default:
			return state;
	}
}

export default resultStorage;
