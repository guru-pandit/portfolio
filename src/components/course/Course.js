import React from "react";
import "./Course.css";

function Course({ education }) {
  return (
    <div className="course">
      <div className="course__icon">
        <i className="fas fa-graduation-cap"></i>
      </div>

      <div className="course__deatils">
        <p className="course__year">{education.year}</p>
        <h3 className="course__stream">{education.stream}</h3>
        <h2 className="course__university">{education.university}</h2>
        <p className="course__info">{education.info}</p>
      </div>
    </div>
  );
}

export default Course;
