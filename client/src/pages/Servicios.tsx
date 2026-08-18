import { Link } from "wouter";
import { ArrowRight, BadgeCheck, UsersRound, Search, Sparkles, Bot } from "lucide-react";
import { useSEO } from "../hooks/useSEO";
import Header from "../components/Header";

const LOGO_URL =
  "https://files.manuscdn.com/user_upload_by_module/session_file/310519663522518131/WbYuRCsZwwbLteMC.png";

const serviceCards = [
  {
    icon: UsersRound,
    title: "Outsourcing de talentos",
    label: "Capacidad especializada bajo demanda",
    copy: "Integramos profesionales contratados y acompañados por 4AGILE para reforzar equipos críticos en tecnología, agilidad, data, soporte, producto y gestión. El foco no es solo cubrir una silla, sino sumar capacidad productiva con seguimiento, mentoría continua y capacitación constante en IA (bonificada 100%).",
    cta: "Necesito talentos para mi equipo",
    ctaLink: "/contacto",
    details: [
      "Profesionales contratados directamente por 4AGILE con toda la carga administrativa resuelta.",
      "Seguimiento técnico y de clima constante para evitar rotación y mantener el foco operativo.",
      "Mentoría continua por consultores senior para nivelar brechas y asegurar calidad de entrega.",
      "Acceso a capacitación constante en Inteligencia Artificial y habilidades interpersonales sin costo adicional.",
    ],
  },
  {
    icon: Sparkles,
    title: "Mejoras en la productividad",
    label: "Entrenamiento & Acompañamiento Estratégico",
    copy: "Desarrollamos el potencial y rendimiento de los talentos mediante entrenamientos prácticos en Inteligencia Artificial, agilidad, habilidades blandas y excelencia tecnológica. Disponible para talentos internos de tu empresa o 100% bonificado en profesionales de Staffing 4AGILE.",
    cta: "Conocer programa de productividad",
    ctaLink: "/productividad",
    details: [
      "Formación hands-on en herramientas de IA Generativa y copilotos de código para acelerar entregas.",
      "Optimización del flujo ágil de entrega (Scrum, Kanban, Lean) y eliminación de cuellos de botella.",
      "Desarrollo de habilidades blandas, asertividad en la comunicación y liderazgo colaborativo.",
      "Acompañamiento y mentoría técnica continua impartida por consultores senior.",
    ],
  },
  {
    icon: Search,
    title: "Hunting de talentos",
    label: "Búsqueda precisa de perfiles clave",
    copy: "Encontramos, evaluamos y presentamos candidatos alineados al perfil técnico, contexto cultural y objetivos del negocio. Aplicamos selección experta para reducir tiempo, riesgo y fricción en contrataciones estratégicas.",
    cta: "Quiero buscar un perfil clave",
    ctaLink: "/contacto",
    details: [
      "Proceso riguroso de screening técnico y evaluación de mindset por especialistas ágiles.",
      "Presentación de candidatos altamente pre-calificados en un plazo menor a 5 días hábiles.",
      "Garantía comercial de reemplazo sin costo si el profesional no se adapta en el periodo inicial.",
      "Acompañamiento en el onboarding para facilitar una integración exitosa a la cultura de la empresa.",
    ],
  },
];

const specialties = [
  "Desarrollo de productos digitales (Frontend, Backend, Fullstack, Mobile)",
  "Agile Coaches, Scrum Masters, Product Owners y Product Managers",
  "Data Engineers, Data Scientists, BI y Analítica Avanzada",
  "Ingenieros de QA Automation, Manual Testing y Continuidad Tecnológica",
  "Especialistas en Cloud (DevOps, SRE, SysOps) y Ciberseguridad",
  "Liderazgo TI (CTOs, Tech Leads, Engineering Managers) y Transformación",
];

export default function Servicios() {
  useSEO({
    title: "Servicios de Outsourcing de Talentos TI y Hunting | 4AGILE",
    description:
      "Descubre nuestras soluciones de outsourcing TI y hunting especializado en Chile. Integramos y seleccionamos profesionales de tecnología, agilidad y gestión con rapidez y garantía.",
    canonicalPath: "/servicios",
  });

  return (
    <div className="site-shell">
      <Header />

      <main>
        {/* Banner Hero de Servicios */}
        <section
          className="section-dark-soft"
          style={{ padding: "140px 0 60px", textAlign: "center" }}
        >
          <div className="container" style={{ maxWidth: "800px" }}>
            <div className="section-kicker">Nuestros Servicios</div>
            <h1
              style={{
                fontSize: "3rem",
                marginBottom: "1.5rem",
                lineHeight: 1.2,
              }}
            >
              Soluciones a la medida de tus desafíos de talento
            </h1>
            <p
              className="diff-lead"
              style={{
                margin: "0 auto",
                fontSize: "1.2rem",
                color: "var(--muted)",
              }}
            >
              Combinamos evaluación técnica experta, agilidad operativa y
              acompañamiento continuo para entregar profesionales que realmente
              se integran y generan valor desde el primer día.
            </p>
          </div>
        </section>

        {/* Detalle de Servicios */}
        <section className="container" style={{ padding: "80px 0" }}>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "80px" }}
          >
            {serviceCards.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;
              return (
                <article
                  key={service.title}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                    gap: "48px",
                    alignItems: "center",
                    padding: "48px",
                    background: "#fff",
                    borderRadius: "28px",
                    border: "1px solid var(--line)",
                    boxShadow: "var(--shadow)",
                  }}
                >
                  <div style={{ order: isEven ? 1 : 2 }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        color: "var(--blue)",
                        marginBottom: "16px",
                      }}
                    >
                      <Icon size={38} />
                      <span
                        style={{
                          fontWeight: 700,
                          textTransform: "uppercase",
                          fontSize: "14px",
                          letterSpacing: "0.05em",
                        }}
                      >
                        {service.label}
                      </span>
                    </div>
                    <h2 style={{ fontSize: "2.5rem", marginBottom: "20px" }}>
                      {service.title}
                    </h2>
                    <p
                      style={{
                        fontSize: "1.1rem",
                        color: "var(--muted)",
                        marginBottom: "24px",
                        lineHeight: 1.6,
                      }}
                    >
                      {service.copy}
                    </p>
                    <Link
                      href={service.ctaLink || "/contacto"}
                      className="btn btn-primary"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      {service.cta} <ArrowRight size={18} />
                    </Link>
                  </div>

                  <div
                    style={{
                      order: isEven ? 2 : 1,
                      background: "var(--bg)",
                      padding: "40px",
                      borderRadius: "24px",
                      border: "1px solid rgba(0,0,0,0.03)",
                    }}
                  >
                    <h3
                      style={{
                        fontSize: "18px",
                        fontWeight: 800,
                        marginBottom: "20px",
                        color: "var(--blue-700)",
                      }}
                    >
                      ¿Qué incluye nuestro servicio?
                    </h3>
                    <ul
                      style={{
                        listStyle: "none",
                        padding: 0,
                        margin: 0,
                        display: "flex",
                        flexDirection: "column",
                        gap: "16px",
                      }}
                    >
                      {service.details.map((detail, dIdx) => (
                        <li
                          key={dIdx}
                          style={{
                            display: "flex",
                            gap: "12px",
                            alignItems: "flex-start",
                            lineHeight: 1.5,
                          }}
                        >
                          <BadgeCheck
                            size={20}
                            style={{
                              color: "var(--blue)",
                              flexShrink: 0,
                              marginTop: "2px",
                            }}
                          />
                          <span
                            style={{ fontSize: "15px", color: "var(--ink)" }}
                          >
                            {detail}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* Especialidades */}
        <section className="section-light" style={{ padding: "80px 0" }}>
          <div className="container">
            <div
              style={{
                textAlign: "center",
                marginBottom: "48px",
                maxWidth: "700px",
                margin: "0 auto 48px",
              }}
            >
              <div className="section-kicker">Perfiles Técnicos</div>
              <h2 style={{ fontSize: "2.5rem", marginBottom: "16px" }}>
                Especialidades y perfiles que cubrimos
              </h2>
              <p style={{ color: "var(--muted)", fontSize: "1.1rem" }}>
                Encontramos e integramos profesionales en áreas críticas de
                desarrollo, agilidad, infraestructura y toma de decisiones.
              </p>
            </div>

            <div
              className="value-list specialty-list"
              style={{
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              }}
            >
              {specialties.map((item) => (
                <article
                  key={item}
                  style={{
                    display: "flex",
                    gap: "16px",
                    background: "#fff",
                    padding: "24px",
                    borderRadius: "18px",
                    border: "1px solid var(--line)",
                  }}
                >
                  <BadgeCheck
                    size={26}
                    style={{ color: "var(--blue)", flexShrink: 0 }}
                  />
                  <h3
                    style={{
                      fontSize: "16px",
                      fontWeight: "600",
                      margin: 0,
                      color: "var(--ink)",
                    }}
                  >
                    {item}
                  </h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA General */}
        <section
          className="section-blue"
          style={{ padding: "60px 0", textAlign: "center" }}
        >
          <div className="container" style={{ maxWidth: "600px" }}>
            <h2
              style={{
                fontSize: "2.2rem",
                marginBottom: "16px",
                color: "white",
              }}
            >
              ¿Listo para dar el siguiente paso?
            </h2>
            <p
              style={{
                color: "rgba(255,255,255,0.85)",
                marginBottom: "28px",
                fontSize: "1.1rem",
              }}
            >
              Conversemos hoy mismo sobre el perfil, equipo o capacidad que
              necesitas incorporar en tu organización.
            </p>
            <Link
              href="/contacto"
              className="btn"
              style={{
                background: "white",
                color: "var(--blue-700)",
                fontWeight: "700",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "12px 30px",
                borderRadius: "999px",
              }}
            >
              Solicitar Asesoría de Talento <ArrowRight size={18} />
            </Link>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <img src={LOGO_URL} alt="Logo 4AGILE" />
          <p>4AGILE · Outsourcing de talentos y hunting especializado.</p>
        </div>
      </footer>
    </div>
  );
}
