import React from 'react';

const Experience = () => {
  const experiences = [
    {
      period: 'Jan 2025 – Agu 2025',
      role: 'Application Developer',
      company: 'PT. Tera Multi Wahana',
      description: 'Berpartisipasi dalam pengembangan proyek perusahaan dengan menggunakan bahasa Dart (Flutter) dan framework .NET untuk membangun solusi perangkat lunak lintas platform dan berperforma tinggi.'
    },
    {
      period: 'Nov 2024 – Jan 2026',
      role: 'Ketua Umum MPM/SCA',
      company: 'Institut Teknologi Del',
      description: 'Memimpin Majelis Permusyawaratan Mahasiswa (Student Consultative Assembly). Mengawasi operasional tata kelola, memantau kinerja Badan Eksekutif Mahasiswa (BEM), serta memastikan kepatuhan terhadap regulasi institusi dan kebijakan pemerintahan mahasiswa.'
    },
    {
      period: 'Agu 2024 – Des 2024',
      role: 'Asisten Dosen - Algoritma & Struktur Data',
      company: 'Institut Teknologi Del',
      description: 'Membantu dosen dalam menyampaikan penjelasan konsep algoritma dan struktur data, serta membimbing rrekan mahasiswa dalam penyelesaian tugas pemrograman sekaligus memberikan umpan balik (feedback) yang konstruktif untuk mendukung laju pembelajaran.'
    },
    {
      period: 'Mei 2024 – Nov 2024',
      role: 'Wakil Ketua Komisi Pemilihan Mahasiswa',
      company: 'Institut Teknologi Del',
      description: 'Mengawasi perencanaan serta pelaksanaan aktivitas pemilihan mahasiswa, memastikan proses yang adil dan transparan menyesuaikan pedoman institusi, dan memimpin tim anggota panitia.'
    },
    {
      period: 'Sep 2023 – Jan 2026',
      role: 'Anggota Del Data Science Club',
      company: 'Institut Teknologi Del',
      description: 'Mengadakan sesi pembelajaran dan berbagi pengetahuan terkait ilmu data (data science). Terlibat aktif di dalam persiapan kompetisi nasional seperti GEMASTIK, dan meningkatkan keterampilan dalam analisis data serta machine learning.'
    },
    {
      period: 'Sep 2023 – Des 2023',
      role: 'Asisten Dosen - Pemrograman Visual',
      company: 'Institut Teknologi Del',
      description: 'Membimbing mahasiswa dalam sesi praktikum pemrograman visual. Mengevaluasi penugasan dan proyek akhir mahasiswa dengan memberikan umpan balik untuk meningkatkan keahlian menulis dan konsep visual.'
    }
  ];

  return (
    <section id="experience" className="reveal container">
      <h2 className="section-title text-gradient center" style={{ textAlign: 'center', display: 'block' }}>Pengalaman Profesi & Organisasi</h2>
      <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginBottom: '4rem', maxWidth: '600px', margin: '0 auto 4rem auto' }}>
        Kombinasi karir profesional, peran akademik, dan kiprah organisasi kepemimpinan saya selama di perkuliahan dan dunia kerja.
      </p>

      <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative' }}>
        {/* Garis Vertikal */}
        <div style={{ 
          position: 'absolute', 
          left: '20px', 
          top: '0', 
          bottom: '0', 
          width: '2px', 
          background: 'rgba(255, 255, 255, 0.1)',
          zIndex: 0 
        }}></div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          {experiences.map((exp, index) => (
            <div key={index} style={{ position: 'relative', paddingLeft: '60px', zIndex: 1 }}>
              {/* Titik Timeline */}
              <div style={{ 
                position: 'absolute', 
                left: '11px', 
                top: '20px', 
                width: '20px', 
                height: '20px', 
                borderRadius: '50%', 
                background: 'var(--primary-color)',
                boxShadow: '0 0 15px var(--primary-glow)',
                border: '4px solid var(--bg-color)',
                transform: 'translateY(-50%)'
              }}></div>
              
              <div className="glass-card" style={{ padding: '2rem' }}>
                <span style={{ 
                  background: 'rgba(99, 102, 241, 0.1)', 
                  color: 'var(--primary-color)', 
                  padding: '0.4rem 1rem', 
                  borderRadius: '50px', 
                  fontSize: '0.85rem', 
                  fontWeight: 600, 
                  marginBottom: '1rem', 
                  display: 'inline-block' 
                }}>
                  {exp.period}
                </span>
                <h3 style={{ color: 'var(--text-main)', fontSize: '1.4rem', marginBottom: '0.2rem' }}>{exp.role}</h3>
                <h4 style={{ color: 'var(--text-muted)', fontSize: '1.1rem', fontWeight: 400, marginBottom: '1rem' }}>{exp.company}</h4>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, margin: 0 }}>{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
