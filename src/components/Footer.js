// ============================================================
// components/Footer.js
// Luxury dark footer with navigation, social links, and contact
// ============================================================
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaInstagram, FaFacebookF, FaYoutube, FaPinterestP, FaWhatsapp,
} from 'react-icons/fa';
import {
  FiMail, FiPhone, FiMapPin, FiClock,
} from 'react-icons/fi';

const WHATSAPP_URL =
  'https://wa.me/919999999999?text=Hello%2C%20I%20want%20to%20book%20my%20wedding%20photoshoot.';

const quickLinks = [
  { path: '/',          label: 'Home'      },
  { path: '/about',     label: 'About Us'  },
  { path: '/portfolio', label: 'Portfolio' },
  { path: '/team',      label: 'Our Team'  },
  { path: '/contact',   label: 'Contact'   },
];

const services = [
  'Wedding Photography',
  'Pre-Wedding Shoot',
  'Engagement Ceremony',
  'Haldi & Mehendi',
  'Sangeet & Reception',
  'Cinematic Films',
  'Drone Photography',
];

const socialLinks = [
  { icon: <FaInstagram size={18} />, href: 'https://instagram.com', label: 'Instagram', color: '#E1306C' },
  { icon: <FaFacebookF  size={18} />, href: 'https://facebook.com',  label: 'Facebook',  color: '#1877F2' },
  { icon: <FaYoutube    size={18} />, href: 'https://youtube.com',   label: 'YouTube',   color: '#FF0000' },
  { icon: <FaPinterestP size={18} />, href: 'https://pinterest.com', label: 'Pinterest', color: '#E60023' },
  { icon: <FaWhatsapp   size={18} />, href: WHATSAPP_URL,            label: 'WhatsApp',  color: '#25D366' },
];

const Footer = () => {
  const year = new Date().getFullYear();

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer style={{ background: '#080808', borderTop: '1px solid #1a1a1a' }}>

      {/* Top Gold line */}
      <div
        className="h-px w-full"
        style={{ background: 'linear-gradient(90deg, transparent, #D4A017, transparent)' }}
      />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Logo */}
            <div className="mb-5">
              <h3
                className="font-serif text-2xl font-bold"
                style={{
                  background: 'linear-gradient(135deg, #D4A017, #f5d373)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Mayank Soni
              </h3>
              <p className="font-sans text-[10px] tracking-[0.3em] text-gray-500 uppercase mt-1">
                Photography & Films
              </p>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Premium Indian Wedding Photography capturing the grandeur, emotions,
              and timeless beauty of your most cherished celebrations.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full flex items-center justify-center text-gray-400 transition-all duration-300"
                  style={{ border: '1px solid #2a2a2a' }}
                  whileHover={{ scale: 1.15, color: s.color, borderColor: s.color }}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-sans text-xs tracking-[0.2em] uppercase text-yellow-500 mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 text-sm font-sans hover:text-yellow-400 transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span
                      className="w-4 h-px transition-all duration-300 group-hover:w-6"
                      style={{ background: '#D4A017' }}
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-sans text-xs tracking-[0.2em] uppercase text-yellow-500 mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li
                  key={s}
                  className="text-gray-400 text-sm font-sans flex items-center gap-2"
                >
                  <span
                    className="w-1 h-1 rounded-full flex-shrink-0"
                    style={{ background: '#D4A017' }}
                  />
                  {s}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="font-sans text-xs tracking-[0.2em] uppercase text-yellow-500 mb-5">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FiMapPin className="text-yellow-500 mt-0.5 flex-shrink-0" size={16} />
                <span className="text-gray-400 text-sm font-sans leading-relaxed">
                  Studio 12, Pali Hill, Bandra West,<br />Mumbai – 400 050
                </span>
              </li>
              <li className="flex items-center gap-3">
                <FiPhone className="text-yellow-500 flex-shrink-0" size={16} />
                <a
                  href="tel:+919999999999"
                  className="text-gray-400 text-sm font-sans hover:text-yellow-400 transition-colors"
                >
                  +91 99999 99999
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FiMail className="text-yellow-500 flex-shrink-0" size={16} />
                <a
                  href="mailto:hello@arjunsharmaphotography.com"
                  className="text-gray-400 text-sm font-sans hover:text-yellow-400 transition-colors"
                >
                  hello@arjunphotography.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <FiClock className="text-yellow-500 mt-0.5 flex-shrink-0" size={16} />
                <span className="text-gray-400 text-sm font-sans leading-relaxed">
                  Mon – Sat: 10:00 AM – 7:00 PM<br />
                  Sunday: By Appointment
                </span>
              </li>
            </ul>

            {/* WhatsApp CTA */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 text-xs font-semibold tracking-widest uppercase text-black transition-all duration-300"
              style={{ background: '#25D366' }}
            >
              <FaWhatsapp size={14} />
              Chat on WhatsApp
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="border-t py-5"
        style={{ borderColor: '#1a1a1a' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-gray-600 text-xs font-sans text-center">
            © {year} Mayank Soni Photography. All Rights Reserved. Crafted with
            {' '}
            <span style={{ color: '#D4A017' }}>♥</span>
            {' '}in Mumbai.
          </p>
          <button
            onClick={scrollToTop}
            className="text-gray-600 text-xs font-sans hover:text-yellow-400 transition-colors duration-200 uppercase tracking-widest"
          >
            Back to Top ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
