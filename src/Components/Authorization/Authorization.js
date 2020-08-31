import React from "react";
import "./Authorization.css";

import Button from "../Button/Button";

import labels from "../../utils/labelText/lable.json";

function Authorization() {
	return (
		<div className="centered-container--authorization">
			<div className="header--authorization">
				<label>{labels.headerLable}</label>
			</div>
			<div className="body--authorization">
				<div className="field--authorization">
					<label>{labels.nameLabel}</label>
					<input />
				</div>
				<div className="field--authorization">
					<label>{labels.mailLabel}</label>
					<input />
				</div>
			</div>
			<div className="footer--authorization ">
				<Button label={labels.buttonLabelStart} />
			</div>
		</div>
	);
}

export default Authorization;
