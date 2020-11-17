import React from "react";
import "./Bullets.css";

import Bullet from "./Bullet/Bullet";

function Bullets(props) {
	return (
		<div className="bullets-wrapper--carousel">
			{props.arrOfImages.map((element, key) => {
				return key === props.active ? (
					<Bullet active={true} key={key} index={key} />
				) : (
					<Bullet active={false} key={key} index={key} />
				);
			})}
		</div>
	);
}

export default Bullets;
