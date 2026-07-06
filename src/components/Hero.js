// ============================================================
// components/Hero.js
// Fullscreen cinematic hero section for the home page
// ============================================================
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { FiChevronDown } from 'react-icons/fi';

const WHATSAPP_URL =
  'https://wa.me/919999999999?text=Hello%2C%20I%20want%20to%20book%20my%20wedding%20photoshoot.';

const HERO_BG =
  'https://images.unsplash.com/photo-1519741347686-c1e0aadf4611?w=1920&q=85';

const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero Section"
    >
      {/* Background Image with Ken Burns zoom effect */}
      <motion.div
        className="absolute inset-0 bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: `url("${HERO_BG}")` }}
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8, ease: 'easeOut' }}
      />

      {/* Dark gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.35) 50%, rgba(0,0,0,0.75) 100%)',
        }}
      />

      {/* Gold vignette at bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32"
        style={{
          background:
            'linear-gradient(to top, rgba(212,160,23,0.08), transparent)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Pre-heading */}
        <motion.p
          className="font-sans text-xs tracking-[0.4em] uppercase mb-6 text-yellow-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Premium Indian Wedding Photography
        </motion.p>

        {/* Main Heading */}
        <motion.h1
          className="font-serif text-white mb-6 leading-tight"
          style={{ fontSize: 'clamp(2.8rem, 7vw, 6rem)' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.9 }}
        >
          Mayank Soni
          <span className="block italic" style={{ color: '#f5d373', fontSize: '0.6em' }}>
            Photography
          </span>
        </motion.h1>

        {/* Divider */}
        <motion.div
          className="h-px w-24 mx-auto mb-6"
          style={{ background: 'linear-gradient(90deg, transparent, #D4A017, transparent)' }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        />

        {/* Tagline */}
        <motion.p
          className="font-serif italic text-white/90 mb-10"
          style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          "Capturing Forever, One Moment at a Time"
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <Link to="/portfolio" className="btn-gold">
            View Portfolio
          </Link>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-white"
          >
            <FaWhatsapp size={16} />
            Contact on WhatsApp
          </a>
        </motion.div>
      </div>

      {/* Scroll down indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        onClick={() => {
          document.getElementById('about-section')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-white/50">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <FiChevronDown className="text-yellow-400" size={22} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
