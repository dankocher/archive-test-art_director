import React from "react";
import "./SplitPage.css";

import MainContainerSplitPage from "../MainContainerSplitPage/MainContainerSplitPage";

import SideContainer from "../SideContainer/SideContainer";
import SideContainerTask from "../SideContainerTask/SideContainerTask";
import RadioButtonAnswers from "../RadioButtonAnswers/RadioButtonAnswers";

function SplitPage() {
	return (
		<div className="grid-container--SplitPage">
			<div>
				<MainContainerSplitPage />
			</div>
			<div className="shadowing-rightContainer--SplitPage">
				<SideContainer
					args={[<SideContainerTask />, <RadioButtonAnswers color="red" />]}
				/>
			</div>
		</div>
	);
}

export default SplitPage;
