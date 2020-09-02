import React, {
	useState,
	useCallback,
	useEffect,
	useRef,
	createRef,
} from "react";
import {useSelector, useDispatch} from "react-redux";
import PrismaZoom from "react-prismazoom";

import "./PhotoModal.css";

import {setIsHiddenPhotoModal} from "../../actions";

import CarouselArrow from "../CarouselArrow/CarouselArrow";

function PhotoModal({isHidden = true, currentImgUrl}) {
	const dispatch = useDispatch();
	const prismaZoom = useRef(null);
	// const [prismaZoom, setPrismaZoom] = useState({});

	// const measuredRef = useCallback((node) => {
	// 	if (node !== null) {
	// 		console.log(node);
	// 		setPrismaZoom(node);
	// 	}
	// }, []);

	const style = isHidden ? {visibility: "hidden"} : {};

	const handlerCloseButton = () => {
		dispatch(setIsHiddenPhotoModal());
	};

	return (
		<div style={style} className={"main-container--photoModal"}>
			<button
				onClick={handlerCloseButton}
				className="hidden-button close-button--photoModal"
			>
				<i className="closeIcon"></i>
			</button>
			<div className={"grid-container--photoModal"}>
				<div className={"wrapper-relative--photoModal"}>
					<div
						className={"centred-carouselArrow leftArrow-position--photoModal"}
					>
						<CarouselArrow isDark={true} isToLeft={true} />
					</div>
				</div>
				<div className={"img-container--photoModal"}>
					<PrismaZoom style={{margin: "auto"}} maxZoom={1.25} ref={prismaZoom}>
						<img
							style={{maxWidth: "100%", maxHeight: "100%"}}
							src={currentImgUrl}
							alt={""}
						/>
					</PrismaZoom>
				</div>
				<div className={"wrapper-relative--photoModal"}>
					<div
						className={"centred-carouselArrow rightArrow-position--photoModal"}
					>
						<CarouselArrow isDark={true} />
					</div>
				</div>
			</div>
			<div className="zoomController-container--photoModal">
				<button
					onClick={() => {
						console.log("и тут нажал");
						prismaZoom.current.zoomOut(0.25);
					}}
					className="hidden-button zoom-controller-button"
				>
					<i className="icon zoomOutIcon"></i>
				</button>
				<button
					onClick={() => prismaZoom.current.reset()}
					className="hidden-button zoom-controller-button"
				>
					<i className="icon resetZoomIcon"></i>
				</button>
				<button
					onClick={() => {
						console.log("нажал");
						prismaZoom.current.zoomIn(0.25);
					}}
					className="hidden-button zoom-controller-button"
				>
					<i className="icon zoomInIcon"></i>
				</button>
			</div>
		</div>
	);
}

export default PhotoModal;
