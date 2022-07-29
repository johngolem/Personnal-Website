import React from "react";
import "./contact.css";
import { IoIosMailOpen } from "react-icons/io";

import { ImWhatsapp } from "react-icons/im";
const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <IoIosMailOpen />
            <h4>Email</h4>
            <h5>jpaulopiy@gmail.com</h5>
            <a href="mailto:jpaulopiy@gmail.com">Send a message</a>
          </article>
          <article className="contact__option">
            <ImWhatsapp />
            <h4>Whatsapp</h4>
            <h5>jpaulopiy@gmail.com</h5>
            <a href="mailto:jpaulopiy@gmail.com">Send a message</a>
          </article>
        </div>
      </div>
      {/* END OF CONTACT OPTIONS */}
      <form action=""></form>
    </section>
  );
};

export default Contact;
