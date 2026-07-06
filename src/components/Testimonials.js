// ============================================================
// components/Testimonials.js
// Client testimonial carousel with auto-play
// ============================================================
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import { testimonials } from '../data/testimonialData';

const StarRating = ({ rating }) => (
  <div className="flex items-center justify-center gap-1 mb-4">
    {Array.from({ length: rating }).map((_, i) => (
      <FaStar key={i} className="text-yellow-400" size={16} />
    ))}
  </div>
);

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = next, -1 = prev
  const total = testimonials.length;

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % total);
  }, [total]);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Auto-play
  useEffect(() => {
    const id = setInterval(next, 5500);
    return () => clearInterval(id);
  }, [next]);

  const variants = {
    enter: (dir) => ({
      x: dir > 0 ? 80 : -80,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
    exit: (dir) => ({
      x: dir > 0 ? -80 : 80,
      opacity: 0,
      transition: { duration: 0.4 },
    }),
  };

  const t = testimonials[current];

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden" style={{ background: '#faf8f4' }}>

      {/* Decorative quote mark */}
      <div
        className="absolute top-8 left-1/2 -translate-x-1/2 font-serif text-[15rem] leading-none select-none pointer-events-none opacity-[0.04]"
        style={{ color: '#D4A017' }}
      >
        "
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-14">
          <motion.p
            className="font-sans text-xs tracking-[0.3em] uppercase mb-4"
            style={{ color: '#D4A017' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            What Couples Say
          </motion.p>

          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Love Notes from
            <span className="block italic" style={{ color: '#D4A017' }}>
              Happy Couples
            </span>
          </motion.h2>

          <motion.div
            className="gold-divider"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          />
        </div>

        {/* Carousel */}
        <div className="relative">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="testimonial-card max-w-3xl mx-auto shadow-lg"
            >
              {/* Quote Icon */}
              <div className="flex justify-center mb-6">
                <FaQuoteLeft
                  size={32}
                  style={{
                    background: 'linear-gradient(135deg, #D4A017, #f5d373)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                />
              </div>

              {/* Star Rating */}
              <StarRating rating={t.rating} />

              {/* Review Text */}
              <p className="font-serif italic text-gray-700 text-lg lg:text-xl leading-relaxed mb-8">
                "{t.review}"
              </p>

              {/* Client Info */}
              <div className="flex flex-col items-center gap-3">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-16 h-16 rounded-full object-cover border-2"
                  style={{ borderColor: '#D4A017' }}
                />
                <div className="text-center">
                  <h4 className="font-serif text-gray-900 text-base">{t.name}</h4>
                  <p className="font-sans text-xs text-gray-400 tracking-wide mt-0.5">
                    {t.location} · {t.weddingDate}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-10 w-10 h-10 flex items-center justify-center bg-white shadow-md border border-gray-100 hover:border-yellow-400 hover:text-yellow-500 transition-all duration-300"
            aria-label="Previous testimonial"
          >
            <FiChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-10 w-10 h-10 flex items-center justify-center bg-white shadow-md border border-gray-100 hover:border-yellow-400 hover:text-yellow-500 transition-all duration-300"
            aria-label="Next testimonial"
          >
            <FiChevronRight size={20} />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
              className="rounded-full transition-all duration-300"
              style={{
                width:  i === current ? '24px' : '8px',
                height: '8px',
                background: i === current
                  ? 'linear-gradient(90deg, #D4A017, #f5d373)'
                  : '#ddd',
              }}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
