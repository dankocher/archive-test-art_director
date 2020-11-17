import styles from "./WelcomeScreen.module.scss";
import React from "react";
import { useSelector } from "react-redux";

import { getImgPath } from "../../helpers/getImgPath";

import staticText from "../../utils/labelText/lable.json";

import Button from "../Button/Button";

const classNames = require("classnames");

function WelcomeScreen() {
	const img = useSelector(
		(state) => state.testStorage.currentTask?.data.imgUrl
	);
	const imgUrl = getImgPath(img);
	const header = useSelector((state) => state.testStorage.currentTask?.name);
	const description = useSelector(
		(state) => state.testStorage.currentTask?.description
	);
	// const img = "qwe";

	const contentContainer = classNames(styles.contentContainer, {
		[styles.containerOneContent]: img == null || img === "",
	});

	const contant = classNames(styles.contentContainer__sideContainer, {
		[styles.oneContentArea]: img == null || img === "",
	});

	return (
		<div className={styles.container}>
			<div className={contentContainer}>
				<div className={contant}>
					<h1>{header}</h1>
					<p>{description}</p>

					<Button label={staticText.buttonLabelNext} />
				</div>
				{img != null ? (
					<div className={styles.contentContainer__imgContainer}>
						<img src={imgUrl} />
					</div>
				) : null}
			</div>
		</div>
	);
}

export default WelcomeScreen;
