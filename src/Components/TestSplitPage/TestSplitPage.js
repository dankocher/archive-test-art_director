import React from "react";
import TestSplitRightSide from "../TestSplitRightSide/TestSplitRightSide";
import "./TestSplitPage.css";

function TestSplitPage() {
	return (
		<div className="grid-container--TestSplitPage">
			<div></div>
			<div>
				<TestSplitRightSide />
			</div>
		</div>
	);
}

export default TestSplitPage;
