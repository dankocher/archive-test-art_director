import React, {useState, useEffect, useCallback, useRef} from "react";
import {useDispatch} from "react-redux";

import "./PhotoModal.css";

import {setIsHiddenPhotoModal} from "../../actions";

import CarouselArrow from "../CarouselArrow/CarouselArrow";
import ZoomController from "./ZoomController/ZoomController";
import {TransformWrapper, TransformComponent} from "react-zoom-pan-pinch";

const MAX_ZOOM = 1.75;
const ZOOM_STEP = 0.25;

function PhotoModal({isHidden = true, currentImgUrl}) {
	const dispatch = useDispatch();
	const style = isHidden ? {visibility: "hidden"} : {};

	const handlerCloseButton = (event, resetTransform) => {
		event.stopPropagation();
		dispatch(setIsHiddenPhotoModal());
	};

	return (
		<TransformWrapper
			wheel={{disabled: true}}
			doubleClick={{disabled: true}}
			defaultScale={1}
		>
			{({setScale, resetTransform, ...rest}) => (
				<React.Fragment>
					<div style={style} className={"main-container--photoModal"}>
						<div className="wrapper-relative--photoModal">
							<button
								onClick={(event) => handlerCloseButton(event, resetTransform)}
								className="hidden-button close-button--photoModal"
							>
								<i className="closeIcon"></i>
							</button>
						</div>

						<div
							className={"centred-carouselArrow leftArrow-position--photoModal"}
						>
							<CarouselArrow isDark={true} isToLeft={true} />
						</div>

						<div className={"img-container--photoModal"}>
							<TransformComponent>
								<img
									style={{maxWidth: "100%", maxHeight: "100%"}}
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
							<CarouselArrow isDark={true} />
						</div>
						<div className="wrapper-relative--photoModal">
							<div className="zoomController-container--photoModal">
								<ZoomController
									setScale={setScale}
									maxZoom={MAX_ZOOM}
									zoomStep={ZOOM_STEP}
									resetTransform={resetTransform}
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
