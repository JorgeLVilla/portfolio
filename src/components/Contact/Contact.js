import {
  PhoneContainer,
  StyledContact,
  StyledForm,
  StyledSend,
  ContactMasterContainer,
} from "./styles";
import { contactVariant, submitVariant } from "./Variants";
import { rightAniVariant } from "../About";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import phoneIcon from "../../assets/phoneIcon.svg";

export const Contact = () => {
  const [contactContainerRef, contactContainerInView] = useInView({
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
    <ContactMasterContainer
      ref={contactContainerRef}
      as={motion.div}
      variants={contactVariant}
      initial="hidden"
      animate={contactContainerInView ? "visible" : "hidden"}
    >
      <StyledContact>
        <div>
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
                initial={"hidden"}
                animate={"visible"}
                whileHover={"hover"}
              >
                <input type="submit" value="Send" />
              </StyledSend>
            </form>
          </StyledForm>
        </div>
      </StyledContact>
      <PhoneContainer>
        <motion.img
          src={phoneIcon}
          alt="phone icon"
          variants={rightAniVariant}
          initial="hidden"
          animate={contactContainerInView ? "visible" : "hidden"}
        />
      </PhoneContainer>
    </ContactMasterContainer>
  );
};

export default Contact;
