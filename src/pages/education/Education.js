import React from "react";
import { Course, Heading, SubHeading } from "@components";
import "./Education.css";

const myEducation = [
  {
    id: 1,
    year: "2017 - 2020",
    stream: "BE in Electronics & Telecommunication",
    university: "University of Mumbai",
    info:
      "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts.",
  },
  {
    id: 2,
    year: "2013 - 2016",
    stream: "Diploma in Electronics & Telecommunication",
    university: "MSBTE",
    info:
      "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts.",
  },
  {
    id: 3,
    year: "2011 - 2013",
    stream: "HSC - Science",
    university: "Konkan Board",
    info:
      "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts.",
  },
  {
    id: 4,
    year: "2010 - 2011",
    stream: "SSC",
    university: "Kolhapur Board",
    info:
      "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts.",
  },
];

function Education() {
  return (
    <div className="education">
      <div className="education__content">
        <Heading text="Education" />

        <SubHeading text="My Educatioinal Details" />

        <div className="education__details">
          {myEducation.map(({ id, year, stream, university, info }) => (
            <Course
              key={id}
              year={year}
              stream={stream}
              university={university}
              info={info}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Education;
