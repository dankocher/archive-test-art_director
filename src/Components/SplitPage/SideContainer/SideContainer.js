import React from "react";
import "./SideContainer.css";
import SideContainerTask from "./SideContainerTask/SideContainerTask";
import TaskInformation from "../../TaskInformation/TaskInformation";
import Button from "../../Button/Button";

function SideContainer(props) {
	return (
		<div className="centered-content--SideContainer">
			<TaskInformation />

			<div className="body--SideContainer">
				<SideContainerTask />
				{props.answerType}
			</div>
			<Button color="white" label="Продолжить" />
		</div>
	);
}

export default SideContainer;
