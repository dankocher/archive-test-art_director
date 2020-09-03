import React, {useState, useCallback, useRef} from "react";
import {useDispatch} from "react-redux";
// import PrismaZoom from "react-prismazoom";

import "./PhotoModal.css";

import {setIsHiddenPhotoModal} from "../../actions";

import CarouselArrow from "../CarouselArrow/CarouselArrow";
import ZoomController from "./ZoomController/ZoomController";
import {TransformWrapper, TransformComponent} from "react-zoom-pan-pinch";

function PhotoModal({isHidden = true, currentImgUrl}) {
	const dispatch = useDispatch();
	// const prismaZoom = useRef(null);

	const maxZoom = 1.25;

	// const [prismaZoom, setPrismaZoom] = useState({});

	// const measuredRef = useCallback((node) => {
	// 	if (node !== null) {
	// 		console.log(node);
	// 		setPrismaZoom(node);
	// 	}
	// }, []);

	const style = isHidden ? {visibility: "hidden"} : {};

	const handlerCloseButton = (event, resetTransform) => {
		event.stopPropagation();
		dispatch(setIsHiddenPhotoModal());
	};

	return (
		<TransformWrapper
			wheel={{disabled: true}}
			doubleClick={{disabled: true}}
			zoomIn={{step: 6}}
			zoomOut={{step: 6}}
			defaultScale={1}
		>
			{({zoomIn, zoomOut, resetTransform, ...rest}) => (
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
									zoomIn={zoomIn}
									zoomOut={zoomOut}
									resetTransform={resetTransform}
									maxZoom={maxZoom}
								/>
								{/* {Object.keys(prismaZoom).length === 0 &&
				prismaZoom.constructor === Object ? null : (
					<ZoomController maxZoom={maxZoom} prismaZoom={prismaZoom} />
				)} */}
							</div>
						</div>
					</div>
				</React.Fragment>
			)}
		</TransformWrapper>
	);
}

export default PhotoModal;
