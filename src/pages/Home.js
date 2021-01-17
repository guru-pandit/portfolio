import React from "react";
import "./Home.css";
import Typical from "react-typical";

function Home() {
  return (
    <div className="home">
      <div className="home__text">
        <p>HEY ! I AM</p>
        <h1 className="home__name">Guruprasad</h1>
        <h3 className="home__pos">
          I'm a{" "}
          <Typical
            loop={Infinity}
            wrapper="span"
            steps={[
              "Front End Web Developer",
              2000,
              "React JS Developer",
              2000,
            ]}
          />
        </h3>
      </div>
    </div>
  );
}

export default Home;
