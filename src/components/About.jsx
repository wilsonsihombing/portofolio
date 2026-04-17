import React from 'react';

const About = () => {
  return (
    <section id="about" className="reveal">
      <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '4rem', alignItems: 'center' }}>
        
        <div style={{ position: 'relative' }}>
          <div className="glass-card contact-card" style={{ padding: '3rem', position: 'relative', zIndex: 1 }}>
            <h2 className="section-title text-gradient">Sekilas Tentang Saya</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', fontSize: '1.1rem', lineHeight: '1.8' }}>
              Halo! Saya <strong>Wilson Eksaudi Sihombing</strong>, mahasiswa tingkat akhir di jurusan <strong>Sistem Informasi - Institut Teknologi Del</strong>.
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: '1.8' }}>
              Dengan antusiasme tinggi pada rekayasa perangkat lunak (software engineering), saya menspesialisasikan diri pada pengembangan <strong>Full-stack Web dan Aplikasi Mobile</strong>. Kombinasi latar belakang akademik dan pengalaman praktis dari berbagai proyek telah membekali saya kemampuan inti untuk merancang solusi inovatif sekaligus efisien di industri teknologi.
            </p>

            <div style={{ display: 'flex', gap: '3rem', marginTop: '3rem', flexWrap: 'wrap' }}>
              <div>
                <h3 className="text-gradient" style={{ fontSize: '2.5rem' }}>3.78</h3>
                <span style={{ color: 'var(--text-muted)' }}>IPK Kumulatif (Institut Teknologi Del)</span>
              </div>
              <div>
                <h3 className="text-gradient" style={{ fontSize: '2.5rem' }}>2026</h3>
                <span style={{ color: 'var(--text-muted)' }}>Target Kelulusan Sarjana</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
