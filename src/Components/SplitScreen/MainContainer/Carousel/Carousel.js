import styles from "./carousel.module.scss";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
	setImageLength,
	setIsHiddenPhotoModal,
} from "../../../../redux/actions/caruselActions";
import imgList from "../../../../utils/imgList";

import Arrow from "./Arrow/Arrow";
import Bullets from "./Bullets/Bullets";
import PhotoModal from "../../../PhotoModal/PhotoModal";

function Carousel() {
	const [imageList, setImageList] = useState([]);
	const [hoveredImage, setHoveredImage] = useState(true);
	const dispatch = useDispatch();
	const currentImageIndex = useSelector(
		(state) => state.caruselReducer.current
	);
	const isHiddenPhotoModal = useSelector(
		(state) => state.caruselReducer.isHiddenPhotoModal
	);

	const currentImgUrl =
		imageList === undefined || imageList.length === 0
			? require("../../../../utils/img/noImgBig.png")
			: imageList[currentImageIndex]["download_url"];

	useEffect(() => {
		setImageList(imgList);
		dispatch(setImageLength(imgList.length));
	}, []);

	const handleImgOnClick = () => {
		dispatch(setIsHiddenPhotoModal());
	};

	const isOneImg = () => {
		return (
			imageList === undefined ||
			imageList.length === 0 ||
			imageList.length === 1
		);
	};

	return (
		<>
			{!isHiddenPhotoModal ? (
				<PhotoModal currentImgUrl={currentImgUrl} />
			) : null}

			<div className={styles.container}>
				{isOneImg() ? null : (
					<div className={styles.container__leftArrow}>
						<Arrow isToLeft={true} isDark={false} />
					</div>
				)}
				<img
					onClick={handleImgOnClick}
					style={isHiddenPhotoModal ? {} : { visibility: "hidden" }}
					src={currentImgUrl}
					alt={""}
				/>
				{isOneImg() ? null : (
					<div className={styles.container__rightArrow}>
						<Arrow isDark={false} />
					</div>
				)}

				{isOneImg() ? null : (
					<Bullets arrOfImages={imageList} active={currentImageIndex} />
				)}
			</div>
		</>
	);
}

export default Carousel;

//   useEffect(() => {
//     fetch("http://picsum.photos/v2/list?page=1&limit=10")
//       .then((res) => {
// 		console.log(res);
// 		debugger
//         if (!res.ok) {
//           throw new Error("Network response was not ok");
//         }
//         return res.json();
//       })
//       .then((result) => {
//         setImageList(result);
//         dispatch(setImageLength(result.length));
//         console.log(imageList);
//         console.log(currentImageIndex);
//       })
//       .catch((error) => {
//         console.error("Error:", error);
//       });
//   }, []);
