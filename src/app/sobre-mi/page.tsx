import React from "react";

export default function SobreMi() {
  return (
    <div className="page-section">
      <div className="page-container">

        <p className="home-label">Sobre mi</p>
        <h1 className="page-title">Quién soy</h1>
        <div className="home-divider"></div>

        <p className="page-text">
          Soy estudiante de Ingeniería en Ciencias de la Computación en la
          Universidad del Valle de Guatemala. Durante este curso aprendí a
          construir aplicaciones web modernas usando React y Next.js, desde
          componentes básicos hasta deployment en Vercel.
        </p>

        <p className="page-text">
          Me interesa el desarrollo web porque combina lógica y diseño.
          Disfruto construir interfaces que sean limpias, rápidas y fáciles de usar.
        </p>

        <div className="sobre-grid">
          <div className="sobre-card">
            <p className="home-label">Intereses profesionales</p>
            <ul className="sobre-list">
              <li>Desarrollo Frontend</li>
              <li>Diseño de interfaces</li>
              <li>Full Stack con Next.js</li>
              <li>APIs REST</li>
            </ul>
          </div>

          <div className="sobre-card">
            <p className="home-label">Tecnologías favoritas</p>
            <ul className="sobre-list">
              <li>Next.js</li>
              <li>React</li>
              <li>Tailwind CSS</li>
              <li>TypeScript</li>
            </ul>
          </div>

          <div className="sobre-card">
            <p className="home-label">Quiero aprender</p>
            <ul className="sobre-list">
              <li>TypeScript avanzado</li>
              <li>PostgreSQL</li>
              <li>Docker</li>
              <li>Testing</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}