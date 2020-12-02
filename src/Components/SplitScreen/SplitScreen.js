import styles from "./splitScreen.module.scss";
import React from "react";

import MainContainer from "./MainContainer/MainContainer";

import SideContainer from "./SideContainer/SideContainer";
import RadioButtonAnswers from "./SideContainer/RadioButtonAnswers/RadioButtonAnswers";

function SplitScreen({ mainContainer }) {
	return (
		<div className={styles.container}>
			<MainContainer mainContainerBody={mainContainer} />

			<SideContainer answerType={<RadioButtonAnswers color="red" />} />
			{/* <SideContainer
          args={[<SideContainerTask />, <TextField error={false} />]}
        /> */}
		</div>
	);
}

export default SplitScreen;
