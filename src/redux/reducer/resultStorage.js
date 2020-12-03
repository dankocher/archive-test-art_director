import update from "react-addons-update";
import { getPreparedTask } from "../reducerHelpers";

import {
	LOGIN,
	START_TASK,
	SET_TEXT_AREA_DATA,
	SET_WORD_ANSWER,
} from "../actions/resultActions";

import { initialState } from "../initialStates";

function resultStorage(state = initialState, action) {
	switch (action.type) {
		case LOGIN:
			return {
				...state,
				name: action.payload.name,
				email: action.payload.email,
				test_id: action.payload.currentTestId,
				start_date: new Date().getTime(),
			};
		case START_TASK:
			return getPreparedTask(state, action);
		case SET_TEXT_AREA_DATA:
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
		case SET_WORD_ANSWER:
			return update(state, {
				results: {
					[action.resultIndex]: {
						data: {
							[action.dataIndex]: {
								answers: {
									[action.answersIndex]: {
										optionId: {
											$set: action.payload,
										},
									},
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
