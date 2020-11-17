import React from "react";
import "./QuestionContainer.css";

import TextField from "../../TextField/TextField";

function QuestionContainer(props) {
  return (
    <div
      className={
        props.error
          ? "container--QuestionPage border-error--QuestionPage"
          : "container--QuestionPage container-border--QuestionPage"
      }
    >
      {props.taskType}
      <TextField />
    </div>
  );
}

export default QuestionContainer;
