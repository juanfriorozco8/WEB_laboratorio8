import React from "react";

const proyectos = [
  {
    nombre: "Laboratorio 1",
    descripcion: "Introducción a HTML. Estructura básica de páginas web, etiquetas semánticas y organización de contenido. PROYECTO SAYONARA",
    tecnologias: ["HTML"],
    repo: "https://github.com/juanfriorozco8/WEB_laboratorio1",
  },
  {
    nombre: "Laboratorio 2",
    descripcion: "Implementacion de estilos con CSS para el proyecto Sayonara. Diseño de interfaces, uso de colores, tipografía y layout básico.",
    tecnologias: ["HTML, CSS"],
    repo: "https://github.com/juanfriorozco8/WEB_laboratorio2",
  },
  {
    nombre: "Laboratorio 3",
    descripcion: "Introducción al uso de APIs en POSTMAN. Pruebas de endpoints, manejo de peticiones GET y POST, y validación de respuestas.",
    tecnologias: ["POSTMAN"],
    repo: "https://github.com/juanfriorozco8/WEB_laboratorio3",
  },
  {
    nombre: "Laboratorio 4",
    descripcion: "Introduccion a JavaScript. Variables, tipos de datos, funciones y eventos para agregar interactividad a las páginas web. PROYECTO DISCIAPP",
    tecnologias: ["HTML", "CSS", "JavaScript"],
    repo: "https://github.com/juanfriorozco8/WEB_laboratorio4",
  },
  {
    nombre: "Laboratorio 5",
    descripcion: "JavaScript avanzado. Manipulación del DOM, eventos y creación de funcionalidades interactivas para mejorar la experiencia del usuario en la web. PROYECTO BULLETINBOARD",
    tecnologias: ["HTML", "CSS", "JavaScript"],
    repo: "https://github.com/juanfriorozco8/WEB_laboratorio5",
  },
  {
    nombre: "Laboratorio 6",
    descripcion: "Introducción a NodeJS. Correcion de servidor-malo.js junto a documentacion de la solucion.",
    tecnologias: ["HTML", "CSS", "JavaScript", "NodeJS"],
    repo: "https://github.com/juanfriorozco8/WEB_laboratorio6",
  },
  {
    nombre: "Proyecto 1",
    descripcion: "Aplicación web de tipo blog desarrollada con HTML, CSS y JavaScript puro. Consume la API pública DummyJSON para listar publicaciones, ver detalles, crear posts con validación, filtrar contenido y gestionar eliminación simulada en la interfaz. PROYECTO BLOGBOARD",
    tecnologias: ["HTML", "CSS", "JavaScript"],
    repo: "https://github.com/juanfriorozco8/WEB_proyecto1",
  },
];

export default function Proyectos() {
  return (
    <div className="page-section">
      <div className="page-container">
        <p className="home-label">Trabajos del curso</p>
        <h1 className="page-title">Proyectos</h1>
        <div className="home-divider"></div>
        <p className="page-text">
          Recopilación de laboratorios y proyectos desarrollados durante el curso
          de Sistemas y Tecnologías Web en la Universidad del Valle de Guatemala.
        </p>

        <div className="proyectos-grid">
          {proyectos.map((p) => (
            <div key={p.nombre} className="proyecto-card">
              <div className="proyecto-header">
                <h3 className="proyecto-nombre">{p.nombre}</h3>
                <div className="proyecto-techs">
                  {p.tecnologias.map((t) => (
                    <span key={t} className="tech-chip">{t}</span>
                  ))}
                </div>
              </div>
              <p className="proyecto-descripcion">{p.descripcion}</p>
              <a href={p.repo} target="_blank" className="proyecto-link">
                Ver repositorio →
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}