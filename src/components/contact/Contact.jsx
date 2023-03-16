import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";
import { IoIosMailOpen } from "react-icons/io";
import { ImWhatsapp } from "react-icons/im";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_sbceonu",
      "template_zl9btv9",
      form.current,
      "XRT2qoPIPBgvB4enP"
    );
    e.target.reset();
    // .then(
    //   (result) => {
    //     console.log(result.text);
    //   },
    //   (error) => {
    //     console.log(error.text);
    //   }
    // );
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Us</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <IoIosMailOpen className="contact__option-icon" />
            <h4>Email</h4>
            <h5>jpaulopiy@gmail.com</h5>
            <a href="mailto:jpaulopiy@gmail.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <ImWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>Send me a message</h5>
            <a href="https://wa.me/+254700448388" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <ImWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>Send me a message</h5>
            <a href="https://wa.me/+254700448388" target="_blank">
              Send a message
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="10"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary" value={sendEmail}>
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
