import React from "react";
import "./Carousel.css";

import CarouselArrow from "../CarouselArrow/CarouselArrow";
import CarouselBullets from "../CarouselBullets/CarouselBullets";

const arrOfImages = [1, 2, 3, 4, 5, 6];

function Carousel() {
	return (
		<div className="centred-content--Carousel">
			<CarouselArrow direction="left" />
			<img
				style={{maxWidth: "100%", maxHeight: "100%"}}
				src={"https://picsum.photos/2500/1200"}
				alt={""}
			/>
			<CarouselArrow direction="right" />
			<CarouselBullets arrOfImages={arrOfImages} active={2} />;
		</div>
	);
}

export default Carousel;
