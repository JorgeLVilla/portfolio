import { StyledContact, StyledForm, StyledSend } from "./styles/Contact.styled";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const contactVariant = {
  hidden: {
    y: "20vh",
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
    },
  },
};

const submitVariant = {
  hover: {
    scale: 1.2,
  },
};

export const Contact = () => {
  const [contactContainerRef, contactContaineInView] = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        `${process.env.REACT_APP_SERVICEID}`,
        `${process.env.REACT_APP_TEMPLATEID}`,
        form.current,
        `${process.env.REACT_APP_USERID}`
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
    <StyledContact
      ref={contactContainerRef}
      as={motion.div}
      variants={contactVariant}
      initial="hidden"
      animate={contactContaineInView ? "visible" : "hidden"}
    >
      <h1 id="contact-section">Contact.</h1>
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
          <StyledSend
            as={motion.div}
            variants={submitVariant}
            whileHover={"hover"}
          >
            <input type="submit" value="Send" />
          </StyledSend>
        </form>
      </StyledForm>
    </StyledContact>
  );
};

export default Contact;
