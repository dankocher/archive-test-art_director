import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {setScalePhotoModal} from "../../../actions/";

import "./ZoomController.css";

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

	const zoomOutIcon = classNames("icon", {
		"zoomOutIcon-inactive": !isZoomed,
		"zoomOutIcon-active": isZoomed,
	});

	const resetZoomIcon = classNames("icon", {
		"resetZoomIcon-inactive": !isZoomed,
		"resetZoomIcon-active": isZoomed,
	});

	const zoomInIcon = classNames("icon", {
		"zoomInIcon-inactive": isMaxZoomed,
		"zoomInIcon-active": !isMaxZoomed,
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

	return (
		<>
			<button
				disabled={!isZoomed}
				onClick={handlerZoomOutButton}
				className="hidden-button zoom-controller-button"
			>
				<i className={zoomOutIcon}></i>
			</button>
			<button
				disabled={!isZoomed}
				onClick={handlerResetZoomButton}
				className="hidden-button zoom-controller-button"
			>
				<i className={resetZoomIcon}></i>
			</button>
			<button
				disabled={isMaxZoomed}
				onClick={handlerZoomInButton}
				className="hidden-button zoom-controller-button"
			>
				<i className={zoomInIcon}></i>
			</button>
		</>
	);
}

export default ZoomController;
