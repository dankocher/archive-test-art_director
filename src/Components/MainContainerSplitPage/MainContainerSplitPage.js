import React from "react";
import "./MainContainerSplitPage.css";

import Timer from "../Timer/Timer";
import Paginator from "../Paginator/Paginator";

function MainContainerSplitPage(props) {
	return (
		<div className="grid--mainContainerSplitPage">
			<div className="gridArea-header-MainContainerSplitPage">
				<Timer />
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

export default MainContainerSplitPage;
