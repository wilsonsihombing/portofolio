import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

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
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-main)' }}>
        Porto<span style={{ color: 'var(--primary-color)' }}>.</span>
      </div>
      <ul style={{ display: 'flex', gap: '2rem', margin: 0, padding: 0 }}>
        <li><a href="#hero" style={{ color: 'var(--text-main)', fontWeight: 500 }}>Beranda</a></li>
        <li><a href="#about" style={{ color: 'var(--text-main)', fontWeight: 500 }}>Tentang</a></li>
        <li><a href="#skills" style={{ color: 'var(--text-main)', fontWeight: 500 }}>Keahlian</a></li>
        <li><a href="#experience" style={{ color: 'var(--text-main)', fontWeight: 500 }}>Pengalaman</a></li>
        <li><a href="#projects" style={{ color: 'var(--text-main)', fontWeight: 500 }}>Proyek</a></li>
        <li><a href="#contact" style={{ color: 'var(--text-main)', fontWeight: 500 }}>Kontak</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
