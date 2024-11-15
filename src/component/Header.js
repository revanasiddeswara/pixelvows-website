import React, { useState } from 'react';
import styles from './Header.module.css';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Sid's Pixelvows</div>
      <ul className={`${styles.navLinks} ${menuOpen ? styles.open : ''}`}>
        <li><a href="/">Home</a></li>
        <li><a href="#services">Our Services</a></li>
        <li><a href="#why-us">Why Choose Us</a></li>
        <li><a href="#testimonials">Testinomials</a></li>
        <li><a href="#about-us">About Us</a></li>
        <li><a href="#contact-us" className={styles.contactLink}>Contact Us</a></li>
      </ul>
      <div className={styles.hamburger} onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
      <div className="hamburger" style={{ display: 'block', color: 'red' }}>
  <FaBars />
</div>

    </nav>
  );
};

export default Header;
