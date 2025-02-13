import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import styles from "./CustomForm.module.css";
import contactImage from "../Assets/contact us.png"; // Replace with your contact image

// Form validation function
const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = "Name is required";
  }
  if (!values.email) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.phone) {
    errors.phone = "Mobile number is required";
  } else if (!/^\d{10}$/.test(values.phone)) {
    errors.phone = "Mobile number must be 10 digits";
  }
  if (!values.message) {
    errors.message = "Message is required";
  }
  return errors;
};

function ContactUs() {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  return (
    <section className={styles.contactUs} id="contact-us">
      <div className={styles.contentWrapper}>
        {/* Left Content */}
        <div className={styles.textContent}>
          <h2 className={styles.heading}>Contact Us</h2>
          <p className={styles.paragraph}>
            At Sid's PixelVows, we are always ready to help you bring your digital ideas to life. Whether you're looking for a web solution, mobile app, or custom software development, we're here to make it happen.
          </p>
          <p className={styles.paragraph}>
            Get in touch with us today, and let's discuss how we can help you take your business to the next level. We would love to hear from you!
          </p>
          <div className={styles.contactInfo}>
            <h3 className={styles.subHeading}>Reach Us</h3>
            <p className={styles.contactText}>
              You can reach us via email at{" "}
              <a href="mailto:info@pixelvows.com">info@pixelvows.com</a>, or give
              us a call at <strong>(123) 456-7890</strong>. Our team is ready to assist you with any inquiries.
            </p>
          </div>
           {/* Form Section */}
        <div className={styles.formWrapper}>
          {isFormSubmitted ? (
            <div className={styles.thankYouWrapper}>
              <h3>Thank You!</h3>
              <p>We’ve received your message and will get back to you shortly.</p>
              <button
                className={styles.submitButton}
                onClick={() => setIsFormSubmitted(false)}
              >
                Submit Another Response
              </button>
            </div>
          ) : (
            <Formik
              initialValues={{ name: "", email: "", phone: "", message: "" }}
              validate={validate}
              onSubmit={(values) => {
                console.log("Form submitted with values:", values);
                setIsFormSubmitted(true);
              }}
            >
              <Form className={styles.contactForm}>
                <div className={styles.inputGroup}>
                  <Field
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className={styles.inputField}
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className={styles.errorMessage}
                  />
                </div>
                <div className={styles.inputGroup}>
                  <Field
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className={styles.inputField}
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className={styles.errorMessage}
                  />
                </div>
                <div className={styles.inputGroup}>
                  <Field
                    type="text"
                    name="phone"
                    placeholder="Your Mobile Number"
                    className={styles.inputField}
                  />
                  <ErrorMessage
                    name="phone"
                    component="div"
                    className={styles.errorMessage}
                  />
                </div>
                <div className={styles.inputGroup}>
                  <Field
                    as="textarea"
                    name="message"
                    placeholder="Your Message"
                    className={styles.textareaField}
                  />
                  <ErrorMessage
                    name="message"
                    component="div"
                    className={styles.errorMessage}
                  />
                </div>
                <button type="submit" className={styles.submitButton}>
                  Send Message
                </button>
              </Form>
            </Formik>
          )}
        </div>
        </div>

       

        {/* Right Image Section */}
        <div className={styles.imageWrapper}>
          <img src={contactImage} alt="Contact Us" className={styles.contactImage} />
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
