import React from "react";

export default function Home() {
  const tecnologias = [
    "HTML", "CSS", "JavaScript", "React",
    "Next.js", "Git", "GitHub", "Tailwind CSS"
  ];

  return (
    <section className="home-section">
      <div className="home-container">
        <p className="home-label">Portafolio — 2026</p>
        <h1 className="home-title">Juan Orozco</h1>
        <p className="home-career">Ingeniería en Ciencias de la Computación — UVG</p>
        <p className="home-description">
          Estudiante de desarrollo web con enfoque en interfaces limpias y funcionales.
          Actualmente aprendiendo Next.js y el ecosistema moderno de JavaScript.
        </p>
        <div className="home-divider" />
        <p className="home-label">Tecnologías</p>
        <div className="tech-grid">
          {tecnologias.map((tech) => (
            <span key={tech} className="tech-chip">{tech}</span>
          ))}
        </div>
        <div className="home-buttons">
          <a href="https://github.com/juanfriorozco8" target="_blank" className="btn-primary">
            GitHub
          </a>
          <a href="/proyectos" className="btn-secondary">Ver proyectos</a>
          <a href="/contacto" className="btn-secondary">Contacto</a>
        </div>
      </div>
    </section>
  );
}