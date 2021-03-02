import { Button } from "../../components/index";
import { Input } from "../../components/index";
import "./ContactMessage.css";

import { useSelector, useDispatch } from "react-redux";
import {
  setMessageDetails,
  resetMessageDetails,
} from "src/actions/messageAction";

import * as emailjs from "emailjs-com";

function ContactMessage() {
  const message = useSelector((state) => state.message);
  const dispatch = useDispatch();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const { name, email, subject, content } = message;

    let templateParams = {
      sender_name: name,
      from_name: email,
      to_name: "gurupandit28@gmail.com",
      subject: subject,
      content: content,
    };

    emailjs
      .send(
        "service_urb3eyc",
        "template_e3ocjg5",
        templateParams,
        "user_Dk1BlgsR6JysYOmRBelW8"
      )
      .then(
        (res) => {
          dispatch(resetMessageDetails());
          alert("Successfully sent the message");
        },
        (err) => {
          alert("Error while sending Message");
        }
      );
  };

  return (
    <div className="col-md-6 message">
      <form
        onSubmit={(e) => {
          onSubmitHandler(e);
        }}
      >
        <Input
          type="text"
          name="name"
          placeholder="Your Name"
          value={message.name}
          onChangeHandler={setMessageDetails}
        />
        <Input
          type="email"
          name="email"
          placeholder="Your Email"
          value={message.email}
          onChangeHandler={setMessageDetails}
        />
        <Input
          type="text"
          name="subject"
          placeholder="Subject"
          value={message.subject}
          onChangeHandler={setMessageDetails}
        />

        <textarea
          cols="30"
          rows="6"
          placeholder="Message"
          name="content"
          value={message.content}
          onChange={(e) =>
            dispatch(setMessageDetails(e.target.name, e.target.value))
          }
        ></textarea>

        <Button type="submit" btnText="Send Message" />
      </form>
    </div>
  );
}

export default ContactMessage;
