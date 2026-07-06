// ============================================================
// pages/Home.js
// Main home page — assembles all home sections
// ============================================================
import React from 'react';
import Hero         from '../components/Hero';
import About        from '../components/About';
import Services     from '../components/Services';
import Gallery      from '../components/Gallery';
import Culture      from '../components/Culture';
import Testimonials from '../components/Testimonials';
import CTA          from '../components/CTA';
import FAQ          from '../components/FAQ';

const Home = () => {
  return (
    <>

      {/* Sections */}
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Culture />
      <Testimonials />
      <CTA />
      <FAQ />
    </>
  );
};

export default Home;
