import styles from "./splitScreen.module.scss";
import React from "react";

import MainContainer from "./MainContainer/MainContainer";

import SideContainer from "./SideContainer/SideContainer";
import SideContainerTask from "./SideContainer/SideContainerTask/SideContainerTask";
import RadioButtonAnswers from "./SideContainer/RadioButtonAnswers/RadioButtonAnswers";
// import TextField from "../TextField/TextField";
import BigTextMainContainer from "./MainContainer/BigText/BigText";
import Carousel from "./MainContainer/Carousel/Carousel";

function SplitScreen() {
	return (
		<div className={styles.container}>
			<MainContainer mainContainerBody={<BigTextMainContainer />} />

			<div className={styles.container__sideShadow}>
				<SideContainer answerType={<RadioButtonAnswers color="red" />} />
				{/* <SideContainer
          args={[<SideContainerTask />, <TextField error={false} />]}
        /> */}
			</div>
		</div>
	);
}

export default SplitScreen;
