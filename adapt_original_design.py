from pathlib import Path

root = Path('/home/ubuntu/4agile_netlify')
client = root / 'client'
src = client / 'src'
pages = src / 'pages'
public = client / 'public'

logo_url = 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663522518131/WbYuRCsZwwbLteMC.png'
hero_url = 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663522518131/mRkESQxeYuKpdQTF.png'

home = f'''import {{ ArrowRight, BadgeCheck, Clock3, Handshake, Mail, Phone, Search, ShieldCheck, Target, UsersRound }} from "lucide-react";

const LOGO_URL = "{logo_url}";
const HERO_URL = "{hero_url}";

const serviceCards = [
  {{
    icon: UsersRound,
    title: "Outsourcing de talentos",
    label: "Capacidad especializada bajo demanda",
    copy: "Integramos profesionales contratados y acompañados por 4AGILE para reforzar equipos críticos en tecnología, agilidad, data, soporte, producto y gestión. El foco no es solo cubrir una silla, sino sumar capacidad productiva con seguimiento, mentoría y continuidad.",
    cta: "Necesito talentos para mi equipo",
  }},
  {{
    icon: Search,
    title: "Hunting de talentos",
    label: "Búsqueda precisa de perfiles clave",
    copy: "Encontramos, evaluamos y presentamos candidatos alineados al perfil técnico, contexto cultural y objetivos del negocio. Aplicamos selección experta para reducir tiempo, riesgo y fricción en contrataciones estratégicas.",
    cta: "Quiero buscar un perfil clave",
  }},
];

const differentiators = [
  ["< 5 días", "Presentación rápida de perfiles evaluados para necesidades críticas."],
  ["< 1%", "Rotación histórica gracias a motivación, seguimiento y acompañamiento real."],
  ["1er mes", "Garantía: si el talento no cumple expectativas, ese mes no se paga."],
  ["Mentoría", "Consultores expertos acompañan a talentos y clientes después de la incorporación."],
  ["Custom", "Servicio flexible según cultura, madurez, urgencia y objetivos de negocio."],
  ["Menos riesgo", "Reducimos carga administrativa, tiempos de búsqueda y riesgo de contratación."],
];

const process = [
  ["01", "Escuchamos", "Entendemos tu necesidad, urgencia, cultura, stack, objetivos y perfil ideal."],
  ["02", "Buscamos", "Activamos hunting, screening y evaluación para encontrar talento realmente alineado."],
  ["03", "Presentamos", "Entregamos perfiles filtrados y entrevistados y listos para entrevista en un plazo ágil."],
  ["04", "Acompañamos", "Facilitamos incorporación, seguimiento, mentorías, coaching y mejora continua."],
];

const specialties = [
  "Desarrollo de productos digitales",
  "Agile Coaches, Scrum Masters y Product Owners",
  "Data, IA y Business Intelligence",
  "QA, automatización y continuidad tecnológica",
  "Infraestructura, redes, soporte y aplicaciones",
  "Liderazgo, gestión y transformación operativa",
];

export default function Home() {{
  return (
    <div className="site-shell">
      <header className="site-header" aria-label="Navegación principal">
        <a className="brand" href="#inicio" aria-label="4AGILE inicio">
          <img src={{LOGO_URL}} alt="Logo 4AGILE" />
          <span>4AGILE</span>
        </a>
        <nav className="nav-links" aria-label="Secciones del sitio">
          <a href="#servicios">Servicios</a>
          <a href="#diferenciales">Diferenciales</a>
          <a href="#proceso">Proceso</a>
          <a href="#especialidades">Especialidades</a>
          <a className="nav-cta" href="#contacto">Conversemos</a>
        </nav>
      </header>

      <main id="inicio">
        <section className="hero section-dark" style={{{{ backgroundImage: `url(${{HERO_URL}})` }}}}>
          <div className="hero-overlay" />
          <div className="hero-content container">
            <div className="eyebrow">Outsourcing de talentos · Hunting especializado</div>
            <h1>Talento experto para crecer, transformar y ejecutar sin fricción.</h1>
            <p className="hero-copy">En 4AGILE ayudamos a empresas a incorporar talento especializado mediante dos servicios principales: <strong>outsourcing de talentos</strong> para sumar capacidad operativa y <strong>hunting de talentos</strong> para encontrar perfiles clave con precisión, velocidad y acompañamiento experto.</p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#contacto">Solicitar talento <ArrowRight size={{18}} /></a>
              <a className="btn btn-secondary" href="tel:+56957876174">Llamar ahora</a>
            </div>
            <div className="hero-proof" aria-label="Indicadores principales de 4AGILE">
              <article><strong>&lt; 5 días</strong><span>para presentar perfiles evaluados</span></article>
              <article><strong>&lt; 1%</strong><span>rotación histórica de talentos</span></article>
              <article><strong>1er mes</strong><span>gratis si el perfil no cumple expectativas</span></article>
            </div>
          </div>
        </section>

        <section className="intro container" id="servicios">
          <div className="section-kicker">Servicios principales</div>
          <div className="split">
            <div>
              <h2>Dos soluciones para resolver el reto más difícil: encontrar y sostener talento que entregue valor.</h2>
            </div>
            <div>
              <p>4AGILE combina búsqueda especializada, evaluación, contratación, integración y acompañamiento continuo. Nuestro diferencial está en mirar el talento como una capacidad estratégica, no como una transacción aislada.</p>
              <p>Ya sea que necesites reforzar un equipo con outsourcing o encontrar un perfil crítico mediante hunting, diseñamos el servicio según tu contexto, urgencia, cultura y objetivos.</p>
            </div>
          </div>

          <div className="primary-services">
            {{serviceCards.map((service) => {{
              const Icon = service.icon;
              return (
                <article className="primary-service-card" key={{service.title}}>
                  <div className="service-topline"><Icon size={{34}} /><span>{{service.label}}</span></div>
                  <h3>{{service.title}}</h3>
                  <p>{{service.copy}}</p>
                  <a href="#contacto">{{service.cta}} <ArrowRight size={{17}} /></a>
                </article>
              );
            }})}}
          </div>
        </section>

        <section className="model-band section-blue" id="proceso">
          <div className="container grid-4">
            {{process.map(([number, title, copy]) => (
              <article key={{number}}>
                <span>{{number}}</span>
                <h3>{{title}}</h3>
                <p>{{copy}}</p>
              </article>
            ))}}
          </div>
        </section>

        <section className="differentiators section-light" id="diferenciales">
          <div className="container">
            <div className="section-kicker">Diferenciadores</div>
            <h2>Outsourcing y hunting con garantía, seguimiento y criterio experto.</h2>
            <p className="diff-lead">Nos diferenciamos porque no enviamos currículums en volumen ni abandonamos el proceso después de la contratación. Curamos perfiles, reducimos riesgos y acompañamos la integración para que el talento funcione en el contexto real del negocio.</p>
            <div className="diff-grid">
              {{differentiators.map(([metric, copy]) => (
                <article key={{metric}}>
                  <strong>{{metric}}</strong>
                  <span>{{copy}}</span>
                </article>
              ))}}
            </div>
          </div>
        </section>

        <section className="values container" id="especialidades">
          <div className="values-copy">
            <div className="section-kicker">Especialidades</div>
            <h2>Perfiles para las áreas que sostienen la transformación digital y operacional.</h2>
            <p>Trabajamos con perfiles técnicos, ágiles y de gestión que permiten acelerar iniciativas, estabilizar operaciones, escalar productos y fortalecer equipos existentes.</p>
          </div>
          <div className="value-list specialty-list">
            {{specialties.map((item) => (
              <article key={{item}}><BadgeCheck size={{23}} /><h3>{{item}}</h3></article>
            ))}}
          </div>
        </section>

        <section className="case-studies section-dark-soft">
          <div className="container">
            <div className="section-kicker">Nuestra forma de trabajar</div>
            <h2>Una experiencia de talento más rápida, cercana y medible.</h2>
            <div className="case-grid">
              <article><span>Outsourcing</span><h3>Talento integrado, no tercerización distante</h3><p>Los profesionales trabajan conectados al cliente y acompañados por 4AGILE para mantener desempeño, motivación y continuidad.</p></article>
              <article><span>Hunting</span><h3>Selección antes que volumen</h3><p>Buscamos perfiles alineados al contexto técnico y cultural, reduciendo entrevistas improductivas y tiempo de decisión.</p></article>
              <article><span>Acompañamiento</span><h3>Seguimiento posterior a la incorporación</h3><p>Mentorías, feedback y comunicación cercana con talentos y líderes para asegurar adopción y resultados.</p></article>
            </div>
          </div>
        </section>

        <section className="testimonials container">
          <div className="section-kicker">Confianza</div>
          <h2>Un partner para líderes que necesitan talento confiable y ejecución sostenida.</h2>
          <div className="testimonial-grid compact-proof">
            <blockquote><Target size={{28}} /><p>Perfiles alineados al objetivo, urgencia y cultura de cada organización.</p></blockquote>
            <blockquote><ShieldCheck size={{28}} /><p>Garantía comercial y reducción de riesgo en la incorporación de talento.</p></blockquote>
            <blockquote><Handshake size={{28}} /><p>Acompañamiento humano para cliente y talento durante la relación.</p></blockquote>
          </div>
        </section>

        <section className="guarantee section-blue">
          <div className="container guarantee-box">
            <div>
              <div className="section-kicker light">Nuestro sello de garantía</div>
              <h2>Si el primer mes el talento no satisface tus expectativas, ese mes es gratis.</h2>
            </div>
            <p>Respaldamos la calidad de nuestra búsqueda, evaluación e integración. Si el perfil no es el adecuado, buscamos un reemplazo sin costo adicional y mantenemos el foco en resolver tu necesidad.</p>
          </div>
        </section>

        <section className="contact container" id="contacto">
          <div className="contact-card">
            <div>
              <div className="section-kicker">Conversemos</div>
              <h2>Cuéntanos qué talento necesitas incorporar o encontrar.</h2>
              <p>Completa el formulario y dinos si buscas outsourcing de talentos, hunting de talentos o ambos. Revisaremos tu necesidad y coordinaremos una conversación inicial.</p>
              <div className="contact-methods">
                <a href="tel:+56957876174"><Phone size={{18}} /> +56 9 5787 6174</a>
                <a href="mailto:contacto@4agile.cl"><Mail size={{18}} /> contacto@4agile.cl</a>
                <a href="https://www.4agile.cl" target="_blank" rel="noopener">www.4agile.cl</a>
              </div>
            </div>
            <form className="lead-form" name="contacto-4agile" method="POST" data-netlify="true" netlify-honeypot="bot-field" action="/gracias">
              <input type="hidden" name="form-name" value="contacto-4agile" />
              <p className="hidden-field"><label>No completar: <input name="bot-field" /></label></p>
              <label>Nombre<input name="nombre" type="text" placeholder="Tu nombre" required /></label>
              <label>Empresa<input name="empresa" type="text" placeholder="Nombre de la empresa" /></label>
              <label>Teléfono<input name="telefono" type="tel" placeholder="Tu teléfono (opcional)" /></label>
              <label>Correo<input name="email" type="email" placeholder="tu@empresa.com" required /></label>
              <label>Servicio de interés
                <select name="servicio" defaultValue="" required>
                  <option value="" disabled>Selecciona una opción</option>
                  <option value="Outsourcing de talentos">Outsourcing de talentos</option>
                  <option value="Hunting de talentos">Hunting de talentos</option>
                  <option value="Outsourcing y hunting">Outsourcing y hunting</option>
                </select>
              </label>
              <label>¿Qué necesitas?<textarea name="mensaje" rows={{4}} placeholder="Cuéntanos qué perfil, capacidad o desafío necesitas resolver" required /></label>
              <button className="btn btn-primary" type="submit">Enviar solicitud <ArrowRight size={{18}} /></button>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <img src={{LOGO_URL}} alt="Logo 4AGILE" />
          <p>4AGILE · Outsourcing de talentos y hunting especializado.</p>
          <a href="#inicio">Volver arriba</a>
        </div>
      </footer>
    </div>
  );
}}
'''

css = '''@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
@import "tailwindcss";
@import "tw-animate-css";

/* Filosofía visual: conservar la estética premium original aprobada para GoHighLevel. Dirección: corporate glassmorphism azul 4AGILE, hero fotográfico oscuro, tarjetas amplias, métricas contundentes y lenguaje comercial centrado en outsourcing y hunting de talentos. */

@custom-variant dark (&:is(.dark *));

@theme inline {
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);
}

:root{
  --blue:#284b9b;
  --blue-700:#163577;
  --blue-900:#071a3d;
  --ink:#0f172a;
  --muted:#5f6b7a;
  --line:#d9e2ef;
  --bg:#f7f9fc;
  --white:#ffffff;
  --shadow:0 24px 70px rgba(8,24,60,.14);
  --radius:28px;
  --background: oklch(0.985 0.006 245);
  --foreground: oklch(0.18 0.02 250);
  --primary: oklch(0.39 0.15 263);
  --primary-foreground: oklch(0.99 0.004 245);
  --border: oklch(0.88 0.02 245);
  --input: oklch(0.91 0.015 245);
  --ring: oklch(0.52 0.17 260);
}
*{box-sizing:border-box}
html{scroll-behavior:smooth}
body{margin:0;font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;color:var(--ink);background:var(--bg);line-height:1.6}
a{color:inherit;text-decoration:none}
img{max-width:100%;display:block}
button,input,textarea,select{font:inherit}
.container{width:min(1160px,calc(100% - 40px));margin:0 auto}
.site-header{position:fixed;top:18px;left:50%;transform:translateX(-50%);width:min(1160px,calc(100% - 40px));z-index:20;display:flex;align-items:center;justify-content:space-between;padding:14px 16px;border:1px solid rgba(255,255,255,.24);border-radius:999px;background:rgba(255,255,255,.88);backdrop-filter:blur(18px);box-shadow:0 18px 50px rgba(6,26,64,.14)}
.brand{display:flex;align-items:center;gap:10px;font-weight:900;letter-spacing:.08em;color:var(--blue-700)}
.brand img{width:38px;height:38px;object-fit:contain}.brand span{font-size:15px}.nav-links{display:flex;align-items:center;gap:24px;font-size:14px;font-weight:700;color:#243044}.nav-links a{transition:.2s ease}.nav-links a:hover{color:var(--blue)}.nav-cta{padding:11px 17px;border-radius:999px;background:var(--blue);color:#fff!important;box-shadow:0 10px 24px rgba(40,75,155,.3)}
.hero{position:relative;min-height:760px;display:flex;align-items:center;overflow:hidden;background-position:center;background-size:cover;background-repeat:no-repeat;color:#fff}.hero-overlay{position:absolute;inset:0;background:linear-gradient(90deg,rgba(4,17,42,.92) 0%,rgba(8,31,78,.82) 42%,rgba(8,31,78,.18) 100%)}.hero:after{content:"";position:absolute;inset:auto -10% -30% 35%;height:420px;background:radial-gradient(circle,rgba(61,103,200,.7),transparent 64%);filter:blur(30px)}.hero-content{position:relative;z-index:2;padding-top:80px}.eyebrow,.section-kicker{display:inline-flex;align-items:center;gap:10px;margin-bottom:18px;font-size:12px;font-weight:900;letter-spacing:.18em;text-transform:uppercase;color:var(--blue)}.eyebrow{color:#b9ccff}.section-kicker:before,.eyebrow:before{content:"";width:34px;height:2px;background:currentColor;border-radius:99px}.section-kicker.light{color:#dfe8ff}.hero h1{max-width:860px;margin:0;font-size:clamp(48px,7vw,86px);line-height:.95;letter-spacing:-.06em;font-weight:900}.hero-copy{max-width:760px;margin:28px 0 0;font-size:20px;color:#e7efff}.hero-copy strong{color:#fff}.hero-actions{display:flex;gap:14px;flex-wrap:wrap;margin-top:36px}.btn{display:inline-flex;align-items:center;justify-content:center;gap:9px;min-height:52px;padding:0 24px;border-radius:999px;font-weight:900;border:0;cursor:pointer;transition:.2s ease}.btn-primary{background:var(--blue);color:#fff;box-shadow:0 18px 35px rgba(31,76,180,.34)}.btn-primary:hover{background:#1f3f88;transform:translateY(-2px)}.btn-secondary{background:rgba(255,255,255,.12);color:#fff;border:1px solid rgba(255,255,255,.35)}.btn-secondary:hover{background:rgba(255,255,255,.2)}.hero-proof{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;max-width:860px;margin-top:58px}.hero-proof article{padding:22px;border-radius:22px;background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.18);backdrop-filter:blur(12px)}.hero-proof strong{display:block;font-size:34px;line-height:1;font-weight:900}.hero-proof span{display:block;margin-top:8px;color:#d8e5ff;font-weight:600}
section{position:relative}.intro,.values,.testimonials,.contact{padding:110px 0}.split{display:grid;grid-template-columns:1fr 1.05fr;gap:70px}.split h2,.differentiators h2,.values h2,.case-studies h2,.testimonials h2,.guarantee h2,.contact h2{margin:0;font-size:clamp(34px,4.4vw,56px);line-height:1.02;letter-spacing:-.045em}.split p,.values p,.contact p,.guarantee p,.diff-lead{font-size:18px;color:var(--muted);margin:0 0 18px}.primary-services{display:grid;grid-template-columns:1fr 1fr;gap:22px;margin-top:48px}.primary-service-card{position:relative;overflow:hidden;padding:36px;border:1px solid var(--line);border-radius:32px;background:#fff;box-shadow:var(--shadow)}.primary-service-card:before{content:"";position:absolute;inset:0 0 auto;height:7px;background:linear-gradient(90deg,var(--blue-700),#6e94f7)}.service-topline{display:flex;align-items:center;gap:13px;margin-bottom:24px;color:var(--blue-700);font-weight:900;text-transform:uppercase;font-size:12px;letter-spacing:.14em}.primary-service-card h3{font-size:38px;line-height:1;letter-spacing:-.045em;color:var(--blue-700);margin:0 0 16px}.primary-service-card p{font-size:17px;color:var(--muted);margin:0}.primary-service-card a{display:inline-flex;align-items:center;gap:8px;margin-top:26px;font-weight:900;color:var(--blue)}.model-band{padding:54px 0}.section-blue{background:linear-gradient(135deg,var(--blue-900),var(--blue));color:#fff}.grid-4{display:grid;grid-template-columns:repeat(4,1fr);gap:18px}.grid-4 article{padding:28px;border-radius:24px;background:rgba(255,255,255,.09);border:1px solid rgba(255,255,255,.16)}.grid-4 span{display:inline-block;margin-bottom:20px;color:#bcd0ff;font-weight:900}.grid-4 h3{font-size:22px;margin:0 0 8px}.grid-4 p{margin:0;color:#e2ebff}.section-light{padding:110px 0;background:#fff}.diff-lead{max-width:800px}.diff-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;margin-top:42px}.diff-grid article{min-height:170px;padding:26px;border-radius:24px;background:var(--bg);border:1px solid var(--line)}.diff-grid strong{display:block;font-size:30px;line-height:1.05;letter-spacing:-.04em;color:var(--blue-700)}.diff-grid span{display:block;margin-top:12px;color:var(--muted)}.values{display:grid;grid-template-columns:.9fr 1.1fr;gap:70px}.value-list{display:grid;gap:16px}.value-list article{padding:24px;border-radius:24px;background:#fff;border:1px solid var(--line);box-shadow:0 16px 35px rgba(10,30,70,.05)}.specialty-list article{display:flex;align-items:center;gap:14px}.specialty-list svg{color:var(--blue)}.value-list h3{margin:0;font-size:22px;color:var(--blue-700);letter-spacing:-.025em}.section-dark-soft{padding:110px 0;background:linear-gradient(180deg,#071a3d,#102a5f);color:#fff}.case-studies .section-kicker,.testimonials .section-kicker{color:#7da2ff}.case-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-top:42px}.case-grid article{padding:30px;border-radius:26px;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.15)}.case-grid span{display:inline-block;margin-bottom:18px;color:#b7ccff;font-size:12px;font-weight:900;letter-spacing:.14em;text-transform:uppercase}.case-grid h3{margin:0 0 12px;font-size:25px;line-height:1.12}.case-grid p{margin:0;color:#dbe7ff}.testimonial-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-top:42px}.testimonial-grid blockquote{margin:0;padding:30px;border-radius:26px;background:#fff;border:1px solid var(--line);box-shadow:0 16px 35px rgba(10,30,70,.06)}.compact-proof svg{color:var(--blue);margin-bottom:18px}.testimonial-grid p{margin:0;color:#263141;font-size:17px;font-weight:700}.guarantee{padding:80px 0}.guarantee-box{display:grid;grid-template-columns:1.1fr .9fr;gap:60px;align-items:center}.guarantee p{color:#e2ebff;font-size:20px}.contact-card{display:grid;grid-template-columns:1fr .92fr;gap:46px;padding:52px;border-radius:36px;background:#fff;border:1px solid var(--line);box-shadow:var(--shadow)}.contact-methods{display:grid;gap:12px;margin-top:28px}.contact-methods a{display:flex;align-items:center;gap:9px;font-size:20px;font-weight:900;color:var(--blue-700)}.lead-form{display:grid;gap:14px}.hidden-field{display:none}.lead-form label{display:grid;gap:7px;font-weight:800;color:#273449}.lead-form input,.lead-form textarea,.lead-form select{width:100%;padding:15px 16px;border-radius:16px;border:1px solid #ccd8e8;background:#f9fbfe;color:var(--ink);outline:none}.lead-form input:focus,.lead-form textarea:focus,.lead-form select:focus{border-color:var(--blue);box-shadow:0 0 0 4px rgba(40,75,155,.12)}.lead-form .btn{width:100%;margin-top:8px}.site-footer{padding:32px 0;background:#fff;border-top:1px solid var(--line)}.footer-inner{display:flex;align-items:center;justify-content:space-between;gap:24px;color:var(--muted);font-weight:700}.footer-inner img{width:42px}.footer-inner a{color:var(--blue);font-weight:900}.thanks-page{min-height:100vh;display:grid;place-items:center;padding:32px;background:linear-gradient(135deg,#f7f9fc,#e9f0ff)}.thanks-card{max-width:620px;background:#fff;border:1px solid var(--line);border-radius:32px;padding:52px;box-shadow:var(--shadow)}.thanks-card svg{color:var(--blue);margin-bottom:18px}.thanks-card h1{font-size:clamp(34px,5vw,58px);line-height:1;letter-spacing:-.05em;margin:0 0 18px}.thanks-card p{font-size:18px;color:var(--muted)}.thanks-card .button-primary{display:inline-flex;align-items:center;gap:9px;margin-top:18px;padding:14px 22px;border-radius:999px;background:var(--blue);color:#fff;font-weight:900}
@media (max-width:960px){.nav-links a:not(.nav-cta){display:none}.hero{min-height:720px}.hero-proof,.grid-4,.diff-grid,.case-grid,.testimonial-grid{grid-template-columns:1fr 1fr}.split,.values,.guarantee-box,.contact-card,.primary-services{grid-template-columns:1fr;gap:34px}.intro,.values,.testimonials,.contact,.section-light,.section-dark-soft{padding:82px 0}}
@media (max-width:640px){.container,.site-header{width:min(100% - 28px,1160px)}.site-header{top:10px;border-radius:24px}.brand span{display:none}.nav-cta{padding:10px 14px}.hero{min-height:820px}.hero h1{font-size:44px}.hero-copy{font-size:17px}.hero-proof,.grid-4,.diff-grid,.case-grid,.testimonial-grid{grid-template-columns:1fr}.hero-actions .btn{width:100%}.contact-card,.primary-service-card{padding:28px}.footer-inner{flex-direction:column;text-align:center}.split h2,.differentiators h2,.values h2,.case-studies h2,.testimonials h2,.guarantee h2,.contact h2{font-size:36px}.primary-service-card h3{font-size:32px}.contact-methods a{font-size:17px}}
'''

index = f'''<!doctype html>
<html lang="es-CL">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1" />
    <title>4AGILE | Outsourcing de talentos y hunting especializado</title>
    <meta name="description" content="4AGILE ofrece outsourcing de talentos y hunting especializado para empresas que necesitan incorporar perfiles tecnológicos, ágiles y de gestión con rapidez, garantía y acompañamiento experto." />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="https://TU-DOMINIO.com/" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="4AGILE | Outsourcing de talentos y hunting especializado" />
    <meta property="og:description" content="Incorpora talento especializado con rapidez, selección experta, garantía comercial y acompañamiento continuo." />
    <meta property="og:image" content="{hero_url}" />
    <meta property="og:url" content="https://TU-DOMINIO.com/" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="theme-color" content="#284b9b" />
    <script type="application/ld+json">
      {{"@context":"https://schema.org","@type":"ProfessionalService","name":"4AGILE","url":"https://TU-DOMINIO.com/","description":"Outsourcing de talentos y hunting especializado para empresas que necesitan perfiles tecnológicos, ágiles y de gestión.","areaServed":"Latin America","serviceType":["Outsourcing de talentos","Hunting de talentos","Staffing especializado"]}}
    </script>
  </head>
  <body>
    <form name="contacto-4agile" method="POST" data-netlify="true" netlify-honeypot="bot-field" hidden>
      <input type="hidden" name="form-name" value="contacto-4agile" />
      <input name="bot-field" />
      <input type="text" name="nombre" />
      <input type="text" name="empresa" />
      <input type="tel" name="telefono" />
      <input type="email" name="email" />
      <select name="servicio"><option>Outsourcing de talentos</option><option>Hunting de talentos</option><option>Outsourcing y hunting</option></select>
      <textarea name="mensaje"></textarea>
    </form>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
'''

instructions = '''# 4AGILE — Versión Netlify optimizada

Esta versión conserva el diseño premium original preparado para GoHighLevel y lo adapta para Netlify. El contenido ahora comunica con mayor claridad los dos servicios principales de 4AGILE: **outsourcing de talentos** y **hunting de talentos**.

| Elemento | Estado |
|---|---|
| Diseño visual | Basado en la versión original aprobada para GoHighLevel |
| Formulario | Compatible con Netlify Forms bajo el nombre `contacto-4agile` |
| Página de gracias | Disponible en `/gracias` |
| SEO | Metatítulos, descripción, Open Graph, canonical, robots y sitemap preparados |
| Dominio | Reemplazar `https://TU-DOMINIO.com/` por el dominio real antes de publicar |

## Publicación recomendada

Para una operación profesional, sube el proyecto fuente a GitHub y conéctalo con Netlify usando la configuración incluida en `netlify.toml`.

| Configuración | Valor |
|---|---|
| Build command | `pnpm build` |
| Publish directory | `dist/public` |
| Formulario | `contacto-4agile` |

Después del primer deploy, realiza un envío de prueba desde el formulario y entra a **Forms** en Netlify para configurar las notificaciones al correo comercial correspondiente.
'''

(pages / 'Home.tsx').write_text(home, encoding='utf-8')
(src / 'index.css').write_text(css, encoding='utf-8')
(client / 'index.html').write_text(index, encoding='utf-8')
(root / 'INSTRUCCIONES_NETLIFY.md').write_text(instructions, encoding='utf-8')
print('Diseño original adaptado para Netlify con foco en outsourcing y hunting.')
