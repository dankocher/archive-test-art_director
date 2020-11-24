import React from "react";
import "./MainContainer.css";

import Timer from "../../Timer/Timer";
import Paginator from "./Paginator/Paginator";

const exportText = {time: "05:15"};

function MainContainer(props) {
	return (
		<div className="grid--mainContainerSplitPage">
			<div className="gridArea-header-MainContainerSplitPage">
				<Timer time={exportText.time} />
			</div>
			<div className="gridArea-body-MainContainerSplitPage">
				{props.mainContainerBody}
			</div>
			<div className="gridArea-footer-MainContainerSplitPage">
				<Paginator />
			</div>
		</div>
	);
}

export default MainContainer;
