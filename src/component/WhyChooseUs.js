// src/components/WhyChooseUs.js
import React from 'react';
import { FaUsers, FaHeart, FaCogs, FaLifeRing } from 'react-icons/fa'; // Using Font Awesome icons
import styles from './WhyChooseUs.module.css';

function WhyChooseUs() {
  const reasons = [
    { icon: <FaUsers />, title: "Experienced Professionals", description: "Our team is composed of industry experts who bring years of experience to every project." },
    { icon: <FaHeart />, title: "Client-Focused Approach", description: "We prioritize your needs, ensuring personalized solutions tailored to your goals." },
    { icon: <FaCogs />, title: "Cutting-Edge Technology", description: "We leverage the latest technologies to deliver innovative and scalable solutions." },
    { icon: <FaLifeRing />, title: "Reliable Support", description: "Our dedicated support team is always ready to assist you, ensuring smooth operations." },
  ];

  return (
    <section className={styles.whyChooseUs} id="why-us">
      <h2>Why Choose Us</h2>
      <div className={styles.reasonsList}>
        {reasons.map((reason, index) => (
          <div className={styles.reasonCard} key={index}>
            <div className={styles.iconContainer}>{reason.icon}</div>
            <h3>{reason.title}</h3>
            <p>{reason.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyChooseUs;
