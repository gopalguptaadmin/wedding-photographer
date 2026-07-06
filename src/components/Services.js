// ============================================================
// components/Services.js
// Services section with icon cards and hover animations
// ============================================================
import React from 'react';
import { motion } from 'framer-motion';
import {
  FiCamera, FiHeart, FiStar, FiSun, FiMusic,
  FiVideo, FiAward, FiUser, FiWind, FiImage,
} from 'react-icons/fi';

const services = [
  {
    id: 1,
    title: 'Wedding Photography',
    icon: <FiCamera size={28} />,
    image: 'https://images.unsplash.com/photo-1519741347686-c1e0aadf4611?w=500&q=70',
    description:
      'Full-day wedding coverage capturing every sacred ritual, candid emotion and grand moment of your special day.',
  },
  {
    id: 2,
    title: 'Pre-Wedding Shoot',
    icon: <FiHeart size={28} />,
    image: 'https://images.unsplash.com/photo-1537907510278-b5a5c0f47ca0?w=500&q=70',
    description:
      'Romantic outdoor shoots that tell your unique love story before the big day, at locations of your choice.',
  },
  {
    id: 3,
    title: 'Engagement Ceremony',
    icon: <FiStar size={28} />,
    image: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=500&q=70',
    description:
      'Capturing the glitter of rings, the sparkle in your eyes, and the joy of family blessings.',
  },
  {
    id: 4,
    title: 'Haldi Ceremony',
    icon: <FiSun size={28} />,
    image: 'https://images.unsplash.com/photo-1634463338655-5e6d9a4e26d4?w=500&q=70',
    description:
      'The golden glow of turmeric and laughter — vibrant, colourful, and full of pure family joy.',
  },
  {
    id: 5,
    title: 'Mehendi Ceremony',
    icon: <FiImage size={28} />,
    image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=500&q=70',
    description:
      'Intricate henna patterns, dancing beats and bridal beauty — documented with artistic precision.',
  },
  {
    id: 6,
    title: 'Sangeet Night',
    icon: <FiMusic size={28} />,
    image: 'https://images.unsplash.com/photo-1464207687429-7505649dae38?w=500&q=70',
    description:
      'The night of music, dance and celebration captured with energy, light and flair.',
  },
  {
    id: 7,
    title: 'Reception',
    icon: <FiAward size={28} />,
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=500&q=70',
    description:
      'Grand reception halls, elegant couples and joyous families — every detail beautifully preserved.',
  },
  {
    id: 8,
    title: 'Bridal Portraits',
    icon: <FiUser size={28} />,
    image: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=500&q=70',
    description:
      'Dedicated bridal portrait sessions that highlight your beauty, jewellery, and couture.',
  },
  {
    id: 9,
    title: 'Cinematic Wedding Films',
    icon: <FiVideo size={28} />,
    image: 'https://images.unsplash.com/photo-1481535630166-60f26da1b3ea?w=500&q=70',
    description:
      'Bollywood-quality wedding films that make you relive your wedding day every time you watch.',
  },
  {
    id: 10,
    title: 'Drone Photography',
    icon: <FiWind size={28} />,
    image: 'https://images.unsplash.com/photo-1604537466158-719b1972feb8?w=500&q=70',
    description:
      'Spectacular aerial shots that showcase the grandeur of your venue, baraat and outdoor ceremonies.',
  },
];

const ServiceCard = ({ service, index }) => (
  <motion.div
    className="card-luxury group relative overflow-hidden cursor-pointer"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-50px' }}
    transition={{ duration: 0.6, delay: (index % 5) * 0.1 }}
    whileHover={{ y: -8 }}
  >
    {/* Image */}
    <div className="relative overflow-hidden h-52">
      <img
        src={service.image}
        alt={service.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        loading="lazy"
      />
      {/* Overlay on hover */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500" />
      {/* Icon overlay */}
      <div
        className="absolute top-4 left-4 w-10 h-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
        style={{ background: 'linear-gradient(135deg, #D4A017, #f5d373)' }}
      >
        <span className="text-black">{service.icon}</span>
      </div>
    </div>

    {/* Content */}
    <div className="p-6">
      {/* Icon + Title */}
      <div className="flex items-center gap-3 mb-3">
        <span style={{ color: '#D4A017' }}>{service.icon}</span>
        <h3 className="font-serif text-lg text-gray-900">{service.title}</h3>
      </div>

      {/* Gold rule */}
      <div
        className="w-10 h-px mb-4 transition-all duration-300 group-hover:w-16"
        style={{ background: 'linear-gradient(90deg, #D4A017, transparent)' }}
      />

      <p className="font-sans text-sm text-gray-500 leading-relaxed">
        {service.description}
      </p>
    </div>
  </motion.div>
);

const Services = () => {
  return (
    <section className="py-24 lg:py-32" style={{ background: '#faf8f4' }}>
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
            What We Offer
          </motion.p>

          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Our Services
          </motion.h2>

          <motion.div
            className="gold-divider"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          />

          <motion.p
            className="font-sans text-gray-500 max-w-2xl mx-auto mt-4 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            From intimate ceremonies to grand celebrations, we offer comprehensive
            photography and filmmaking services for every moment of your wedding journey.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
