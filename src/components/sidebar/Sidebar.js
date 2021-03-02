import React from "react";
import { NavLink } from "react-router-dom";
import Copyright from "./Copyright";
import Navigation from "./Navigation";
import SocialIcons from "./SocialIcons";
import ProfileImage from "@assets/images/profile.jpg";
import Logo from "@assets/images/logo.svg";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        <NavLink to="/">
          <img src={Logo} alt="Logo" />
        </NavLink>
      </div>

      <div className="sidebar__profile">
        <img
          className="sidebar__profileImage"
          src={ProfileImage}
          alt="Profile"
        />
        <h1 className="sidebar__profileName">Guruprasad Pandit</h1>
        <h3 className="sidebar__profilePost">Front End Web Developer</h3>
      </div>

      <div className="sidebar__navigation">
        <Navigation />
      </div>

      <div className="sidebar__icons">
        <SocialIcons />
      </div>

      <div className="sidebar__copyright">
        <Copyright />
      </div>
    </div>
  );
}

export default Sidebar;
