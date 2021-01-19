import React from "react";
import Button from "./Button";
import "./ContactMessage.css";
import Input from "./Input";

function ContactMessage() {
  return (
    <div className="message">
      <form>
        <Input type="text" placeholder="Your Name" />
        <Input type="email" placeholder="Your Email" />
        <Input type="text" placeholder="Subject" />

        <textarea
          name=""
          id=""
          cols="30"
          rows="6"
          placeholder="Message"
        ></textarea>

        <Button type="submit" btnText="Send Message" />
      </form>
    </div>
  );
}

export default ContactMessage;
