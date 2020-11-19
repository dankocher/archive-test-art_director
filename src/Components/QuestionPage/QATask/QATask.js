import styles from "./QATask.module.scss";
import React from "react";

import TextArea from "../../TextArea/TextArea";

import errorIcon from "../../../helpers/icons/error-icon";

const classNames = require("classnames");

function QATask(props) {
	const { data, responseLimitation } = props;
	const { question, description, id } = data;

	const container = classNames(styles.container, {
		[styles.error]: !true,
	});

	return (
		<>
			<div className={container}>
				<p className={styles.container__question}>{question}</p>
				<p className={styles.container__description}>{description}</p>

				<TextArea maxLength={responseLimitation.to} placeholder={"Текст..."} />

				<div className={styles.errorWrapper}>
					<div className={styles.errorWrapper__errorMessage}>
						<i>{errorIcon}</i>
						<span>Invalid mail</span>
					</div>
				</div>
			</div>
		</>
	);
}

export default QATask;
