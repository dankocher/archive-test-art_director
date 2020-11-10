import "./ZoomController.scss";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setScalePhotoModal } from "../../../actions/";

import resetZoomIcon from "../../../helpers/icons/rezet-zoom-icon";
import zoomOutIcon from "../../../helpers/icons/zoom-out-icon";
import zoomInIcon from "../../../helpers/icons/zoom-in-icon";

const classNames = require("classnames");

function ZoomController({
	setScale,
	resetTransform,
	zoomStep = 0.25,
	maxZoom = 1.5,
}) {
	const dispatch = useDispatch();
	const scale = useSelector((state) => state.scale);
	const getIsZoomed = () => scale !== 1;
	const getIsMaxZoomed = () => scale === maxZoom;

	const [isZoomed, setIsZoomed] = useState(getIsZoomed);
	const [isMaxZoomed, setIsMaxZoomed] = useState(getIsMaxZoomed);

	useEffect(() => {
		if (scale !== 1) {
			setScale(scale);
		}
		setZomeValues();
	}, [scale]);

	const setZomeValues = () => {
		setIsZoomed(getIsZoomed);
		setIsMaxZoomed(getIsMaxZoomed);
	};

	const zoomOutClass = classNames({
		"": !isZoomed,
		activeColor: isZoomed,
	});

	const resetZoomClass = classNames({
		"": !isZoomed,
		activeColor: isZoomed,
	});

	const zoomInClass = classNames({
		"": isMaxZoomed,
		activeColor: !isMaxZoomed,
	});

	const handlerZoomOutButton = (event) => {
		event.stopPropagation();
		if (!isZoomed) {
			return;
		}

		resetTransform(event);
		dispatch(setScalePhotoModal(scale - zoomStep));
	};

	const handlerResetZoomButton = (event) => {
		event.stopPropagation();
		if (!isZoomed) {
			return;
		}

		console.log("SASKE, vernis v derevnu");
		dispatch(setScalePhotoModal(1));
	};

	const handlerZoomInButton = (event) => {
		event.stopPropagation();
		if (isMaxZoomed) {
			return;
		}
		dispatch(setScalePhotoModal(scale + zoomStep));
	};
	console.log(isZoomed);
	return (
		<>
			<button
				disabled={!isZoomed}
				onClick={handlerZoomOutButton}
				className="hidden-button zoom-controller-button"
			>
				<i className={zoomOutClass}>{zoomOutIcon}</i>
			</button>
			<button
				disabled={!isZoomed}
				onClick={handlerResetZoomButton}
				className="hidden-button zoom-controller-button"
			>
				<i className={resetZoomClass}>{resetZoomIcon}</i>
			</button>
			<button
				disabled={isMaxZoomed}
				onClick={handlerZoomInButton}
				className="hidden-button zoom-controller-button"
			>
				<i className={zoomInClass}>{zoomInIcon}</i>
			</button>
		</>
	);
}

export default ZoomController;
