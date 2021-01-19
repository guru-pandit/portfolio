import React from "react";
import "./Details.css";

function Details({ icon, text }) {
  return (
    <div className="detail">
      <div className="detail__icon">
        <i class={icon}></i>
      </div>

      <div className="detail__content">
        <p className="detail__text">{text}</p>
      </div>
    </div>
  );
}

export default Details;
