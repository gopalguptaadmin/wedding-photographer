// ============================================================
// pages/Contact.js
// Contact page with form, Google Maps, and contact details
// ============================================================
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiClock, FiSend, FiCheck } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const WHATSAPP_URL =
  'https://wa.me/919999999999?text=Hello%2C%20I%20want%20to%20book%20my%20wedding%20photoshoot.';

const initialForm = {
  name: '',
  phone: '',
  email: '',
  eventDate: '',
  location: '',
  message: '',
};

const Contact = () => {
  const [form,      setForm]      = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [errors,    setErrors]    = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim())    e.name    = 'Name is required';
    if (!form.phone.trim())   e.phone   = 'Phone is required';
    if (!form.email.trim())   e.email   = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = 'Enter a valid email';
    if (!form.message.trim()) e.message = 'Please tell us about your event';
    return e;
  };

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const e2 = validate();
    if (Object.keys(e2).length > 0) {
      setErrors(e2);
      return;
    }
    // In production: send to API/email service
    setSubmitted(true);
    setForm(initialForm);
  };

  const inputClass = (field) =>
    `w-full px-4 py-3 font-sans text-sm text-gray-800 border outline-none transition-all duration-300 focus:border-yellow-500 bg-white ${
      errors[field] ? 'border-red-400' : 'border-gray-200'
    }`;

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
              'url("https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=1920&q=60")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10">
          <motion.p
            className="font-sans text-xs tracking-[0.4em] uppercase mb-4"
            style={{ color: '#f5d373' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Let's Talk
          </motion.p>
          <motion.h1
            className="font-serif text-white"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Contact Us
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

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">

            {/* Left - Form */}
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
                Send a Message
              </p>
              <h2 className="section-title mb-2">Book Your Date</h2>
              <div
                className="w-16 h-0.5 mb-8"
                style={{ background: 'linear-gradient(90deg, #D4A017, transparent)' }}
              />

              {submitted ? (
                <motion.div
                  className="flex flex-col items-center justify-center py-16 text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-5"
                    style={{ background: 'linear-gradient(135deg, #D4A017, #f5d373)' }}
                  >
                    <FiCheck size={28} className="text-black" />
                  </div>
                  <h3 className="font-serif text-2xl text-gray-900 mb-3">
                    Thank You!
                  </h3>
                  <p className="font-sans text-gray-500 leading-relaxed max-w-md">
                    Your message has been received. We'll get back to you within
                    24 hours to discuss your wedding photography requirements.
                  </p>
                  <button
                    className="btn-gold mt-6 text-sm"
                    onClick={() => setSubmitted(false)}
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label className="font-sans text-xs text-gray-500 uppercase tracking-widest block mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Ananya & Rohan"
                        className={inputClass('name')}
                      />
                      {errors.name && (
                        <p className="text-red-400 text-xs mt-1">{errors.name}</p>
                      )}
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="font-sans text-xs text-gray-500 uppercase tracking-widest block mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className={inputClass('phone')}
                      />
                      {errors.phone && (
                        <p className="text-red-400 text-xs mt-1">{errors.phone}</p>
                      )}
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="font-sans text-xs text-gray-500 uppercase tracking-widest block mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="yourname@email.com"
                      className={inputClass('email')}
                    />
                    {errors.email && (
                      <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                    )}
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    {/* Event Date */}
                    <div>
                      <label className="font-sans text-xs text-gray-500 uppercase tracking-widest block mb-1.5">
                        Wedding Date
                      </label>
                      <input
                        type="date"
                        name="eventDate"
                        value={form.eventDate}
                        onChange={handleChange}
                        className={inputClass('eventDate')}
                      />
                    </div>

                    {/* Location */}
                    <div>
                      <label className="font-sans text-xs text-gray-500 uppercase tracking-widest block mb-1.5">
                        Wedding Location
                      </label>
                      <input
                        type="text"
                        name="location"
                        value={form.location}
                        onChange={handleChange}
                        placeholder="City / Venue"
                        className={inputClass('location')}
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="font-sans text-xs text-gray-500 uppercase tracking-widest block mb-1.5">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Tell us about your wedding — ceremonies, guest count, specific requirements..."
                      className={`${inputClass('message')} resize-none`}
                    />
                    {errors.message && (
                      <p className="text-red-400 text-xs mt-1">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="btn-gold w-full justify-center text-sm"
                  >
                    <FiSend size={15} />
                    Send Message
                  </button>

                  {/* WhatsApp Alternative */}
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 font-sans text-sm font-semibold tracking-widest uppercase text-white transition-all duration-300 hover:opacity-90"
                    style={{ background: '#25D366' }}
                  >
                    <FaWhatsapp size={16} />
                    Or WhatsApp Us Directly
                  </a>
                </form>
              )}
            </motion.div>

            {/* Right - Contact Info + Map */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p
                className="font-sans text-xs tracking-[0.3em] uppercase mb-4"
                style={{ color: '#D4A017' }}
              >
                Get in Touch
              </p>
              <h2 className="section-title mb-2">Contact Information</h2>
              <div
                className="w-16 h-0.5 mb-8"
                style={{ background: 'linear-gradient(90deg, #D4A017, transparent)' }}
              />

              {/* Contact Details */}
              <div className="space-y-6 mb-8">
                {[
                  {
                    icon: <FiMapPin size={18} />,
                    label: 'Studio Address',
                    value: 'Studio 12, Pali Hill, Bandra West, Mumbai – 400 050',
                    link: null,
                  },
                  {
                    icon: <FiPhone size={18} />,
                    label: 'Phone',
                    value: '+91 99999 99999',
                    link: 'tel:+919999999999',
                  },
                  {
                    icon: <FiMail size={18} />,
                    label: 'Email',
                    value: 'hello@arjunphotography.com',
                    link: 'mailto:hello@arjunphotography.com',
                  },
                  {
                    icon: <FiClock size={18} />,
                    label: 'Working Hours',
                    value: 'Mon–Sat: 10:00 AM – 7:00 PM\nSunday: By Appointment',
                    link: null,
                  },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 flex items-center justify-center flex-shrink-0"
                      style={{ background: '#faf8f4', color: '#D4A017' }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <p className="font-sans text-xs text-gray-400 uppercase tracking-widest mb-1">
                        {item.label}
                      </p>
                      {item.link ? (
                        <a
                          href={item.link}
                          className="font-sans text-gray-700 hover:text-yellow-600 transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-sans text-gray-700 whitespace-pre-line">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Action buttons */}
              <div className="flex flex-wrap gap-3 mb-8">
                <a
                  href="tel:+919999999999"
                  className="flex items-center gap-2 px-5 py-2.5 border border-gray-200 text-xs font-sans tracking-widest uppercase text-gray-700 hover:border-yellow-500 hover:text-yellow-600 transition-all"
                >
                  <FiPhone size={14} />
                  Call Us
                </a>
                <a
                  href="mailto:hello@arjunphotography.com"
                  className="flex items-center gap-2 px-5 py-2.5 border border-gray-200 text-xs font-sans tracking-widest uppercase text-gray-700 hover:border-yellow-500 hover:text-yellow-600 transition-all"
                >
                  <FiMail size={14} />
                  Email Us
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 text-xs font-sans tracking-widest uppercase text-white"
                  style={{ background: '#25D366' }}
                >
                  <FaWhatsapp size={14} />
                  WhatsApp
                </a>
              </div>

              {/* Google Maps Embed (placeholder) */}
              <div className="overflow-hidden border border-gray-100" style={{ height: '280px' }}>
                <iframe
                  title="Studio Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.3967454940427!2d72.82700687597703!3d19.059977482134157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c93c1f21d775%3A0x1e04ce8d3ce5b73c!2sBandra%20West%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1720000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
