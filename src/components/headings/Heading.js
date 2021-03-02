import React from "react";
import "./Heading.css";

function Heading({ text }) {
  return (
    <div className="heading">
      <h2 className="heading__text">{text}</h2>
    </div>
  );
}

export default Heading;
