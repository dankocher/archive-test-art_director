import React from "react";
import "./Button.css";

function Button(props) {
	return (
		<button
			className={
				props.color === "white" ? "white-button-active" : "black-button"
			}
		>
			{props.label}
		</button>
	);
}

export default Button;
