import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Carousel.css";

import { setImageLength, setIsHiddenPhotoModal } from "../../actions";
import imgList from "../../utils/imgList";

import Arrow from "./Arrow/Arrow";
import Bullets from "./Bullets/Bullets";
import PhotoModal from "../PhotoModal/PhotoModal";

function Carousel() {
	const [imageList, setImageList] = useState([]);
	const [hoveredImage, setHoveredImage] = useState(true);
	const dispatch = useDispatch();
	const currentImageIndex = useSelector((state) => state.current);
	const isHiddenPhotoModal = useSelector((state) => state.isHiddenPhotoModal);
	const currentImgUrl =
		imageList === undefined || imageList.length === 0
			? require("../../utils/img/noImgBig.png")
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

	return (
		<>
			<PhotoModal isHidden={isHiddenPhotoModal} currentImgUrl={currentImgUrl} />
			<div
				className="centred-content--Carousel"
				onMouseEnter={() => setHoveredImage(false)}
				onMouseLeave={() => setHoveredImage(true)}
			>
				{isOneImg() ? null : (
					<div className="leftArrow-position--carousel centred-carouselArrow">
						<Arrow
							isHidden={hoveredImage}
							isToLeft={true}
							isDark={false}
						/>
					</div>
				)}
				<img
					onClick={handleImgOnClick}
					style={isHiddenPhotoModal ? {} : { visibility: "hidden" }}
					src={currentImgUrl}
					alt={""}
				/>
				{isOneImg() ? null : (
					<div className="rightArrow-position--carousel centred-carouselArrow">
						<Arrow isHidden={hoveredImage} isDark={false} />
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
