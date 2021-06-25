import React from "react";
import "./Projects.css";
import { Card, Heading, SubHeading } from "@components";
import Carousel from "react-material-ui-carousel";

import { useSelector } from "react-redux";

function Projects() {
  const projects = useSelector((state) => state.projects);

  return (
    <div className="projects">
      <div className="projects__content">
        <Heading text="Projects" />

        <SubHeading text="My Some Projects" />

        <div className="projects__carousel">
          <Carousel animation="slide" autoPlay="false" navButtonsAlwaysVisible>
            {projects?.map((project) => (
              <Card key={project.id} project={project} />
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Projects;
