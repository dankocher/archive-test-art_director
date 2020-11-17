import { LOGIN } from "../actions/resultActions";

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
		case LOGIN:
			return {
				...state,
				name: action.payload.name,
				email: action.payload.email,
			};
		default:
			return state;
	}
}

export default resultStorage;
