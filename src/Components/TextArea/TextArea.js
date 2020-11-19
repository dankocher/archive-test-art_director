import React, { useState, useEffect, useRef } from "react";

import styles from "./textArea.module.scss";

import { isFunction } from "../../utils/validators/isFunction";

const classNames = require("classnames");

function TextArea(props) {
	const textAreaRef = useRef(null);
	const [text, setText] = useState("");
	const [textAreaHeight, setTextAreaHeight] = useState("auto");
	const [parentHeight, setParentHeight] = useState("auto");

	const maxLength = props.maxLength ? props.maxLength : 240;
	const onBlur = isFunction(props.onBlur)
		? props.onBlur
		: () => console.log("Is not a function");

	useEffect(() => {
		setText(props.value);
	}, [props.value]);

	useEffect(() => {
		setParentHeight(`${textAreaRef.current.scrollHeight}px`);
		setTextAreaHeight(`${textAreaRef.current.scrollHeight}px`);
	}, [text]);

	const onChangeHandler = (event) => {
		const text = event.target.value;
		if (text.length >= maxLength) {
			return;
		}
		setTextAreaHeight("auto");
		setParentHeight(`${textAreaRef.current.scrollHeight}px`);
		setText(event.target.value);
	};

	const defaultStyles = classNames(styles.textField, {
		[styles.error]: props.error,
	});

	return (
		<div
			style={{
				minHeight: "2.6rem",
				display: "flex",
				alignItems: "flex-end",
			}}
		>
			<textarea
				{...props}
				ref={textAreaRef}
				rows={props.rows ? props.rows : 1}
				style={{
					height: textAreaHeight,
					overflow: "hidden",
				}}
				value={text}
				className={props.className != null ? props.className : defaultStyles}
				onChange={onChangeHandler}
				onBlur={() => onBlur(text)}
			/>
		</div>
	);
}

export default TextArea;
