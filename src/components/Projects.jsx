import React from "react";
import guidedImage from "../assets/guided.png";
import jejakpenImage from "../assets/jejakpen.png";
import portofolioImage from "../assets/portofolio.png";
import sinetImage from "../assets/sinet.png";
import taskmanImage from "../assets/taskman.png";

const Projects = () => {
  const getProjectImage = (project) => {
    if (project.image) return project.image;
    return `https://placehold.co/1200x700/0f172a/f8fafc?text=${encodeURIComponent(
      project.title,
    )}`;
  };

  const projects = [
    {
      title: "Task Management App, Kanban-Based Project Management System",
      image: taskmanImage,
      period: "Mar 2026 - Present",
      description:
        "Developed a full-stack task management application using React (Vite), Node.js, and MongoDB with RESTful API architecture. Implemented Kanban board functionality, JWT-based authentication, and global state management using Redux.",
      gradient: "linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)",
      tags: ["React (Vite)", "Node.js", "MongoDB", "Redux", "JWT"],
    },
    {
      title: "GuidedChatbot",
      image: guidedImage,
      period: "Nov 2025 – Sekarang",
      description:
        "A Laravel-based chatbot application that guides users in composing prompts more effectively and is integrated with the Google Gemini API.",
      gradient: "linear-gradient(135deg, #FF6B6B 0%, #556270 100%)",
      tags: ["Laravel", "MySQL", "Gemini API"],
    },
    {
      title: "Sinet - Sistem Informasi Organisasi Mahasiswa",
      image: sinetImage,
      period: "Agu 2024 – Sekarang",
      description:
        "Sinet is a web-based information system designed to manage student organizations at Institut Teknologi Del. Built with Laravel and MySQL, it provides features for event management, member registration, and organizational communication.",
      gradient: "linear-gradient(135deg, #10b981 0%, #047857 100%)",
      tags: ["Laravel", "JavaScript", "Figma", "UI/UX"],
    },
    {
      title: "JejakPendaki, Open Trip Mountain Climbing Website",
      image: jejakpenImage,
      period: "Jun 2024 – Sept 2024",
      description:
        "Developed a full-stack web application using Laravel and MySQL for managing open trip services. Implemented CRUD functionalities and user management features for handling user and trip data.",
      gradient: "linear-gradient(135deg, #8b5cf6 0%, #4c1d95 100%)",
      tags: ["Laravel", "MySQL", "CRUD", "User Management"],
    },
    {
      title: "Personal Portfolio Website, Modern React-Based Portfolio",
      image: portofolioImage,
      period: "Jan 2026 – Present",
      description:
        "Developed a responsive personal portfolio website using React (Vite) with a modular component-based architecture. Implemented custom UI/UX design with dark theme, smooth scroll animations, and interactive sections to enhance user experience.",
      gradient: "linear-gradient(135deg, #6366f1 0%, #312e81 100%)",
      tags: [
        "React (Vite)",
        "UI/UX",
        "Smooth Scroll",
        "Component Architecture",
      ],
    },
  ];

  return (
    <section id="projects" className="reveal container">
      <h2
        className="section-title text-gradient center"
        style={{ textAlign: "center", display: "block" }}
      >
        Karya Terbaik Saya
      </h2>
      <p
        style={{
          textAlign: "center",
          color: "var(--text-muted)",
          marginBottom: "4rem",
          maxWidth: "600px",
          margin: "0 auto 4rem auto",
        }}
      >
        Galeri proyek unggulan tempat rekayasa perangkat lunak dikolaborasikan
        bersama estetika <span style={{ fontStyle: "italic" }}>user experience</span>.
      </p>

      <div
        className="projects-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "3rem",
        }}
      >
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="glass-card"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <div
              style={{
                height: "160px",
                background: project.gradient,
                overflow: "hidden",
              }}
            >
              <img
                src={getProjectImage(project)}
                alt={project.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>

            <div
              style={{
                padding: "2rem",
                flex: 1,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <span
                style={{
                  fontSize: "0.85rem",
                  color: "var(--text-muted)",
                  marginBottom: "1rem",
                  fontWeight: 600,
                }}
              >
                {project.period}
              </span>
              <p
                style={{
                  color: "var(--text-muted)",
                  marginBottom: "1.5rem",
                  flex: 1,
                }}
              >
                {project.description}
              </p>

              <div
                style={{
                  display: "flex",
                  gap: "0.6rem",
                  flexWrap: "wrap",
                  marginBottom: "1rem",
                }}
              >
                {project.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    style={{
                      background: "rgba(99, 102, 241, 0.1)",
                      color: "var(--primary-color)",
                      padding: "0.3rem 0.8rem",
                      borderRadius: "50px",
                      fontSize: "0.8rem",
                      fontWeight: 600,
                    }}
                  >
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
