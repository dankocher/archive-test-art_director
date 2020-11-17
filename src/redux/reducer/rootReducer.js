import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import caruselReducer from "./caruselReducer";
import testStorage from "./testStorage";
import resultStorage from "./resultStorage";

const persistConfig = {
	key: "root",
	storage,
	blacklist: ["testStorage", "caruselReducer"],
};

const testStoragePersistConfig = {
	key: "testStorage",
	storage: storage,
	whitelist: ["currentTaskId"],
};

const rootReducer = combineReducers({
	resultStorage,
	testStorage: persistReducer(testStoragePersistConfig, testStorage),
	caruselReducer,
});

export default persistReducer(persistConfig, rootReducer);
