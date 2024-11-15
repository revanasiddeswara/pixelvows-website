import React, { useState, useEffect } from "react";
import styles from "./Testimonials.module.css"; // Adjust based on your file structure
import testimonialsImage from "../Assets/happy.png"; // Replace with your image

// Sample testimonials data
const testimonials = [
  {
    feedback: "This is an amazing service! Highly recommend.",
    name: "John Doe",
    position: "CEO, Example Co.",
  },
  {
    feedback: "A game-changer for our business. Excellent support!",
    name: "Jane Smith",
    position: "Marketing Head, XYZ Ltd.",
  },
  {
    feedback: "A fantastic team to work with, truly professionals.",
    name: "Michael Johnson",
    position: "Product Manager, ABC Corp.",
  },
];

function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Function to change the testimonial every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prevTestimonial) =>
        prevTestimonial === testimonials.length - 1 ? 0 : prevTestimonial + 1
      );
    }, 5000); // Change testimonial every 5 seconds

    // Clean up interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.testimonials} id="testimonials">
      <div className={styles.contentWrapper}>
        <div className={styles.textContent}>
          <h2 className={styles.heading}>What Our Clients Say</h2>
          <div className={styles.testimonialCard}>
            <p className={styles.feedback}>{testimonials[currentTestimonial].feedback}</p>
            <p className={styles.name}>{testimonials[currentTestimonial].name}</p>
            <p className={styles.position}>{testimonials[currentTestimonial].position}</p>
          </div>
        </div>
        <div className={styles.imageWrapper}>
          <img
            src={testimonialsImage}
            alt="Testimonials"
            className={styles.testimonialsImage}
          />
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
