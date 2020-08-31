import React from "react";
import "./TextField.css";

function TextField(props) {
  return (
    <input
      placeholder="Текст..."
      className={
        props.error
          ? "textField border-error--textField"
          : "textField border--textField"
      }
    ></input>
  );
}

export default TextField;
