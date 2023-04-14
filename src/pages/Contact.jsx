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
  message: "",
  joinedNewsletter: true,
  employment: "",
  favColor: "",
});

function handleChange(event) {
  const { name, value, type, checked } = event.target;
  setFormData((prevFormData) => {
    return {
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value,
    };
  });
}
function handleSubmit(event) {
  event.preventDefault();
  // submitToApi(formData)
  if (formData.password === formData.passwordConfirm) {
    console.log("Successfully signed up");
  } else {
    console.log("Passwords do not match");
    return;
  }

  if (formData.joinedNewsletter) {
    console.log("Thanks for signing up for our newsletter!");
  }
}

  return (
    <section className="contact">
      <h2 className="heading">
        Contact <span>Me!</span>
      </h2>
      <form action="">
        <div className="input-box">
          <input
            type="text"
            placeholder="Full Name"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />

          <input
            type="email"
            placeholder="Email Address"
            onChange={handleChange}
            name="email"
            value={formData.email}
          />
        </div>
        <div className="input-box">
          <input
            type="number"
            placeholder="Mobile Number"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Email Subject"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>

        <textarea
          value={formData.message}
          placeholder="Your Message"
          onChange={handleChange}
          name="message"
          cols='30'
          rows='10'
        />
        <input type="submit" className="btn" value='Send Message'/>
      </form>
    </section>
  );
};

export default Contact;
