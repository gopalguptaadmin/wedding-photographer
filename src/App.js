// ============================================================
// App.js - Main Application Entry with Router Setup
// ============================================================
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import Home       from './pages/Home';
import Portfolio  from './pages/Portfolio';
import Team       from './pages/Team';
import AboutPage  from './pages/AboutPage';
import Contact    from './pages/Contact';
import NotFound   from './pages/NotFound';

// Global Components
import Navbar         from './components/Navbar';
import Footer         from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import BackToTop      from './components/BackToTop';
import ScrollProgress from './components/ScrollProgress';
import Loader         from './components/Loader';

function App() {
  const [loading, setLoading] = useState(true);

  // Simulate initial page load
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <Router>
      {/* Scroll progress indicator */}
      <ScrollProgress />

      {/* Sticky Navbar */}
      <Navbar />

      {/* Page Routes */}
      <Routes>
        <Route path="/"          element={<Home />}      />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/team"      element={<Team />}      />
        <Route path="/about"     element={<AboutPage />} />
        <Route path="/contact"   element={<Contact />}   />
        <Route path="*"          element={<NotFound />}  />
      </Routes>

      {/* Footer */}
      <Footer />

      {/* Floating Buttons */}
      <WhatsAppButton />
      <BackToTop />
    </Router>
  );
}

export default App;

