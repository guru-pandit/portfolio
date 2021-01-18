import React from "react";
import Heading from "../components/Heading";
import SkillBar from "../components/SkillBar";
import SubHeading from "../components/SubHeading";
import "./Skills.css";

const mySkills = [
  {
    id: 1,
    name: "HTML 5",
    icon: "fab fa-html5",
    progress: "80%",
  },
  {
    id: 2,
    name: "CSS 3",
    icon: "fab fa-css3-alt",
    progress: "75%",
  },
  {
    id: 3,
    name: "JavaScript",
    icon: "fab fa-js-square",
    progress: "65%",
  },
  {
    id: 4,
    name: "SASS",
    icon: "fab fa-sass",
    progress: "70%",
  },
  {
    id: 5,
    name: "React JS",
    icon: "fab fa-react",
    progress: "60%",
  },
  {
    id: 6,
    name: "Bootstrap",
    icon: "fab fa-bootstrap",
    progress: "80%",
  },
];
function Skills() {
  return (
    <div className="skills">
      <div className="skills__content">
        <Heading text="My Speciality" />

        <SubHeading text="My Skills" />

        <div className="skills__bars">
          {mySkills.map(({ id, name, icon, progress }) => (
            <SkillBar key={id} name={name} icon={icon} progress={progress} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
