import React from "react";
import "./TextField.css";

function TextField(props) {
	return (
		<input
			placeholder="Текст..."
			className={props.error ? "textField textField-error" : "textField"}
		></input>
	);
}

export default TextField;
