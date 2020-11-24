import styles from "./bigText.module.scss";

import React from "react";

const exportText = "Майндфулнесс";

function BigTextMainContainer(props) {
	return (
		<div className={styles.container}>
			<h1 className={styles.container__bigText}>{exportText}</h1>
		</div>
	);
}

export default BigTextMainContainer;
