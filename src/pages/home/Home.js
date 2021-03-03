import React from "react";
import "./Home.css";
import Profile from "@assets/images/profile.jpg";
import Typical from "react-typical";
import { useWindowSize } from "@hooks/useWindowSize";

function Home() {
  const windowSize = useWindowSize();

  return (
    <div className="home">
      <div className={`home__profile ${windowSize >= 768 ? "dis-none" : ""}`}>
        <img src={Profile} alt="" />
      </div>

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
              3000,
              "React JS Developer",
              3000,
            ]}
          />
        </h3>
      </div>
    </div>
  );
}

export default Home;
