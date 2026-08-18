import { useState } from "react";
import { Link } from "wouter";
import {
  Sparkles,
  Zap,
  Bot,
  BrainCircuit,
  Workflow,
  UsersRound,
  HeartHandshake,
  CheckCircle2,
  TrendingUp,
  Award,
  ArrowRight,
  ShieldCheck,
  GraduationCap,
  Layers,
  Code2,
  Compass,
  Gift,
  Building2,
  Cpu,
} from "lucide-react";
import { useSEO } from "../hooks/useSEO";
import Header from "../components/Header";

const LOGO_URL =
  "https://files.manuscdn.com/user_upload_by_module/session_file/310519663522518131/WbYuRCsZwwbLteMC.png";

// Imágenes realistas de alta calidad contextuales (Unsplash)
const IMAGES = {
  hero: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1600&q=80", // Modern collaborative tech coaching
  aiPillar:
    "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80", // AI & Future tech abstract realistic
  agilePillar:
    "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=80", // Agile team workshop
  softSkillsPillar:
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=80", // 1-on-1 mentoring / leadership
  techPillar:
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80", // Hands-on coding & engineering
  staffingFree:
    "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1000&q=80", // Confident integrated professional
  clientTalent:
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1000&q=80", // Corporate upskilling workshop
};

const trainingPillars = [
  {
    icon: Bot,
    title: "Inteligencia Artificial Práctica",
    badge: "GenAI & Automatización",
    image: IMAGES.aiPillar,
    description:
      "Capacitamos a los equipos para adoptar herramientas de IA generativa y automatización en su flujo diario de trabajo, multiplicando su capacidad de entrega sin perder control de calidad.",
    bullets: [
      "Asistentes de desarrollo y copilotos de código (GitHub Copilot, Cursor, LLMs especializados).",
      "Automatización de tareas repetitivas, redacción de especificaciones y análisis de requerimientos.",
      "Técnicas avanzadas de prompting y flujos de trabajo potenciados con IA para diseño, QA y gestión.",
      "Gobierno, seguridad de datos y buenas prácticas en el uso corporativo de Inteligencia Artificial.",
    ],
  },
  {
    icon: Workflow,
    title: "Gestión Ágil y Flujo Continuo",
    badge: "Scrum, Kanban & Lean",
    image: IMAGES.agilePillar,
    description:
      "Transformamos la teoría ágil en hábitos operativos concretos que reducen cuellos de botella, mejoran la predictibilidad y aceleran los ciclos de entrega de valor al cliente final.",
    bullets: [
      "Prácticas de refinamiento ágil, estimación realista y priorización implacable por valor de negocio.",
      "Optimización del flujo de entrega (Lead Time y Cycle Time) identificando desperdicios y bloqueos.",
      "Ceremonias ágiles de alto impacto: retros operativas que generan planes de acción inmediatos.",
      "Métricas reales de productividad y salud del equipo (WIP, Throughput, Flow Efficiency).",
    ],
  },
  {
    icon: HeartHandshake,
    title: "Habilidades Blandas e Interpersonales",
    badge: "Liderazgo & Comunicación",
    image: IMAGES.softSkillsPillar,
    description:
      "Un talento técnico brillante solo alcanza su máximo potencial cuando sabe comunicarse, negociar expectativas, trabajar en equipo y resolver desacuerdos constructivamente.",
    bullets: [
      "Comunicación efectiva y asertiva entre perfiles técnicos, producto y stakeholders de negocio.",
      "Gestión de compromisos, manejo del tiempo, autogestión y prevención del burnout.",
      "Resolución proactiva de fricciones y fomento de la seguridad psicológica en los equipos.",
      "Cultura de feedback continuo y pensamiento crítico para tomar decisiones informadas.",
    ],
  },
  {
    icon: Code2,
    title: "Excelencia Tecnológica y DevOps",
    badge: "Engineering Standards",
    image: IMAGES.techPillar,
    description:
      "Nivelamos y profundizamos los estándares de ingeniería de software, arquitectura moderna y cultura DevOps para construir soluciones robustas, escalables y mantenibles.",
    bullets: [
      "Arquitectura limpia, patrones de diseño modernos y buenas prácticas de Clean Code.",
      "Cultura de testing integral: TDD, automatización de pruebas y estrategias de aseguramiento de calidad.",
      "Integración y despliegue continuo (CI/CD) para entregas seguras y frecuentes a producción.",
      "Monitoreo, observabilidad y resiliencia en sistemas cloud nativos.",
    ],
  },
];

const modalities = [
  {
    title: "Talentos Staffing 4AGILE",
    subtitle: "Incluido sin costo adicional en el servicio",
    badge: "100% Bonificado / Gratis en Staffing",
    badgeClass: "badge-success",
    image: IMAGES.staffingFree,
    icon: Gift,
    highlight: true,
    description:
      "Cuando contratas profesionales mediante nuestro servicio de Outsourcing / Staffing, el entrenamiento continuo y el acompañamiento experto están completamente incluidos sin costo extra.",
    features: [
      "Mentoría semanal 1 a 1 impartida por consultores senior de 4AGILE.",
      "Capacitación continua en IA y herramientas tecnológicas de vanguardia.",
      "Seguimiento cercano de desempeño y alineación con la cultura del cliente.",
      "Garantía de actualización técnica constante sin sobrecostos para tu empresa.",
      "Aceleración inmediata de la curva de productividad desde la primera semana.",
    ],
    ctaText: "Solicitar talentos con entrenamiento incluido",
    ctaLink: "/contacto",
  },
  {
    title: "Talentos Internos del Cliente",
    subtitle: "Programas a la medida para tu equipo actual",
    badge: "Entrenamiento Corporativo",
    badgeClass: "badge-primary",
    image: IMAGES.clientTalent,
    icon: Building2,
    highlight: false,
    description:
      "Diseñamos programas de formación in-company y acompañamiento 'hands-on' adaptados a los retos específicos, stack tecnológico y nivel de madurez de tus propios colaboradores.",
    features: [
      "Diagnóstico inicial de brechas de productividad y competencias clave.",
      "Talleres prácticos basados en desafíos y proyectos reales de tu empresa.",
      "Coaching en vivo y sesiones de pair programming o asesoría ágil.",
      "Medición de impacto con métricas concretas antes y después del programa.",
      "Planes de adopción de Inteligencia Artificial para toda la organización.",
    ],
    ctaText: "Cotizar formación para mi equipo",
    ctaLink: "/contacto",
  },
];

const methodologySteps = [
  {
    step: "01",
    title: "Diagnóstico de Productividad",
    desc: "Evaluamos cuellos de botella, hábitos de entrega y nivel de adopción tecnológica y de IA en el equipo.",
  },
  {
    step: "02",
    title: "Plan de Acción Focalizado",
    desc: "Diseñamos la ruta de entrenamiento y mentoría combinando IA, agilidad, soft skills y habilidades técnicas.",
  },
  {
    step: "03",
    title: "Entrenamiento y Mentoría Activa",
    desc: "Sesiones prácticas sobre código y proyectos reales, evitando teoría abstracta y maximizando la retención.",
  },
  {
    step: "04",
    title: "Acompañamiento y Medición",
    desc: "Monitoreamos la evolución de la velocidad de entrega, satisfacción del cliente y calidad del trabajo.",
  },
];

export default function Productividad() {
  useSEO({
    title:
      "Mejoras en la Productividad con IA, Agilidad y Tecnologías | 4AGILE",
    description:
      "Impulsa la productividad de tus talentos mediante entrenamientos y acompañamiento en Inteligencia Artificial, agilidad, habilidades blandas y excelencia técnica. Gratis para talentos de Staffing 4AGILE o a medida para tu equipo.",
    canonicalPath: "/productividad",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as any).toString(),
      });

      if (response.ok) {
        setIsSuccess(true);
        form.reset();
      } else {
        alert(
          "Hubo un problema al enviar el formulario. Por favor, intenta de nuevo.",
        );
      }
    } catch (error) {
      alert(
        "Hubo un problema de conexión al enviar el formulario. Por favor, intenta de nuevo.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="site-shell">
      <Header />

      <main id="inicio">
        {/* HERO SECTION PRODUCTIVIDAD */}
        <section
          className="hero section-dark"
          style={{
            backgroundImage: `url(${IMAGES.hero})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="hero-overlay" />
          <div className="hero-content container">
            <div className="eyebrow">
              POTENCIA EL RENDIMIENTO • ENTRENAMIENTOS & ACOMPAÑAMIENTOS
            </div>
            <h1 style={{ maxWidth: "980px" }}>
              Mejoras tangibles en la productividad de tus talentos
            </h1>
            <p className="hero-copy" style={{ maxWidth: "820px" }}>
              Entrenamos y acompañamos a los profesionales en{" "}
              <strong>Inteligencia Artificial</strong>,{" "}
              <strong>gestión ágil</strong>,{" "}
              <strong>habilidades blandas</strong> y{" "}
              <strong>excelencia tecnológica</strong> para acelerar los
              resultados de tu negocio.
            </p>

            <div className="hero-actions">
              <a href="#modalidades" className="btn btn-primary">
                Ver Modalidades y Beneficios <ArrowRight size={18} />
              </a>
              <a href="#pilares" className="btn btn-secondary">
                Conocer Áreas de Entrenamiento
              </a>
            </div>

            <div className="hero-proof" style={{ marginTop: "48px" }}>
              <div>
                <strong style={{ color: "#38bdf8" }}>+40%</strong>
                <span>
                  Incremento en velocidad de entrega con herramientas de IA
                </span>
              </div>
              <div>
                <strong style={{ color: "#4ade80" }}>100% Gratis</strong>
                <span>
                  En talentos ofertados mediante Staffing / Outsourcing 4AGILE
                </span>
              </div>
              <div>
                <strong style={{ color: "#facc15" }}>Hands-on</strong>
                <span>
                  Acompañamiento y mentoría sobre desafíos reales del cliente
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* INTRODUCCIÓN Y PROPÓSITO */}
        <section className="section-light">
          <div className="container">
            <div style={{ maxWidth: "860px", margin: "0 auto", textAlign: "center" }}>
              <div className="section-kicker">Nuestra Propuesta de Valor</div>
              <h2
                style={{
                  fontSize: "clamp(2rem, 3.5vw, 2.75rem)",
                  lineHeight: 1.15,
                  marginBottom: "20px",
                  color: "var(--blue-900)",
                }}
              >
                No basta con contratar talento; hay que potenciarlo
                continuamente
              </h2>
              <p
                style={{
                  fontSize: "1.15rem",
                  color: "var(--muted)",
                  lineHeight: 1.7,
                }}
              >
                En un entorno donde la tecnología y la Inteligencia Artificial
                evolucionan cada semana, la ventaja competitiva de una empresa
                depende de la capacidad de sus personas para asimilar nuevas
                habilidades, comunicarse sin fricciones y entregar valor de forma
                ágil. En <strong>4AGILE</strong> nos aseguramos de que cada
                profesional cuente con el respaldo, las herramientas y la
                mentoría necesaria para maximizar su impacto en tus proyectos.
              </p>
            </div>
          </div>
        </section>

        {/* PILARES DE ENTRENAMIENTO */}
        <section id="pilares" className="container" style={{ padding: "40px 0 90px" }}>
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <div className="section-kicker">Habilidades Clave</div>
            <h2
              style={{
                fontSize: "clamp(2rem, 3.5vw, 2.6rem)",
                color: "var(--blue-900)",
                marginBottom: "16px",
              }}
            >
              Los 4 Pilares del Desarrollo de Productividad
            </h2>
            <p
              style={{
                maxWidth: "720px",
                margin: "0 auto",
                color: "var(--muted)",
                fontSize: "1.1rem",
              }}
            >
              Combinamos tecnología de punta con destrezas humanas y
              metodologías comprobadas para un crecimiento integral.
            </p>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "48px",
            }}
          >
            {trainingPillars.map((pillar, index) => {
              const Icon = pillar.icon;
              const isEven = index % 2 === 0;
              return (
                <article
                  key={pillar.title}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                    gap: "40px",
                    alignItems: "center",
                    padding: "36px",
                    background: "#fff",
                    borderRadius: "28px",
                    border: "1px solid var(--line)",
                    boxShadow: "var(--shadow)",
                  }}
                >
                  <div style={{ order: isEven ? 1 : 2 }}>
                    <div
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "8px",
                        padding: "6px 14px",
                        borderRadius: "999px",
                        background: "rgba(40, 75, 155, 0.08)",
                        color: "var(--blue-700)",
                        fontSize: "0.85rem",
                        fontWeight: 800,
                        marginBottom: "16px",
                      }}
                    >
                      <Icon size={16} />
                      <span>{pillar.badge}</span>
                    </div>

                    <h3
                      style={{
                        fontSize: "1.85rem",
                        color: "var(--blue-900)",
                        marginBottom: "16px",
                        lineHeight: 1.25,
                      }}
                    >
                      {pillar.title}
                    </h3>

                    <p
                      style={{
                        color: "var(--muted)",
                        fontSize: "1.05rem",
                        lineHeight: 1.6,
                        marginBottom: "24px",
                      }}
                    >
                      {pillar.description}
                    </p>

                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "12px",
                      }}
                    >
                      {pillar.bullets.map((bullet, i) => (
                        <div
                          key={i}
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "12px",
                            fontSize: "0.95rem",
                            color: "#334155",
                          }}
                        >
                          <CheckCircle2
                            size={18}
                            style={{
                              color: "var(--blue)",
                              flexShrink: 0,
                              marginTop: "3px",
                            }}
                          />
                          <span>{bullet}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div
                    style={{
                      order: isEven ? 2 : 1,
                      overflow: "hidden",
                      borderRadius: "20px",
                      boxShadow: "0 12px 30px rgba(0, 0, 0, 0.08)",
                    }}
                  >
                    <img
                      src={pillar.image}
                      alt={pillar.title}
                      style={{
                        width: "100%",
                        height: "360px",
                        objectFit: "cover",
                        transition: "transform 0.4s ease",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.transform = "scale(1.03)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.transform = "scale(1)")
                      }
                    />
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* SECCIÓN DE MODALIDADES: CLIENTE VS STAFFING (GRATIS) */}
        <section
          id="modalidades"
          className="section-dark-soft"
          style={{ padding: "100px 0" }}
        >
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: "60px" }}>
              <div
                className="section-kicker"
                style={{ color: "#93c5fd" }}
              >
                ¿A quiénes entrenamos?
              </div>
              <h2
                style={{
                  fontSize: "clamp(2rem, 3.8vw, 2.8rem)",
                  color: "#fff",
                  marginBottom: "18px",
                }}
              >
                Dos Modalidades de Entrenamiento y Acompañamiento
              </h2>
              <p
                style={{
                  maxWidth: "760px",
                  margin: "0 auto",
                  color: "#cbd5e1",
                  fontSize: "1.15rem",
                }}
              >
                Brindamos formación de alto impacto tanto a los profesionales que
                sumas a través de nuestro Staffing como a los equipos internos que
                ya operan en tu empresa.
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
                gap: "32px",
                alignItems: "stretch",
              }}
            >
              {modalities.map((modality) => {
                const Icon = modality.icon;
                return (
                  <div
                    key={modality.title}
                    style={{
                      background: modality.highlight
                        ? "linear-gradient(180deg, rgba(30, 58, 138, 0.85), rgba(15, 23, 42, 0.95))"
                        : "rgba(255, 255, 255, 0.06)",
                      border: modality.highlight
                        ? "2px solid #60a5fa"
                        : "1px solid rgba(255, 255, 255, 0.15)",
                      borderRadius: "28px",
                      overflow: "hidden",
                      display: "flex",
                      flexDirection: "column",
                      boxShadow: modality.highlight
                        ? "0 20px 50px rgba(37, 99, 235, 0.25)"
                        : "0 10px 30px rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    <div style={{ height: "200px", overflow: "hidden" }}>
                      <img
                        src={modality.image}
                        alt={modality.title}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </div>

                    <div
                      style={{
                        padding: "36px",
                        display: "flex",
                        flexDirection: "column",
                        flex: 1,
                      }}
                    >
                      <div
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "8px",
                          alignSelf: "flex-start",
                          padding: "6px 14px",
                          borderRadius: "999px",
                          background: modality.highlight
                            ? "rgba(34, 197, 94, 0.2)"
                            : "rgba(59, 130, 246, 0.2)",
                          color: modality.highlight ? "#4ade80" : "#93c5fd",
                          border: modality.highlight
                            ? "1px solid rgba(74, 222, 128, 0.4)"
                            : "1px solid rgba(147, 197, 253, 0.3)",
                          fontSize: "0.85rem",
                          fontWeight: 800,
                          marginBottom: "16px",
                        }}
                      >
                        <Icon size={16} />
                        <span>{modality.badge}</span>
                      </div>

                      <h3
                        style={{
                          fontSize: "1.75rem",
                          color: "#fff",
                          marginBottom: "6px",
                        }}
                      >
                        {modality.title}
                      </h3>
                      <div
                        style={{
                          fontSize: "0.95rem",
                          color: "#94a3b8",
                          marginBottom: "18px",
                          fontWeight: 600,
                        }}
                      >
                        {modality.subtitle}
                      </div>

                      <p
                        style={{
                          color: "#e2e8f0",
                          fontSize: "1rem",
                          lineHeight: 1.6,
                          marginBottom: "24px",
                        }}
                      >
                        {modality.description}
                      </p>

                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "12px",
                          marginBottom: "32px",
                          flex: 1,
                        }}
                      >
                        {modality.features.map((feat, idx) => (
                          <div
                            key={idx}
                            style={{
                              display: "flex",
                              alignItems: "flex-start",
                              gap: "10px",
                              fontSize: "0.92rem",
                              color: "#cbd5e1",
                            }}
                          >
                            <CheckCircle2
                              size={17}
                              style={{
                                color: modality.highlight
                                  ? "#4ade80"
                                  : "#60a5fa",
                                flexShrink: 0,
                                marginTop: "3px",
                              }}
                            />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>

                      <Link
                        href={modality.ctaLink}
                        className={
                          modality.highlight
                            ? "btn btn-primary"
                            : "btn btn-secondary"
                        }
                        style={{ width: "100%", textAlign: "center" }}
                      >
                        {modality.ctaText} <ArrowRight size={18} />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* METODOLOGÍA DE ACOMPAÑAMIENTO */}
        <section className="section-light">
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: "60px" }}>
              <div className="section-kicker">Metodología 4AGILE</div>
              <h2
                style={{
                  fontSize: "clamp(2rem, 3.5vw, 2.6rem)",
                  color: "var(--blue-900)",
                  marginBottom: "16px",
                }}
              >
                ¿Cómo implementamos el acompañamiento?
              </h2>
              <p
                style={{
                  maxWidth: "720px",
                  margin: "0 auto",
                  color: "var(--muted)",
                  fontSize: "1.1rem",
                }}
              >
                Un proceso continuo, estructurado y medible diseñado para
                garantizar resultados prácticos y sostenibles.
              </p>
            </div>

            <div className="grid-4" style={{ gap: "24px" }}>
              {methodologySteps.map((m) => (
                <article
                  key={m.step}
                  style={{
                    background: "var(--bg)",
                    border: "1px solid var(--line)",
                    padding: "32px 26px",
                    borderRadius: "24px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "2rem",
                      fontWeight: 900,
                      color: "var(--blue)",
                      display: "block",
                      marginBottom: "12px",
                      lineHeight: 1,
                    }}
                  >
                    {m.step}
                  </span>
                  <h3
                    style={{
                      fontSize: "1.25rem",
                      color: "var(--blue-900)",
                      marginBottom: "10px",
                    }}
                  >
                    {m.title}
                  </h3>
                  <p style={{ color: "var(--muted)", fontSize: "0.95rem" }}>
                    {m.desc}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* FORMULARIO DE CONTACTO PARA PRODUCTIVIDAD */}
        <section
          id="contacto"
          className="contact section-light"
          style={{ background: "var(--bg)", paddingTop: "40px" }}
        >
          <div className="container">
            <div className="contact-card">
              <div>
                <div className="section-kicker">Conversemos</div>
                <h2
                  style={{
                    fontSize: "2.5rem",
                    lineHeight: 1.15,
                    marginBottom: "18px",
                  }}
                >
                  Aumenta la productividad de tu equipo hoy
                </h2>
                <p
                  style={{
                    color: "var(--muted)",
                    fontSize: "1.1rem",
                    lineHeight: 1.6,
                    marginBottom: "28px",
                  }}
                >
                  Cuéntanos si deseas incorporar talentos de staffing con
                  entrenamiento en IA y agilidad 100% bonificado, o si buscas un
                  plan de upskilling y acompañamiento para tu equipo interno.
                </p>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      color: "var(--blue-700)",
                      fontWeight: 700,
                    }}
                  >
                    <ShieldCheck size={22} />
                    <span>Sin costo extra para talentos de Staffing</span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      color: "var(--blue-700)",
                      fontWeight: 700,
                    }}
                  >
                    <GraduationCap size={22} />
                    <span>Mentorías 1 a 1 por consultores expertos</span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      color: "var(--blue-700)",
                      fontWeight: 700,
                    }}
                  >
                    <TrendingUp size={22} />
                    <span>Resultados medibles en calidad y velocidad</span>
                  </div>
                </div>
              </div>

              <div>
                {isSuccess ? (
                  <div
                    style={{
                      background: "rgba(34, 197, 94, 0.08)",
                      border: "1px solid #86efac",
                      borderRadius: "20px",
                      padding: "36px",
                      textAlign: "center",
                    }}
                  >
                    <CheckCircle2
                      size={48}
                      style={{ color: "#16a34a", margin: "0 auto 16px" }}
                    />
                    <h3 style={{ fontSize: "1.5rem", marginBottom: "8px" }}>
                      ¡Mensaje enviado con éxito!
                    </h3>
                    <p style={{ color: "var(--muted)", marginBottom: "24px" }}>
                      Nos pondremos en contacto contigo a la brevedad para
                      conversar sobre tus metas de productividad.
                    </p>
                    <button
                      className="btn btn-primary"
                      onClick={() => setIsSuccess(false)}
                    >
                      Enviar otro mensaje
                    </button>
                  </div>
                ) : (
                  <form
                    className="lead-form"
                    name="contacto-4agile"
                    method="POST"
                    data-netlify="true"
                    netlify-honeypot="bot-field"
                    onSubmit={handleSubmit}
                  >
                    <input
                      type="hidden"
                      name="form-name"
                      value="contacto-4agile"
                    />
                    <input
                      type="hidden"
                      name="subject"
                      value="Consulta de Mejoras en la Productividad - 4agile.cl"
                    />
                    <p className="hidden-field" style={{ display: "none" }}>
                      <label>
                        No completar: <input name="bot-field" />
                      </label>
                    </p>
                    <label>
                      Nombre completo
                      <input
                        name="nombre"
                        type="text"
                        placeholder="Tu nombre"
                        required
                        disabled={isSubmitting}
                      />
                    </label>
                    <label>
                      Empresa
                      <input
                        name="empresa"
                        type="text"
                        placeholder="Nombre de la empresa"
                        disabled={isSubmitting}
                      />
                    </label>
                    <label>
                      Teléfono
                      <input
                        name="telefono"
                        type="tel"
                        placeholder="Tu teléfono (opcional)"
                        disabled={isSubmitting}
                      />
                    </label>
                    <label>
                      Correo electrónico
                      <input
                        name="email"
                        type="email"
                        placeholder="tu@empresa.com"
                        required
                        disabled={isSubmitting}
                      />
                    </label>
                    <label>
                      Modalidad de interés
                      <select
                        name="servicio"
                        defaultValue="Entrenamiento y talleres de formación"
                        required
                        disabled={isSubmitting}
                      >
                        <option value="Entrenamiento y talleres de formación">
                          Mejoras en la Productividad / Entrenamiento
                        </option>
                        <option value="Outsourcing de talentos">
                          Staffing / Outsourcing con entrenamiento incluido
                        </option>
                        <option value="Hunting de talentos">
                          Hunting de talentos
                        </option>
                        <option value="otros">Otros desafíos</option>
                      </select>
                    </label>
                    <label>
                      ¿Qué desafío o meta de productividad buscas resolver?
                      <textarea
                        name="mensaje"
                        rows={4}
                        placeholder="Cuéntanos sobre tu equipo, metas en IA, agilidad o necesidades técnicas..."
                        required
                        disabled={isSubmitting}
                      />
                    </label>
                    <button
                      className="btn btn-primary"
                      type="submit"
                      disabled={isSubmitting}
                    >
                      {isSubmitting
                        ? "Enviando..."
                        : "Solicitar asesoría de productividad"}{" "}
                      <ArrowRight size={18} />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <img src={LOGO_URL} alt="Logo 4AGILE" />
          <p>4AGILE · Outsourcing de talentos, productividad y hunting especializado.</p>
          <a href="#inicio">Volver arriba</a>
        </div>
      </footer>
    </div>
  );
}
