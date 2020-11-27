import { setCurrentSubTaskIndex } from "../redux/actions/testActions";

const setNextSubTaskThunk = (currentResultIndex) => {
	return (dispatch, getState) => {
		const state = getState();

		const currentSubTaskIndex = state.testStorage.currentSubTaskIndex;
		const maxOpenedSubTaskIndex = state.testStorage.maxOpenedSubTaskIndex;

		if (currentSubTaskIndex === maxOpenedSubTaskIndex) return;
		dispatch(setCurrentSubTaskIndex(currentSubTaskIndex + 1));
	};
};

export default setNextSubTaskThunk;
