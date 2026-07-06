// ============================================================
// pages/Portfolio.js
// Full portfolio gallery page with category filtering & lightbox
// ============================================================
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiChevronLeft, FiChevronRight, FiZoomIn } from 'react-icons/fi';
import { galleryImages, galleryCategories } from '../data/galleryData';

// ---- Lightbox Component ----
const Lightbox = ({ images, currentIndex, onClose, onPrev, onNext }) => {
  const img = images[currentIndex];

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft')  onPrev();
      if (e.key === 'Escape')     onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onNext, onPrev, onClose]);

  return (
    <motion.div
      className="lightbox-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      {/* Close button */}
      <button
        className="absolute top-5 right-5 text-white z-10 w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 transition-colors"
        onClick={onClose}
        aria-label="Close lightbox"
      >
        <FiX size={22} />
      </button>

      {/* Prev button */}
      <button
        className="absolute left-4 lg:left-10 text-white z-10 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 transition-colors"
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        aria-label="Previous image"
      >
        <FiChevronLeft size={26} />
      </button>

      {/* Image */}
      <motion.img
        key={currentIndex}
        src={img.src}
        alt={img.title}
        className="max-w-[90vw] max-h-[85vh] object-contain shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.35 }}
      />

      {/* Next button */}
      <button
        className="absolute right-4 lg:right-10 text-white z-10 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 transition-colors"
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        aria-label="Next image"
      >
        <FiChevronRight size={26} />
      </button>

      {/* Caption */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
        <p className="font-serif text-white text-base italic">{img.title}</p>
        <p className="font-sans text-gray-400 text-xs uppercase tracking-widest mt-1">
          {img.category} · {currentIndex + 1} / {images.length}
        </p>
      </div>
    </motion.div>
  );
};

// ---- Portfolio Page ----
const Portfolio = () => {
  const [activeCategory, setActiveCategory]   = useState('all');
  const [lightboxOpen,   setLightboxOpen]     = useState(false);
  const [lightboxIndex,  setLightboxIndex]    = useState(0);

  const filtered = activeCategory === 'all'
    ? galleryImages
    : galleryImages.filter((img) => img.category === activeCategory);

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = useCallback(() => setLightboxOpen(false), []);

  const prevImage = useCallback(() => {
    setLightboxIndex((prev) => (prev - 1 + filtered.length) % filtered.length);
  }, [filtered.length]);

  const nextImage = useCallback(() => {
    setLightboxIndex((prev) => (prev + 1) % filtered.length);
  }, [filtered.length]);

  // Prevent body scroll when lightbox open
  useEffect(() => {
    document.body.style.overflow = lightboxOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [lightboxOpen]);

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
            backgroundImage: 'url("https://images.unsplash.com/photo-1519741347686-c1e0aadf4611?w=1920&q=60")',
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
            Our Work
          </motion.p>
          <motion.h1
            className="font-serif text-white"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Portfolio
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

      {/* Gallery Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          {/* Category Filters */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {galleryCategories.map((cat) => (
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
                        color: '#666',
                        borderColor: '#ddd',
                      }
                }
              >
                {cat.label}
              </button>
            ))}
          </motion.div>

          {/* Image Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {filtered.map((img, index) => (
                <motion.div
                  key={img.id}
                  className="group relative overflow-hidden cursor-pointer bg-gray-100"
                  style={{ aspectRatio: index % 5 === 0 ? '1/1.3' : '1/1' }}
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: (index % 12) * 0.04 }}
                  onClick={() => openLightbox(index)}
                >
                  <img
                    src={img.thumb}
                    alt={img.title}
                    className="w-full h-full object-cover block transition-transform duration-700 group-hover:scale-115"
                    loading="lazy"
                  />

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-500 flex flex-col items-center justify-center">
                    <FiZoomIn
                      size={32}
                      className="text-white opacity-0 group-hover:opacity-100 transition-all duration-300 mb-3 -translate-y-2 group-hover:translate-y-0"
                    />
                    <p className="text-white font-serif italic text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 delay-75">
                      {img.title}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <Lightbox
            images={filtered}
            currentIndex={lightboxIndex}
            onClose={closeLightbox}
            onPrev={prevImage}
            onNext={nextImage}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Portfolio;
