// ============================================================
// components/FAQ.js
// Frequently Asked Questions accordion section
// ============================================================
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlus, FiMinus } from 'react-icons/fi';

const faqs = [
  {
    q: 'How far in advance should I book my wedding photographer?',
    a: 'We recommend booking at least 6–12 months in advance for peak wedding season (October–February). For popular dates and destination weddings, 12–18 months ahead is ideal to secure your date.',
  },
  {
    q: 'What packages do you offer and what do they include?',
    a: 'We offer customised packages tailored to your needs — from single-event coverage to full multi-day packages including photography, cinematic film, drone, albums and more. Contact us for a personalised quote.',
  },
  {
    q: 'Do you travel for destination weddings?',
    a: 'Absolutely! We cover weddings across India — Rajasthan, Kerala, Goa, Himachal and beyond. We also travel internationally. Travel and accommodation costs are discussed transparently during booking.',
  },
  {
    q: 'How long does it take to receive the final photos and film?',
    a: 'Edited photos are delivered within 4–6 weeks after the wedding. The cinematic film takes 8–10 weeks. For same-day edits and previews, we offer express delivery add-ons.',
  },
  {
    q: 'How many photos will we receive from our wedding?',
    a: 'A full-day coverage typically yields 600–1000 fully edited, high-resolution images depending on the events covered. All images are delivered via a private online gallery.',
  },
  {
    q: 'Do you provide a second photographer?',
    a: 'Yes, all our packages include a team of professional photographers. Our standard team includes 2 photographers, ensuring comprehensive coverage from multiple angles.',
  },
  {
    q: 'Can we meet you before booking?',
    a: 'Of course! We encourage a pre-booking consultation — in person at our Mumbai studio or via video call. This helps us understand your vision and ensures a perfect fit.',
  },
];

const FAQItem = ({ faq, index }) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      className="border-b border-gray-100"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
    >
      <button
        className="w-full flex items-center justify-between py-5 text-left group"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
      >
        <span className="font-sans font-medium text-gray-800 pr-4 group-hover:text-yellow-600 transition-colors duration-200">
          {faq.q}
        </span>
        <span
          className="flex-shrink-0 w-7 h-7 flex items-center justify-center"
          style={{
            background: open
              ? 'linear-gradient(135deg, #D4A017, #f5d373)'
              : 'transparent',
            border: open ? 'none' : '1px solid #ddd',
            color: open ? '#1a1a1a' : '#888',
          }}
        >
          {open ? <FiMinus size={14} /> : <FiPlus size={14} />}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            style={{ overflow: 'hidden' }}
          >
            <p className="font-sans text-gray-500 text-sm leading-relaxed pb-5 pr-10">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQ = () => {
  return (
    <section className="py-24 lg:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <motion.p
            className="font-sans text-xs tracking-[0.3em] uppercase mb-4"
            style={{ color: '#D4A017' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Got Questions?
          </motion.p>

          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Frequently Asked
            <span className="block italic" style={{ color: '#D4A017' }}>
              Questions
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

        {/* FAQ items */}
        <div>
          {faqs.map((faq, index) => (
            <FAQItem key={index} faq={faq} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
