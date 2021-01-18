import React from "react";
import "./SkillBar.css";

function SkillBar({ icon, name, progress }) {
  return (
    <div className="skillbar">
      <div className="skillbar__icon">
        <i className={icon}></i>
      </div>

      <div className="skillbar__content">
        <h3 className="skillbar__name">{name}</h3>
        <div className="skillbar__progressContainer">
          <div className="skillbar__progress" style={{ width: `${progress}` }}>
            <p className="skillbar__progressPercent">{progress}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillBar;
