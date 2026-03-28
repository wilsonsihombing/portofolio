import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      padding: scrolled ? '1rem 2rem' : '1.5rem 2rem',
      backgroundColor: scrolled ? 'rgba(11, 15, 25, 0.9)' : 'transparent',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border-color)' : 'none',
      zIndex: 1000,
      transition: 'all 0.3s ease',
    }}>
      <div className="nav-container">
        <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-main)', zIndex: 1001 }}>
          Porto<span style={{ color: 'var(--primary-color)' }}>.</span>
        </div>
        
        <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle Menu">
          {isOpen ? '✕' : '☰'}
        </button>

        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li><a href="#hero" onClick={() => setIsOpen(false)}>Beranda</a></li>
          <li><a href="#about" onClick={() => setIsOpen(false)}>Tentang</a></li>
          <li><a href="#skills" onClick={() => setIsOpen(false)}>Keahlian</a></li>
          <li><a href="#experience" onClick={() => setIsOpen(false)}>Pengalaman</a></li>
          <li><a href="#projects" onClick={() => setIsOpen(false)}>Proyek</a></li>
          <li><a href="#contact" onClick={() => setIsOpen(false)}>Kontak</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
