import React from "react";
import { SkillBar, Heading, SubHeading } from "@components";
import "./Skills.css";

import { useSelector } from "react-redux";

function Skills() {
  const skills = useSelector((state) => state.skills);

  return (
    <div className="skills">
      <div className="skills__content">
        <Heading text="My Speciality" />

        <SubHeading text="My Skills" />

        <div className="skills__bars">
          {skills?.map((skill) => (
            <SkillBar key={skill.id} skill={skill} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
