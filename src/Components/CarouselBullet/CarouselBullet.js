import React from "react";
import "./CarouselBullet.css";

function CarouselBullet(props) {
	const choseBulletColor = (active) => {
		return active ? "#6B6B6C" : "#D1D1D9";
	};

	return (
		<>
			<button className="hidden-button bullet-wrapper--carousel">
				<svg width="10" height="10" viewBox="0 0 10 10" fill="none">
					<circle cx="5" cy="5" r="5" fill={choseBulletColor(props.active)} />
				</svg>
			</button>
		</>
	);
}

export default CarouselBullet;
