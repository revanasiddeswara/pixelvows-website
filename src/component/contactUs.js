import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import styles from "./CustomForm.module.css";
import contactImage from "../Assets/contact us.png";  // Replace with your contact image

// Form validation function
const validate = values => {
  const errors = {};
  if (!values.name) {
    errors.name = "Name is required";
  }
  if (!values.email) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.message) {
    errors.message = "Message is required";
  }
  return errors;
};

function ContactUs() {
  return (
    <section className={styles.contactUs} id="contact-us">
      <div className={styles.contentWrapper}>
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
              You can reach us via email at <a href="mailto:info@pixelvows.com">info@pixelvows.com</a>, or give us a call at <strong>(123) 456-7890</strong>. Our team is ready to assist you with any inquiries.
            </p>
          </div>
          <div className={styles.formWrapper}>
            <Formik
              initialValues={{ name: "", email: "", message: "" }}
              validate={validate}
              onSubmit={(values, { resetForm }) => {
                // Simulating form submission
                alert(`Form submitted with values: ${JSON.stringify(values, null, 2)}`);
                resetForm();
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
                  <ErrorMessage name="name" component="div" className={styles.errorMessage} />
                </div>
                <div className={styles.inputGroup}>
                  <Field 
                    type="email" 
                    name="email" 
                    placeholder="Your Email" 
                    className={styles.inputField} 
                  />
                  <ErrorMessage name="email" component="div" className={styles.errorMessage} />
                </div>
                <div className={styles.inputGroup}>
                  <Field 
                    as="textarea" 
                    name="message" 
                    placeholder="Your Message" 
                    className={styles.textareaField} 
                  />
                  <ErrorMessage name="message" component="div" className={styles.errorMessage} />
                </div>
                <button type="submit" className={styles.submitButton}>Send Message</button>
              </Form>
            </Formik>
          </div>
        </div>
        <div className={styles.imageWrapper}>
          <img src={contactImage} alt="Contact Us" className={styles.contactImage} />
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
