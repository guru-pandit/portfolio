import React from "react";
import "./Projects.css";
import { Card, Heading, SubHeading } from "@components";
import Carousel from "react-material-ui-carousel";

const myProjects = [
  {
    id: 1,
    heading: "Youtube Clone",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci obcaecati natus culpa voluptas voluptatem rem quae sunt nam error cupiditate ab, quia quos corporis officiis veritatis vitae! Similique, ratione laboriosam voluptate asperiores quidem explicabo quaerat nihil? Sunt impedit asperiores veniam?",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
  },
  {
    id: 2,
    heading: "Youtube Clone",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci obcaecati natus culpa voluptas voluptatem rem quae sunt nam error cupiditate ab, quia quos corporis officiis veritatis vitae! Similique, ratione laboriosam voluptate asperiores quidem explicabo quaerat nihil? Sunt impedit asperiores veniam?",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
  },
  {
    id: 3,
    heading: "Youtube Clone",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci obcaecati natus culpa voluptas voluptatem rem quae sunt nam error cupiditate ab, quia quos corporis officiis veritatis vitae! Similique, ratione laboriosam voluptate asperiores quidem explicabo quaerat nihil? Sunt impedit asperiores veniam?",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
  },
  {
    id: 4,
    heading: "Youtube Clone",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci obcaecati natus culpa voluptas voluptatem rem quae sunt nam error cupiditate ab, quia quos corporis officiis veritatis vitae! Similique, ratione laboriosam voluptate asperiores quidem explicabo quaerat nihil? Sunt impedit asperiores veniam?",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
  },
];

function Projects() {
  return (
    <div className="projects">
      <div className="projects__content">
        <Heading text="Projects" />

        <SubHeading text="My Some Projects" />

        <div className="projects__carousel">
          <Carousel animation="slide" navButtonsAlwaysVisible>
            {myProjects.map(({ id, heading, description, image }) => (
              <Card
                key={id}
                heading={heading}
                description={description}
                image={image}
              />
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Projects;
