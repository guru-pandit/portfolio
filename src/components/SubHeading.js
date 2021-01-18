import React from "react";
import "./SubHeading.css";

function SubHeading({ text }) {
  return (
    <div className="subheading">
      <h4 className="subheading__text">{text}</h4>
    </div>
  );
}

export default SubHeading;
