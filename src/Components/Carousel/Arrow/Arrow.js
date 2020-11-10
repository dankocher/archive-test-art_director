import React from "react";
import { useDispatch } from "react-redux";
import "./Arrow.scss";

import {
	positiveIterateImageIndex,
	negativeIterateImageIndex,
} from "../../../actions";

import arrowBtnIcon from "../../../helpers/icons/arrow-button";

const classNames = require("classnames");

function Arrow({ isDark = false, isToLeft = false, isHidden = false }) {
	const dispatch = useDispatch();

	const handlerLeftArrow = (event) => {
		event.stopPropagation();
		dispatch(negativeIterateImageIndex());
	};
	const handlerRightArrow = () => {
		dispatch(positiveIterateImageIndex());
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
