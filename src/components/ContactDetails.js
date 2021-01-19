import React from "react";
import "./ContactDetails.css";
import Details from "./Details";

function ContactDetails() {
  return (
    <div className="details">
      <Details
        text="Songiri, Sangameshwar, Dist. Ratnagiri, 415637"
        icon="far fa-map"
      />
      <Details text="+91 7776088638" icon="fab fa-whatsapp" />
      <Details text="gppandit.gp@gmail.com" icon="far fa-envelope" />
    </div>
  );
}

export default ContactDetails;
