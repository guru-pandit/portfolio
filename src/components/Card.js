import React from "react";
import Button from "./Button";
import "./Card.css";

function Card({ heading, description, image }) {
  return (
    <div className="card">
      <div className="card__wrapper">
        <div className="card__image">
          <img src={image} alt="Card" />
        </div>
        <div className="card__content">
          <h3 className="card__heading">{heading}</h3>
          <p className="card__description">
            <span>Description: </span> {description}
          </p>

          <div className="card__buttons">
            <Button type="button" btnText="View Live" />
            <Button type="button" outlined btnText="View Code" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
