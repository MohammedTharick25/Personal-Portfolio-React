import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/Contact.css";

function Contact() {
  const form = useRef();
  const [done, setDone] = useState(false);
  const [notDone, setNotDone] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setDone(false);
    setNotDone(false);

    const SERVICE_ID = "service_nmcgg9x";
    const TEMPLATE_ID = "template_loiy8m1";
    const PUBLIC_KEY = "Y63Bddb_oJ-UDDtEO";

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
      (result) => {
        console.log(result.text);
        setDone(true);
        setLoading(false);
        form.current.reset();
      },
      (error) => {
        console.log(error.text);
        setNotDone(true);
        setLoading(false);
      }
    );
  };

  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1 className="heading">
          Get in <span>Touch</span>
        </h1>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <h2 className="sub-heading">DON'T BE SHY!</h2>
          <p className="contact-desc">
            Feel free to get in touch with me. I am always open to discussing
            new projects, creative ideas or opportunities to be part of your
            visions.
          </p>

          <div className="contact-details">
            <div className="detail-item">
              <span className="icon">✉️</span>
              <div className="detail-content">
                <h3>Mail Me</h3>
                <p>mdtharick25@gmail.com</p>
              </div>
            </div>

            <div className="detail-item">
              <span className="icon">📍</span>
              <div className="detail-content">
                <h3>Location</h3>
                <p>Chennai, India</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-area">
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <div className="input-group">
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="input-group">
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="input-group">
              <textarea
                name="message"
                placeholder="Write your message..."
                rows="6"
                required
              ></textarea>
            </div>

            <button type="submit" className="send-btn" disabled={loading}>
              {loading ? "Sending..." : "Send Message 🚀"}
            </button>

            {done && (
              <span className="done-msg">
                Thanks for contacting me! I'll be in touch soon.
              </span>
            )}

            {notDone && (
              <span className="not-done-msg">
                Oops! Something went wrong. Please try again.
              </span>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
