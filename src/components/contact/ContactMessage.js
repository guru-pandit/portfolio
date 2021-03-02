import React from "react";
import { Button } from "../../components/index";
import { Input } from "../../components/index";
import "./ContactMessage.css";

function ContactMessage() {
  return (
    <div className="col-md-6 message">
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
