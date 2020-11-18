import styles from "./QATask.module.scss";
import React from "react";

import TextField from "../../TextField/TextField";

const classNames = require("classnames");

function QATask(props) {
	const container = classNames(styles.container, {
		[styles.error]: !true,
	});

	return (
		<div className={container}>
			<p className={styles.container__question}>{props.task}</p>
			<p className={styles.container__description}>{props.description}</p>

			<TextField />
		</div>
	);
}

export default QATask;
