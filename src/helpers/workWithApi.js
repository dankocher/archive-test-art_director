import ajax from "../utils/ajax";
import { api, host } from "../constants/api";

// export const getUrlId = () => {
// 	const urlPath = window.location.pathname.split("/");
// 	return urlPath[urlPath.length - 1];
// };

const _ID = "5f5f6162de1af368a21e299a";

export const getTaskIdListFromServer = async (_id) => {
	const res = await ajax(api.td_get_tasks, { tt_id: _ID });
	if (!res.ok) {
		console.log("Bad response");
		return;
	}
	return res;
};
