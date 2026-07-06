// ============================================================
// components/Loader.js
// Full-screen loading animation shown on initial page load
// ============================================================
import React from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
      style={{ background: '#0a0a0a' }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Animated logo ring */}
      <motion.div
        className="relative flex items-center justify-center mb-8"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Outer rotating ring */}
        <motion.div
          className="absolute w-20 h-20 rounded-full"
          style={{
            border: '2px solid transparent',
            borderTopColor: '#D4A017',
            borderRightColor: '#f5d373',
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
        />
        {/* Inner pulse */}
        <motion.div
          className="w-12 h-12 rounded-full flex items-center justify-center"
          style={{ background: 'linear-gradient(135deg, #D4A017, #f5d373)' }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          {/* Camera icon in SVG */}
          <svg width="22" height="22" viewBox="0 0 24 24" fill="#1a1a1a">
            <path d="M12 15.2a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4z" />
            <path d="M9 3L7.17 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2h-3.17L15 3H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" />
          </svg>
        </motion.div>
      </motion.div>

      {/* Brand name */}
      <motion.h1
        className="font-serif text-3xl mb-2"
        style={{
          background: 'linear-gradient(135deg, #D4A017, #f5d373, #D4A017)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        Mayank Soni Photography
      </motion.h1>

      {/* Tagline */}
      <motion.p
        className="text-gray-400 font-sans text-sm tracking-widest uppercase"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        Capturing Forever...
      </motion.p>

      {/* Loading bar */}
      <motion.div
        className="absolute bottom-0 left-0 h-0.5"
        style={{ background: 'linear-gradient(90deg, #D4A017, #f5d373)' }}
        initial={{ width: '0%' }}
        animate={{ width: '100%' }}
        transition={{ duration: 1.6, ease: 'easeInOut' }}
      />
    </motion.div>
  );
};

export default Loader;
