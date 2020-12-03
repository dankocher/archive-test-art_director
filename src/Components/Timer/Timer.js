import "./timer.scss";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { useGetResultIndex } from "../../helpers/customHooks/getResultIndex";

function Timer({ type }) {
	const resultIndex = useGetResultIndex();

	const [currentTimer, setCurrentTimer] = useState("00:00");
	const testStart = useSelector((state) => state.resultStorage.start_date);
	const taskStart = useSelector(
		(state) => state.resultStorage.results[resultIndex]?.start_date
	);
	console.log(taskStart);

	const tick = () => {
		const startDate = type === "test" ? testStart : taskStart;

		if (startDate == null) return;

		const currentDate = new Date().getTime();
		const timer = currentDate - startDate;

		if (timer < 0) return;

		const timerInSeconds = timer / 1000;
		const seconds = Math.floor(timerInSeconds % 60);

		const minutes = Math.floor((timerInSeconds / 60) % 60);

		const hours = Math.floor((minutes / 60) % 24);
		// const days = Math.floor(hours / 24);

		let parsedTimer;

		if (hours > 1) {
			parsedTimer =
				hours.toString().padStart(2, 0) +
				":" +
				minutes.toString().padStart(2, 0) +
				":" +
				seconds.toString().padStart(2, 0);
		} else {
			parsedTimer =
				minutes.toString().padStart(2, 0) +
				":" +
				seconds.toString().padStart(2, 0);
		}

		setCurrentTimer(parsedTimer);
	};

	useEffect(() => {
		const interval = setInterval(tick, 1000);

		return () => clearInterval(interval);
	}, [taskStart]);

	return (
		<>
			<span className="font-timer">{currentTimer}</span>
		</>
	);
}

export default Timer;
