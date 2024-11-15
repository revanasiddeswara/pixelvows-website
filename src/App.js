// src/App.js
import React from 'react';
import Header from '../src/component/Header';
import HeroSection from '../src/component/HeroSection';
import ServicesSection from '../src/component/ServicesSection';
import WhyChooseUs from '../src/component/WhyChooseUs';
import CustomForm from '../src/component/contactUs';
import Footer from './component/Footer';
import AboutUs from './component/aboutUs';
import Testimonials from './component/testinomials';

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <ServicesSection />
      <WhyChooseUs />
      <Testimonials />
      <AboutUs />
      <CustomForm />
      <Footer />
    </div>
  );
}

export default App;
