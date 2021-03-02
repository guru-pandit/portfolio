import React from "react";
import { Course, Heading, SubHeading } from "@components";
import "./Education.css";

import { useSelector } from "react-redux";

function Education() {
  const educations = useSelector((state) => state.educations);

  return (
    <div className="education">
      <div className="education__content">
        <Heading text="Education" />

        <SubHeading text="My Educatioinal Details" />

        <div className="education__details">
          {educations?.map((education) => (
            <Course key={education.id} education={education} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Education;
