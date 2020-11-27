import "./PhotoModal.css";
import React, { useState, useEffect, useCallback, useRef } from "react";
import { useDispatch } from "react-redux";

import {
	setIsHiddenPhotoModal,
	setScaleCounter,
} from "../../redux/actions/caruselActions";

import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

import Arrow from "../SplitScreen/MainContainer/Carousel/Arrow/Arrow";
import ZoomController from "./ZoomController/ZoomController";
import closeIcon from "../../helpers/icons/close-icon";

const MAX_SCALE_COUNTER = 3;

function PhotoModal({ currentImgUrl }) {
	const dispatch = useDispatch();

	const handlerCloseButton = (event, resetTransform) => {
		event.stopPropagation();
		// resetTransform();
		dispatch(setScaleCounter(0));
		dispatch(setIsHiddenPhotoModal());
	};

	// useEffect(() => {
	// 	resetTransform();
	// }, [currentImgUrl]);

	return (
		<TransformWrapper
			wheel={{ disabled: true }}
			doubleClick={{ disabled: true }}
			defaultScale={1}
			zoomIn={{ step: 6 }}
			zoomOut={{ step: 7.5 }}
		>
			{({
				setScale,
				resetTransform,
				setDefaultState,
				zoomIn,
				zoomOut,
				...rest
			}) => (
				<React.Fragment>
					<div className={"main-container--photoModal"}>
						<div className="wrapper-relative--photoModal">
							<button
								onClick={(event) => handlerCloseButton(event, resetTransform)}
								className="hidden-button close-button--photoModal"
							>
								<i>{closeIcon}</i>
							</button>
						</div>
						{console.log(rest)}
						<div
							className={"centred-carouselArrow leftArrow-position--photoModal"}
						>
							{/* {console.log(resetTransform)} */}
							<Arrow
								isDark={true}
								isToLeft={true}
								resetTransform={setDefaultState}
							/>
						</div>

						<div className={"img-container--photoModal"}>
							<TransformComponent>
								<img
									style={{ maxWidth: "100%", maxHeight: "100%" }}
									src={currentImgUrl}
									alt={""}
								/>
							</TransformComponent>
						</div>

						<div
							className={
								"centred-carouselArrow rightArrow-position--photoModal"
							}
						>
							<Arrow isDark={true} resetTransform={setDefaultState} />
						</div>
						<div className="wrapper-relative--photoModal">
							<div className="zoomController-container--photoModal">
								<ZoomController
									zoomIn={zoomIn}
									zoomOut={zoomOut}
									resetTransform={resetTransform}
									maxScaleCounter={MAX_SCALE_COUNTER}
								/>
							</div>
						</div>
					</div>
				</React.Fragment>
			)}
		</TransformWrapper>
	);
}

export default PhotoModal;
