import { useState } from "react";
import HeroImg from "../assets/intro-bg.jpeg";
import "../pages/About.css";
import "../component/Hero.css";
import "../pages/Portfolio.css";
import "../pages/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    subject: "",
    message: "",
  });

  const [thankYouMessage, setThankYouMessage] = useState("");

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  return (
    <section className="contact">
      <h2 className="heading">
        Contact <span>Me!</span>
      </h2>
      <form
        action="https://getform.io/f/a6ac45b2-9f36-4abd-a7a9-57f4b58b7508"
        method="POST"
      >
        <div className="input-box">
          <input
            type="text"
            placeholder="Full Name"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            placeholder="Email Address"
            onChange={handleChange}
            name="email"
            value={formData.email}
            required
          />
        </div>
        <div className="input-box">
          <input
            type="number"
            placeholder="Mobile Number"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            placeholder="Email Subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>

        <textarea
          value={formData.message}
          placeholder="Your Message"
          onChange={handleChange}
          name="message"
          cols="30"
          rows="10"
          required
        />
        <input type="submit" className="btn" value="Send Message" />
      </form>
    </section>
  );
};

export default Contact;
