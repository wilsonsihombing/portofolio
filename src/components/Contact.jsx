import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="reveal container">
      <div className="glass-card" style={{ padding: '4rem', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
        <h2 className="section-title text-gradient center" style={{ textAlign: 'center', display: 'block' }}>Hubungi Saya</h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', margin: '2rem 0', lineHeight: 1.8 }}>
          Saya dengan senang hati menyambut peluang kolaborasi maupun posisi purnawaktu/paruh waktu dalam bidang rekayasa perangkat lunak dan pengembangan sistem. 
        </p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', marginBottom: '3rem', background: 'rgba(255,255,255,0.02)', padding: '2rem', borderRadius: '15px' }}>
          <span style={{ fontSize: '1.1rem' }}>
            📍 <strong>Lokasi:</strong> Humbang Hasundutan, Sumatera Utara
          </span>
          <span style={{ fontSize: '1.1rem' }}>
            📱 <strong>Telepon:</strong> <a href="tel:+6285117196897" style={{ color: 'var(--text-main)', textDecoration: 'underline' }}>+62 851-1719-6897</a>
          </span>
        </div>

        <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '500px', margin: '0 auto 3rem auto' }}>
          <input 
            type="text" 
            placeholder="Nama Anda" 
            className="glass" 
            style={{ padding: '1rem 1.5rem', borderRadius: '10px', color: 'var(--text-main)', fontSize: '1rem', outline: 'none' }} 
          />
          <input 
            type="email" 
            placeholder="Email Anda" 
            className="glass" 
            style={{ padding: '1rem 1.5rem', borderRadius: '10px', color: 'var(--text-main)', fontSize: '1rem', outline: 'none' }} 
          />
          <textarea 
            placeholder="Pesan Anda" 
            className="glass" 
            rows="5"
            style={{ padding: '1rem 1.5rem', borderRadius: '10px', color: 'var(--text-main)', fontSize: '1rem', outline: 'none', resize: 'vertical' }} 
          ></textarea>
          <a href="mailto:wilsonsihombing03@gmail.com" className="btn btn-primary" style={{ marginTop: '1rem', display: 'inline-block', padding: '1rem 2rem', fontSize: '1.1rem', textDecoration: 'none' }}>Kirim via Aplikasi Email</a>
        </form>

        <p style={{ color: 'var(--text-muted)' }}>Atau bisa langsung hubungi: <a href="mailto:wilsonsihombing03@gmail.com" style={{ fontWeight: 600 }}>wilsonsihombing03@gmail.com</a></p>
      </div>
    </section>
  );
};

export default Contact;
