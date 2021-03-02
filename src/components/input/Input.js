import React from "react";
import "./Input.css";
import { useDispatch } from "react-redux";

function Input({ type, placeholder, name, value, onChangeHandler }) {
  const dispatch = useDispatch();

  return (
    <div className="inputBox">
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="inputBox__input"
        value={value}
        onChange={(e) =>
          dispatch(onChangeHandler(e.target.name, e.target.value))
        }
      />
    </div>
  );
}

export default Input;
