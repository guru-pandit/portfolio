import React from "react";
import "./Button.css";

function Button({ btnText, outlined }) {
  return (
    <div className="button">
      {outlined ? (
        <button className="button__primary button__primary--outlined">
          {btnText}
        </button>
      ) : (
        <button className="button__primary button__primary--filled">
          {btnText}
        </button>
      )}
      ;
    </div>
  );
}

export default Button;
