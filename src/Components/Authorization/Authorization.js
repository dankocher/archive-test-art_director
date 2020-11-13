import styles from "./authorization.module.scss";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setCurrentTask } from "../../redux/actions/testActions";
import { isEmail } from "../../utils/validators/isEmail";

import Button from "../Button/Button";
import labels from "../../utils/labelText/lable.json";

function Authorization() {
	const dispatch = useDispatch();

	const [onBlured, setOnBlured] = useState("");
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [isEmailValid, setIsEmailValid] = useState(true);

	const taskList = useSelector((state) => state.testStorage.taskList);

	const startTestHandler = () => {
		// dispatch(setCurrentTask(taskList[0]));
	};

	const onChangeNameHandler = (event) => {
		const value = event.target.validity.valid ? event.target.value : name;
		if (value.length > 100) return;
		setName(value);
	};

	const onChangeEmailHandler = (event) => {
		const value = event.target.value;
		if (value.length > 50) return;
		if (onBlured) setIsEmailValid(isEmail(email));

		setEmail(value);
	};

	const onBlureEmailHandler = () => {
		if (!onBlured) {
			setOnBlured(true);
			setIsEmailValid(isEmail(email));
		}
		if (!isEmail(email)) return;
		console.log("SOHRANILSIA");
	};

	return (
		<div className={styles.container}>
			<div className={styles.container__imgContainer}>
				<img src={require("../../utils/img/rectangle.png")} />
			</div>
			<div className={styles.container__centeredContainer}>
				<div className={styles.wrapper}>
					<div className={styles.wrapper__field}>
						<label>{labels.nameLabel}</label>
						<input
							value={name}
							onChange={onChangeNameHandler}
							pattern="^[a-zA-Z\s]*$"
						/>
					</div>
					<div className={styles.wrapper__field}>
						<label>{labels.mailLabel}</label>
						<input
							className={!isEmailValid ? styles.error : null}
							value={email}
							onChange={onChangeEmailHandler}
							onBlur={onBlureEmailHandler}
						/>
					</div>

					<Button label={labels.buttonLabelStart} />
				</div>
			</div>
		</div>
	);
}

export default Authorization;
