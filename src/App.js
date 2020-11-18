import React from "react";
import { useSelector } from "react-redux";

import Loader from "./Components/Loader";
import WelcomeScreen from "./Components/WelcomeScreen/WelcomeScreen";

function App() {
	const isRehydrated = useSelector(
		(state) => state.rehydrateStorage.isRehydrated
	);
	return <>{isRehydrated ? <Loader /> : null}</>;
}

export default App;
