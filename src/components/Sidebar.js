import React from "react";
import Copyright from "./Copyright";
import Navigation from "./Navigation";
import "./Sidebar.css";
import SocialIcons from "./SocialIcons";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        <NavLink to="/">
          <img src="images/logo.svg" alt="Logo" />
        </NavLink>
      </div>

      <div className="sidebar__profile">
        <img
          className="sidebar__profileImage"
          src="images/profile.jpg"
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
