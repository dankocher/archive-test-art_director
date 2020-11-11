import React from "react";
import "./SplitPage.css";

import MainContainer from "./MainContainer/MainContainer";

import SideContainer from "./SideContainer/SideContainer";
import SideContainerTask from "./SideContainer/SideContainerTask/SideContainerTask";
import RadioButtonAnswers from "../RadioButtonAnswers/RadioButtonAnswers";
import TextField from "../TextField/TextField";
import BigTextMainContainer from "./MainContainer/BigTextMainContainer/BigTextMainContainer";
import Carousel from "./MainContainer/Carousel/Carousel";

function SplitPage() {
	return (
		<div className="grid-container--SplitPage">
			<div>
				<MainContainer mainContainerBody={<Carousel />} />
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

export default SplitPage;
