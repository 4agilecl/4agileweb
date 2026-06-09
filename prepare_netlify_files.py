from pathlib import Path

root = Path('/home/ubuntu/4agile_netlify')
client = root / 'client'
src = client / 'src'
pages = src / 'pages'
public = client / 'public'

hero = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663522518131/cGj8tVWagDbYH7CbaH9eJ6/4agile-hero-executive-operations-9vj48htDGpcSgukVNXHU8M.webp'
process_img = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663522518131/cGj8tVWagDbYH7CbaH9eJ6/4agile-process-diagram-3Y6QXgZiD2zZYqpoBDyt8S.webp'
contact_img = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663522518131/cGj8tVWagDbYH7CbaH9eJ6/4agile-contact-visual-Mnhdfji4Yxd5mvuGP7QhM4.webp'
logo_blue = '/manus-storage/4A-01_ef1ac602.png'
logo_white = '/manus-storage/4A-02_675ed2a4.png'
logo_black = '/manus-storage/4A-03_5031d5e0.png'

home_tsx = f'''import {{ ArrowRight, CheckCircle2, Layers3, LineChart, Mail, Phone, ShieldCheck, Sparkles, Target, Users2 }} from "lucide-react";

const HERO_IMAGE = "{hero}";
const PROCESS_IMAGE = "{process_img}";
const CONTACT_IMAGE = "{contact_img}";
const LOGO_BLUE = "{logo_blue}";
const LOGO_WHITE = "{logo_white}";

const services = [
  {{
    title: "Staffing estratégico",
    copy: "Conectamos empresas con talento especializado para cubrir brechas críticas de capacidad sin inflar la estructura interna.",
    icon: Users2,
  }},
  {{
    title: "Reformer operativo",
    copy: "Acompañamos la transformación de equipos, procesos y modelos de trabajo para ganar velocidad, trazabilidad y foco.",
    icon: Layers3,
  }},
  {{
    title: "Agilidad aplicada",
    copy: "Diseñamos esquemas prácticos de trabajo ágil orientados a resultados medibles, no a ceremonias innecesarias.",
    icon: Target,
  }},
  {{
    title: "Escalamiento de equipos",
    copy: "Ayudamos a integrar perfiles, rutinas y métricas para que el crecimiento de capacidad sea sostenible desde el primer sprint.",
    icon: LineChart,
  }},
];

const differentiators = [
  "Modelo flexible para responder a picos de demanda y proyectos críticos.",
  "Talento alineado al contexto real del negocio, no solo a una descripción de cargo.",
  "Visión combinada de staffing, transformación y mejora continua.",
  "Acompañamiento enfocado en adopción, ejecución y resultados visibles.",
];

const process = [
  ["01", "Diagnóstico", "Entendemos brechas de capacidad, prioridades, riesgos y objetivos comerciales."],
  ["02", "Diseño", "Definimos perfiles, modelo de integración y ruta operativa para el equipo."],
  ["03", "Activación", "Conectamos talento y habilitamos prácticas de coordinación, seguimiento y entrega."],
  ["04", "Evolución", "Medimos avances, ajustamos el modelo y escalamos lo que genera impacto."],
];

export default function Home() {{
  return (
    <div className="site-shell">
      <header className="nav-wrap" aria-label="Navegación principal">
        <a className="brand" href="#inicio" aria-label="4AGILE inicio">
          <img src={{LOGO_BLUE}} alt="Logo de 4AGILE" />
          <span>4AGILE</span>
        </a>
        <nav>
          <a href="#servicios">Servicios</a>
          <a href="#diferencia">Diferencia</a>
          <a href="#proceso">Proceso</a>
          <a className="nav-cta" href="#contacto">Agendar diagnóstico</a>
        </nav>
      </header>

      <main id="inicio">
        <section className="hero-section" style={{{{ backgroundImage: `linear-gradient(90deg, rgba(4, 25, 59, 0.94) 0%, rgba(6, 48, 112, 0.78) 46%, rgba(8, 39, 87, 0.18) 100%), url(${{HERO_IMAGE}})` }}}}>
          <div className="hero-grid">
            <div className="hero-copy reveal">
              <p className="eyebrow">Staffing Reformer · Talent Solutions · Agile Execution</p>
              <h1>Talento especializado y transformación operativa para empresas que necesitan avanzar con velocidad.</h1>
              <p className="hero-lead">4AGILE ayuda a organizaciones a cubrir brechas críticas de capacidad, integrar equipos de alto desempeño y convertir la agilidad en resultados concretos de negocio.</p>
              <div className="hero-actions">
                <a className="button-primary" href="#contacto">Solicitar diagnóstico <ArrowRight size={{18}} /></a>
                <a className="button-secondary" href="#servicios">Ver servicios</a>
              </div>
            </div>
            <aside className="hero-card reveal delay-1" aria-label="Resumen de propuesta de valor">
              <img src={{LOGO_WHITE}} alt="Símbolo de 4AGILE" />
              <p className="card-kicker">Propuesta central</p>
              <h2>Capacidad, foco y ejecución en un solo modelo.</h2>
              <p>Diseñamos soluciones de talento y operación para que los equipos no solo crezcan, sino que entreguen mejor.</p>
            </aside>
          </div>
        </section>

        <section className="proof-strip" aria-label="Áreas de impacto">
          <div><strong>01</strong><span>Talento especializado</span></div>
          <div><strong>02</strong><span>Equipos escalables</span></div>
          <div><strong>03</strong><span>Agilidad práctica</span></div>
          <div><strong>04</strong><span>Resultados medibles</span></div>
        </section>

        <section id="servicios" className="section services-section">
          <div className="section-heading offset-heading">
            <p className="eyebrow dark">Servicios</p>
            <h2>Soluciones para empresas que necesitan más capacidad sin perder control.</h2>
            <p>4AGILE combina búsqueda de talento, entendimiento operativo y adopción ágil para resolver necesidades de negocio de forma integral.</p>
          </div>
          <div className="services-grid">
            {{services.map((service, index) => {{
              const Icon = service.icon;
              return (
                <article className="service-card reveal" key={{service.title}} style={{{{ animationDelay: `${{index * 90}}ms` }}}}>
                  <Icon className="service-icon" size={{30}} />
                  <h3>{{service.title}}</h3>
                  <p>{{service.copy}}</p>
                </article>
              );
            }})}}
          </div>
        </section>

        <section id="diferencia" className="section split-section">
          <div className="visual-panel reveal">
            <img src={{PROCESS_IMAGE}} alt="Ilustración abstracta del proceso de diagnóstico, integración y escalamiento de 4AGILE" />
          </div>
          <div className="split-copy reveal delay-1">
            <p className="eyebrow dark">Qué nos hace distintos</p>
            <h2>No vendemos perfiles aislados. Diseñamos capacidad operativa.</h2>
            <p>El valor de 4AGILE está en conectar talento, contexto y forma de trabajo. Por eso el servicio no termina con la selección: se orienta a integración, adopción y mejora continua.</p>
            <div className="difference-list">
              {{differentiators.map((item) => (
                <div key={{item}}>
                  <CheckCircle2 size={{22}} />
                  <span>{{item}}</span>
                </div>
              ))}}
            </div>
          </div>
        </section>

        <section id="proceso" className="section process-section">
          <div className="section-heading narrow">
            <p className="eyebrow dark">Proceso</p>
            <h2>Un camino claro desde la necesidad hasta el impacto.</h2>
          </div>
          <div className="process-timeline">
            {{process.map(([number, title, copy]) => (
              <article key={{number}} className="process-card reveal">
                <span>{{number}}</span>
                <h3>{{title}}</h3>
                <p>{{copy}}</p>
              </article>
            ))}}
          </div>
        </section>

        <section className="section authority-section">
          <div>
            <p className="eyebrow dark">Para líderes de negocio y tecnología</p>
            <h2>Cuando el reto no es solo contratar, sino lograr que el equipo produzca valor más rápido.</h2>
          </div>
          <div className="authority-cards">
            <article><ShieldCheck size={{24}} /><h3>Menos riesgo</h3><p>Perfiles y modelos de integración pensados para el contexto real de la organización.</p></article>
            <article><Sparkles size={{24}} /><h3>Mayor adopción</h3><p>Acompañamiento para que la capacidad nueva se conecte con rutinas, métricas y entregables.</p></article>
          </div>
        </section>

        <section id="contacto" className="section contact-section">
          <div className="contact-visual reveal">
            <img src={{CONTACT_IMAGE}} alt="Escena ejecutiva de contacto y solicitud de diagnóstico" />
          </div>
          <div className="contact-card reveal delay-1">
            <p className="eyebrow dark">Contacto</p>
            <h2>Agenda una conversación inicial con 4AGILE.</h2>
            <p>Completa el formulario y cuéntanos qué reto de capacidad, talento o ejecución necesitas resolver. El formulario está preparado para Netlify Forms.</p>
            <form name="contacto-4agile" method="POST" data-netlify="true" netlify-honeypot="bot-field" action="/gracias" className="contact-form">
              <input type="hidden" name="form-name" value="contacto-4agile" />
              <p className="hidden-field">
                <label>No completar: <input name="bot-field" /></label>
              </p>
              <label>Nombre completo<input name="nombre" type="text" placeholder="Tu nombre" required /></label>
              <label>Correo corporativo<input name="email" type="email" placeholder="nombre@empresa.com" required /></label>
              <label>Empresa<input name="empresa" type="text" placeholder="Nombre de la empresa" /></label>
              <label>Teléfono<input name="telefono" type="tel" placeholder="+1 000 000 0000" /></label>
              <label>¿Qué necesitas resolver?<textarea name="mensaje" rows={{5}} placeholder="Cuéntanos brevemente tu reto de staffing, operación o agilidad." required /></label>
              <button type="submit">Enviar solicitud <ArrowRight size={{18}} /></button>
            </form>
            <div className="contact-meta">
              <span><Mail size={{16}} /> Configurable en Netlify Forms</span>
              <span><Phone size={{16}} /> Respuesta comercial prioritaria</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <img src={{LOGO_BLUE}} alt="4AGILE" />
        <p>© {{new Date().getFullYear()}} 4AGILE. Staffing Reformer y soluciones de agilidad aplicada para empresas.</p>
        <a href="#inicio">Volver arriba</a>
      </footer>
    </div>
  );
}}
'''

thanks_tsx = '''import { CheckCircle2, ArrowLeft } from "lucide-react";

export default function Gracias() {
  return (
    <main className="thanks-page">
      <section className="thanks-card">
        <CheckCircle2 size={46} />
        <p className="eyebrow dark">Solicitud recibida</p>
        <h1>Gracias por contactar a 4AGILE.</h1>
        <p>Tu mensaje fue enviado correctamente. El equipo podrá revisar la solicitud desde el panel de Forms de Netlify y configurar notificaciones por correo.</p>
        <a className="button-primary" href="/"><ArrowLeft size={18} /> Volver al sitio</a>
      </section>
    </main>
  );
}
'''

app_tsx = '''import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch, Redirect } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Gracias from "./pages/Gracias";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/gracias" component={Gracias} />
      <Route path="/404">
        <Redirect to="/" replace />
      </Route>
      <Route>
        <Redirect to="/" replace />
      </Route>
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
'''

index_css = '''@import url('https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap');
@import "tailwindcss";
@import "tw-animate-css";

/* Filosofía visual: editorial corporativo neo-brutalista para B2B. Cada bloque debe sentirse como un dossier ejecutivo: asimetría, contraste azul 4AGILE, líneas de proceso y jerarquía tipográfica fuerte. */

@custom-variant dark (&:is(.dark *));

@theme inline {
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);
}

:root {
  --radius: 0.45rem;
  --background: oklch(0.985 0.006 245);
  --foreground: oklch(0.19 0.025 248);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.19 0.025 248);
  --primary: oklch(0.36 0.158 263);
  --primary-foreground: oklch(0.99 0.004 245);
  --secondary: oklch(0.94 0.018 245);
  --secondary-foreground: oklch(0.24 0.04 250);
  --muted: oklch(0.93 0.012 245);
  --muted-foreground: oklch(0.49 0.035 248);
  --accent: oklch(0.7 0.13 222);
  --accent-foreground: oklch(0.13 0.03 245);
  --border: oklch(0.86 0.018 245);
  --input: oklch(0.9 0.014 245);
  --ring: oklch(0.52 0.17 260);
}

@layer base {
  * { @apply border-border outline-ring/50; }
  html { scroll-behavior: smooth; }
  body {
    margin: 0;
    font-family: 'Source Sans 3', system-ui, sans-serif;
    background: #f6f8fb;
    color: #132033;
  }
  h1, h2, h3, .brand, .eyebrow { font-family: 'Space Grotesk', system-ui, sans-serif; }
  a { color: inherit; text-decoration: none; }
  img { max-width: 100%; display: block; }
  button, input, textarea { font: inherit; }
}

.site-shell { min-height: 100vh; overflow-x: hidden; }
.nav-wrap {
  position: fixed; top: 18px; left: 50%; z-index: 50; transform: translateX(-50%);
  width: min(1180px, calc(100% - 32px)); display: flex; align-items: center; justify-content: space-between;
  padding: 12px 14px; border: 1px solid rgba(255,255,255,.45); border-radius: 999px;
  background: rgba(255,255,255,.83); backdrop-filter: blur(18px); box-shadow: 0 24px 70px rgba(5, 29, 70, .18);
}
.brand { display: flex; align-items: center; gap: 10px; font-weight: 700; color: #173f91; letter-spacing: -.03em; }
.brand img { width: 38px; height: 38px; object-fit: contain; }
.nav-wrap nav { display: flex; align-items: center; gap: 8px; }
.nav-wrap nav a { padding: 10px 14px; border-radius: 999px; color: #263b5f; font-weight: 700; font-size: .96rem; transition: .25s ease; }
.nav-wrap nav a:hover { background: rgba(28, 82, 185, .08); color: #173f91; }
.nav-cta { background: #173f91 !important; color: white !important; box-shadow: 0 14px 30px rgba(23,63,145,.25); }

.hero-section { min-height: 760px; padding: 150px 6vw 80px; background-size: cover; background-position: center; color: white; position: relative; }
.hero-section::after { content: ""; position: absolute; inset: 0; background: radial-gradient(circle at 15% 20%, rgba(62, 147, 255, .28), transparent 34%), linear-gradient(180deg, transparent 74%, #f6f8fb 100%); pointer-events: none; }
.hero-grid { position: relative; z-index: 1; display: grid; grid-template-columns: minmax(0, 1.05fr) minmax(300px, .48fr); gap: 48px; max-width: 1200px; margin: 0 auto; align-items: end; }
.hero-copy { max-width: 780px; padding-top: 50px; }
.eyebrow { text-transform: uppercase; letter-spacing: .16em; font-size: .74rem; font-weight: 700; color: #8fd3ff; margin: 0 0 18px; }
.eyebrow.dark { color: #1f58bc; }
h1 { font-size: clamp(3.1rem, 7vw, 6.7rem); line-height: .89; letter-spacing: -.07em; margin: 0; max-width: 900px; }
.hero-lead { font-size: clamp(1.1rem, 1.8vw, 1.35rem); line-height: 1.55; max-width: 670px; color: rgba(255,255,255,.86); margin: 28px 0 0; }
.hero-actions { display: flex; flex-wrap: wrap; gap: 14px; margin-top: 34px; }
.button-primary, .button-secondary, .contact-form button { display: inline-flex; align-items: center; justify-content: center; gap: 10px; min-height: 52px; padding: 0 22px; border-radius: 14px; font-weight: 800; transition: .25s ease; }
.button-primary, .contact-form button { background: #fff; color: #113c8e; box-shadow: 0 22px 50px rgba(0,0,0,.25); }
.button-primary:hover, .contact-form button:hover { transform: translateY(-2px); box-shadow: 0 28px 58px rgba(0,0,0,.3); }
.button-secondary { border: 1px solid rgba(255,255,255,.45); color: white; }
.button-secondary:hover { background: rgba(255,255,255,.1); transform: translateY(-2px); }
.hero-card { background: rgba(255,255,255,.1); border: 1px solid rgba(255,255,255,.28); backdrop-filter: blur(16px); padding: 30px; border-radius: 28px; box-shadow: 0 36px 90px rgba(0,0,0,.22); }
.hero-card img { width: 62px; margin-bottom: 34px; filter: drop-shadow(0 12px 28px rgba(255,255,255,.2)); }
.card-kicker { color: #8fd3ff; font-weight: 800; margin: 0 0 10px; }
.hero-card h2 { font-size: 2rem; line-height: 1; letter-spacing: -.05em; margin: 0 0 14px; }
.hero-card p { color: rgba(255,255,255,.8); line-height: 1.55; }
.proof-strip { width: min(1120px, calc(100% - 32px)); margin: -42px auto 0; position: relative; z-index: 2; display: grid; grid-template-columns: repeat(4, 1fr); background: #fff; border: 1px solid #dce5f3; box-shadow: 0 28px 80px rgba(17, 46, 88, .13); }
.proof-strip div { padding: 26px; border-right: 1px solid #e4ebf6; display: flex; flex-direction: column; gap: 7px; }
.proof-strip div:last-child { border-right: 0; }
.proof-strip strong { color: #1c52b9; font-family: 'Space Grotesk'; }
.proof-strip span { color: #2a3b56; font-weight: 800; }
.section { padding: 110px 6vw; max-width: 1240px; margin: 0 auto; }
.section-heading { max-width: 780px; margin-bottom: 44px; }
.offset-heading { margin-left: 9vw; }
.section-heading h2, .split-copy h2, .authority-section h2, .contact-card h2 { font-size: clamp(2.3rem, 5vw, 4.5rem); line-height: .96; letter-spacing: -.06em; margin: 0 0 18px; color: #14243c; }
.section-heading p, .split-copy p, .authority-section p, .contact-card p { color: #52647e; font-size: 1.1rem; line-height: 1.65; }
.services-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 18px; }
.service-card { background: #fff; border: 1px solid #dbe5f5; padding: 30px 24px; min-height: 280px; box-shadow: 0 20px 48px rgba(16, 43, 80, .08); transition: .25s ease; position: relative; overflow: hidden; }
.service-card::before { content: ""; position: absolute; inset: 0 0 auto; height: 5px; background: linear-gradient(90deg, #173f91, #3db7ff); transform: scaleX(.28); transform-origin: left; transition: .25s ease; }
.service-card:hover { transform: translateY(-6px); box-shadow: 0 28px 70px rgba(16, 43, 80, .14); }
.service-card:hover::before { transform: scaleX(1); }
.service-icon { color: #1c52b9; margin-bottom: 34px; }
.service-card h3 { color: #14243c; font-size: 1.35rem; letter-spacing: -.04em; margin: 0 0 14px; }
.service-card p { color: #5b6b80; line-height: 1.6; margin: 0; }
.split-section { display: grid; grid-template-columns: .95fr 1fr; gap: 72px; align-items: center; }
.visual-panel { background: #fff; padding: 18px; border: 1px solid #dde6f5; box-shadow: 0 30px 80px rgba(16,43,80,.12); transform: rotate(-1.2deg); }
.visual-panel img { border-radius: 12px; }
.difference-list { display: grid; gap: 14px; margin-top: 28px; }
.difference-list div { display: flex; gap: 12px; align-items: flex-start; background: #fff; border-left: 5px solid #1c52b9; padding: 16px; box-shadow: 0 14px 38px rgba(16,43,80,.07); }
.difference-list svg { color: #1c52b9; flex: none; margin-top: 2px; }
.difference-list span { color: #243752; font-weight: 700; }
.narrow { max-width: 650px; }
.process-section { padding-top: 40px; }
.process-timeline { display: grid; grid-template-columns: repeat(4, 1fr); border-top: 2px solid #173f91; }
.process-card { padding: 30px 24px; border-right: 1px solid #cfdcf0; background: linear-gradient(180deg, rgba(255,255,255,.9), rgba(255,255,255,.45)); }
.process-card:last-child { border-right: 0; }
.process-card span { display: inline-flex; width: 44px; height: 44px; align-items: center; justify-content: center; background: #173f91; color: #fff; font-family: 'Space Grotesk'; font-weight: 800; margin-bottom: 28px; }
.process-card h3 { margin: 0 0 10px; font-size: 1.35rem; color: #14243c; }
.process-card p { margin: 0; color: #5b6b80; line-height: 1.55; }
.authority-section { display: grid; grid-template-columns: 1.15fr .85fr; gap: 56px; align-items: center; background: #0d2448; color: white; max-width: none; padding-left: max(6vw, calc((100vw - 1240px)/2)); padding-right: max(6vw, calc((100vw - 1240px)/2)); }
.authority-section h2 { color: white; }
.authority-section p { color: rgba(255,255,255,.75); }
.authority-cards { display: grid; gap: 16px; }
.authority-cards article { background: rgba(255,255,255,.08); border: 1px solid rgba(255,255,255,.17); padding: 24px; backdrop-filter: blur(12px); }
.authority-cards svg { color: #8fd3ff; }
.authority-cards h3 { margin: 14px 0 8px; color: white; }
.contact-section { display: grid; grid-template-columns: .88fr 1.12fr; gap: 38px; align-items: stretch; }
.contact-visual img { width: 100%; height: 100%; min-height: 600px; object-fit: cover; border-radius: 30px; box-shadow: 0 32px 80px rgba(16,43,80,.14); }
.contact-card { background: #fff; padding: clamp(26px, 5vw, 52px); border: 1px solid #dbe5f5; box-shadow: 0 32px 90px rgba(16,43,80,.12); border-radius: 30px; }
.contact-form { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-top: 28px; }
.contact-form label { display: grid; gap: 8px; color: #273b58; font-weight: 800; }
.contact-form label:nth-of-type(5) { grid-column: 1 / -1; }
.contact-form input, .contact-form textarea { border: 1px solid #d5e0ef; background: #f7f9fc; padding: 14px 15px; border-radius: 13px; color: #132033; transition: .2s ease; }
.contact-form input:focus, .contact-form textarea:focus { border-color: #1c52b9; box-shadow: 0 0 0 4px rgba(28,82,185,.1); outline: none; background: white; }
.contact-form button { grid-column: 1 / -1; border: 0; background: #173f91; color: white; box-shadow: 0 20px 42px rgba(23,63,145,.25); }
.hidden-field { display: none; }
.contact-meta { display: flex; flex-wrap: wrap; gap: 14px; margin-top: 20px; color: #62738c; font-weight: 700; }
.contact-meta span { display: inline-flex; align-items: center; gap: 7px; }
.footer { display: flex; align-items: center; justify-content: space-between; gap: 20px; padding: 34px 6vw; border-top: 1px solid #dbe5f5; color: #56687f; }
.footer img { width: 44px; }
.footer a { color: #173f91; font-weight: 800; }
.thanks-page { min-height: 100vh; display: grid; place-items: center; padding: 32px; background: radial-gradient(circle at 20% 20%, rgba(28,82,185,.18), transparent 34%), #f6f8fb; }
.thanks-card { max-width: 620px; background: #fff; border: 1px solid #dbe5f5; border-radius: 28px; padding: 52px; box-shadow: 0 35px 90px rgba(16,43,80,.15); text-align: left; }
.thanks-card svg { color: #1c52b9; }
.thanks-card h1 { font-size: clamp(2.4rem, 5vw, 4.4rem); color: #14243c; margin: 12px 0 18px; }
.thanks-card p { color: #52647e; line-height: 1.65; margin-bottom: 28px; }
.thanks-card .button-primary { background: #173f91; color: white; box-shadow: 0 18px 40px rgba(23,63,145,.25); }
.reveal { animation: rise .75s ease both; }
.delay-1 { animation-delay: .14s; }
@keyframes rise { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
@media (max-width: 980px) {
  .nav-wrap { position: absolute; border-radius: 22px; align-items: flex-start; }
  .nav-wrap nav { display: none; }
  .hero-grid, .split-section, .authority-section, .contact-section { grid-template-columns: 1fr; }
  .proof-strip, .services-grid, .process-timeline { grid-template-columns: 1fr 1fr; }
  .offset-heading { margin-left: 0; }
  .contact-visual img { min-height: 360px; }
}
@media (max-width: 640px) {
  .hero-section { min-height: auto; padding: 126px 22px 72px; }
  h1 { font-size: 3rem; }
  .proof-strip, .services-grid, .process-timeline, .contact-form { grid-template-columns: 1fr; }
  .proof-strip div { border-right: 0; border-bottom: 1px solid #e4ebf6; }
  .section { padding: 76px 22px; }
  .contact-form label:nth-of-type(5), .contact-form button { grid-column: auto; }
  .footer { flex-direction: column; align-items: flex-start; }
}
'''

index_html = '''<!doctype html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1" />
    <title>4AGILE | Staffing Reformer y agilidad aplicada para empresas</title>
    <meta name="description" content="4AGILE ayuda a empresas a cubrir brechas críticas de talento, integrar equipos especializados y mejorar la ejecución operativa con agilidad aplicada." />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="https://TU-DOMINIO.com/" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="4AGILE | Staffing Reformer y soluciones de talento" />
    <meta property="og:description" content="Talento especializado, transformación operativa y agilidad práctica para empresas que necesitan avanzar con velocidad." />
    <meta property="og:image" content="https://d2xsxph8kpxj0f.cloudfront.net/310519663522518131/cGj8tVWagDbYH7CbaH9eJ6/4agile-hero-executive-operations-DVD6EE8dqhsyXTLW9ykH8w.png" />
    <meta property="og:url" content="https://TU-DOMINIO.com/" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="theme-color" content="#173f91" />
    <script type="application/ld+json">
      {"@context":"https://schema.org","@type":"Organization","name":"4AGILE","url":"https://TU-DOMINIO.com/","description":"Staffing Reformer y soluciones de agilidad aplicada para empresas.","areaServed":"United States, Latin America","sameAs":[]}
    </script>
  </head>
  <body>
    <form name="contacto-4agile" method="POST" data-netlify="true" netlify-honeypot="bot-field" hidden>
      <input type="hidden" name="form-name" value="contacto-4agile" />
      <input name="bot-field" />
      <input type="text" name="nombre" />
      <input type="email" name="email" />
      <input type="text" name="empresa" />
      <input type="tel" name="telefono" />
      <textarea name="mensaje"></textarea>
    </form>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
'''

robots = '''User-agent: *
Allow: /

Sitemap: https://4agile.cl/sitemap.xml
'''

sitemap = '''<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://4agile.cl/</loc>
    <lastmod>2026-05-09</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
'''

redirects = '''/gracias /index.html 200
/* /index.html 200
'''

netlify_toml = '''[build]
  command = "pnpm build"
  publish = "dist/public"

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"

[[headers]]
  for = "/assets/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"
'''

readme = '''# 4AGILE — Sitio listo para Netlify

Este paquete contiene una versión optimizada para publicar en Netlify con formulario de contacto funcional mediante **Netlify Forms**, SEO técnico inicial y diseño responsive.

## Publicación recomendada

La forma más segura es subir este repositorio a GitHub y conectarlo con Netlify. Netlify ejecutará `pnpm build` y publicará la carpeta `dist/public` según `netlify.toml`.

| Paso | Acción | Resultado esperado |
|---|---|---|
| 1 | Crear una cuenta o iniciar sesión en Netlify | Acceso al panel de Sites |
| 2 | Subir el proyecto a GitHub | Código versionado y fácil de actualizar |
| 3 | En Netlify, seleccionar **Add new site → Import an existing project** | Netlify detecta el repositorio |
| 4 | Confirmar build command `pnpm build` y publish directory `dist/public` | Sitio publicado correctamente |
| 5 | Entrar en **Forms** dentro del sitio publicado | Aparece el formulario `contacto-4agile` tras el primer envío o deploy correcto |
| 6 | Configurar notificaciones en **Forms → Form notifications** | Los leads llegan al correo comercial que definas |
| 7 | Conectar dominio en **Domain management** | El sitio queda disponible en tu dominio propio |

## SEO pendiente de personalización

Antes de publicar con dominio final, reemplaza `https://TU-DOMINIO.com/` en estos archivos:

| Archivo | Qué cambiar |
|---|---|
| `client/index.html` | `canonical`, `og:url` y `Organization.url` |
| `client/public/robots.txt` | URL del sitemap |
| `client/public/sitemap.xml` | URL principal del sitio |

## Formulario de contacto

El formulario usa `name="contacto-4agile"`, `data-netlify="true"`, método `POST` y una página de gracias en `/gracias`. Netlify procesa el formulario en el servidor cuando el sitio está publicado en Netlify.

## Mantenimiento

Para cambiar textos, edita `client/src/pages/Home.tsx`. Para cambiar colores o estilos, edita `client/src/index.css`. Para SEO general y metadatos sociales, edita `client/index.html`.
'''

(pages / 'Home.tsx').write_text(home_tsx, encoding='utf-8')
(pages / 'Gracias.tsx').write_text(thanks_tsx, encoding='utf-8')
(src / 'App.tsx').write_text(app_tsx, encoding='utf-8')
(src / 'index.css').write_text(index_css, encoding='utf-8')
(client / 'index.html').write_text(index_html, encoding='utf-8')
(public / 'robots.txt').write_text(robots, encoding='utf-8')
(public / 'sitemap.xml').write_text(sitemap, encoding='utf-8')
(public / '_redirects').write_text(redirects, encoding='utf-8')
(root / 'netlify.toml').write_text(netlify_toml, encoding='utf-8')
(root / 'INSTRUCCIONES_NETLIFY.md').write_text(readme, encoding='utf-8')
print('Archivos Netlify preparados en', root)
