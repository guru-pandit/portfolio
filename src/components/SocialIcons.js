import React from "react";
import "./SocialIcons.css";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";

function SocialIcons() {
  return (
    <div className="socialIcon">
      <a
        href="https://www.linkedin.com/in/gppandit/"
        target="_blank"
        rel="noreferrer"
      >
        <LinkedInIcon />
      </a>
      <a href="https://github.com/guru-pandit" target="_blank" rel="noreferrer">
        <GitHubIcon />
      </a>
      <a
        href="https://www.instagram.com/_guru_pandit/"
        target="_blank"
        rel="noreferrer"
      >
        <InstagramIcon />
      </a>
      <a
        href="https://www.facebook.com/guru.pandit.58"
        target="_blank"
        rel="noreferrer"
      >
        <FacebookIcon />
      </a>
    </div>
  );
}

export default SocialIcons;
