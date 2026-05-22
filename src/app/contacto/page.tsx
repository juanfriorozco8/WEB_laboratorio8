import React from "react";

export default function Contacto() {
  return (
    <div className="page-section">
      <div className="page-container">
        <p className="home-label">Contacto</p>
        <h1 className="page-title">Hablemos</h1>
        <div className="home-divider"></div>

        <p className="page-text">
          Si tienes alguna pregunta, propuesta u oferta de colaboración, no dudes en contactarme. Estoy abierto a nuevas oportunidades y siempre dispuesto a conectar con personas interesadas en el desarrollo web.
          puedes escribirme por cualquiera de estos medios.
        </p>

        <div className="contacto-links">
          <a href="mailto:juanfriorozco16@gmail.com" className="contacto-item">
            <span className="contacto-label">Email</span>
            <span className="contacto-value">juanfriorozco16@gmail.com</span>
          </a>
          <a href="https://github.com/juanfriorozco8" target="_blank" className="contacto-item">
            <span className="contacto-label">GitHub</span>
            <span className="contacto-value">github.com/juanfriorozco8</span>
          </a>
        </div>

        <div className="contacto-form">
          <div className="form-group">
            <label className="form-label">Nombre</label>
            <input className="form-input" type="text" placeholder="Tu nombre" />
          </div>
          <div className="form-group">
            <label className="form-label">Correo</label>
            <input className="form-input" type="email" placeholder="tu@email.com" />
          </div>
          <div className="form-group">
            <label className="form-label">Mensaje</label>
            <textarea className="form-input form-textarea" placeholder="Tu mensaje..." />
          </div>
          <button className="btn-primary">Enviar mensaje</button>
        </div>

      </div>
    </div>
  );
}