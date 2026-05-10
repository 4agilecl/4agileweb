import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

const blogPosts = [
  {
    slug: "por-que-es-util-el-outsourcing",
    title: "Por qué es útil el outsourcing en la era digital",
    excerpt: "Descubre cómo la externalización de talento puede acelerar tus proyectos, reducir costos operativos y permitirte enfocarte en el núcleo de tu negocio.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
  },
  {
    slug: "estado-del-arte-inteligencia-artificial",
    title: "El estado del arte de la inteligencia artificial",
    excerpt: "Un análisis de los avances más recientes en IA, desde modelos fundacionales hasta su aplicación práctica en el mundo empresarial moderno.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80"
  },
  {
    slug: "hunting-talento-tecnologico-chile",
    title: "Hunting de talento tecnológico en Chile para roles críticos de TI",
    excerpt: "Estrategias para encontrar y atraer perfiles especializados como Data Scientist, DevOps y Arquitectos Cloud en el competitivo mercado chileno.",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80"
  },
  {
    slug: "outsourcing-ti-chile-escalar-equipos",
    title: "Outsourcing TI en Chile: Cómo escalar equipos de Data, DevOps y Ciberseguridad",
    excerpt: "El outsourcing permite a las empresas en Chile escalar ágilmente sus áreas técnicas críticas sin los cuellos de botella de la contratación tradicional.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
  }
];

export default function Blog() {
  return (
    <div className="site-shell">
      <header className="site-header" aria-label="Navegación principal">
        <Link className="brand" href="/" aria-label="4AGILE inicio">
          <img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663522518131/WbYuRCsZwwbLteMC.png" alt="Logo 4AGILE" />
          <span>4AGILE</span>
        </Link>
        <nav className="nav-links" aria-label="Secciones del sitio">
          <Link href="/">Inicio</Link>
          <Link href="/blog">Blog</Link>
          <Link className="nav-cta" href="/#contacto">Conversemos</Link>
        </nav>
      </header>

      <main>
        <section className="blog-list container" style={{ padding: "120px 0 80px" }}>
          <div className="section-kicker">Blog</div>
          <h1 style={{ fontSize: "3rem", marginBottom: "3rem" }}>Perspectivas y conocimientos</h1>
          <div className="grid-2" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
            {blogPosts.map(post => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <article className="primary-service-card" style={{ cursor: "pointer", display: "flex", flexDirection: "column", height: "100%", overflow: "hidden", padding: 0 }}>
                  <img src={post.image} alt={post.title} style={{ width: "100%", height: "240px", objectFit: "cover", borderBottom: "1px solid var(--line)" }} />
                  <div style={{ padding: "24px", flex: 1, display: "flex", flexDirection: "column" }}>
                    <h3 style={{ fontSize: "24px", marginBottom: "16px" }}>{post.title}</h3>
                    <p style={{ flex: 1, color: "var(--muted)" }}>{post.excerpt}</p>
                    <span style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--blue)", fontWeight: 600, marginTop: "16px" }}>
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
          <img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663522518131/WbYuRCsZwwbLteMC.png" alt="Logo 4AGILE" />
          <p>4AGILE · Outsourcing de talentos y hunting especializado.</p>
        </div>
      </footer>
    </div>
  );
}
