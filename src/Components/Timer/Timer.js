import React from "react";
import "./Timer.css";

function Timer(props) {
	return (
		<>
			<span className="font-timer">{props.time}</span>
		</>
	);
}

export default Timer;
