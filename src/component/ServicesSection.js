import React from "react";
import styles from "./ServicesSection.module.css";
import webdevelopement from '../Assets/web developement.png';
import MobileDevelopment from '../Assets/mobile developement.png';
import uiux from '../Assets/uiux.png';
import ecom from '../Assets/e commerce.png';
import seo from '../Assets/seo.png';
import dev from '../Assets/4403356.webp';
import cms from '../Assets/cms.png';
import digi from '../Assets/digital.png';
import support from '../Assets/support.png';
function ServicesSection() {
  const services = [
    { 
      title: "Web Development", 
      description: "Our web development services are tailored to bring your digital vision to life. We build robust, scalable web applications with a focus on performance and security.",
      image: webdevelopement // Placeholder image URL
    },
    { 
      title: "Mobile Development", 
      description: "Enhance your brand’s reach with custom mobile applications for iOS and Android, delivering engaging and high-performance solutions.",
      image: MobileDevelopment,
    },
    { 
      title: "UI/UX Design", 
      description: "Engage and retain your audience with visually stunning and user-centered interfaces that enhance usability and brand identity.",
      image: uiux
    },
    { 
      title: "E-Commerce Solutions", 
      description: "We develop powerful e-commerce platforms with secure payment gateways, intuitive interfaces, and seamless user experiences to drive sales.",
      image:ecom
    },
    { 
      title: "Search Engine Optimization (SEO)", 
      description: "Boost your online visibility with tailored SEO strategies that improve search rankings and attract quality traffic.",
      image: seo
    },
    { 
      title: "Custom Software Development", 
      description: "Craft tailored software solutions that meet specific business needs, ensuring scalability, reliability, and efficiency.",
      image: dev
    },
    { 
      title: "Content Management Systems (CMS)", 
      description: "Simplify your content management with CMS solutions like WordPress and Drupal, offering easy updates and dynamic control.",
      image: cms
    },
    { 
      title: "Digital Marketing", 
      description: "Expand your online presence with strategic digital marketing, including social media campaigns, email marketing, and PPC.",
      image: digi
    },
    { 
      title: "Maintenance & Support", 
      description: "Ensure your website and applications run smoothly with our dedicated maintenance and technical support services.",
      image:support
    }
  ];

  return (
    <section className={styles.services} id="services">
      <h2>Our Services</h2>
      <div className={styles.servicesList}>
        {services.map((service, index) => (
          <div className={styles.serviceCard} key={index}>
            <img src={service.image} alt={service.title} className={styles.serviceImage} />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ServicesSection;
