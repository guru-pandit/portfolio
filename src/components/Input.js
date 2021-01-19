import React from "react";
import "./Input.css";

function Input({ type, placeholder }) {
  return (
    <div className="inputBox">
      <input
        type={type}
        placeholder={placeholder}
        className="inputBox__input"
      />
    </div>
  );
}

export default Input;
