import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronRight, Phone, Mail } from "lucide-react";

export const LOGO_URL =
  "https://files.manuscdn.com/user_upload_by_module/session_file/310519663522518131/WbYuRCsZwwbLteMC.png";

export default function Header() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Lock body scroll and handle Escape key when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          setIsOpen(false);
        }
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  const isHomeActive = location === "/";
  const isServiciosActive = location === "/servicios";
  const isProductividadActive = location === "/productividad";
  const isNosotrosActive = location === "/nosotros";
  const isBlogActive = location.startsWith("/blog");
  const isContactoActive = location === "/contacto";

  return (
    <>
      <header className="site-header" aria-label="Navegación principal">
        <Link
          className="brand"
          href="/"
          aria-label="4AGILE inicio"
          onClick={() => setIsOpen(false)}
        >
          <img src={LOGO_URL} alt="Logo 4AGILE" />
          <span>4AGILE</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="nav-links desktop-nav" aria-label="Secciones del sitio">
          <Link href="/" className={isHomeActive ? "active" : ""}>
            Inicio
          </Link>
          <Link href="/servicios" className={isServiciosActive ? "active" : ""}>
            Servicios
          </Link>
          <Link
            href="/productividad"
            className={isProductividadActive ? "active" : ""}
          >
            Productividad
          </Link>
          <Link href="/nosotros" className={isNosotrosActive ? "active" : ""}>
            Nosotros
          </Link>
          <Link href="/blog" className={isBlogActive ? "active" : ""}>
            Blog
          </Link>
          <Link
            className={`nav-cta ${isContactoActive ? "active" : ""}`}
            href="/contacto"
          >
            Conversemos
          </Link>
        </nav>

        {/* Mobile Hamburger Toggle Button */}
        <button
          type="button"
          className="mobile-menu-toggle"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={
            isOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"
          }
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
        >
          {isOpen ? (
            <X size={24} aria-hidden="true" />
          ) : (
            <Menu size={24} aria-hidden="true" />
          )}
        </button>
      </header>

      {/* Mobile Navigation Drawer & Backdrop */}
      {isOpen && (
        <div
          className="mobile-nav-backdrop"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        >
          <div
            id="mobile-navigation"
            className="mobile-nav-panel"
            role="dialog"
            aria-modal="true"
            aria-label="Menú principal de navegación"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mobile-nav-header">
              <Link
                className="brand"
                href="/"
                aria-label="4AGILE inicio"
                onClick={() => setIsOpen(false)}
              >
                <img src={LOGO_URL} alt="Logo 4AGILE" />
                <span>4AGILE</span>
              </Link>
              <button
                type="button"
                className="mobile-nav-close"
                onClick={() => setIsOpen(false)}
                aria-label="Cerrar menú"
              >
                <X size={22} />
              </button>
            </div>

            <nav className="mobile-nav-links" aria-label="Enlaces móviles">
              <Link
                href="/"
                className={`mobile-nav-item ${isHomeActive ? "active" : ""}`}
                onClick={() => setIsOpen(false)}
              >
                <span className="mobile-nav-item-title">Inicio</span>
                <ChevronRight size={18} className="mobile-nav-chevron" />
              </Link>
              <Link
                href="/servicios"
                className={`mobile-nav-item ${isServiciosActive ? "active" : ""}`}
                onClick={() => setIsOpen(false)}
              >
                <span className="mobile-nav-item-title">Servicios</span>
                <ChevronRight size={18} className="mobile-nav-chevron" />
              </Link>
              <Link
                href="/productividad"
                className={`mobile-nav-item ${isProductividadActive ? "active" : ""}`}
                onClick={() => setIsOpen(false)}
              >
                <span className="mobile-nav-item-title">Productividad</span>
                <ChevronRight size={18} className="mobile-nav-chevron" />
              </Link>
              <Link
                href="/nosotros"
                className={`mobile-nav-item ${isNosotrosActive ? "active" : ""}`}
                onClick={() => setIsOpen(false)}
              >
                <span className="mobile-nav-item-title">Nosotros</span>
                <ChevronRight size={18} className="mobile-nav-chevron" />
              </Link>
              <Link
                href="/blog"
                className={`mobile-nav-item ${isBlogActive ? "active" : ""}`}
                onClick={() => setIsOpen(false)}
              >
                <span className="mobile-nav-item-title">Blog</span>
                <ChevronRight size={18} className="mobile-nav-chevron" />
              </Link>
            </nav>

            <div className="mobile-nav-footer">
              <Link
                href="/contacto"
                className="mobile-nav-cta-button"
                onClick={() => setIsOpen(false)}
              >
                Conversemos
              </Link>

              <div className="mobile-nav-contact-items">
                <a
                  href="mailto:contacto@4agile.cl"
                  className="mobile-nav-contact-link"
                >
                  <Mail size={16} />
                  <span>contacto@4agile.cl</span>
                </a>
                <a href="tel:+56976229986" className="mobile-nav-contact-link">
                  <Phone size={16} />
                  <span>+56 9 7622 9986</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
