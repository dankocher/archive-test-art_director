import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { persistStore } from "redux-persist";
import persistedReducer from "../../redux/reducer/rootReducer";

// export { store, persistor };

export default () => {
	const store = createStore(
		persistedReducer,
		compose(
			applyMiddleware(thunk),
			window.__REDUX_DEVTOOLS_EXTENSION__ &&
				window.__REDUX_DEVTOOLS_EXTENSION__()
		)
	);

	const persistor = persistStore(store);
	return { store, persistor };
};
