// ============================================================
// pages/AboutPage.js
// Detailed About Us page with timeline, mission, vision, awards
// ============================================================
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiEye, FiTarget } from 'react-icons/fi';

const timelineItems = [
  {
    year: '2012',
    title: 'The Beginning',
    description:
      'Arjun captured his first wedding with a borrowed DSLR in Jaipur. The family\'s emotional response sparked a lifelong passion.',
  },
  {
    year: '2014',
    title: 'Studio Founded',
    description:
      'Mayank Soni Photography was formally established in Mumbai. First team members joined — Priya and Rahul.',
  },
  {
    year: '2016',
    title: 'Destination Weddings',
    description:
      'Expanded into destination wedding photography across Goa, Udaipur, Kerala and international locations.',
  },
  {
    year: '2018',
    title: 'Cinema Division',
    description:
      'Launched our cinematic wedding film service with full production capabilities including colour grading and DI.',
  },
  {
    year: '2020',
    title: 'Drone Division',
    description:
      'Added aerial drone photography to our services, transforming how we document grand outdoor celebrations.',
  },
  {
    year: '2022',
    title: 'Industry Recognition',
    description:
      'Won Best Wedding Photography Studio at the India Photography Awards. Featured in Vogue India and Harper\'s Bazaar Bride.',
  },
  {
    year: '2024',
    title: '500 Weddings Milestone',
    description:
      'Celebrated our 500th wedding, serving clients across 30+ cities with a 100% satisfaction record.',
  },
];

const awards = [
  {
    title: 'Best Wedding Photographer',
    body: 'India Photography Awards 2023',
    icon: '🏆',
  },
  {
    title: 'Best Cinematic Wedding Film',
    body: 'Asian Wedding Awards 2023',
    icon: '🎬',
  },
  {
    title: 'Top 10 Wedding Photographers',
    body: 'Vogue India, 2022',
    icon: '✨',
  },
  {
    title: 'Best Destination Wedding Studio',
    body: 'WedMeGood Awards 2024',
    icon: '🌍',
  },
];

const btsImages = [
  'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&q=70',
  'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=600&q=70',
  'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=600&q=70',
  'https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?w=600&q=70',
];

const AboutPage = () => {
  return (
    <>
      {/* Page Header */}
      <div
        className="relative pt-40 pb-24 text-center overflow-hidden"
        style={{ background: '#080808' }}
      >
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=1920&q=60")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10">
          <motion.p
            className="font-sans text-xs tracking-[0.4em] uppercase mb-4"
            style={{ color: '#f5d373' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Our Story
          </motion.p>
          <motion.h1
            className="font-serif text-white"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            About Us
          </motion.h1>
          <motion.div
            className="h-px w-20 mx-auto mt-4"
            style={{ background: 'linear-gradient(90deg, transparent, #D4A017, transparent)' }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.2 }}
          />
        </div>
      </div>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 mb-20">
            {/* Mission */}
            <motion.div
              className="p-8 border-l-2"
              style={{ borderColor: '#D4A017', background: '#faf8f4' }}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <FiTarget size={22} style={{ color: '#D4A017' }} />
                <h3
                  className="font-sans text-xs tracking-[0.3em] uppercase"
                  style={{ color: '#D4A017' }}
                >
                  Our Mission
                </h3>
              </div>
              <h2 className="font-serif text-3xl text-gray-900 mb-4">
                To Preserve Your Most Cherished Memories
              </h2>
              <p className="font-sans text-gray-500 leading-relaxed">
                We exist to capture the timeless beauty, emotion and grandeur of Indian weddings
                with unmatched artistry. Every photograph we take is a promise to deliver memories
                that transcend time — images that you and future generations will treasure forever.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              className="p-8 border-l-2"
              style={{ borderColor: '#D4A017', background: '#faf8f4' }}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <FiEye size={22} style={{ color: '#D4A017' }} />
                <h3
                  className="font-sans text-xs tracking-[0.3em] uppercase"
                  style={{ color: '#D4A017' }}
                >
                  Our Vision
                </h3>
              </div>
              <h2 className="font-serif text-3xl text-gray-900 mb-4">
                Redefining Wedding Photography in India
              </h2>
              <p className="font-sans text-gray-500 leading-relaxed">
                We envision a world where every couple — regardless of budget or location —
                has access to photography that is cinematic, authentic and emotionally powerful.
                We are committed to pushing the boundaries of creativity in Indian wedding photography.
              </p>
            </motion.div>
          </div>

          {/* Story Intro */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p
                className="font-sans text-xs tracking-[0.3em] uppercase mb-4"
                style={{ color: '#D4A017' }}
              >
                Who We Are
              </p>
              <h2 className="section-title mb-4">
                More Than Photographers —
                <span className="block italic" style={{ color: '#D4A017' }}>
                  We Are Storytellers
                </span>
              </h2>
              <div
                className="w-20 h-0.5 mb-6"
                style={{ background: 'linear-gradient(90deg, #D4A017, transparent)' }}
              />
              <p className="font-sans text-gray-600 leading-relaxed mb-4">
                Mayank Soni Photography is a premium Mumbai-based wedding photography and filmmaking
                studio with over 12 years of experience across 30+ Indian cities and international
                destinations.
              </p>
              <p className="font-sans text-gray-600 leading-relaxed mb-4">
                Our team of 6 passionate artists — photographers, cinematographers, drone operators
                and editors — work in perfect harmony to deliver a complete storytelling experience
                that covers every ritual, emotion and celebration of your wedding.
              </p>
              <p className="font-sans text-gray-600 leading-relaxed mb-8">
                We believe that a wedding photograph should not just document what happened — it
                should make you feel it all over again.
              </p>

              <div className="flex gap-4">
                <Link to="/portfolio" className="btn-gold text-sm">
                  View Portfolio
                </Link>
                <Link
                  to="/contact"
                  className="font-sans text-sm tracking-widest uppercase px-6 py-3 border border-gray-300 text-gray-700 hover:border-yellow-500 hover:text-yellow-600 transition-all duration-300"
                >
                  Get in Touch
                </Link>
              </div>
            </motion.div>

            <motion.div
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              {btsImages.map((src, i) => (
                <div
                  key={i}
                  className="overflow-hidden"
                  style={{ aspectRatio: i === 0 || i === 3 ? '1/1.2' : '1/1' }}
                >
                  <img
                    src={src}
                    alt={`Behind the scenes ${i + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20" style={{ background: '#0a0a0a' }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <motion.p
              className="font-sans text-xs tracking-[0.3em] uppercase mb-4"
              style={{ color: '#D4A017' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Our Journey
            </motion.p>
            <motion.h2
              className="font-serif text-white"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              12 Years of Capturing Love
            </motion.h2>
            <motion.div
              className="gold-divider"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            />
          </div>

          {/* Timeline list */}
          <div className="relative">
            {/* Vertical line */}
            <div
              className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px"
              style={{ background: 'linear-gradient(to bottom, #D4A017, transparent)' }}
            />

            {timelineItems.map((item, index) => (
              <motion.div
                key={item.year}
                className={`flex gap-8 mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
              >
                {/* Content */}
                <div
                  className={`flex-1 pl-16 md:pl-0 ${
                    index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'
                  }`}
                >
                  <span
                    className="font-sans text-xs tracking-[0.3em] uppercase"
                    style={{ color: '#D4A017' }}
                  >
                    {item.year}
                  </span>
                  <h4 className="font-serif text-white text-xl mt-1 mb-2">{item.title}</h4>
                  <p className="font-sans text-gray-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Centre dot */}
                <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 w-5 h-5 rounded-full border-2 border-yellow-500 bg-black mt-1" />

                {/* Empty side for alternating layout */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <motion.p
              className="font-sans text-xs tracking-[0.3em] uppercase mb-4"
              style={{ color: '#D4A017' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Recognition
            </motion.p>
            <motion.h2
              className="section-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Awards & Honours
            </motion.h2>
            <motion.div
              className="gold-divider"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {awards.map((award, i) => (
              <motion.div
                key={i}
                className="text-center p-7 border border-gray-100 hover:border-yellow-300 transition-colors duration-300"
                style={{ background: '#faf8f4' }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="text-4xl mb-4">{award.icon}</div>
                <h4 className="font-serif text-gray-900 text-base mb-2">{award.title}</h4>
                <p
                  className="font-sans text-xs text-gray-400"
                  style={{ color: '#D4A017' }}
                >
                  {award.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
