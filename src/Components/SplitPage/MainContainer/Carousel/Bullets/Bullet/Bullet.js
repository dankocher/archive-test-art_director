import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Bullet.css";

import { setImageIndex } from "../../../../../../redux/actions";

function Bullet(props) {
	const dispatch = useDispatch();
	const currentImageIndex = useSelector((state) => state.current);

	const handleSetImageIndex = () => {
		const index = props.index;
		if (currentImageIndex === index) {
			return;
		} else {
			dispatch(setImageIndex(index));
		}
	};

	const choseBulletColor = (active) => {
		return active ? "#6B6B6C" : "#D1D1D9";
	};

	return (
		<>
			<button
				className="hidden-button bullet-wrapper--carousel"
				onClick={handleSetImageIndex}
			>
				<svg width="10" height="10" viewBox="0 0 10 10" fill="none">
					<circle cx="5" cy="5" r="5" fill={choseBulletColor(props.active)} />
				</svg>
			</button>
		</>
	);
}

export default Bullet;
