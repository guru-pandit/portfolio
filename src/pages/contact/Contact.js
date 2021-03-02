import React from "react";
import {
  ContactDetails,
  ContactMessage,
  Heading,
  SubHeading,
} from "@components";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div className="contact__content">
        <Heading text="Contact" />

        <SubHeading text="Get In Touch" />

        {/* <div className="contact__container"> */}
        <div className="row">
          <ContactDetails />
          <ContactMessage />
        </div>
      </div>
    </div>
  );
}

export default Contact;
