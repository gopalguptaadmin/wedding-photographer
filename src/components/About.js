// ============================================================
// components/About.js
// About section with stats counters and photographer's story
// ============================================================
import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// Animated counter hook
const useCounter = (target, duration = 2000, start = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);

  return count;
};

const stats = [
  { label: 'Weddings Captured', value: 500, suffix: '+' },
  { label: 'Years of Experience', value: 12, suffix: '' },
  { label: 'Cities Covered', value: 30, suffix: '+' },
  { label: 'Happy Couples', value: 498, suffix: '+' },
];

const StatCard = ({ label, value, suffix, start }) => {
  const count = useCounter(value, 1800, start);
  return (
    <div className="text-center px-4 py-6 border border-yellow-800/30 bg-black/20">
      <div
        className="font-serif text-4xl lg:text-5xl font-bold mb-2"
        style={{
          background: 'linear-gradient(135deg, #D4A017, #f5d373)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        {count}{suffix}
      </div>
      <p className="font-sans text-xs tracking-widest uppercase text-gray-400">{label}</p>
    </div>
  );
};

const About = () => {
  const ref     = useRef(null);
  const inView  = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden:  { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
  };

  return (
    <section
      id="about-section"
      className="py-24 lg:py-32 bg-white relative overflow-hidden"
    >
      {/* Decorative background text */}
      <div
        className="absolute top-0 right-0 font-serif text-[12rem] font-bold select-none pointer-events-none leading-none opacity-[0.03]"
        style={{ color: '#D4A017' }}
      >
        Love
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left - Images collage */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Main image */}
            <div className="relative overflow-hidden shadow-2xl" style={{ aspectRatio: '4/5' }}>
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=700&q=80"
                alt="Mayank Soni - Lead Photographer"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
              {/* Gold overlay on hover */}
              <div
                className="absolute inset-0 opacity-0 hover:opacity-20 transition-opacity duration-500"
                style={{ background: 'linear-gradient(135deg, #D4A017, transparent)' }}
              />
            </div>

            {/* Floating badge - experience */}
            <motion.div
              className="absolute -bottom-6 -right-6 bg-black text-white p-6 shadow-2xl"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <p
                className="font-serif text-5xl font-bold leading-none"
                style={{
                  background: 'linear-gradient(135deg, #D4A017, #f5d373)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                12
              </p>
              <p className="font-sans text-[10px] tracking-[0.2em] text-gray-400 uppercase mt-1">
                Years<br />Experience
              </p>
            </motion.div>

            {/* Small accent image */}
            <motion.div
              className="absolute -top-8 -left-8 w-36 h-36 overflow-hidden border-4 border-white shadow-xl hidden lg:block"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <img
                src="https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=300&q=70"
                alt="Wedding moment"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </motion.div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Pre title */}
            <motion.p
              variants={itemVariants}
              className="font-sans text-xs tracking-[0.3em] uppercase mb-4"
              style={{ color: '#D4A017' }}
            >
              Our Story
            </motion.p>

            {/* Heading */}
            <motion.h2
              variants={itemVariants}
              className="section-title mb-2"
            >
              Passionate About Capturing
              <span className="block italic" style={{ color: '#D4A017' }}>
                Indian Love Stories
              </span>
            </motion.h2>

            {/* Gold divider */}
            <motion.div variants={itemVariants}>
              <div
                className="w-20 h-0.5 mb-8"
                style={{ background: 'linear-gradient(90deg, #D4A017, transparent)' }}
              />
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="font-sans text-gray-600 leading-relaxed mb-4"
            >
              With over 12 years of experience photographing the most exquisite Indian weddings,
              Mayank Soni has built a reputation for cinematic storytelling that captures every
              emotion — from the tears of joy at the Vidaai to the radiant smiles at the Baraat.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="font-sans text-gray-600 leading-relaxed mb-8"
            >
              Our philosophy is simple: <em>every wedding is a unique love story</em>, and it
              deserves to be told with artistry, authenticity, and heart. From the intimate rituals
              of Haldi and Mehendi to the grand splendour of Reception nights, we are there —
              quietly capturing the moments that will last a lifetime.
            </motion.p>

            {/* Highlights */}
            <motion.ul
              variants={itemVariants}
              className="space-y-3 mb-10"
            >
              {[
                'Pan-India coverage — Delhi, Mumbai, Jaipur, Udaipur & beyond',
                'Destination weddings across India & abroad',
                'Complete coverage: Photo + Cinema + Drone',
                '100% satisfaction guarantee',
              ].map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm font-sans text-gray-600">
                  <span
                    className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                    style={{ background: '#D4A017' }}
                  />
                  {point}
                </li>
              ))}
            </motion.ul>

            {/* Stats grid */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((stat) => (
                <StatCard key={stat.label} {...stat} start={inView} />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
