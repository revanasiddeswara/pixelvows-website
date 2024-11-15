// HeroSection.js
import React from 'react';
import styles from './HeroSection.module.css';
import heroImage from '../Assets/rb_15040.png';

function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.content}>
        <span className={styles.tagline}>YOUR TRUSTED TECHNOLOGY PARTNER</span>
        <h1 className={styles.title}>Empowering Businesses with Cutting-Edge Digital Solutions.</h1>
        <p className={styles.description}>
        At Sid's PixelVows, we specialize in transforming your digital presence. Our team is dedicated to crafting modern, high-performing web and
        <span> 
            mobile solutions tailored to</span>  <span className={styles.highlight}>meet your business goals.</span>
        </p>
        <button className={styles.ctaButton}>
        Discover Our Services <span className={styles.arrow}>&rarr;</span>
        </button>
        <div className={styles.socialIcons}>
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-instagram"></i>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <img src={heroImage} alt="Illustration of a man with laptop" className={styles.heroImage} />
      </div>
    </section>
  );
}

export default HeroSection;
