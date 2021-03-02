import React from "react";
import NavigationLink from "./NavigationLink";
import "./Navigation.css";

function Navigation() {
  return (
    <ul className="navigation">
      <NavigationLink pathname="" label="Home" />
      <NavigationLink pathname="about" label="About" />
      <NavigationLink pathname="skills" label="Skills" />
      <NavigationLink pathname="education" label="Education" />
      <NavigationLink pathname="projects" label="Projects" />
      <NavigationLink pathname="contact" label="Contact" />
    </ul>
  );
}

export default Navigation;
