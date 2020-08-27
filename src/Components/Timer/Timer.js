import React from "react";
import "./Timer.css";

const exportText = {time: "05:15"};

function Timer() {
	return (
		<>
			<span className="font-timer">{exportText.time}</span>
		</>
	);
}

export default Timer;
