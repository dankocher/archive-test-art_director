import React from "react";
import "./TestSplitRightSide.css";

import RadioButtonAnswers from "../RadioButtonAnswers/RadioButtonAnswers";

const exportText = {
	PaginatorProgress: "Задание  3 из 12",
	PaginatorTime: "01:15",
	Title: "Сравните две иллюстрации",
	Paragraph: `Оцените представленные ниже картинки на свой вкус.
	При оценке руководствоваться всем в целом (стилистика + композиция + подача), но не симпатией/антипатией к тому, что изображено.
	`,
	AnswerTitleFirst: "Актуальность",
	AnswerTitleSecond: "Качество",
};

function TestSplitRightSide() {
	return (
		<div className="centered-container--testSplitRightSide">
			<div className="header--testSplitRightSide">
				<span>{exportText.PaginatorProgress}</span>
				<span>{exportText.PaginatorTime}</span>
			</div>
			<div className="body--testSplitRightSide">
				<article className="body-task--testSplitRightSide">
					<h2>{exportText.Title}</h2>
					<p>{exportText.Paragraph}</p>
				</article>
				<RadioButtonAnswers color="red" />
			</div>
			<div className="footer--testSplitRightSide">
				<button className="white-button-inactive">Продолжить</button>
			</div>
		</div>
	);
}

export default TestSplitRightSide;
