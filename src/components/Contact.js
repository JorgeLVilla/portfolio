import { StyledContact, StyledForm, StyledSend } from "./styles/Contact.styled";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ddd23y8",
        "template_1ol840j",
        form.current,
        "jxEWs130IXMhkNE2J"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <StyledContact>
      <h1>Contact</h1>
      <h3>There's nothing like getting started on new projects or apps.</h3>
      <h3>Lets build something great together!</h3>
      <StyledForm>
        <form ref={form} onSubmit={sendEmail}>
          <div>
            <input type="text" placeholder="Name" name="name" />
          </div>
          <div>
            <input type="text" placeholder="Subject" name="subject" />
          </div>
          <div>
            <input type="email" placeholder="Email" name="email" />
          </div>
          <StyledSend>
            <input type="submit" value="Send" />
          </StyledSend>
        </form>
      </StyledForm>
    </StyledContact>
  );
};

export default Contact;
