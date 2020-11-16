import React from "react";
import "./Button.css";

import { isFunction } from "../../utils/validators/isFunction";

function Button(props) {
	const onClick = isFunction(props.onClick)
		? props.onClick
		: () => {
				console.log("is not a function");
		  };
	return (
		<button
			onClick={() => onClick()}
			className={
				props.color === "white" ? "white-button-active" : "black-button"
			}
		>
			{props.label}
		</button>
	);
}

export default Button;
