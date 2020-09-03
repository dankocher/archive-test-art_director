import React, {useState} from "react";

import "./ZoomController.css";

const classNames = require("classnames");

function ZoomController({zoomIn, zoomOut, resetTransform, maxZoom = 1.5}) {
	// const zoomStep = 0.25;
	// const getIsZoomed = () => prismaZoom.getZoom() !== 1;
	// const getIsMaxZoomed = () => prismaZoom.getZoom() === maxZoom;
	// const setZomeValues = () => {
	// 	setIsZoomed(getIsZoomed());
	// 	setIsMaxZoomed(getIsMaxZoomed());
	// };

	// const [isZoomed, setIsZoomed] = useState(getIsZoomed);
	// const [isMaxZoomed, setIsMaxZoomed] = useState(getIsMaxZoomed);

	// const zoomOutIcon = classNames("icon", {
	// 	"zoomOutIcon-inactive": !isZoomed,
	// 	"zoomOutIcon-active": isZoomed,
	// });

	// const resetZoomIcon = classNames("icon", {
	// 	"resetZoomIcon-inactive": !isZoomed,
	// 	"resetZoomIcon-active": isZoomed,
	// });

	// const zoomInIcon = classNames("icon", {
	// 	"zoomInIcon-inactive": isMaxZoomed,
	// 	"zoomInIcon-active": !isMaxZoomed,
	// });

	// const handlerZoomOutButton = async () => {
	// 	if (!isZoomed) {
	// 		return;
	// 	}
	// 	await prismaZoom.zoomOut(zoomStep);
	// 	setZomeValues();
	// };

	// const handlerResetZoomButton = async () => {
	// 	if (!isZoomed) {
	// 		return;
	// 	}
	// 	await prismaZoom.reset();
	// 	setZomeValues();
	// };

	// const handlerZoomInButton = async () => {
	// 	if (isMaxZoomed) {
	// 		return;
	// 	}
	// 	await prismaZoom.zoomIn(zoomStep);
	// 	setZomeValues();
	// };

	return (
		<>
			<button
				// disabled={!isZoomed}
				onClick={zoomOut}
				className="hidden-button zoom-controller-button"
			>
				{/* <i className={zoomOutIcon}></i> */}
			</button>
			<button
				// disabled={!isZoomed}
				onClick={resetTransform}
				className="hidden-button zoom-controller-button"
			>
				{/* <i className={resetZoomIcon}></i> */}
			</button>
			<button
				// disabled={isMaxZoomed}
				onClick={zoomIn}
				className="hidden-button zoom-controller-button"
			>
				{/* <i className={zoomInIcon}></i> */}
			</button>
		</>
	);
}

export default ZoomController;
