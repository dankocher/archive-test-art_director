import {
	setCurrentSubTaskIndex,
	setMaxOpenedSubTaskIndex,
	setIsNextBtnClicked,
} from "../redux/actions/testActions";

import { ILLUSTRATIONS_ANSWERS } from "../helpers/taskTypes";

import setNextTaskId from "./setNextTaskId";

const nextButtonHadler = (currentResultIndex, responseLimitation) => {
	return (dispatch, getState) => {
		const state = getState();

		const currentSubTaskIndex = state.testStorage.currentSubTaskIndex;
		const maxOpenedSubTaskIndex = state.testStorage.maxOpenedSubTaskIndex;

		const subTaskLength =
			state.resultStorage.results[currentResultIndex].data.length - 1;

		const subTaskAnswersRB =
			state.resultStorage.results[currentResultIndex].data[currentSubTaskIndex]
				.answers;

		const subTaskAnswersIA =
			state.resultStorage.results[currentResultIndex].data[currentSubTaskIndex]
				.answer;

		const taskType = state.testStorage.currentTask.type;

		dispatch(setIsNextBtnClicked(true));

		if (taskType === ILLUSTRATIONS_ANSWERS) {
			if (
				subTaskAnswersIA == null ||
				subTaskAnswersIA.length < responseLimitation.from
			)
				return;
		} else {
			for (const answer of subTaskAnswersRB) {
				if (answer.optionId == null) return;
			}
		}

		if (currentSubTaskIndex === maxOpenedSubTaskIndex) {
			if (maxOpenedSubTaskIndex < subTaskLength) {
				dispatch(setIsNextBtnClicked(false));
				dispatch(setMaxOpenedSubTaskIndex(maxOpenedSubTaskIndex + 1));
				dispatch(setCurrentSubTaskIndex(currentSubTaskIndex + 1));
			} else {
				dispatch(setIsNextBtnClicked(false));

				// go to next task
				dispatch(setNextTaskId());
				console.log("ia poshel na sledushee zadanie");
			}
		} else {
			dispatch(setCurrentSubTaskIndex(currentSubTaskIndex + 1));
		}
	};
};

export default nextButtonHadler;
