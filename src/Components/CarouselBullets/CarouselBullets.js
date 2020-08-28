import React from "react";
import "./CarouselBullets.css";

import CarouselBullet from "../CarouselBullet/CarouselBullet";

function CarouselBullets(props) {
	return (
		<div className="bullets-wrapper--carousel">
			{props.arrOfImages.map((element, key) => {
				return key === props.active ? (
					<CarouselBullet active={true} key={key} />
				) : (
					<CarouselBullet active={false} key={key} />
				);
			})}
		</div>
	);
}

export default CarouselBullets;
