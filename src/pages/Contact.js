import React from "react";
import ContactDetails from "../components/ContactDetails";
import ContactMessage from "../components/ContactMessage";
import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div className="contact__content">
        <Heading text="Contact" />

        <SubHeading text="Get In Touch" />

        <div className="contact__container">
          <ContactDetails />
          <ContactMessage />
        </div>
      </div>
    </div>
  );
}

export default Contact;
