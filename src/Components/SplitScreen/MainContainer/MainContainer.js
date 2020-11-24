import styles from "./mainContainer.module.scss";
import React from "react";

import Timer from "../../Timer/Timer";
import Paginator from "./Paginator/Paginator";

const exportText = { time: "05:15" };

function MainContainer(props) {
	return (
		<div className={styles.container}>
			<div className={styles.container__header}>
				<Timer time={exportText.time} />
			</div>
			<div className={styles.container__body}>{props.mainContainerBody}</div>
			<div className={styles.container__footer}>
				<Paginator />
			</div>
		</div>
	);
}

export default MainContainer;
