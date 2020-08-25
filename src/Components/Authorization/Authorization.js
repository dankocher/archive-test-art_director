import React from "react";
import "./Authorization.css";
import labels from "../../utils/labelText/lable.json";

function Authorization() {
  return (
    <div className="centered-container--authorization">
      <div className="header--authorization">
        <label>{labels.headerLable}</label>
      </div>
      <div className="body--authorization">
        <div className="field--authorization">
          <label>{labels.nameLabel}</label>
          <input />
        </div>
        <div className="field--authorization">
          <label>{labels.mailLabel}</label>
          <input />
        </div>
      </div>
      <div className="footer--authorization ">
        <button className="black-button">{labels.buttonLabelStart}</button>
      </div>
    </div>
  );
}

export default Authorization;
