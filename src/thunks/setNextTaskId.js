import { setCurrentTaskId } from "../redux/actions/testActions";

const setNextTaskId = () => {
	return (dispatch, getState) => {
		const state = getState();
		const taskList = state.testStorage.taskList;
		const currentTaskId = state.testStorage.currentTaskId;

		const indexCurrentTaskId = taskList.indexOf(currentTaskId);

		if (indexCurrentTaskId === -1) return;
		const nextIndex = indexCurrentTaskId + 1;

		if (nextIndex > taskList.length) {
			console.log("test okonchilsia davaite novii");
			return;
		}

		dispatch(setCurrentTaskId(taskList[nextIndex]));
	};
};
