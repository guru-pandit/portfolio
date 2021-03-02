import React from "react";
import "./NavigationLink.css";
import { NavLink } from "react-router-dom";

function NavigationLink({ label, pathname }) {
  return (
    <li className="navigationLink">
      <NavLink exact activeClassName="current" to={`/${pathname}`}>
        {label}
      </NavLink>
    </li>
  );
}

export default NavigationLink;
