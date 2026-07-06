// ============================================================
// components/CTA.js
// Call-To-Action section with parallax background
// ============================================================
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

const WHATSAPP_URL =
  'https://wa.me/919999999999?text=Hello%2C%20I%20want%20to%20book%20my%20wedding%20photoshoot.';

const CTA = () => {
  return (
    <section
      className="relative py-32 lg:py-44 overflow-hidden"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1529636798458-92182e662485?w=1920&q=80")',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(135deg, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.65) 100%)',
        }}
      />

      {/* Gold shimmer overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          background:
            'repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(212,160,23,0.05) 40px, rgba(212,160,23,0.05) 80px)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">

        {/* Pre-title */}
        <motion.p
          className="font-sans text-xs tracking-[0.4em] uppercase mb-6"
          style={{ color: '#f5d373' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Ready to Begin?
        </motion.p>

        {/* Main Heading */}
        <motion.h2
          className="font-serif text-white mb-4"
          style={{ fontSize: 'clamp(2rem, 6vw, 4.5rem)', lineHeight: 1.1 }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
        >
          Let's Capture Your
          <span
            className="block italic"
            style={{
              background: 'linear-gradient(135deg, #D4A017, #f5d373)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Forever Story
          </span>
        </motion.h2>

        {/* Divider */}
        <motion.div
          className="h-px w-24 mx-auto mb-8"
          style={{ background: 'linear-gradient(90deg, transparent, #D4A017, transparent)' }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        />

        <motion.p
          className="font-sans text-white/75 text-lg mb-10 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          Your wedding day is the most beautiful story you will ever tell.
          Let us be the artists who preserve it — frame by frame, forever.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <Link to="/contact" className="btn-gold text-sm">
            Book Your Date
          </Link>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-white text-sm"
          >
            <FaWhatsapp size={16} />
            WhatsApp Us
          </a>
        </motion.div>

        {/* Trust note */}
        <motion.p
          className="font-sans text-white/40 text-xs mt-8 tracking-wide"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
        >
          500+ Weddings Covered · Pan-India Coverage · No Hidden Charges
        </motion.p>
      </div>
    </section>
  );
};

export default CTA;
