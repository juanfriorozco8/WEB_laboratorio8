import "./globals.css";
import Link from "next/link";
import type { ReactNode } from "react";

export const metadata = {
  title: "Juan Orozco",
  description: "Portafolio personal",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body>
        <nav className="navbar">
          <Link href="/" className="nav-logo">
            Juan Orozco
          </Link>
          <div className="nav-links">
            <Link href="/">Inicio</Link>
            <Link href="/sobre-mi">Sobre mi</Link>
            <Link href="/proyectos">Proyectos</Link>
            <Link href="/contacto">Contacto</Link>
          </div>
        </nav>
        <main>{children}</main>
        <footer className="footer">
          Juan Orozco — 2026
        </footer>
      </body>
    </html>
  );
}