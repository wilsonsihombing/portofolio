import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Pemrograman',
      skills: ['C/C#', 'Java', 'Python', 'PHP', 'JavaScript', 'Node.js', 'Dart']
    },
    {
      category: 'Framework & Library',
      skills: ['Laravel', 'React', 'Flutter', 'Bootstrap']
    },
    {
      category: 'Aplikasi & Alat',
      skills: ['Git / GitHub', 'TortoiseSVN', 'Visual Studio / VS Code', 'Android Studio', 'Postman', 'Katalon Studio', 'SSMS', 'Flowgorithm', 'Figma / Canva']
    },
    {
      category: 'Database',
      skills: ['MySQL', 'SQL Server']
    },
    {
      category: 'Metodologi & Soft Skill',
      skills: ['Agile / Scrum', 'Project Management', 'Leadership', 'Public Speaking', 'Problem Solving', 'Team Work']
    }
  ];

  return (
    <section id="skills" className="reveal container">
      <h2 className="section-title text-gradient center" style={{ textAlign: 'center', display: 'block' }}>Keahlian Utama</h2>
      <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginBottom: '4rem', maxWidth: '600px', margin: '0 auto 4rem auto' }}>
        Kumpulan keterampilan teknis dan soft skills yang saya terapkan dalam penyelesaian masalah dan pengelolaan tingkat proyek.
      </p>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
        {skillCategories.map((group, index) => (
          <div key={index} className="glass-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column' }}>
            <h3 style={{ marginBottom: '1.5rem', color: 'var(--text-main)', fontSize: '1.3rem' }}>
              {group.category}
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem', marginTop: 'auto' }}>
              {group.skills.map((skill, sIndex) => (
                <span key={sIndex} style={{ 
                  background: 'rgba(255, 255, 255, 0.05)', 
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: 'var(--text-muted)', 
                  padding: '0.4rem 1rem', 
                  borderRadius: '50px', 
                  fontSize: '0.9rem' 
                }}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
