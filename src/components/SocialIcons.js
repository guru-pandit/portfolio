import React from "react";
import "./SocialIcons.css";

function SocialIcons() {
  return (
    <div className="socialIcon">
      <a
        href="https://www.linkedin.com/in/gppandit/"
        target="_blank"
        rel="noreferrer"
      >
        <i class="fab fa-linkedin"></i>
      </a>
      <a href="https://github.com/guru-pandit" target="_blank" rel="noreferrer">
        <i class="fab fa-github-square"></i>
      </a>
      <a
        href="https://www.instagram.com/_guru_pandit/"
        target="_blank"
        rel="noreferrer"
      >
        <i class="fab fa-instagram-square"></i>
      </a>
      <a
        href="https://www.facebook.com/guru.pandit.58"
        target="_blank"
        rel="noreferrer"
      >
        <i class="fab fa-facebook-square"></i>
      </a>
    </div>
  );
}

export default SocialIcons;
