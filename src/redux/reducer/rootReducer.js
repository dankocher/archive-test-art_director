import { combineReducers } from "redux";

import caruselReducer from "./caruselReducer";
import testStorage from "./testStorage";
import resultStorage from "./resultStorage";

export default combineReducers({
	resultStorage,
	testStorage,
	caruselReducer,
});
