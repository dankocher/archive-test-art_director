import React from "react";

import Radio from "@material-ui/core/Radio";
import {withStyles} from "@material-ui/core/styles";

const RedRadio = withStyles({
	root: {
		color: "#EB5757",
		height: "2rem",
		width: "2rem",
		padding: "0",
		"& span": {
			height: "inherit",
			width: "inherit",
		},
		"&$checked": {
			color: "#EB5757",
		},
		"&:hover": {
			"background-color": "transparent",
		},
		"& span div svg": {
			height: "2.4rem",
			width: "2.4rem",
		},
	},
	checked: {},
})((props) => <Radio color="default" {...props} />);

const GreyRadio = withStyles({
	root: {
		color: "#323232",
		height: "2rem",
		width: "2rem",
		padding: "0",
		"& span": {
			height: "inherit",
			width: "inherit",
		},
		"&$checked": {
			color: "#484848",
		},
		"&:hover": {
			"background-color": "transparent",
		},
		"& span div svg": {
			height: "24px",
			width: "24px",
		},
	},
	checked: {},
})((props) => <Radio color="default" {...props} />);

function CustomRadioButton(props) {
	return (
		<>
			{props.color === "red" ? (
				<RedRadio disableRipple />
			) : (
				<GreyRadio disableRipple />
			)}
		</>
	);
}

export default CustomRadioButton;
