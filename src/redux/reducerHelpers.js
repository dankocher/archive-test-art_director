import update from "react-addons-update";

import { result } from "./initialStates";

export const getPreparedTask = (state, action) => {
	state = update(state, {
		results: {
			$push: [
				{
					...result,
					task_id: action.payload.taskId,
					start_date: action.payload.startData,
				},
			],
		},
	});

	for (const question of action.payload.QAList) {
		state = update(state, {
			results: {
				[state.results.length - 1]: {
					data: {
						$push: [
							{
								id: question.id,
								answer: undefined,
							},
						],
					},
				},
			},
		});
	}

	return state;
};
