import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Carousel.css";

import { setImageLength } from "../../actions";
import imgList from "../../utils/imgList";

import CarouselArrow from "../CarouselArrow/CarouselArrow";
import CarouselBullets from "../CarouselBullets/CarouselBullets";
import imga from "../../utils/img/noImgBig.png";

const arrOfImages = [1, 2, 3, 4, 5, 6];

function Carousel() {
  const [imageList, setImageList] = useState([]);
  const dispatch = useDispatch();
  const currentImageIndex = useSelector((state) => state.current);

  const isOneImg = () => {
    return (
      imageList === undefined ||
      imageList.length === 0 ||
      imageList.length === 1
    );
  };

  useEffect(() => {
    setImageList(imgList);
    dispatch(setImageLength(imgList.length));
  }, []);

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
    <div className="centred-content--Carousel">
      {isOneImg() ? null : <CarouselArrow direction="left" />}
      <img
        style={{ maxWidth: "100%", maxHeight: "100%" }}
        src={
          imageList === undefined || imageList.length == 0
            ? "../../utils/img/noImgBig.png"
            : imageList[currentImageIndex]["download_url"]
        }
        alt={""}
      />
      {isOneImg() ? null : <CarouselArrow direction="right" />}

      {isOneImg() ? null : (
        <CarouselBullets arrOfImages={imageList} active={currentImageIndex} />
      )}
    </div>
  );
}

export default Carousel;
