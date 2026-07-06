// ============================================================
// components/Gallery.js
// Masonry gallery preview on home page with category filters
// ============================================================
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { galleryImages } from '../data/galleryData';

const previewCategories = [
  { id: 'all',       label: 'All'      },
  { id: 'wedding',   label: 'Weddings' },
  { id: 'haldi',     label: 'Haldi'    },
  { id: 'couple',    label: 'Couples'  },
  { id: 'candid',    label: 'Candid'   },
  { id: 'reception', label: 'Reception'},
];

// Use a subset of 12 images for the home preview
const PREVIEW_COUNT = 12;

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filtered = activeCategory === 'all'
    ? galleryImages.slice(0, PREVIEW_COUNT)
    : galleryImages.filter((img) => img.category === activeCategory).slice(0, PREVIEW_COUNT);

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.p
            className="font-sans text-xs tracking-[0.3em] uppercase mb-4"
            style={{ color: '#D4A017' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Portfolio
          </motion.p>

          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Glimpses of Forever
          </motion.h2>

          <motion.div
            className="gold-divider"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          />
        </div>

        {/* Category Filter Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          {previewCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className="font-sans text-xs tracking-widest uppercase px-5 py-2.5 transition-all duration-300 border"
              style={
                activeCategory === cat.id
                  ? {
                      background: 'linear-gradient(135deg, #D4A017, #f5d373)',
                      color: '#1a1a1a',
                      borderColor: '#D4A017',
                    }
                  : {
                      background: 'transparent',
                      color: '#555',
                      borderColor: '#ddd',
                    }
              }
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Masonry Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="masonry"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {filtered.map((img, index) => (
              <motion.div
                key={img.id}
                className="masonry-item group relative overflow-hidden cursor-pointer"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <img
                  src={img.thumb}
                  alt={img.title}
                  className="w-full object-cover block transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/55 transition-all duration-500 flex items-end">
                  <div className="w-full p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-400">
                    <p
                      className="font-sans text-xs tracking-widest uppercase mb-1"
                      style={{ color: '#f5d373' }}
                    >
                      {img.category}
                    </p>
                    <h4 className="font-serif text-white text-base">{img.title}</h4>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View all button */}
        <motion.div
          className="text-center mt-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Link to="/portfolio" className="btn-gold">
            Explore Full Gallery
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
