import React from "react";
import "./Contact.css";

function Contact(props) {
  return (
    <div className="contactPage">
      <div className="contactPageMainContainer">
        <h1 className="contactTitle">Contact</h1>
        <div className="contactInfoContainer">
          <form>
            <label className="contactInfo">
              <input firstname="first name" />
              <p>First Name</p>
              <input lastname="last name" />
              <p>Last Name</p>
              <input email="email" />
              <p>Email</p>
              <textarea rows={20} cols={40} />
              <p>Message</p>
            </label>
            <button type="submit" className="sendButton">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
