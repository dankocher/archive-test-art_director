import React from "react";
import "./TaskInformation.css";

import Timer from "../Timer/Timer";

const exportText = {
	PaginatorProgress: "Задание  3 из 12",
	time: "01:15",
};

function SideContainerHeader() {
	return (
		<div className="header--SideContainerHeader">
			<span>{exportText.PaginatorProgress}</span>
			<Timer time={exportText.time} />
		</div>
	);
}

export default SideContainerHeader;
