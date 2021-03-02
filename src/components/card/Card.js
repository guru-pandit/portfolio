import React from "react";
import { Button } from "../../components/index";
import "./Card.css";

function Card({ project }) {
  return (
    <div className="card">
      <div className="card__wrapper">
        <div className="card__image">
          <img src={project.image} alt="Card" />
        </div>
        <div className="card__content">
          <h3 className="card__heading">{project.heading}</h3>
          <p className="card__description">
            <span>Description: </span> {project.description}
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
