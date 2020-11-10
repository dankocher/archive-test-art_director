import React from "react";
import {useDispatch} from "react-redux";
import "./Arrow.css";

import {
	positiveIterateImageIndex,
	negativeIterateImageIndex,
} from "../../../actions";

const classNames = require("classnames");

function Arrow({isDark = false, isToLeft = false, isHidden = false}) {
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

	const arrowIcon = classNames("icon", {
		"arrowIcon-left": isToLeft,
		"arrowIcon-right": !isToLeft,
	});

	const style = isHidden ? {visibility: "hidden"} : {};

	return (
		<>
			<button
				style={style}
				className={arrowClass}
				onClick={isToLeft ? handlerLeftArrow : handlerRightArrow}
			>
				<i className={arrowIcon}></i>
			</button>
		</>
	);
}

export default Arrow;
