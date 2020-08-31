import React from "react";
import "./WelcomePage.css";
import staticText from "../../utils/labelText/lable.json";

import Button from "../Button/Button";

const textFromServer = {
	header: "Оценка иллюстрации иллюстрации",
	body: `Оцените представленные ниже картинки на свой вкус. При оценке
    руководствоваться всем в целом (стилистика + композиция +
    подача), но не симпатией/антипатией к тому, что изображено. При
    оценке руководствоваться всем в целом (стилистика + композиция +
    подача), но не симпатией/антипатией к тому, что
    изображено.симпатией/антипатией к тому, что изображено.А`,
};

function WelcomePage() {
	return (
		<div className="grid-container--welcomePage">
			<div className="centered-content--welcomePage grid-content-welcomePage">
				<div className="centered-sideContainer--welcomPage">
					<div>
						<h1 className="sideContainer-header--welcomPage">
							{textFromServer.header}
						</h1>
						<div className="sideContainer-body--welcomPage">
							<p>{textFromServer.body}</p>
						</div>
						<div className="sideContainer-footer--welcomPage">
							<Button label={staticText.buttonLabelNext} />
						</div>
					</div>
				</div>
				<div className="imgContainer--welcomPage"></div>
			</div>
		</div>
	);
}

export default WelcomePage;
