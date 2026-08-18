import { Link } from "wouter";
import {
  ArrowRight,
  Bot,
  BrainCircuit,
  CheckCircle2,
  Clock,
  Compass,
  GraduationCap,
  Layers,
  Lightbulb,
  MessageSquare,
  Phone,
  Rocket,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import { useSEO } from "../hooks/useSEO";
import Header from "../components/Header";

const LOGO_URL =
  "https://files.manuscdn.com/user_upload_by_module/session_file/310519663522518131/WbYuRCsZwwbLteMC.png";

// Hero con profesionales latinos en entorno de trabajo y colaboración
const HERO_LATINO_BG =
  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1920&q=80";

const pillars = [
  {
    icon: Bot,
    title: "Habilidades en Inteligencia Artificial",
    badge: "Eficiencia y Automatización",
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Equipo profesional colaborando en soluciones de inteligencia artificial",
    summary:
      "Capacitamos a los talentos para integrar IA generativa y herramientas cognitivas en su flujo de trabajo diario, logrando entregas más veloces y con mayor precisión.",
    items: [
      "Uso práctico de asistentes avanzados (LLMs, Copilot, ChatGPT, Claude) adaptados a cada rol.",
      "Prompt engineering para acelerar análisis de requisitos, documentación y diseño de soluciones.",
      "Automatización de tareas repetitivas y generación de código asistido con altos estándares.",
      "Criterios de seguridad, privacidad y ética en el uso corporativo de datos e IA.",
    ],
  },
  {
    icon: Target,
    title: "Gestión Ágil y Mentalidad Silicon Valley",
    badge: "Foco en Entrega de Valor",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Taller práctico de gestión ágil y sincronización de equipos",
    summary:
      "Impulsados por nuestra experiencia y nuestra iniciativa hermana Agilefactor, enseñamos a trabajar con mentalidad ágil aplicada, eliminando burocracias y acelerando resultados de negocio.",
    items: [
      "Adopción de frameworks ágiles (Scrum, Kanban, Lean) orientados a impacto medible y no a ceremonias vacías.",
      "Priorización estratégica de backlog alineada con los objetivos comerciales del cliente.",
      "Cultura de iteración rápida, feedback oportuno y adaptación ágil ante cambios de contexto.",
      "Sello Agilefactor: mindset emprendedor de Silicon Valley para resolver problemas complejos.",
    ],
  },
  {
    icon: MessageSquare,
    title: "Habilidades Blandas y Liderazgo Colaborativo",
    badge: "Comunicación y Adaptabilidad",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Profesionales trabajando en comunicación y sinergia de equipo",
    summary:
      "El talento técnico sin comunicación genera fricción. Desarrollamos las competencias humanas esenciales para integrarse armoniosamente en cualquier estructura corporativa.",
    items: [
      "Comunicación asertiva, escucha activa y alineación con líderes y stakeholders de negocio.",
      "Resolución constructiva de conflictos, empatía y trabajo en equipo multidisciplinario.",
      "Autogestión del tiempo, manejo de prioridades y compromiso con los acuerdos de entrega.",
      "Capacidad de negociación técnica y presentación clara de avances e impedimentos.",
    ],
  },
  {
    icon: BrainCircuit,
    title: "Excelencia Tecnológica y Buenas Prácticas",
    badge: "Calidad y Robustez Técnica",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Nivelación técnica y sesiones prácticas de ingeniería de software",
    summary:
      "Nivelamos y fortalecemos las capacidades técnicas de los profesionales en arquitectura, código limpio, QA y nube para reducir la deuda técnica en el cliente.",
    items: [
      "Buenas prácticas de desarrollo de software: Clean Code, SOLID, patrones y code reviews rigurosos.",
      "Automatización de pruebas (QA Automation, testing unitario e integración continua).",
      "Prácticas modernas de DevOps, infraestructura cloud y observabilidad de sistemas.",
      "Adopción de estándares de ciberseguridad y protección de código en entornos distribuidos.",
    ],
  },
];

const targetAudiences = [
  {
    title: "Para los equipos propios del Cliente",
    subtitle: "Capacitación corporativa in-house",
    priceTag: "Talleres y Programas a Medida",
    isStaffing: false,
    description:
      "Diseñamos academias internas, bootcamps y ciclos de coaching directo para elevar el nivel de tus colaboradores en IA, metodologías ágiles y destrezas tecnológicas.",
    features: [
      "Diagnóstico inicial de brechas técnicas y metodológicas de tu equipo.",
      "Talleres prácticos con casos reales y proyectos aplicados de tu industria.",
      "Coaching personalizado para líderes de equipo, Scrum Masters y desarrolladores.",
      "Medición de adopción de herramientas de IA y métricas de incremento en productividad.",
    ],
    ctaText: "Solicitar propuesta para mi equipo",
  },
  {
    title: "Para talentos provistos por 4AGILE (Staffing)",
    subtitle: "Acompañamiento y formación continua incluida",
    priceTag: "100% GRATUITO e Incluido en Staffing",
    isStaffing: true,
    description:
      "Cuando contratas profesionales mediante nuestro servicio de Outsourcing / Staffing, todos los entrenamientos, mentorías senior y cursos son totalmente sin costo para el cliente.",
    features: [
      "Acceso continuo e ilimitado a nuestros programas de IA, agilidad y habilidades blandas.",
      "Mentorías 1 a 1 semanales con consultores senior para desbloquear desafíos técnicos.",
      "Seguimiento cercano de clima, motivación y rendimiento en tus proyectos.",
      "El cliente recibe un talento que aprende y aumenta su productividad día a día sin pagar un peso extra.",
    ],
    ctaText: "Contratar talento con formación incluida",
  },
];

const methodologySteps = [
  {
    step: "01",
    title: "Diagnóstico de Brechas",
    desc: "Evaluamos el nivel actual del talento, herramientas utilizadas y los cuellos de botella que limitan su velocidad o calidad.",
  },
  {
    step: "02",
    title: "Ruta de Aprendizaje Práctica",
    desc: "Construimos un plan de entrenamiento enfocado en casos reales del trabajo diario, combinando IA, agilidad y técnica.",
  },
  {
    step: "03",
    title: "Mentoría y Acompañamiento",
    desc: "Acompañamos la aplicación práctica en el puesto de trabajo con feedback constructivo y resolución guiada de problemas.",
  },
  {
    step: "04",
    title: "Impacto Medible en el Cliente",
    desc: "Monitoreamos la reducción de tiempos de ciclo, calidad del código, claridad comunicacional y satisfacción del líder.",
  },
];

export default function Productividad() {
  useSEO({
    title: "Mejora de Productividad en Talentos TI | 4AGILE",
    description:
      "Entrenamientos y acompañamientos prácticos para potenciar la productividad con Inteligencia Artificial, gestión ágil, habilidades blandas y técnicas. Para tus equipos o 100% incluido en nuestro Staffing.",
    canonicalPath: "/productividad",
  });

  return (
    <div className="site-shell">
      <Header />

      <main id="inicio">
        {/* Hero Section con personas latinas */}
        <section
          className="hero section-dark"
          style={{ backgroundImage: `url(${HERO_LATINO_BG})` }}
        >
          <div className="hero-overlay" />
          <div className="hero-content container">
            <div className="eyebrow">
              ENTRENAMIENTOS • ACOMPAÑAMIENTO • PRODUCTIVIDAD TI
            </div>
            <h1>
              Impulsamos la productividad de tus talentos al siguiente nivel.
            </h1>
            <p className="hero-copy">
              Realizamos entrenamientos y acompañamiento continuo en{" "}
              <strong>Inteligencia Artificial</strong>,{" "}
              <strong>gestión ágil</strong>,{" "}
              <strong>habilidades blandas</strong> y{" "}
              <strong>buenas prácticas tecnológicas</strong> para multiplicar el
              impacto directo en tus proyectos.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-primary" href="/contacto">
                Potenciar productividad <ArrowRight size={18} />
              </Link>
              <a className="btn btn-secondary" href="#modalidades">
                Ver modalidades de servicio
              </a>
            </div>
            <div
              className="hero-proof"
              aria-label="Indicadores de productividad 4AGILE"
            >
              <article>
                <strong>+40%</strong>
                <span>mayor velocidad de entrega con IA y agilidad</span>
              </article>
              <article>
                <strong>4 Pilares</strong>
                <span>IA, Agilidad, Soft Skills y Tecnología</span>
              </article>
              <article>
                <strong>100% Gratis</strong>
                <span>en nuestro servicio de Staffing y Outsourcing</span>
              </article>
            </div>
          </div>
        </section>

        {/* Modalidades: Cliente vs Staffing */}
        <section
          id="modalidades"
          className="section-light"
          style={{ padding: "90px 0" }}
        >
          <div className="container">
            <div style={{ textAlign: "center", maxWidth: "820px", margin: "0 auto 50px" }}>
              <div className="section-kicker" style={{ justifyContent: "center" }}>
                Flexibilidad de Aplicación
              </div>
              <h2 style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", lineHeight: 1.15, margin: "14px 0" }}>
                Desarrollo de habilidades adaptado a tu modelo operativo
              </h2>
              <p className="diff-lead" style={{ margin: "0 auto" }}>
                Ofrecemos programas tanto para transformar a los equipos que ya
                integran tu empresa, como para garantizar que el talento que te
                proveemos mediante staffing evolucione constantemente sin costo adicional.
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "32px",
                alignItems: "stretch",
              }}
            >
              {targetAudiences.map((card, idx) => (
                <div
                  key={idx}
                  style={{
                    background: card.isStaffing
                      ? "linear-gradient(180deg, #f0f6ff 0%, #ffffff 100%)"
                      : "#ffffff",
                    border: card.isStaffing
                      ? "2px solid var(--blue)"
                      : "1px solid var(--line)",
                    borderRadius: "28px",
                    padding: "38px",
                    boxShadow: card.isStaffing
                      ? "0 20px 50px rgba(40, 75, 155, 0.16)"
                      : "0 14px 35px rgba(0,0,0,0.06)",
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  {card.isStaffing && (
                    <div
                      style={{
                        position: "absolute",
                        top: "-14px",
                        right: "30px",
                        background: "var(--blue)",
                        color: "#fff",
                        padding: "4px 16px",
                        borderRadius: "999px",
                        fontSize: "12px",
                        fontWeight: 800,
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                      }}
                    >
                      ★ Valor Agregado Exclusivo
                    </div>
                  )}

                  <div>
                    <div
                      style={{
                        color: card.isStaffing ? "var(--blue)" : "var(--muted)",
                        fontSize: "13px",
                        fontWeight: 800,
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        marginBottom: "8px",
                      }}
                    >
                      {card.subtitle}
                    </div>
                    <h3
                      style={{
                        fontSize: "24px",
                        fontWeight: 800,
                        color: "var(--blue-700)",
                        marginBottom: "12px",
                      }}
                    >
                      {card.title}
                    </h3>
                    <div
                      style={{
                        display: "inline-block",
                        background: card.isStaffing ? "var(--blue-700)" : "var(--bg)",
                        color: card.isStaffing ? "#fff" : "var(--blue-700)",
                        padding: "6px 14px",
                        borderRadius: "8px",
                        fontWeight: 800,
                        fontSize: "14px",
                        marginBottom: "18px",
                      }}
                    >
                      {card.priceTag}
                    </div>
                    <p
                      style={{
                        color: "var(--muted)",
                        fontSize: "16px",
                        lineHeight: 1.6,
                        marginBottom: "24px",
                      }}
                    >
                      {card.description}
                    </p>

                    <div style={{ display: "grid", gap: "12px", marginBottom: "30px" }}>
                      {card.features.map((feat, fIdx) => (
                        <div
                          key={fIdx}
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "10px",
                            fontSize: "15px",
                            color: "var(--ink)",
                          }}
                        >
                          <CheckCircle2
                            size={18}
                            style={{
                              color: "var(--blue)",
                              flexShrink: 0,
                              marginTop: "2px",
                            }}
                          />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    href="/contacto"
                    className={`btn ${card.isStaffing ? "btn-primary" : "btn-secondary"}`}
                    style={{
                      width: "100%",
                      color: card.isStaffing ? "#fff" : "var(--blue-700)",
                      borderColor: card.isStaffing ? "transparent" : "var(--blue)",
                    }}
                  >
                    {card.ctaText} <ArrowRight size={16} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4 Pilares de Productividad con Imágenes Realistas */}
        <section
          className="section-dark-soft"
          style={{ padding: "100px 0", color: "#fff" }}
        >
          <div className="container">
            <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 60px" }}>
              <div className="section-kicker light" style={{ justifyContent: "center" }}>
                Programa Integral
              </div>
              <h2
                style={{
                  fontSize: "clamp(2.2rem, 4.5vw, 3.4rem)",
                  lineHeight: 1.1,
                  margin: "14px 0",
                  color: "#fff",
                }}
              >
                Los 4 pilares para desbloquear la máxima productividad
              </h2>
              <p style={{ color: "#dbe7ff", fontSize: "18px", margin: "0 auto" }}>
                No creemos en cursos teóricos aislados. Diseñamos experiencias de
                aprendizaje aplicadas directamente al trabajo diario y orientadas a resultados concretos.
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "70px" }}>
              {pillars.map((pillar, index) => {
                const Icon = pillar.icon;
                const isEven = index % 2 === 0;
                return (
                  <article
                    key={index}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                      gap: "48px",
                      alignItems: "center",
                      background: "rgba(255, 255, 255, 0.05)",
                      border: "1px solid rgba(255, 255, 255, 0.12)",
                      borderRadius: "32px",
                      padding: "clamp(24px, 4vw, 44px)",
                      backdropFilter: "blur(12px)",
                    }}
                  >
                    {/* Contenido */}
                    <div style={{ order: isEven ? 1 : 2 }}>
                      <div
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "8px",
                          background: "rgba(40, 75, 155, 0.6)",
                          color: "#bcd0ff",
                          padding: "6px 14px",
                          borderRadius: "999px",
                          fontSize: "12px",
                          fontWeight: 800,
                          textTransform: "uppercase",
                          letterSpacing: "0.08em",
                          marginBottom: "18px",
                        }}
                      >
                        <Icon size={16} />
                        <span>{pillar.badge}</span>
                      </div>

                      <h3
                        style={{
                          fontSize: "clamp(1.7rem, 2.5vw, 2.3rem)",
                          color: "#fff",
                          marginBottom: "14px",
                          lineHeight: 1.2,
                        }}
                      >
                        {pillar.title}
                      </h3>

                      <p
                        style={{
                          color: "#e2ebff",
                          fontSize: "16px",
                          lineHeight: 1.6,
                          marginBottom: "24px",
                        }}
                      >
                        {pillar.summary}
                      </p>

                      <div style={{ display: "grid", gap: "12px" }}>
                        {pillar.items.map((item, iIdx) => (
                          <div
                            key={iIdx}
                            style={{
                              display: "flex",
                              alignItems: "flex-start",
                              gap: "12px",
                            }}
                          >
                            <CheckCircle2
                              size={18}
                              style={{
                                color: "#7da2ff",
                                flexShrink: 0,
                                marginTop: "3px",
                              }}
                            />
                            <span style={{ color: "#ffffff", fontSize: "15px", lineHeight: 1.5 }}>
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Imagen Realista */}
                    <div
                      style={{
                        order: isEven ? 2 : 1,
                        borderRadius: "24px",
                        overflow: "hidden",
                        boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                        border: "1px solid rgba(255,255,255,0.15)",
                        height: "100%",
                        minHeight: "280px",
                        maxHeight: "380px",
                      }}
                    >
                      <img
                        src={pillar.image}
                        alt={pillar.imageAlt}
                        loading="lazy"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          display: "block",
                        }}
                      />
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Metodología de Acompañamiento */}
        <section className="section-light" style={{ padding: "90px 0" }}>
          <div className="container">
            <div style={{ textAlign: "center", maxWidth: "760px", margin: "0 auto 50px" }}>
              <div className="section-kicker" style={{ justifyContent: "center" }}>
                Cómo lo hacemos
              </div>
              <h2 style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", margin: "14px 0" }}>
                Un proceso continuo que transforma hábitos de trabajo
              </h2>
              <p className="diff-lead" style={{ margin: "0 auto" }}>
                No dejamos al talento solo con videos o material teórico; aseguramos
                adopción real mediante mentoría, feedback y métricas de avance.
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: "24px",
              }}
            >
              {methodologySteps.map((m, idx) => (
                <article
                  key={idx}
                  style={{
                    background: "var(--bg)",
                    border: "1px solid var(--line)",
                    borderRadius: "24px",
                    padding: "32px 26px",
                    position: "relative",
                  }}
                >
                  <span
                    style={{
                      display: "inline-block",
                      fontSize: "32px",
                      fontWeight: 900,
                      color: "var(--blue)",
                      marginBottom: "14px",
                      fontFamily: "Space Grotesk, sans-serif",
                    }}
                  >
                    {m.step}
                  </span>
                  <h3
                    style={{
                      fontSize: "20px",
                      fontWeight: 800,
                      color: "var(--blue-700)",
                      marginBottom: "10px",
                    }}
                  >
                    {m.title}
                  </h3>
                  <p style={{ color: "var(--muted)", fontSize: "15px", lineHeight: 1.6, margin: 0 }}>
                    {m.desc}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Banner CTA Final */}
        <section className="guarantee section-blue">
          <div className="container guarantee-box">
            <div>
              <div className="section-kicker light">Acelera tus resultados</div>
              <h2>¿Listo para multiplicar la capacidad productiva de tu equipo?</h2>
              <p>
                Ya sea que busques capacitar a tus profesionales internos o
                incorporar talentos de staffing con formación continua gratuita,
                conversemos sobre tu desafío.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", alignItems: "flex-start" }}>
              <Link className="btn btn-primary" href="/contacto" style={{ width: "100%" }}>
                Agendar diagnóstico de productividad <ArrowRight size={18} />
              </Link>
              <a
                href="tel:+56957876174"
                className="btn btn-secondary"
                style={{ width: "100%" }}
              >
                <Phone size={18} /> Llamar a un consultor
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="site-footer">
        <div className="container footer-inner">
          <img src={LOGO_URL} alt="Logo 4AGILE" />
          <p>4AGILE · Productividad, outsourcing de talentos y hunting especializado.</p>
          <a href="#inicio">Volver arriba</a>
        </div>
      </footer>
    </div>
  );
}
