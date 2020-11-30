import styles from "./carousel.module.scss";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
	setImageLength,
	setIsHiddenPhotoModal,
} from "../../../../redux/actions/caruselActions";
// import imgList from "../../../../utils/imgList";

import { getImgPath } from "../../../../helpers/getImgPath";
import startTaskThunk from "../../../../thunks/startTaskThunk";
import { useGetResultIndex } from "../../../../helpers/customHooks/getResultIndex";

import Arrow from "./Arrow/Arrow";
import Bullets from "./Bullets/Bullets";
import PhotoModal from "../../../PhotoModal/PhotoModal";

function Carousel() {
	const dispatch = useDispatch();

	const resultIndex = useGetResultIndex();

	const currentImageIndex = useSelector(
		(state) => state.caruselReducer.current
	);
	const isHiddenPhotoModal = useSelector(
		(state) => state.caruselReducer.isHiddenPhotoModal
	);

	const task = useSelector((state) => state.testStorage.currentTask);
	const taskId = task._id;
	const imgGrid = task.data.imgGrid;
	const currentSubTaskIndex = useSelector(
		(state) => state.testStorage.currentSubTaskIndex
	);

	const imageList = imgGrid[currentSubTaskIndex]?.imgColumnList;

	const currentImgUrl =
		imageList == null || imageList.length === 0
			? require("../../../../utils/img/noImgBig.png")
			: getImgPath(imageList[currentImageIndex].name);

	useEffect(() => {
		dispatch(startTaskThunk(taskId, resultIndex, imgGrid));
		// setImageList(currentImageList);
		if (imageList == null) return;
		dispatch(setImageLength(imageList.length));
	}, []);

	const handleImgOnClick = () => {
		dispatch(setIsHiddenPhotoModal());
	};

	const isOneImg = () => {
		return imageList === undefined || imageList.length <= 1;
	};

	console.log(currentImgUrl);
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
