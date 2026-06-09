import { Link } from "wouter";
import {
  ArrowRight,
  BadgeCheck,
  ShieldCheck,
  Target,
  Handshake,
} from "lucide-react";
import { useSEO } from "../hooks/useSEO";

const LOGO_URL =
  "https://files.manuscdn.com/user_upload_by_module/session_file/310519663522518131/WbYuRCsZwwbLteMC.png";

const differentiators = [
  {
    metric: "< 5 días",
    title: "Agilidad Operativa",
    copy: "Presentación rápida de perfiles evaluados para necesidades críticas.",
  },
  {
    metric: "< 1%",
    title: "Retención y Estabilidad",
    copy: "Rotación histórica gracias a motivación, seguimiento y acompañamiento real.",
  },
  {
    metric: "1er mes",
    title: "Garantía Absoluta",
    copy: "Si el talento no cumple expectativas, ese primer mes no se paga.",
  },
  {
    metric: "Mentoría",
    title: "Acompañamiento Técnico",
    copy: "Consultores expertos acompañan a talentos y clientes después de la incorporación.",
  },
  {
    metric: "Custom",
    title: "Flexibilidad Total",
    copy: "Servicio flexible según cultura, madurez, urgencia y objetivos de negocio.",
  },
  {
    metric: "Menos riesgo",
    title: "Eficiencia Administrativa",
    copy: "Reducimos carga administrativa, tiempos de búsqueda y riesgo de contratación.",
  },
];

const pillars = [
  {
    icon: Target,
    title: "Outsourcing de Valor",
    subtitle: "Talento integrado, no tercerización distante",
    copy: "Los profesionales trabajan conectados al cliente y acompañados por 4AGILE para mantener desempeño, motivación y continuidad operacional sin perder la calidez.",
  },
  {
    icon: ShieldCheck,
    title: "Hunting Riguroso",
    subtitle: "Selección antes que volumen",
    copy: "Buscamos perfiles alineados al contexto técnico y cultural de tu empresa, reduciendo entrevistas improductivas y maximizando la tasa de éxito de contratación.",
  },
  {
    icon: Handshake,
    title: "Acompañamiento Humano",
    subtitle: "Seguimiento posterior",
    copy: "Establecemos un canal de mentoría, feedback y comunicación cercana tanto con los talentos desplegados como con los líderes para asegurar una adaptación óptima.",
  },
];

export default function Nosotros() {
  useSEO({
    title: "Sobre 4AGILE | Metodología, Garantía y Diferenciales",
    description:
      "Conoce 4AGILE, un socio estratégico en Chile que reduce el riesgo de contratación. Nuestra metodología combina acompañamiento humano, garantía de un mes y mentalidad de Silicon Valley.",
    canonicalPath: "/nosotros",
  });

  return (
    <div className="site-shell">
      <header className="site-header" aria-label="Navegación principal">
        <Link className="brand" href="/" aria-label="4AGILE inicio">
          <img src={LOGO_URL} alt="Logo 4AGILE" />
          <span>4AGILE</span>
        </Link>
        <nav className="nav-links" aria-label="Secciones del sitio">
          <Link href="/">Inicio</Link>
          <Link href="/servicios">Servicios</Link>
          <Link href="/nosotros" className="active">
            Nosotros
          </Link>
          <Link href="/blog">Blog</Link>
          <Link className="nav-cta" href="/contacto">
            Conversemos
          </Link>
        </nav>
      </header>

      <main>
        {/* Banner Hero Nosotros */}
        <section
          className="section-dark-soft"
          style={{ padding: "140px 0 60px", textAlign: "center" }}
        >
          <div className="container" style={{ maxWidth: "800px" }}>
            <div className="section-kicker">Quiénes Somos</div>
            <h1
              style={{
                fontSize: "3rem",
                marginBottom: "1.5rem",
                lineHeight: 1.2,
              }}
            >
              Un socio estratégico que conecta el talento con tus metas de
              negocio
            </h1>
            <p
              className="diff-lead"
              style={{
                margin: "0 auto",
                fontSize: "1.2rem",
                color: "var(--muted)",
              }}
            >
              No somos una consultora masiva ni una plataforma transaccional de
              CVs. En 4AGILE operamos bajo la convicción de que el talento
              necesita acompañamiento y mentoría para florecer de forma
              sostenible.
            </p>
          </div>
        </section>

        {/* Filosofía y Formación */}
        <section className="container" style={{ padding: "80px 0" }}>
          <div
            className="split"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "48px",
              alignItems: "center",
            }}
          >
            <div>
              <div className="section-kicker">Nuestra Filosofía</div>
              <h2 style={{ fontSize: "2.5rem", marginBottom: "20px" }}>
                Formación continua y mentalidad de Silicon Valley
              </h2>
              <p
                style={{
                  color: "var(--muted)",
                  fontSize: "1.1rem",
                  marginBottom: "16px",
                  lineHeight: 1.6,
                }}
              >
                El foco de 4AGILE está en las habilidades integrales. Formamos a
                las personas que trabajan con nosotros con cursos online de{" "}
                <strong>Inteligencia Artificial</strong>, nivelación en brechas
                tecnológicas y{" "}
                <strong>coaching personalizado en habilidades blandas</strong>.
              </p>
              <p
                style={{
                  color: "var(--muted)",
                  fontSize: "1.1rem",
                  lineHeight: 1.6,
                }}
              >
                Utilizamos nuestro propio <em>Handbook</em> para instalar la
                mentalidad de innovación de Silicon Valley en nuestros talentos
                desplegados. Además, a través de nuestra iniciativa hermana{" "}
                <strong>Agilefactor</strong>, somos pioneros y especialistas en
                mindset ágil más allá de los equipos TI.
              </p>
            </div>
            <div
              style={{
                background: "var(--bg)",
                padding: "40px",
                borderRadius: "28px",
                border: "1px solid var(--line)",
              }}
            >
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: 800,
                  marginBottom: "24px",
                  color: "var(--blue-700)",
                }}
              >
                Pilares de nuestro enfoque de aprendizaje
              </h3>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                <li
                  style={{
                    display: "flex",
                    gap: "16px",
                    alignItems: "flex-start",
                  }}
                >
                  <BadgeCheck
                    size={22}
                    style={{
                      color: "var(--blue)",
                      flexShrink: 0,
                      marginTop: "2px",
                    }}
                  />
                  <div>
                    <h4
                      style={{
                        margin: "0 0 4px",
                        fontSize: "16px",
                        fontWeight: 700,
                      }}
                    >
                      Inteligencia Artificial Aplicada
                    </h4>
                    <p
                      style={{
                        margin: 0,
                        fontSize: "14px",
                        color: "var(--muted)",
                      }}
                    >
                      Nivelamos a nuestros talentos con herramientas generativas
                      para aumentar su productividad.
                    </p>
                  </div>
                </li>
                <li
                  style={{
                    display: "flex",
                    gap: "16px",
                    alignItems: "flex-start",
                  }}
                >
                  <BadgeCheck
                    size={22}
                    style={{
                      color: "var(--blue)",
                      flexShrink: 0,
                      marginTop: "2px",
                    }}
                  />
                  <div>
                    <h4
                      style={{
                        margin: "0 0 4px",
                        fontSize: "16px",
                        fontWeight: 700,
                      }}
                    >
                      Coaching en Habilidades Blandas
                    </h4>
                    <p
                      style={{
                        margin: 0,
                        fontSize: "14px",
                        color: "var(--muted)",
                      }}
                    >
                      Trabajamos la comunicación, adaptabilidad y resolución de
                      conflictos.
                    </p>
                  </div>
                </li>
                <li
                  style={{
                    display: "flex",
                    gap: "16px",
                    alignItems: "flex-start",
                  }}
                >
                  <BadgeCheck
                    size={22}
                    style={{
                      color: "var(--blue)",
                      flexShrink: 0,
                      marginTop: "2px",
                    }}
                  />
                  <div>
                    <h4
                      style={{
                        margin: "0 0 4px",
                        fontSize: "16px",
                        fontWeight: 700,
                      }}
                    >
                      Sello Agilefactor
                    </h4>
                    <p
                      style={{
                        margin: 0,
                        fontSize: "14px",
                        color: "var(--muted)",
                      }}
                    >
                      Metodologías de vanguardia para coordinar entregas rápidas
                      y de alta calidad.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Diferenciadores */}
        <section className="section-light" style={{ padding: "80px 0" }}>
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: "48px" }}>
              <div className="section-kicker">Nuestros Diferenciales</div>
              <h2 style={{ fontSize: "2.5rem", marginBottom: "16px" }}>
                ¿Por qué las empresas eligen a 4AGILE?
              </h2>
              <p
                style={{
                  color: "var(--muted)",
                  fontSize: "1.1rem",
                  maxWidth: "700px",
                  margin: "0 auto",
                }}
              >
                Reducimos el riesgo, eliminamos la fricción administrativa y
                aseguramos que el talento esté alineado a tu cultura.
              </p>
            </div>

            <div
              className="diff-grid"
              style={{
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "24px",
              }}
            >
              {differentiators.map((diff) => (
                <article
                  key={diff.metric}
                  style={{
                    background: "#fff",
                    padding: "32px",
                    borderRadius: "24px",
                    border: "1px solid var(--line)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                  }}
                >
                  <strong
                    style={{
                      fontSize: "32px",
                      color: "var(--blue)",
                      display: "block",
                    }}
                  >
                    {diff.metric}
                  </strong>
                  <h3
                    style={{
                      fontSize: "18px",
                      margin: "0 0 4px",
                      fontWeight: 700,
                      color: "var(--blue-700)",
                    }}
                  >
                    {diff.title}
                  </h3>
                  <p
                    style={{
                      margin: 0,
                      color: "var(--muted)",
                      fontSize: "14px",
                      lineHeight: 1.5,
                    }}
                  >
                    {diff.copy}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Pilares de Trabajo */}
        <section className="container" style={{ padding: "80px 0" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <div className="section-kicker">Metodología de Trabajo</div>
            <h2 style={{ fontSize: "2.5rem" }}>
              Una experiencia de talento transparente y medible
            </h2>
          </div>

          <div
            className="case-grid"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "24px",
            }}
          >
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <article
                  key={pillar.title}
                  style={{
                    padding: "40px",
                    background: "#fff",
                    borderRadius: "28px",
                    border: "1px solid var(--line)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                  }}
                >
                  <div
                    style={{
                      background: "var(--bg)",
                      width: "56px",
                      height: "56px",
                      borderRadius: "16px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--blue)",
                    }}
                  >
                    <Icon size={28} />
                  </div>
                  <span
                    style={{
                      fontSize: "13px",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      color: "var(--blue)",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {pillar.subtitle}
                  </span>
                  <h3 style={{ fontSize: "22px", margin: 0 }}>
                    {pillar.title}
                  </h3>
                  <p
                    style={{
                      margin: 0,
                      color: "var(--muted)",
                      fontSize: "15px",
                      lineHeight: 1.6,
                    }}
                  >
                    {pillar.copy}
                  </p>
                </article>
              );
            })}
          </div>
        </section>

        {/* Garantía */}
        <section
          className="guarantee section-blue"
          style={{ margin: "40px 0 0" }}
        >
          <div className="container guarantee-box">
            <div>
              <div className="section-kicker light">
                Nuestro sello de garantía
              </div>
              <h2>
                Si el primer mes el talento no satisface tus expectativas, ese
                mes es gratis.
              </h2>
            </div>
            <p>
              Respaldamos la calidad de nuestra búsqueda, evaluación e
              integración. Si el perfil no es el adecuado, buscamos un reemplazo
              sin costo adicional y mantenemos el foco en resolver tu necesidad.
            </p>
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
