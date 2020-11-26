import styles from "./pagination.module.scss";
import React from "react";

import { useSelector } from "react-redux";
import subTaskArrow from "../../../../helpers/icons/subTask-arrow";

function Pagination() {
	const currentSubTaskIndex = useSelector(
		(state) => state.testStorage.currentSubTaskIndex
	);
	const maxOpenedSubTaskIndex = useSelector(
		(state) => state.testStorage.maxOpenedSubTaskIndex
	);
	const subTaskLength = useSelector(
		(state) => state.testStorage.currentTask.data.wordList.length
	);

	const getIsDisabledLefftArrow = () => {
		if (currentSubTaskIndex === 0) return true;
		return false;
	};

	const getIsDisabledRightArrow = () => {
		if (currentSubTaskIndex === subTaskLength - 1) return true;
		if (currentSubTaskIndex === maxOpenedSubTaskIndex) return true;
		return false;
	};

	return (
		<>
			<div className={styles.container}>
				<button
					className={"hidden-button"}
					disabled={getIsDisabledLefftArrow()}
				>
					<i>{subTaskArrow}</i>
				</button>
				<span className={styles.container__paginationInfo}>
					{`Подзадание ${currentSubTaskIndex + 1} из ${subTaskLength}`}
				</span>
				<button
					className={"hidden-button"}
					disabled={getIsDisabledRightArrow()}
				>
					<i className={styles.container__rightArrow}>{subTaskArrow}</i>
				</button>
			</div>
		</>
	);
}

export default Pagination;
