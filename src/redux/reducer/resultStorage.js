import update from "react-addons-update";
import { getPreparedTask } from "../reducerHelpers";

import { LOGIN, START_TASK, SET_QA_DATA } from "../actions/resultActions";

import { initialState } from "../initialStates";

function resultStorage(state = initialState, action) {
	switch (action.type) {
		case LOGIN:
			return {
				...state,
				name: action.payload.name,
				email: action.payload.email,
				test_id: action.payload.currentTestId,
			};
		case START_TASK:
			return getPreparedTask(state, action);
		case SET_QA_DATA:
			return update(state, {
				results: {
					[action.resultIndex]: {
						data: {
							[action.index]: {
								answer: {
									$set: action.payload,
								},
							},
						},
					},
				},
			});
		default:
			return state;
	}
}

export default resultStorage;
