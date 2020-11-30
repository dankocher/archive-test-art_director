import {
	setCurrentSubTaskIndex,
	setMaxOpenedSubTaskIndex,
	setIsNextBtnClicked,
} from "../redux/actions/testActions";

import setNextTaskId from "./setNextTaskId";

const nextButtonHadler = (currentResultIndex) => {
	return (dispatch, getState) => {
		const state = getState();

		const currentSubTaskIndex = state.testStorage.currentSubTaskIndex;
		const maxOpenedSubTaskIndex = state.testStorage.maxOpenedSubTaskIndex;

		const subTaskLength =
			state.resultStorage.results[currentResultIndex].data.length - 1;

		const subTaskAnswers =
			state.resultStorage.results[currentResultIndex].data[currentSubTaskIndex]
				.answers;

		dispatch(setIsNextBtnClicked(true));

		for (const answer of subTaskAnswers) {
			if (answer.optionId == null) return;
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