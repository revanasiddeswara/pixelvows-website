import React from "react";
import styles from "./AboutUs.module.css";
import teamImage from "../Assets/about us.png";  // Replace with your image

function AboutUs() {
  return (
    <section className={styles.aboutUs} id="about-us">
      <div className={styles.contentWrapper}>
        <div className={styles.imageWrapper}>
          <img src={teamImage} alt="Our Team" className={styles.teamImage} />
        </div>
        <div className={styles.textContent}>
          <h2 className={styles.heading}>About Us</h2>
          <p className={styles.paragraph}>
            At Sid's PixelVows, we are passionate about connecting people and businesses through cutting-edge web solutions. Our expert team of designers, developers, and digital strategists work collaboratively to bring your ideas to life and drive results.
          </p>
          <p className={styles.paragraph}>
            With a client-centric approach, we tailor every project to meet the unique needs of our clients, ensuring success in a digital-first world.
          </p>
          <div className={styles.mission}>
            <h3 className={styles.subHeading}>Our Mission</h3>
            <p className={styles.missionText}>
              Our mission is to empower businesses with innovative and effective digital solutions that foster growth and success. We are committed to providing exceptional value, continuous support, and forward-thinking strategies that help our clients stay ahead in the competitive digital landscape.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
