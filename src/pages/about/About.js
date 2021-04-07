import React from "react";
import { Heading, SubHeading, ButtonLink } from "@components";
import Resume from "@assets/pdf/Guruprasad_Pandit.pdf";
import "./About.css";

function About() {
  return (
    <div className="about">
      <div className="about__content">
        <Heading text="About Me" />

        <SubHeading text="My Details" />

        <div className="about__details">
          <table>
            <tbody>
              <tr>
                <td>Name:</td>
                <td>Guruprasad Pandit</td>
              </tr>
              <tr>
                <td>Date of Birth:</td>
                <td>February 28, 1995</td>
              </tr>
              <tr>
                <td>Address:</td>
                <td>Sangameshwar, Ratnagiri</td>
              </tr>
              <tr>
                <td>Zip Code:</td>
                <td>415637</td>
              </tr>
              <tr>
                <td>Email:</td>
                <td>gppandit.gp@gmail.com</td>
              </tr>
              <tr>
                <td>Phone:</td>
                <td>+91 7776088638</td>
              </tr>
            </tbody>
          </table>
        </div>

        <ButtonLink href={Resume} btnText="Download Resume" />
      </div>
    </div>
  );
}

export default About;
