import React from "react";
import "./SideContainerHeader.css";

const exportText = {
	PaginatorProgress: "Задание  3 из 12",
	PaginatorTime: "01:15",
};

function SideContainerHeader() {
	return (
		<div className="header--SideContainerHeader">
			<span>{exportText.PaginatorProgress}</span>
			<span>{exportText.PaginatorTime}</span>
		</div>
	);
}

export default SideContainerHeader;
