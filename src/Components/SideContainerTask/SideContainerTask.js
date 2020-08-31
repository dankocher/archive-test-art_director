import React from "react";
import "./SideContainerTask.css";
const exportText = {
	Title: "Сравните две иллюстрации",
	Paragraph: `Оцените представленные ниже картинки на свой вкус.
	При оценке руководствоваться всем в целом (стилистика + композиция + подача), но не симпатией/антипатией к тому, что изображено.
	`,
};

function SideContainerTask() {
	return (
		<article className="task--SideContainerTask">
			<h2>{exportText.Title}</h2>
			<p>{exportText.Paragraph}</p>
		</article>
	);
}

export default SideContainerTask;
