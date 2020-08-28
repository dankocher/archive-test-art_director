import React from "react";
import "./SplitPage.css";

import MainContainerSplitPage from "../MainContainerSplitPage/MainContainerSplitPage";

import SideContainer from "../SideContainer/SideContainer";
import SideContainerTask from "../SideContainerTask/SideContainerTask";
import RadioButtonAnswers from "../RadioButtonAnswers/RadioButtonAnswers";
import TextField from "../TextField/TextField";
import BigTextMainContainer from "../BigTextMainContainer/BigTextMainContainer";
import Carousel from "../Carousel/Carousel";

function SplitPage() {
	return (
		<div className="grid-container--SplitPage">
			<div>
				<MainContainerSplitPage mainContainerBody={<Carousel />} />
			</div>
			<div className="shadowing-rightContainer--SplitPage">
				{/* <SideContainer
					args={[<SideContainerTask />, <RadioButtonAnswers color="red" />]}
				/> */}
				<SideContainer
					args={[<SideContainerTask />, <TextField error={false} />]}
				/>
			</div>
		</div>
	);
}

export default SplitPage;
