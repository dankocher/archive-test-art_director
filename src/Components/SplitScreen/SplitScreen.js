import React from "react";
import "./SplitPage.css";

import MainContainer from "./MainContainer/MainContainer";

import SideContainer from "./SideContainer/SideContainer";
import SideContainerTask from "./SideContainer/SideContainerTask/SideContainerTask";
import RadioButtonAnswers from "./SideContainer/RadioButtonAnswers/RadioButtonAnswers";
// import TextField from "../TextField/TextField";
import BigTextMainContainer from "./MainContainer/BigText/BigText";
import Carousel from "./MainContainer/Carousel/Carousel";

function SplitScreen() {
	return (
		<div className="grid-container--SplitPage">
			<div>
				<MainContainer mainContainerBody={<BigTextMainContainer />} />
			</div>
			<div className="shadowing-rightContainer--SplitPage">
				<SideContainer answerType={<RadioButtonAnswers color="red" />} />
				{/* <SideContainer
          args={[<SideContainerTask />, <TextField error={false} />]}
        /> */}
			</div>
		</div>
	);
}

export default SplitScreen;
