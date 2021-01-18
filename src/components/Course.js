import React from "react";
import "./Course.css";

function Course({ year, stream, university, info }) {
  return (
    <div className="course">
      <div className="course__icon">
        <i className="fas fa-graduation-cap"></i>
      </div>

      <div className="course__deatils">
        <p className="course__year">{year}</p>
        <h3 className="course__stream">{stream}</h3>
        <h2 className="course__university">{university}</h2>
        <p className="course__info">{info}</p>
      </div>
    </div>
  );
}

export default Course;
