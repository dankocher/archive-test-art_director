import styles from "./authorization.module.scss";
import React, { useEffect } from "react";

import Button from "../Button/Button";

import labels from "../../utils/labelText/lable.json";

function Authorization() {
	// useEffect(() => {}, []);
	return (
		<div className={styles.container}>
			<div className={styles.container__imgContainer}>
				<img src={require("../../utils/img/rectangle.png")} />
			</div>
			<div className={styles.container__centeredContainer}>
				<div className={styles.wrapper}>
					<div className={styles.wrapper__field}>
						<label>{labels.nameLabel}</label>
						<input />
					</div>
					<div className={styles.wrapper__field}>
						<label>{labels.mailLabel}</label>
						<input />
					</div>

					<Button label={labels.buttonLabelStart} />
				</div>
			</div>
		</div>
	);
}

export default Authorization;
