import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'GuidedChatbot',
      period: 'Nov 2025 – Sekarang',
      description: 'Aplikasi chatbot berbasis Laravel (dengan database MySQL) yang memandu pengguna dalam menyusun *prompt* secara lebih efektif dan terintegrasi dengan Google Gemini API.',
      gradient: 'linear-gradient(135deg, #FF6B6B 0%, #556270 100%)',
      tags: ['Laravel', 'MySQL', 'Gemini API']
    },
    {
      title: 'Sinet - Sistem Informasi Organisasi Mahasiswa',
      period: 'Agu 2024 – Sekarang',
      description: 'Merancang UI/UX yang atraktif dengan Figma dengan frontend responsif menggunakan HTML, CSS, JavaScript, serta backend PHP Laravel. Fitur utamanya memuat info organisasi, sesi Q&A, hingga info karir.',
      gradient: 'linear-gradient(135deg, #10b981 0%, #047857 100%)',
      tags: ['Laravel', 'JavaScript', 'Figma', 'UI/UX']
    },
    {
      title: 'LostAndFound',
      period: 'Okt 2024',
      description: 'Website responsif berbasis PHP Laravel dan MySQL, terancang dengan antarmuka Bootstrap untuk mempermudah pengguna melapor dan mencari barang hilang/ditemukan secara cepat dan efisien.',
      gradient: 'linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)',
      tags: ['PHP', 'Bootstrap', 'MySQL']
    },
    {
      title: 'JejakPendaki (Open Trip)',
      period: 'Jun 2024 – Sept 2024',
      description: 'Membangun aplikasi terdistribusi 2 sublayanan (microservices) pengelolaan data dan antarmuka *front-end* untuk pengguna menggunakan fitur CRUD, dengan manajemen versi Git.',
      gradient: 'linear-gradient(135deg, #8b5cf6 0%, #4c1d95 100%)',
      tags: ['Laravel', 'Bootstrap', 'Git', 'Figma']
    },
    {
      title: 'Optimalisasi Susu Gratis (GEMASTIK XVII)',
      period: 'Mei 2024 – Jul 2024',
      description: 'Menulis makalah dan membangun proyek *Data Mining* menggunakan Python guna menganalisis optimalisasi lokasi bagi program bantuan gizi balita di provinsi Jawa Barat.',
      gradient: 'linear-gradient(135deg, #f59e0b 0%, #b45309 100%)',
      tags: ['Python', 'Data Mining', 'Machine Learning']
    },
    {
      title: 'Wilson Personal Portfolio',
      period: 'Jun 2024 – Agu 2024',
      description: 'Website pribadi responsif murni mengandalkan HTML, CSS, dan JavaScript interaktif dengan transisi mulus dan struktur semantic untuk *SEO-friendly*.',
      gradient: 'linear-gradient(135deg, #6366f1 0%, #312e81 100%)',
      tags: ['HTML', 'CSS', 'JavaScript']
    }
  ];

  return (
    <section id="projects" className="reveal container">
      <h2 className="section-title text-gradient center" style={{ textAlign: 'center', display: 'block' }}>Karya Terbaik Saya</h2>
      <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginBottom: '4rem', maxWidth: '600px', margin: '0 auto 4rem auto' }}>
        Galeri proyek unggulan tempat rekayasa perangkat lunak dikolaborasikan bersama estetika *user experience*.
      </p>

      <div className="projects-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem' }}>
        {projects.map((project, idx) => (
          <div key={idx} className="glass-card" style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ height: '200px', background: project.gradient, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <h3 style={{ color: 'white', textAlign: 'center', fontWeight: 'bold', padding: '1rem', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
                {project.title}
              </h3>
            </div>
            
            <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1rem', fontWeight: 600 }}>{project.period}</span>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', flex: 1 }}>{project.description}</p>
              
              <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
                {project.tags.map((tag, tIdx) => (
                  <span key={tIdx} style={{ background: 'rgba(99, 102, 241, 0.1)', color: 'var(--primary-color)', padding: '0.3rem 0.8rem', borderRadius: '50px', fontSize: '0.8rem', fontWeight: 600 }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
