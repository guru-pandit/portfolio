import React from "react";
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
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="card__button card__button--filled"
            >
              View Live
            </a>
            <a
              href={project.code}
              target="_blank"
              rel="noreferrer"
              className="card__button card__button--outlined"
            >
              View Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
