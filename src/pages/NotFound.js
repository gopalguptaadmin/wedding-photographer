// ============================================================
// pages/NotFound.js
// Custom 404 page
// ============================================================
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiHome, FiCamera } from 'react-icons/fi';

const NotFound = () => {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center text-center px-6"
      style={{ background: '#080808' }}
    >
      {/* Decorative BG number */}
      <div
        className="absolute font-serif text-[18rem] font-bold leading-none select-none pointer-events-none opacity-[0.04]"
        style={{ color: '#D4A017' }}
      >
        404
      </div>

      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        {/* Camera icon */}
        <div
          className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8"
          style={{ background: 'linear-gradient(135deg, #D4A017, #f5d373)' }}
        >
          <FiCamera size={36} className="text-black" />
        </div>

        {/* 404 */}
        <h1
          className="font-serif font-bold mb-4"
          style={{
            fontSize: 'clamp(4rem, 12vw, 8rem)',
            background: 'linear-gradient(135deg, #D4A017, #f5d373)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            lineHeight: 1,
          }}
        >
          404
        </h1>

        {/* Message */}
        <h2 className="font-serif text-white text-2xl lg:text-3xl mb-3">
          Page Not Found
        </h2>
        <p className="font-sans text-gray-400 mb-10 max-w-md mx-auto leading-relaxed">
          The frame you're looking for seems to be out of focus. Let's take you
          back to where the beautiful moments live.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/" className="btn-gold text-sm">
            <FiHome size={15} />
            Go Home
          </Link>
          <Link
            to="/portfolio"
            className="font-sans text-sm tracking-widest uppercase px-8 py-3 border border-gray-700 text-gray-300 hover:border-yellow-500 hover:text-yellow-400 transition-all duration-300"
          >
            View Portfolio
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;
