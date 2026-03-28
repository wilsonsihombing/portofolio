import React from 'react';

const Footer = () => {
  return (
    <footer style={{ 
      textAlign: 'center', 
      padding: '2rem', 
      borderTop: '1px solid rgba(255, 255, 255, 0.05)',
      marginTop: 'auto',
      backgroundColor: 'var(--surface-color)',
      color: 'var(--text-muted)'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <div style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-main)' }}>
          Wilson Eksaudi Sihombing<span style={{ color: 'var(--primary-color)' }}>.</span>
        </div>
        
        <p style={{ margin: 0, fontSize: '0.9rem' }}>
          &copy; {new Date().getFullYear()} Dibuat dengan antusiasme. Semua hak dilindungi.
        </p>
        
        <div style={{ display: 'flex', gap: '1rem' }}>
          <a href="https://www.linkedin.com/in/wilson-eksaudi/" target="_blank" rel="noreferrer" style={{ padding: '0.5rem', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', color: '#f8fafc', fontWeight: 'bold' }}>
            Li
          </a>
          <a href="https://github.com/wilsonsihombing" target="_blank" rel="noreferrer" style={{ padding: '0.5rem', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', color: '#f8fafc', fontWeight: 'bold' }}>
            Gh
          </a>
          <a href="https://wilsonsihombing.github.io/Website-Portfolio/" target="_blank" rel="noreferrer" style={{ padding: '0.5rem', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', color: '#f8fafc', fontWeight: 'bold' }}>
            Web
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
