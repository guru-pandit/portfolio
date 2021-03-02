import React from "react";
import "./Button.css";

function Button({ btnText, outlined, type }) {
  return (
    <div className="button">
      {outlined ? (
        <button
          type={type}
          className="button__primary button__primary--outlined"
        >
          {btnText}
        </button>
      ) : (
        <button type={type} className="button__primary button__primary--filled">
          {btnText}
        </button>
      )}
      ;
    </div>
  );
}

export default Button;
