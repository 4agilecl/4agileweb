import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { useSEO } from "../hooks/useSEO";

const articles = [
  {
    slug: "ciberseguridad-cloud-chile-protegiendo-infraestructura-critica-nube",
    title: "Ciberseguridad Cloud en Chile: Protegiendo la Infraestructura Crítica en la Nube",
    excerpt: "Descubre cómo la ciberseguridad cloud en Chile protege la infraestructura crítica en la nube, reduce riesgos de configuración y asegura la continuidad del negocio.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80",
    date: "2026-06-27",
    category: "Ciberseguridad",
    tags: ["Ciberseguridad Cloud", "Infraestructura Crítica", "Chile", "Nube", "Cumplimiento"],
    metaDescription: "Descubre cómo la ciberseguridad cloud en Chile protege la infraestructura crítica en la nube, reduce riesgos y asegura la continuidad del negocio. ¡Conversemos!"
  },
  {
    slug: "modernizacion-aplicaciones-estrategias-transformacion-digital-empresas-chilenas",
    title: "Modernización de Aplicaciones: Estrategias para la Transformación Digital de Empresas Chilenas",
    excerpt: "Conoce las estrategias de modernización de aplicaciones que impulsan la transformación digital de empresas chilenas sin frenar la operación ni aumentar la deuda técnica.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    date: "2026-06-27",
    category: "Desarrollo y Modernización",
    tags: ["Modernización de Aplicaciones", "Transformación Digital", "Empresas Chilenas", "Cloud", "Legacy"],
    metaDescription: "Conoce las estrategias de modernización de aplicaciones que impulsan la transformación digital de empresas chilenas sin frenar la operación. ¡Conversemos!"
  },
  {
    slug: "observabilidad-monitoreo-proactivo-resiliencia-plataformas-digitales-chile",
    title: "Observabilidad y Monitoreo Proactivo: Clave para la Resiliencia de Plataformas Digitales en Chile",
    excerpt: "Descubre cómo la observabilidad y el monitoreo proactivo permiten anticipar incidentes, reducir tiempos de caída y garantizar la resiliencia de las plataformas digitales en Chile.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    date: "2026-06-26",
    category: "DevOps y Cloud",
    tags: ["Observabilidad", "Monitoreo Proactivo", "Resiliencia", "Chile", "SRE"],
    metaDescription: "Descubre cómo la observabilidad y el monitoreo proactivo aseguran la resiliencia de las plataformas digitales en Chile, anticipando incidentes. ¡Conversemos!"
  },
  {
    slug: "staffing-tecnologico-vs-reclutamiento-tradicional-escalar-equipos-it-chile",
    title: "Staffing Tecnológico vs. Reclutamiento Tradicional: ¿Cuál es la mejor opción para escalar equipos de IT en Chile?",
    excerpt: "Comparamos el staffing tecnológico y el reclutamiento tradicional para ayudarte a elegir el modelo más eficiente al escalar equipos de IT en Chile con velocidad y control.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80",
    date: "2026-06-26",
    category: "Hunting y Talento",
    tags: ["Staffing Tecnológico", "Reclutamiento", "Equipos de IT", "Chile", "Outsourcing"],
    metaDescription: "Staffing tecnológico vs. reclutamiento tradicional: descubre cuál es la mejor opción para escalar equipos de IT en Chile con agilidad y control. ¡Conversemos!"
  },
  {
    slug: "optimizacion-costos-cloud-chile-estrategias-finops",
    title: "Optimización de Costos Cloud en Chile: Estrategias FinOps para Empresas Modernas",
    excerpt: "Descubre cómo la optimización de costos cloud en Chile a través de estrategias FinOps ayuda a empresas modernas a maximizar su ROI en la nube y optimizar su presupuesto técnico.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
    date: "2026-06-24",
    category: "DevOps y Cloud",
    tags: ["Cloud", "FinOps", "Chile", "Optimización de Costos", "Empresas Modernas"],
    metaDescription: "Descubre cómo la optimización de costos cloud en Chile a través de estrategias FinOps ayuda a empresas modernas a maximizar su ROI en la nube. ¡Hablemos!"
  },
  {
    slug: "qa-automation-reducir-time-to-market-desarrollo-software-chileno",
    title: "QA Automation: Cómo Reducir el Time-to-Market en el Desarrollo de Software Chileno",
    excerpt: "Descubre cómo la implementación de QA Automation acelera los ciclos de entrega de software y reduce el time-to-market en el desarrollo de software chileno de alto nivel.",
    image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&w=800&q=80",
    date: "2026-06-24",
    category: "Calidad y Pruebas",
    tags: ["QA Automation", "Time-to-Market", "Desarrollo de Software", "Chile", "Testing"],
    metaDescription: "Descubre cómo la implementación de QA Automation permite acelerar las entregas y reducir el time-to-market en el desarrollo de software chileno de alto nivel."
  },

  {
    slug: "beneficios-ia-generativa-gestion-proyectos-ti",
    title: "Beneficios de la IA Generativa en la Gestión de Proyectos TI",
    excerpt: "Descubre cómo la IA Generativa revoluciona la gestión de proyectos TI en Chile, optimizando tiempos, recursos y calidad de entrega.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    date: "2026-06-19",
    category: "Inteligencia Artificial",
    tags: ["IA Generativa", "Gestión de Proyectos", "Chile", "TI", "Agilidad"],
    metaDescription: "Descubre cómo la IA Generativa revoluciona la gestión de proyectos TI en Chile, optimizando tiempos, recursos y calidad de entrega. ¡Hablemos!",
  },
  {
    slug: "estrategias-ciberseguridad-trabajo-remoto-chile",
    title: "Estrategias de Ciberseguridad para el Trabajo Remoto en Chile",
    excerpt: "Protege tu empresa con las mejores estrategias de ciberseguridad para el trabajo remoto en Chile.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80",
    date: "2026-06-19",
    category: "Ciberseguridad",
    tags: ["Ciberseguridad", "Trabajo Remoto", "Chile", "Protección", "Estrategia"],
    metaDescription: "Protege tu empresa con las mejores estrategias de ciberseguridad para el trabajo remoto en Chile. Evita riesgos y asegura la continuidad. ¡Contáctanos!",
  },

  {
    slug: "por-que-es-util-el-outsourcing",
    title: "Por qué es útil el outsourcing en la era digital",
    excerpt:
      "Descubre cómo la externalización de talento puede acelerar tus proyectos, reducir costos operativos y permitirte enfocarte en el núcleo de tu negocio.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "estado-del-arte-inteligencia-artificial",
    title: "El estado del arte de la inteligencia artificial",
    excerpt:
      "Un análisis de los avances más recientes en IA, desde modelos fundacionales hasta su aplicación práctica en el mundo empresarial moderno.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "data-scientist-en-chile",
    title: "Cómo un Data Scientist en Chile impulsa la toma de decisiones",
    excerpt:
      "Descubre cómo un Data Scientist en Chile puede transformar la sobreabundancia de datos de tu empresa en decisiones estratégicas y ventajas competitivas.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    date: "2026-05-10",
    category: "Datos",
    tags: ["Data Scientist", "Chile", "Toma de decisiones", "Machine Learning"],
    metaDescription:
      "Descubre cómo integrar un Data Scientist en Chile transforma los datos de tu empresa en rentabilidad y decisiones estratégicas. ¡Contáctanos!",
  },
  {
    slug: "servicios-devops-chile-migracion-cloud",
    title: "Migración Cloud y Servicios DevOps en Chile: Clave de Agilidad",
    excerpt:
      "Acelera tus procesos y mejora la estabilidad de tu infraestructura tecnológica mediante la adopción de Servicios DevOps en Chile y estrategias Cloud.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
    date: "2026-05-10",
    category: "DevOps y Cloud",
    tags: [
      "Servicios DevOps",
      "Cloud",
      "Chile",
      "Migración",
      "Integración Continua",
    ],
    metaDescription:
      "Acelera tus lanzamientos y escala tu infraestructura con nuestros Servicios DevOps en Chile. Agilidad y seguridad para tu empresa. ¡Escríbenos!",
  },
  {
    slug: "automatizacion-procesos-empresariales-ia-chile",
    title:
      "Automatización de procesos empresariales con IA en Chile: Eficiencia y crecimiento",
    excerpt:
      "Descubre cómo la automatización de procesos empresariales con IA en Chile está transformando la operatividad, optimizando recursos y potenciando el talento B2B.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    date: "2026-05-11",
    category: "Inteligencia Artificial",
    tags: ["Automatización", "IA", "Chile", "Procesos", "Eficiencia"],
    metaDescription:
      "La automatización de procesos empresariales con IA en Chile es clave para la competitividad corporativa. En 4AGILE te ayudamos a implementarla con talento experto. ¡Hablemos!",
  },
  {
    slug: "modernizacion-aplicaciones-legacy-empresas-chilenas",
    title:
      "Modernización de aplicaciones legacy para empresas chilenas: Innovación segura",
    excerpt:
      "Conoce los beneficios de la modernización de aplicaciones legacy para empresas chilenas y cómo una transición estratégica asegura el éxito operativo.",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80",
    date: "2026-05-11",
    category: "Desarrollo y Modernización",
    tags: [
      "Modernización",
      "Aplicaciones Legacy",
      "Chile",
      "Innovación",
      "Software",
    ],
    metaDescription:
      "Evita riesgos y altos costos operativos. Descubre cómo la modernización de aplicaciones legacy impulsa a las empresas chilenas. ¡Contáctanos en 4AGILE!",
  },
  {
    slug: "automatizacion-qa-equipos-digitales-chile",
    title:
      "Automatización QA para equipos digitales en Chile: calidad continua y menos retrabajo",
    excerpt:
      "Descubre cómo la automatización QA para equipos digitales en Chile optimiza el desarrollo, reduce el retrabajo y asegura productos de alta calidad.",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    date: "2026-05-13",
    category: "Calidad y Pruebas",
    tags: [
      "Automatización QA",
      "Testing",
      "Chile",
      "Equipos Digitales",
      "Desarrollo de Software",
    ],
    metaDescription:
      "Optimiza tus entregas con automatización QA para equipos digitales en Chile. Reduce el retrabajo y mejora la calidad del software. ¡Contáctanos!",
  },
  {
    slug: "ciberseguridad-transformacion-digital-chile",
    title:
      "Ciberseguridad para transformación digital en Chile: proteger el crecimiento empresarial",
    excerpt:
      "La ciberseguridad para transformación digital en Chile es vital para proteger los activos, la reputación y asegurar el éxito de tu modernización.",
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
    date: "2026-05-13",
    category: "Ciberseguridad",
    tags: [
      "Ciberseguridad",
      "Transformación Digital",
      "Chile",
      "Protección",
      "Empresas",
    ],
    metaDescription:
      "Asegura el futuro de tu negocio con ciberseguridad para transformación digital en Chile. Protegemos el crecimiento de tu empresa. ¡Escríbenos!",
  },

  {
    slug: "mlops-empresas-chilenas-ia-produccion",
    title: "MLOps para empresas chilenas: escalando IA en producción",
    excerpt:
      "Descubre cómo pasar de pilotos de IA a modelos productivos, gobernados, monitoreados y mantenibles mediante MLOps para empresas chilenas.",
    image:
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=800&q=80",
    date: "2026-05-14",
    category: "Inteligencia Artificial",
    tags: ["MLOps", "IA", "Chile", "Producción", "Modelos"],
    metaDescription:
      "Escala la Inteligencia Artificial en tu organización. MLOps para empresas chilenas que buscan modelos en producción gobernados y eficientes. ¡Contáctanos!",
  },
  {
    slug: "gobierno-datos-ia-responsable-chile",
    title: "Gobierno de datos e IA responsable para organizaciones en Chile",
    excerpt:
      "Conoce las políticas, trazabilidad y preparación organizacional necesarias para adoptar un sólido gobierno de datos e IA responsable en Chile.",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    date: "2026-05-14",
    category: "Datos y Seguridad",
    tags: [
      "Gobierno de datos",
      "IA responsable",
      "Chile",
      "Trazabilidad",
      "Políticas",
    ],
    metaDescription:
      "Asegura la calidad y adopción ética con gobierno de datos e IA responsable para organizaciones en Chile. Mitiga riesgos y lidera con 4AGILE. ¡Escríbenos!",
  },
  {
    slug: "arquitectura-microservicios-empresas-chilenas",
    title:
      "Arquitectura de microservicios para empresas chilenas: Escalabilidad y Continuidad",
    excerpt:
      "Descubre cómo la arquitectura de microservicios para empresas chilenas permite escalar sistemas de forma independiente y garantizar la continuidad operativa.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
    date: "2026-05-16",
    category: "Desarrollo y Arquitectura",
    tags: [
      "Microservicios",
      "Arquitectura",
      "Chile",
      "Escalabilidad",
      "Transformación Digital",
    ],
    metaDescription:
      "Implementar una arquitectura de microservicios para empresas chilenas permite desacoplar sistemas y asegurar continuidad. ¡Conoce cómo en 4AGILE!",
  },
  {
    slug: "observabilidad-cloud-plataformas-digitales-chile",
    title:
      "Observabilidad cloud para plataformas digitales en Chile: Monitoreo Avanzado y SRE",
    excerpt:
      "La observabilidad cloud para plataformas digitales en Chile es indispensable para asegurar trazabilidad, reducir tiempos de caída y optimizar el rendimiento.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    date: "2026-05-16",
    category: "DevOps y Cloud",
    tags: ["Observabilidad", "Cloud", "SRE", "Chile", "Monitoreo"],
    metaDescription:
      "Garantiza la continuidad del negocio con observabilidad cloud para plataformas digitales en Chile. Logs, métricas y trazabilidad. ¡Contáctanos!",
  },
  {
    slug: "hunting-tecnologico-equipos-ia-chile",
    title:
      "Hunting tecnológico para equipos de IA en Chile: cómo contratar perfiles críticos sin frenar el negocio",
    excerpt:
      "Descubre cómo un proceso de hunting tecnológico especializado permite armar equipos de inteligencia artificial en Chile sin demoras ni riesgos de mala contratación.",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80",
    date: "2026-05-24",
    category: "Hunting y Talento",
    tags: [
      "Hunting Tecnológico",
      "Inteligencia Artificial",
      "Chile",
      "Talento TI",
      "Reclutamiento",
    ],
    metaDescription:
      "Encuentra y contrata perfiles de IA críticos en Chile con hunting tecnológico especializado. Reduce tiempos de contratación y riesgo. ¡Habla con 4AGILE!",
  },
  {
    slug: "outsourcing-ti-modernizacion-cloud-chile",
    title:
      "Outsourcing TI para modernización cloud en Chile: velocidad, control y reducción de riesgo",
    excerpt:
      "Conoce cómo el outsourcing TI especializado acelera la modernización cloud de empresas chilenas, manteniendo el control operativo y reduciendo riesgos.",
    image:
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80",
    date: "2026-05-24",
    category: "DevOps y Cloud",
    tags: [
      "Outsourcing TI",
      "Cloud",
      "Chile",
      "Modernización",
      "Reducción de Riesgo",
    ],
    metaDescription:
      "Acelera tu modernización cloud en Chile con outsourcing TI especializado. Velocidad, control y menos riesgo para tu empresa. ¡Contáctanos en 4AGILE!",
  },
  {
    slug: "ia-generativa-banca-chile",
    title:
      "IA Generativa para la banca en Chile: transformando la eficiencia operativa y el cumplimiento",
    excerpt:
      "Descubre cómo la adopción estratégica de la IA Generativa para la banca en Chile redefine la eficiencia del back office y asegura el cumplimiento ante la CMF.",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
    date: "2026-06-12",
    category: "Inteligencia Artificial",
    tags: ["IA Generativa", "Banca", "Chile", "Cumplimiento", "Eficiencia"],
    metaDescription:
      "Descubre cómo la IA Generativa para la banca en Chile está redefiniendo la eficiencia y el cumplimiento regulatorio en el sector financiero.",
  },
  {
    slug: "celulas-agiles-desarrollo-chile",
    title:
      "Células ágiles de desarrollo: el motor de la transformación digital en grandes empresas chilenas",
    excerpt:
      "Conoce cómo las células ágiles de desarrollo aceleran la innovación y reducen el Time-to-Market en las principales industrias corporativas de Chile.",
    image:
      "https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?auto=format&fit=crop&w=800&q=80",
    date: "2026-06-12",
    category: "Metodologías y Agilidad",
    tags: [
      "Células Ágiles",
      "Transformación Digital",
      "Grandes Empresas",
      "Chile",
      "Desarrollo de Software",
    ],
    metaDescription:
      "Conoce cómo las células ágiles de desarrollo impulsan la transformación digital en grandes empresas chilenas con velocidad y calidad.",
  },
];

export default function Blog() {
  useSEO({
    title: "Blog y Perspectivas Tecnológicas | 4AGILE",
    description:
      "Explora nuestras ideas, artículos y análisis sobre outsourcing TI, reclutamiento especializado, inteligencia artificial y metodologías ágiles en Chile.",
    canonicalPath: "/blog",
  });

  return (
    <div className="site-shell">
      <header className="site-header" aria-label="Navegación principal">
        <Link className="brand" href="/" aria-label="4AGILE inicio">
          <img
            src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663522518131/WbYuRCsZwwbLteMC.png"
            alt="Logo 4AGILE"
          />
          <span>4AGILE</span>
        </Link>
        <nav className="nav-links" aria-label="Secciones del sitio">
          <Link href="/">Inicio</Link>
          <Link href="/servicios">Servicios</Link>
          <Link href="/nosotros">Nosotros</Link>
          <Link href="/blog" className="active">
            Blog
          </Link>
          <Link className="nav-cta" href="/contacto">
            Conversemos
          </Link>
        </nav>
      </header>

      <main>
        <section
          className="blog-list container"
          style={{ padding: "120px 0 80px" }}
        >
          <div className="section-kicker">Blog</div>
          <h1 style={{ fontSize: "3rem", marginBottom: "3rem" }}>
            Perspectivas y conocimientos
          </h1>

          <div
            className="grid-2"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "2rem",
            }}
          >
            {articles.map((article) => (
              <Link href={`/blog/${article.slug}`} key={article.slug}>
                <article
                  className="primary-service-card"
                  style={{
                    cursor: "pointer",
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    overflow: "hidden",
                    padding: 0,
                  }}
                >
                  <img
                    src={article.image}
                    alt={article.title}
                    style={{
                      width: "100%",
                      height: "240px",
                      objectFit: "cover",
                      borderBottom: "1px solid var(--line)",
                    }}
                  />
                  <div
                    style={{
                      padding: "24px",
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <h3 style={{ fontSize: "24px", marginBottom: "16px" }}>
                      {article.title}
                    </h3>
                    <p style={{ flex: 1, color: "var(--muted)" }}>
                      {article.excerpt}
                    </p>
                    <span
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        color: "var(--blue)",
                        fontWeight: 600,
                        marginTop: "16px",
                      }}
                    >
                      Leer artículo <ArrowRight size={17} />
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <img
            src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663522518131/WbYuRCsZwwbLteMC.png"
            alt="Logo 4AGILE"
          />
          <p>4AGILE · Outsourcing de talentos y hunting especializado.</p>
        </div>
      </footer>
    </div>
  );
}
