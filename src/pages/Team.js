// ============================================================
// pages/Team.js
// Dedicated team page with member profiles and work gallery
// ============================================================
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { FiAward, FiCamera, FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { teamMembers } from '../data/teamData';

// Individual member card
const TeamCard = ({ member, index }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      className="bg-white shadow-md overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
    >
      {/* Profile Image */}
      <div className="relative overflow-hidden" style={{ aspectRatio: '4/5' }}>
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
          loading="lazy"
        />
        {/* Gold gradient at bottom */}
        <div
          className="absolute bottom-0 left-0 right-0 h-32"
          style={{
            background:
              'linear-gradient(to top, rgba(0,0,0,0.85), transparent)',
          }}
        />
        {/* Name on image */}
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <h3 className="font-serif text-white text-xl">{member.name}</h3>
          <p
            className="font-sans text-xs tracking-widest uppercase mt-1"
            style={{ color: '#f5d373' }}
          >
            {member.role}
          </p>
        </div>

        {/* Social icons hover overlay */}
        <div className="absolute top-4 right-4 flex gap-2 opacity-0 hover:opacity-100 transition-opacity duration-300">
          <a
            href={member.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 flex items-center justify-center bg-black/60 text-white hover:bg-pink-600 transition-colors duration-300"
            aria-label={`${member.name} Instagram`}
          >
            <FaInstagram size={16} />
          </a>
          <a
            href={member.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 flex items-center justify-center bg-black/60 text-white hover:bg-green-600 transition-colors duration-300"
            aria-label={`${member.name} WhatsApp`}
          >
            <FaWhatsapp size={16} />
          </a>
        </div>
      </div>

      {/* Info */}
      <div className="p-6">
        {/* Experience badge */}
        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center gap-2">
            <FiCamera size={14} style={{ color: '#D4A017' }} />
            <span className="font-sans text-xs text-gray-500">
              {member.experience} Years Exp.
            </span>
          </div>
          <div className="flex items-center gap-2">
            <FiAward size={14} style={{ color: '#D4A017' }} />
            <span className="font-sans text-xs text-gray-500">
              {member.projects}+ Projects
            </span>
          </div>
        </div>

        {/* Specialization */}
        <p
          className="font-sans text-xs tracking-wide uppercase mb-3"
          style={{ color: '#D4A017' }}
        >
          {member.specialization}
        </p>

        {/* Bio */}
        <p className="font-sans text-gray-500 text-sm leading-relaxed mb-4">
          {member.bio}
        </p>

        {/* Awards */}
        <div
          className="flex items-start gap-2 p-3 mb-4 text-xs font-sans text-gray-600"
          style={{ background: '#faf8f4', borderLeft: '2px solid #D4A017' }}
        >
          <FiAward size={12} className="mt-0.5 flex-shrink-0" style={{ color: '#D4A017' }} />
          {member.awards}
        </div>

        {/* Expand / Collapse Work */}
        <button
          onClick={() => setExpanded((prev) => !prev)}
          className="w-full flex items-center justify-between py-2 text-left font-sans text-xs tracking-widest uppercase text-gray-700 hover:text-yellow-600 transition-colors border-t border-gray-100 pt-4"
        >
          <span>View Work</span>
          {expanded ? <FiChevronUp size={16} /> : <FiChevronDown size={16} />}
        </button>

        {/* Gallery Expand */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              key="gallery"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4 }}
              style={{ overflow: 'hidden' }}
            >
              <div className="grid grid-cols-3 gap-2 pt-4">
                {member.gallery.map((src, i) => (
                  <div key={i} className="aspect-square overflow-hidden">
                    <img
                      src={src}
                      alt={`${member.name} work ${i + 1}`}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

const Team = () => {
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
              'url("https://images.unsplash.com/photo-1537907510278-b5a5c0f47ca0?w=1920&q=60")',
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
            The Artists
          </motion.p>
          <motion.h1
            className="font-serif text-white"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Meet Our Team
          </motion.h1>
          <motion.div
            className="h-px w-20 mx-auto mt-4"
            style={{ background: 'linear-gradient(90deg, transparent, #D4A017, transparent)' }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.2 }}
          />
          <motion.p
            className="font-sans text-gray-400 mt-4 max-w-xl mx-auto text-sm leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Passionate artists and storytellers dedicated to capturing the
            most beautiful chapter of your life.
          </motion.p>
        </div>
      </div>

      {/* Team Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <TeamCard key={member.id} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Join our team CTA */}
      <section
        className="py-20 text-center"
        style={{ background: '#faf8f4' }}
      >
        <div className="max-w-2xl mx-auto px-6">
          <motion.h2
            className="section-title mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Work With Us
          </motion.h2>
          <motion.div
            className="gold-divider"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
          />
          <motion.p
            className="font-sans text-gray-500 mt-4 mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Are you a passionate photographer or filmmaker? We're always looking for
            creative talent to join our growing team.
          </motion.p>
          <motion.a
            href="mailto:careers@arjunphotography.com"
            className="btn-gold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Apply Now
          </motion.a>
        </div>
      </section>
    </>
  );
};

export default Team;
