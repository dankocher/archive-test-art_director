import { useSelector } from "react-redux";

export const useGetResultIndex = (taskId) => {
	return useSelector((state) => {
		const results = state.resultStorage.results;
		if (results == null || results.length === 0) return -1;
		return results.findIndex((element) => element.task_id === taskId);
	});
};
