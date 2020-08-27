import React from "react";
import "./MainContainerSplitPage.css";

import Timer from "../Timer/Timer";
import Paginator from "../Paginator/Paginator";

function MainContainerSplitPage() {
	return (
		<div className="grid--mainContainerSplitPage">
			<div className="gridArea-header">
				<Timer />
			</div>
			<div></div>
			<div className="gridArea-footer">
				<Paginator />
			</div>
		</div>
	);
}

export default MainContainerSplitPage;
