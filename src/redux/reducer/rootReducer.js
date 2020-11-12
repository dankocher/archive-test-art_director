import { combineReducers } from "redux";

import caruselReducer from "./caruselReducer";
import testStorage from "./testStorage";

export default combineReducers({
	testStorage,
	caruselReducer,
});
