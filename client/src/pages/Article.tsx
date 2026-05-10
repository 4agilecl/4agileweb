import { Link, useParams } from "wouter";
import { ArrowLeft } from "lucide-react";

const articlesContent: Record<
  string,
  { title: string; image: string; content: React.ReactNode }
> = {
  "por-que-es-util-el-outsourcing": {
    title: "Por qué es útil el outsourcing en la era digital",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    content: (
      <>
        <p>
          En el entorno empresarial actual, caracterizado por una evolución
          tecnológica vertiginosa y mercados altamente competitivos, la
          capacidad de adaptación es fundamental. Aquí es donde el outsourcing o
          externalización de servicios se posiciona no solo como una herramienta
          para reducir costos, sino como una estrategia clave para el
          crecimiento y la innovación.
        </p>

        <h2>1. Acceso a talento especializado</h2>
        <p>
          Una de las mayores ventajas del outsourcing es la posibilidad de
          acceder a un pool de talento global altamente capacitado. En lugar de
          limitar la búsqueda a la disponibilidad local o invertir meses en
          formar internamente a un equipo, las empresas pueden incorporar
          rápidamente a expertos con experiencia comprobada en tecnologías
          específicas (como desarrollo de software, análisis de datos o
          ciberseguridad).
        </p>

        <h2>2. Flexibilidad y escalabilidad</h2>
        <p>
          Los ciclos de negocio modernos son dinámicos. El outsourcing permite a
          las organizaciones escalar sus equipos hacia arriba o hacia abajo
          según las demandas de cada proyecto. Esta flexibilidad operativa
          asegura que la empresa no incurra en costos fijos innecesarios en
          periodos de baja actividad y pueda responder con agilidad ante picos
          de demanda.
        </p>

        <h2>3. Enfoque en el "Core Business"</h2>
        <p>
          Al delegar procesos secundarios o altamente técnicos a partners
          especializados, los líderes y equipos internos pueden concentrar su
          tiempo, energía y recursos en las actividades que realmente generan
          valor y diferenciación competitiva para la empresa (su "core
          business").
        </p>

        <h2>4. Reducción de riesgos y aceleración de tiempos</h2>
        <p>
          Contratar un proveedor de outsourcing con experiencia implica también
          transferir parte del riesgo asociado a la ejecución de proyectos.
          Estos proveedores aportan metodologías probadas y mejores prácticas
          que, sumadas a la disponibilidad inmediata de profesionales, reducen
          significativamente el "Time-to-Market" de nuevos productos o
          servicios.
        </p>

        <p>
          <strong>Conclusión:</strong> El outsourcing moderno va más allá de la
          tercerización de tareas rutinarias; se trata de construir alianzas
          estratégicas que potencian las capacidades de la organización,
          aportando velocidad, calidad e innovación en un mundo digital en
          constante cambio.
        </p>
      </>
    ),
  },
  "estado-del-arte-inteligencia-artificial": {
    title: "El estado del arte de la inteligencia artificial",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
    content: (
      <>
        <p>
          La Inteligencia Artificial (IA) ha transitado de ser una promesa
          futurista a convertirse en una tecnología fundacional que está
          redefiniendo cómo interactuamos, trabajamos y resolvemos problemas
          complejos. El "estado del arte" actual se caracteriza por avances sin
          precedentes, impulsados principalmente por el aprendizaje profundo
          (Deep Learning) y los modelos de lenguaje a gran escala (LLMs).
        </p>

        <h2>El dominio de los Modelos Fundacionales</h2>
        <p>
          Hoy en día, el panorama está dominado por los modelos fundacionales
          (como GPT-4, Claude 3, y Gemini). Estos sistemas, entrenados con
          cantidades masivas de datos, han demostrado capacidades notables no
          solo en la comprensión y generación de lenguaje natural, sino también
          en razonamiento lógico, programación y análisis de datos. Su capacidad
          para ser adaptados a múltiples tareas (transfer learning) está
          democratizando el acceso a la IA avanzada.
        </p>

        <h2>Multimodalidad: Más allá del texto</h2>
        <p>
          El estado del arte ya no se limita al texto. Los modelos multimodales
          pueden procesar, entender y generar imágenes, audio y video
          simultáneamente. Esta convergencia permite aplicaciones mucho más
          ricas, como asistentes virtuales que pueden "ver" a través de una
          cámara y ofrecer asistencia en tiempo real, o sistemas médicos que
          analizan historiales clínicos junto con radiografías para diagnósticos
          más precisos.
        </p>

        <h2>IA Generativa en el ámbito empresarial</h2>
        <p>
          En el mundo corporativo, la IA generativa ha dejado de ser un
          experimento para convertirse en una herramienta de productividad
          esencial. Desde la automatización de la atención al cliente hasta la
          generación de código, pasando por la creación de contenido de
          marketing y el análisis predictivo de mercados. Las empresas que
          integran estas tecnologías están observando incrementos exponenciales
          en su eficiencia operativa.
        </p>

        <h2>Desafíos actuales: Ética y Gobernanza</h2>
        <p>
          A pesar de los logros técnicos, el estado del arte de la IA enfrenta
          desafíos críticos. La "alucinación" (cuando los modelos generan
          información falsa con apariencia de veracidad), el sesgo algorítmico y
          la privacidad de los datos son temas centrales de investigación. La
          industria está enfocada actualmente en desarrollar técnicas de IA
          "explicable" (XAI) y en establecer marcos de gobernanza y regulación
          ética que aseguren un uso seguro y responsable de esta tecnología.
        </p>

        <p>
          <strong>Conclusión:</strong> Nos encontramos en un punto de inflexión.
          La IA actual posee una capacidad de generalización que abre un abanico
          infinito de posibilidades. El reto de los próximos años no será solo
          mejorar los modelos, sino integrarlos de manera ética, segura y
          productiva en el tejido de nuestra sociedad.
        </p>
      </>
    ),
  },
};

export default function Article() {
  const { slug } = useParams();
  const article = slug ? articlesContent[slug] : null;

  if (!article) {
    return (
      <div
        className="site-shell"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <h1>Artículo no encontrado</h1>
        <Link href="/blog" className="btn btn-primary">
          Volver al blog
        </Link>
      </div>
    );
  }

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
          <Link href="/blog">Blog</Link>
          <Link className="nav-cta" href="/#contacto">
            Conversemos
          </Link>
        </nav>
      </header>

      <main>
        <article
          className="container"
          style={{ padding: "120px 0 80px", maxWidth: "800px" }}
        >
          <Link
            href="/blog"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              color: "var(--muted)",
              marginBottom: "32px",
              textDecoration: "none",
            }}
          >
            <ArrowLeft size={16} /> Volver al blog
          </Link>

          <h1
            style={{ fontSize: "3rem", marginBottom: "2rem", lineHeight: 1.2 }}
          >
            {article.title}
          </h1>

          <img
            src={article.image}
            alt={article.title}
            style={{
              width: "100%",
              height: "auto",
              maxHeight: "400px",
              objectFit: "cover",
              borderRadius: "16px",
              marginBottom: "3rem",
            }}
          />

          <div
            className="article-content"
            style={{
              fontSize: "1.125rem",
              lineHeight: 1.8,
              color: "var(--foreground)",
            }}
          >
            {article.content}
          </div>
        </article>
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

      <style>{`
        .article-content h2 {
          margin-top: 2.5rem;
          margin-bottom: 1rem;
          font-size: 1.75rem;
        }
        .article-content p {
          margin-bottom: 1.5rem;
        }
      `}</style>
    </div>
  );
}
