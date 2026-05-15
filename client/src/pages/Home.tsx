import { useState } from "react";
import { useLocation, Link } from "wouter";
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  Clock3,
  Handshake,
  Mail,
  Phone,
  Search,
  ShieldCheck,
  Target,
  UsersRound,
} from "lucide-react";

const LOGO_URL =
  "https://files.manuscdn.com/user_upload_by_module/session_file/310519663522518131/WbYuRCsZwwbLteMC.png";
const HERO_URL =
  "https://files.manuscdn.com/user_upload_by_module/session_file/310519663522518131/mRkESQxeYuKpdQTF.png";

const serviceCards = [
  {
    icon: UsersRound,
    title: "Outsourcing de talentos",
    label: "Capacidad especializada bajo demanda",
    copy: "Integramos profesionales contratados y acompañados por 4AGILE para reforzar equipos críticos en tecnología, agilidad, data, soporte, producto y gestión. El foco no es solo cubrir una silla, sino sumar capacidad productiva con seguimiento, mentoría y continuidad.",
    cta: "Necesito talentos para mi equipo",
  },
  {
    icon: Search,
    title: "Hunting de talentos",
    label: "Búsqueda precisa de perfiles clave",
    copy: "Encontramos, evaluamos y presentamos candidatos alineados al perfil técnico, contexto cultural y objetivos del negocio. Aplicamos selección experta para reducir tiempo, riesgo y fricción en contrataciones estratégicas.",
    cta: "Quiero buscar un perfil clave",
  },
];

const differentiators = [
  [
    "< 5 días",
    "Presentación rápida de perfiles evaluados para necesidades críticas.",
  ],
  [
    "< 1%",
    "Rotación histórica gracias a motivación, seguimiento y acompañamiento real.",
  ],
  [
    "1er mes",
    "Garantía: si el talento no cumple expectativas, ese mes no se paga.",
  ],
  [
    "Mentoría",
    "Consultores expertos acompañan a talentos y clientes después de la incorporación.",
  ],
  [
    "Custom",
    "Servicio flexible según cultura, madurez, urgencia y objetivos de negocio.",
  ],
  [
    "Menos riesgo",
    "Reducimos carga administrativa, tiempos de búsqueda y riesgo de contratación.",
  ],
];

const process = [
  [
    "01",
    "Escuchamos",
    "Entendemos tu necesidad, urgencia, cultura, stack, objetivos y perfil ideal.",
  ],
  [
    "02",
    "Buscamos",
    "Activamos hunting, screening y evaluación para encontrar talento realmente alineado.",
  ],
  [
    "03",
    "Presentamos",
    "Entregamos perfiles filtrados y entrevistados y listos para entrevista en un plazo ágil.",
  ],
  [
    "04",
    "Acompañamos",
    "Facilitamos incorporación, seguimiento, mentorías, coaching y mejora continua.",
  ],
];

const specialties = [
  "Desarrollo de productos digitales",
  "Agile Coaches, Scrum Masters y Product Owners",
  "Data, IA y Business Intelligence",
  "QA, automatización y continuidad tecnológica",
  "Infraestructura, redes, soporte y aplicaciones",
  "Liderazgo, gestión y transformación operativa",
];

export default function Home() {
  const [, setLocation] = useLocation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      // Usar la ruta del archivo estático generado en el index.html
      // para asegurar que el enrutamiento SSR no intercepte el POST
      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as any).toString(),
      });

      if (response.ok) {
        setIsSuccess(true);
        form.reset();
      } else {
        console.error("Error enviando formulario:", response.statusText);
        alert(
          "Hubo un problema al enviar el formulario. Por favor, intenta de nuevo.",
        );
      }
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      alert(
        "Hubo un problema de conexión al enviar el formulario. Por favor, intenta de nuevo.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="site-shell">
      <header className="site-header" aria-label="Navegación principal">
        <a className="brand" href="#inicio" aria-label="4AGILE inicio">
          <img src={LOGO_URL} alt="Logo 4AGILE" />
          <span>4AGILE</span>
        </a>
        <nav className="nav-links" aria-label="Secciones del sitio">
          <a href="#servicios">Servicios</a>
          <a href="#diferenciales">Diferenciales</a>
          <a href="#proceso">Proceso</a>
          <a href="#especialidades">Especialidades</a>
          <a href="#formacion">Formación</a>
          <Link href="/blog">Blog</Link>
          <a className="nav-cta" href="#contacto">
            Conversemos
          </a>
        </nav>
      </header>

      <main id="inicio">
        <section
          className="hero section-dark"
          style={{ backgroundImage: `url(${HERO_URL})` }}
        >
          <div className="hero-overlay" />
          <div className="hero-content container">
            <div className="eyebrow">
              STAFFING REFORMER • OUTSOURCING ESPECIALIZADO
            </div>
            <h1>
              Talento que transforma, acelera y marca la diferencia desde el
              primer día.
            </h1>
            <p className="hero-copy">
              En 4AGILE ayudamos a empresas a incorporar talento especializado
              mediante dos servicios principales:{" "}
              <strong>outsourcing de talentos</strong> para sumar capacidad
              operativa y <strong>hunting de talentos</strong> para encontrar
              perfiles clave con precisión, velocidad y acompañamiento experto.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#contacto">
                Solicitar talento <ArrowRight size={18} />
              </a>
              <a className="btn btn-secondary" href="tel:+56957876174">
                Llamar ahora
              </a>
            </div>
            <div
              className="hero-proof"
              aria-label="Indicadores principales de 4AGILE"
            >
              <article>
                <strong>&lt; 5 días</strong>
                <span>para presentar perfiles evaluados</span>
              </article>
              <article>
                <strong>&lt; 1%</strong>
                <span>rotación histórica de talentos</span>
              </article>
              <article>
                <strong>1er mes</strong>
                <span>gratis si el perfil no cumple expectativas</span>
              </article>
            </div>
          </div>
        </section>

        <section className="intro container" id="servicios">
          <div className="section-kicker">Servicios principales</div>
          <div className="split">
            <div>
              <h2>
                Dos soluciones para resolver el reto más difícil: encontrar y
                sostener talento que entregue valor.
              </h2>
            </div>
            <div>
              <p>
                4AGILE combina búsqueda especializada, evaluación, contratación,
                integración y acompañamiento continuo. Nuestro diferencial está
                en mirar el talento como una capacidad estratégica, no como una
                transacción aislada.
              </p>
              <p>
                Ya sea que necesites reforzar un equipo con outsourcing o
                encontrar un perfil crítico mediante hunting, diseñamos el
                servicio según tu contexto, urgencia, cultura y objetivos.
              </p>
            </div>
          </div>

          <div className="primary-services">
            {serviceCards.map((service) => {
              const Icon = service.icon;
              return (
                <article className="primary-service-card" key={service.title}>
                  <div className="service-topline">
                    <Icon size={34} />
                    <span>{service.label}</span>
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.copy}</p>
                  <a href="#contacto">
                    {service.cta} <ArrowRight size={17} />
                  </a>
                </article>
              );
            })}
          </div>
        </section>

        <section className="model-band section-blue" id="proceso">
          <div className="container grid-4">
            {process.map(([number, title, copy]) => (
              <article key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="differentiators section-light" id="diferenciales">
          <div className="container">
            <div className="section-kicker">Diferenciadores</div>
            <h2>
              Outsourcing y hunting con garantía, seguimiento y criterio
              experto.
            </h2>
            <p className="diff-lead">
              Nos diferenciamos porque no enviamos currículums en volumen ni
              abandonamos el proceso después de la contratación. Curamos
              perfiles, reducimos riesgos y acompañamos la integración para que
              el talento funcione en el contexto real del negocio.
            </p>
            <div className="diff-grid">
              {differentiators.map(([metric, copy]) => (
                <article key={metric}>
                  <strong>{metric}</strong>
                  <span>{copy}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="values container" id="especialidades">
          <div className="values-copy">
            <div className="section-kicker">Especialidades</div>
            <h2>
              Perfiles para las áreas que sostienen la transformación digital y
              operacional.
            </h2>
            <p>
              Trabajamos con perfiles técnicos, ágiles y de gestión que permiten
              acelerar iniciativas, estabilizar operaciones, escalar productos y
              fortalecer equipos existentes.
            </p>
          </div>
          <div className="value-list specialty-list">
            {specialties.map((item) => (
              <article key={item}>
                <BadgeCheck size={23} />
                <h3>{item}</h3>
              </article>
            ))}
          </div>
        </section>

        <section className="intro container" id="formacion">
          <div className="section-kicker">Qué enseñamos</div>
          <div className="split">
            <div>
              <h2>
                Formación continua y mentalidad de Silicon Valley para nuestros
                talentos y tus equipos.
              </h2>
            </div>
            <div>
              <p>
                El foco de 4AGILE está en las habilidades. Formamos a las
                personas que trabajan con nosotros con cursos online de{" "}
                <strong>Inteligencia Artificial</strong>, nivelación en brechas
                tecnológicas y{" "}
                <strong>coaching personalizado en habilidades blandas</strong>.
                Esta misma experiencia de aprendizaje la ofrecemos a través de{" "}
                <strong>talleres de formación para empresas</strong>.
              </p>
              <p>
                Utilizamos nuestro propio <em>Handbook</em> para instalar la
                mentalidad de Silicon Valley en nuestros talentos desplegados,
                impulsando la innovación y productividad que también
                transmitimos a nuestros clientes. Además, como pioneros en la
                enseñanza de agilidad (a través de nuestra iniciativa hermana{" "}
                <a
                  href="https://agilefactor.digital"
                  target="_blank"
                  rel="noopener"
                  style={{
                    color: "var(--blue)",
                    textDecoration: "underline",
                    fontWeight: "600",
                  }}
                >
                  Agilefactor
                </a>
                ), somos especialistas en mindset ágil más allá de los equipos
                TI. Esto no es solo lo que enseñamos, es nuestra forma de operar
                y generar valor.
              </p>
            </div>
          </div>
        </section>

        <section className="case-studies section-dark-soft">
          <div className="container">
            <div className="section-kicker">Nuestra forma de trabajar</div>
            <h2>Una experiencia de talento más rápida, cercana y medible.</h2>
            <div className="case-grid">
              <article>
                <span>Outsourcing</span>
                <h3>Talento integrado, no tercerización distante</h3>
                <p>
                  Los profesionales trabajan conectados al cliente y acompañados
                  por 4AGILE para mantener desempeño, motivación y continuidad.
                </p>
              </article>
              <article>
                <span>Hunting</span>
                <h3>Selección antes que volumen</h3>
                <p>
                  Buscamos perfiles alineados al contexto técnico y cultural,
                  reduciendo entrevistas improductivas y tiempo de decisión.
                </p>
              </article>
              <article>
                <span>Acompañamiento</span>
                <h3>Seguimiento posterior a la incorporación</h3>
                <p>
                  Mentorías, feedback y comunicación cercana con talentos y
                  líderes para asegurar adopción y resultados.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="testimonials container">
          <div className="section-kicker">Confianza</div>
          <h2>
            Un partner para líderes que necesitan talento confiable y ejecución
            sostenida.
          </h2>
          <div className="testimonial-grid compact-proof">
            <blockquote>
              <Target size={28} />
              <p>
                Perfiles alineados al objetivo, urgencia y cultura de cada
                organización.
              </p>
            </blockquote>
            <blockquote>
              <ShieldCheck size={28} />
              <p>
                Garantía comercial y reducción de riesgo en la incorporación de
                talento.
              </p>
            </blockquote>
            <blockquote>
              <Handshake size={28} />
              <p>
                Acompañamiento humano para cliente y talento durante la
                relación.
              </p>
            </blockquote>
          </div>
        </section>

        <section className="guarantee section-blue">
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

        <section className="contact container" id="contacto">
          <div className="contact-card">
            <div>
              <div className="section-kicker">Conversemos</div>
              <h2>Cuéntanos qué talento necesitas incorporar o encontrar.</h2>
              <p>
                Completa el formulario y dinos si buscas outsourcing de
                talentos, hunting de talentos o ambos. Revisaremos tu necesidad
                y coordinaremos una conversación inicial.
              </p>
              <div className="contact-methods">
                <a href="tel:+56957876174">
                  <Phone size={18} /> +56 9 5787 6174
                </a>
                <a href="mailto:contacto@4agile.cl">
                  <Mail size={18} /> contacto@4agile.cl
                </a>
                <a href="https://www.4agile.cl" target="_blank" rel="noopener">
                  www.4agile.cl
                </a>
              </div>
            </div>
            {isSuccess ? (
              <div
                className="lead-form"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  padding: "40px 20px",
                  gap: "16px",
                  background: "#fff",
                  borderRadius: "24px",
                  border: "1px solid var(--line)",
                  boxShadow: "var(--shadow)",
                }}
              >
                <div
                  style={{
                    width: "64px",
                    height: "64px",
                    borderRadius: "50%",
                    backgroundColor: "var(--blue)",
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "8px",
                  }}
                >
                  <BadgeCheck size={36} />
                </div>
                <h3
                  style={{
                    margin: 0,
                    fontSize: "24px",
                    color: "var(--blue-700)",
                  }}
                >
                  ¡Mensaje enviado!
                </h3>
                <p style={{ margin: 0, color: "var(--muted)" }}>
                  Gracias por contactarnos. Nuestro equipo revisará tu solicitud
                  y se comunicará contigo a la brevedad.
                </p>
                <button
                  className="btn btn-primary"
                  style={{ marginTop: "16px" }}
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
                <input type="hidden" name="form-name" value="contacto-4agile" />
                <input
                  type="hidden"
                  name="subject"
                  value="Propsecto del sitio web 4agile.cl"
                />
                <p className="hidden-field" style={{ display: "none" }}>
                  <label>
                    No completar: <input name="bot-field" />
                  </label>
                </p>
                <label>
                  Nombre
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
                  Correo
                  <input
                    name="email"
                    type="email"
                    placeholder="tu@empresa.com"
                    required
                    disabled={isSubmitting}
                  />
                </label>
                <label>
                  Servicio de interés
                  <select
                    name="servicio"
                    defaultValue=""
                    required
                    disabled={isSubmitting}
                  >
                    <option value="" disabled>
                      Selecciona una opción
                    </option>
                    <option value="Outsourcing de talentos">
                      Outsourcing de talentos
                    </option>
                    <option value="Hunting de talentos">
                      Hunting de talentos
                    </option>
                    <option value="Outsourcing y hunting">
                      Outsourcing y hunting
                    </option>
                    <option value="Entrenamiento y talleres de formación">
                      Entrenamiento y talleres de formación
                    </option>
                    <option value="otros">otros</option>
                  </select>
                </label>
                <label>
                  ¿Qué necesitas?
                  <textarea
                    name="mensaje"
                    rows={4}
                    placeholder="Cuéntanos qué perfil, capacidad o desafío necesitas resolver"
                    required
                    disabled={isSubmitting}
                  />
                </label>
                <button
                  className="btn btn-primary"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Enviando..." : "Enviar solicitud"}{" "}
                  <ArrowRight size={18} />
                </button>
              </form>
            )}
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <img src={LOGO_URL} alt="Logo 4AGILE" />
          <p>4AGILE · Outsourcing de talentos y hunting especializado.</p>
          <a href="#inicio">Volver arriba</a>
        </div>
      </footer>
    </div>
  );
}
