import React from "react";
import "./SideContainer.css";

import SideContainerHeader from "../SideContainerHeader/SideContainerHeader";
import Button from "../Button/Button";

function SideContainer(props) {
	return (
		<div className="centered-content--SideContainer">
			<SideContainerHeader />
			<div className="body--SideContainer">
				{props.args.map((element, key) => {
					return {...element, key: key};
				})}
			</div>
			<Button color="white" label="Продолжить" />
		</div>
	);
}

export default SideContainer;
