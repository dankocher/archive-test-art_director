import React from "react";
import "./Authorization.css";
import labels from "../utils/labelText/lable.json";

function Authorization() {
  return (
    <div className="centered-container">
      <div className="authorization-header">
        <label>{labels.headerLable}</label>
      </div>
      <div className="authorization-body">
        <div className="text-field--container">
          <label>{labels.nameLabel}</label>
          <input />
        </div>
        <div className="text-field--container">
          <label>{labels.mailLabel}</label>
          <input />
        </div>
      </div>
      <div className="authorization-footer">
        <button>{labels.buttonLabel}</button>
      </div>
    </div>
  );
}

export default Authorization;
