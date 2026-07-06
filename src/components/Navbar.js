// ============================================================
// components/Navbar.js
// Sticky transparent → dark navbar with mobile hamburger menu
// ============================================================
import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const WHATSAPP_URL =
  'https://wa.me/919999999999?text=Hello%2C%20I%20want%20to%20book%20my%20wedding%20photoshoot.';

const navLinks = [
  { path: '/',          label: 'Home'      },
  { path: '/about',     label: 'About'     },
  { path: '/portfolio', label: 'Portfolio' },
  { path: '/team',      label: 'Team'      },
  { path: '/contact',   label: 'Contact'   },
];

const Navbar = () => {
  const [scrolled,    setScrolled]    = useState(false);
  const [menuOpen,    setMenuOpen]    = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => setMenuOpen(false), [location]);

  // Change navbar bg on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navBg = scrolled
    ? 'bg-black/95 backdrop-blur-md shadow-lg'
    : 'bg-transparent';

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 transition-all duration-500 ${navBg}`}
        style={{ zIndex: 100 }}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex flex-col leading-none group">
            <span
              className="font-serif text-xl font-bold tracking-wide"
              style={{
                background: 'linear-gradient(135deg, #D4A017, #f5d373)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Mayank Soni
            </span>
            <span className="font-sans text-[10px] tracking-[0.3em] text-gray-400 uppercase mt-0.5">
              Photography
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  end={link.path === '/'}
                  className={({ isActive }) =>
                    `nav-link font-sans text-xs tracking-[0.12em] uppercase transition-colors duration-300 ${
                      isActive ? 'text-yellow-400 active' : 'text-gray-300 hover:text-yellow-300'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-widest uppercase transition-all duration-300 text-black"
              style={{ background: 'linear-gradient(135deg, #D4A017, #f5d373)' }}
            >
              <FaWhatsapp size={14} />
              Book Now
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden text-white p-2 focus:outline-none"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 flex flex-col items-center justify-center"
            style={{ zIndex: 99, backgroundColor: '#000000' }}
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
          >
            <ul className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
                  <NavLink
                    to={link.path}
                    end={link.path === '/'}
                    className={({ isActive }) =>
                      `font-serif text-3xl transition-colors duration-300 ${
                        isActive ? 'text-yellow-400' : 'text-white hover:text-yellow-300'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </motion.li>
              ))}
              {/* WhatsApp in mobile menu */}
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.07 }}
              >
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 mt-4 px-8 py-3 text-sm font-semibold tracking-widest uppercase text-black"
                  style={{ background: 'linear-gradient(135deg, #D4A017, #f5d373)' }}
                >
                  <FaWhatsapp size={16} />
                  Book Now
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
