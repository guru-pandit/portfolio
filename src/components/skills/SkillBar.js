import React from "react";
import "./SkillBar.css";

function SkillBar({ skill }) {
  return (
    <div className="skillbar">
      <div className="skillbar__icon">
        <i className={skill.icon}></i>
      </div>

      <div className="skillbar__content">
        <h3 className="skillbar__name">{skill.name}</h3>
        <div className="skillbar__progressContainer">
          <div
            className="skillbar__progress"
            style={{ width: `${skill.progress}` }}
          >
            <p className="skillbar__progressPercent">{skill.progress}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillBar;
