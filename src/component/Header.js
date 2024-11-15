import React, { useState } from 'react';
import styles from './Header.module.css';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Sid's Pixelvows</div>
      <ul className={`${styles.navLinks} ${menuOpen ? styles.open : ''}`}>
        <li><a href="/" onClick={closeMenu}>Home</a></li>
        <li><a href="#services" onClick={closeMenu}>Our Services</a></li>
        <li><a href="#why-us" onClick={closeMenu}>Why Choose Us</a></li>
        <li><a href="#testimonials" onClick={closeMenu}>Testimonials</a></li>
        <li><a href="#about-us" onClick={closeMenu}>About Us</a></li>
        <li><a href="#contact-us" onClick={closeMenu} className={styles.contactLink}>Contact Us</a></li>
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
