import "./Arrow.scss";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
	positiveIterateImageIndex,
	negativeIterateImageIndex,
	setScaleCounter,
} from "../../../../../redux/actions/caruselActions";

import arrowBtnIcon from "../../../../../helpers/icons/arrow-button";

const classNames = require("classnames");

function Arrow({
	isDark = false,
	isToLeft = false,
	isHidden = false,
	resetTransform,
}) {
	const dispatch = useDispatch();

	const scaleCounter = useSelector(
		(state) => state.caruselReducer.scaleCounter
	);

	const handlerLeftArrow = (event) => {
		event.stopPropagation();

		dispatch(negativeIterateImageIndex());

		if (scaleCounter !== 0) {
			dispatch(setScaleCounter(0));
			resetTransform();
		}
	};
	const handlerRightArrow = (event) => {
		event.stopPropagation();

		dispatch(positiveIterateImageIndex());

		if (scaleCounter !== 0) {
			dispatch(setScaleCounter(0));
			resetTransform();
		}
	};

	const arrowClass = classNames("hidden-button", {
		"carouselArrow-left": isToLeft,
		"carouselArrow-right": !isToLeft,
		"dark--carouselArrow": isDark,
		"light--carouselArrow": !isDark,
	});

	const style = isHidden ? { visibility: "hidden" } : {};

	return (
		<>
			<button
				style={style}
				className={arrowClass}
				onClick={isToLeft ? handlerLeftArrow : handlerRightArrow}
			>
				<i className={isToLeft ? "arrowIcon-left" : null}>{arrowBtnIcon}</i>
			</button>
		</>
	);
}

export default Arrow;
