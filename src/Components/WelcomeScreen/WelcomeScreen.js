import styles from "./WelcomeScreen.module.scss";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { getImgPath } from "../../helpers/getImgPath";
import setNextTaskId from "../../thunks/setNextTaskId";

import staticText from "../../utils/labelText/lable.json";

import Button from "../Button/Button";

const classNames = require("classnames");

function WelcomeScreen() {
	const dispatch = useDispatch();

	const img = useSelector(
		(state) => state.testStorage.currentTask?.data.imgUrl
	);
	const imgUrl = getImgPath(img);
	const header = useSelector((state) => state.testStorage.currentTask?.name);
	const description = useSelector(
		(state) => state.testStorage.currentTask?.description
	);

	const contentContainer = classNames(styles.contentContainer, {
		[styles.containerOneContent]: img == null || img === "",
	});

	const contant = classNames(styles.contentContainer__sideContainer, {
		[styles.oneContentArea]: img == null || img === "",
	});

	const nextTaskHandler = () => {
		dispatch(setNextTaskId());
	};

	return (
		<div className={styles.container}>
			<div className={contentContainer}>
				<div className={contant}>
					<h1>{header}</h1>
					<p>{description}</p>

					<Button
						label={staticText.buttonLabelNext}
						onClick={nextTaskHandler}
					/>
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
