// ============================================================
// components/Culture.js
// Indian wedding traditions showcase section
// ============================================================
import React from 'react';
import { motion } from 'framer-motion';

const traditions = [
  {
    id: 1,
    name: 'Haldi',
    description:
      'A vibrant pre-wedding ritual where turmeric paste is applied to the bride and groom by family, bestowing blessings and golden glow.',
    image: 'https://images.unsplash.com/photo-1634463338655-5e6d9a4e26d4?w=600&q=75',
    color: '#F59E0B',
  },
  {
    id: 2,
    name: 'Mehendi',
    description:
      'An evening of intricate henna artistry, music, and celebration as the bride\'s hands and feet are adorned with beautiful patterns.',
    image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=600&q=75',
    color: '#A16207',
  },
  {
    id: 3,
    name: 'Sangeet',
    description:
      'A night of song, dance, and togetherness as both families celebrate with performances and music, filling the air with pure joy.',
    image: 'https://images.unsplash.com/photo-1464207687429-7505649dae38?w=600&q=75',
    color: '#7C3AED',
  },
  {
    id: 4,
    name: 'Baraat',
    description:
      'The groom\'s grand procession — arriving on horseback or in a decorated car, surrounded by dancing relatives and celebratory music.',
    image: 'https://images.unsplash.com/photo-1604537466158-719b1972feb8?w=600&q=75',
    color: '#D4A017',
  },
  {
    id: 5,
    name: 'Saat Phere',
    description:
      'The seven sacred vows taken around the holy fire, binding two souls together in the most profound Indian wedding ritual.',
    image: 'https://images.unsplash.com/photo-1529636798458-92182e662485?w=600&q=75',
    color: '#DC2626',
  },
  {
    id: 6,
    name: 'Vidaai',
    description:
      'The most emotional moment — the bride bids farewell to her family as she begins her new journey, filled with tears and blessings.',
    image: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=600&q=75',
    color: '#BE185D',
  },
];

const CultureCard = ({ tradition, index }) => (
  <motion.div
    className="group relative overflow-hidden cursor-pointer"
    style={{ aspectRatio: '3/4' }}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.7, delay: (index % 3) * 0.12 }}
    whileHover={{ y: -6 }}
  >
    {/* Image */}
    <img
      src={tradition.image}
      alt={tradition.name}
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      loading="lazy"
    />

    {/* Gradient overlay always visible */}
    <div
      className="absolute inset-0"
      style={{
        background:
          'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0) 100%)',
      }}
    />

    {/* Hover colour tint */}
    <div
      className="absolute inset-0 opacity-0 group-hover:opacity-25 transition-opacity duration-500"
      style={{ background: tradition.color }}
    />

    {/* Content at bottom */}
    <div className="absolute bottom-0 left-0 right-0 p-6">
      {/* Colour accent line */}
      <div
        className="w-10 h-0.5 mb-3 transition-all duration-300 group-hover:w-16"
        style={{ background: tradition.color }}
      />

      <h3 className="font-serif text-white text-2xl mb-2">{tradition.name}</h3>

      <p
        className="font-sans text-white/80 text-sm leading-relaxed max-h-0 overflow-hidden group-hover:max-h-24 transition-all duration-500"
      >
        {tradition.description}
      </p>
    </div>

    {/* Top label */}
    <div className="absolute top-4 right-4">
      <span
        className="font-sans text-[9px] tracking-[0.3em] uppercase px-2 py-1"
        style={{ background: tradition.color, color: 'white' }}
      >
        Ceremony
      </span>
    </div>
  </motion.div>
);

const Culture = () => {
  return (
    <section
      className="py-24 lg:py-32"
      style={{ background: '#0a0a0a' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.p
            className="font-sans text-xs tracking-[0.3em] uppercase mb-4"
            style={{ color: '#D4A017' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Indian Wedding Traditions
          </motion.p>

          <motion.h2
            className="font-serif text-white mb-2"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Beautiful Rituals,
            <span
              className="block italic"
              style={{ color: '#f5d373' }}
            >
              Timeless Memories
            </span>
          </motion.h2>

          <motion.div
            className="gold-divider"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          />

          <motion.p
            className="font-sans text-gray-400 max-w-2xl mx-auto mt-4 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Every Indian wedding is a tapestry of sacred traditions, rich colours and deep emotions.
            We capture each ceremony in its full glory.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {traditions.map((tradition, index) => (
            <CultureCard key={tradition.id} tradition={tradition} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Culture;
