from pathlib import Path

root = Path('/home/ubuntu/4agile_netlify')
client = root / 'client'
src = client / 'src'
pages = src / 'pages'
public = client / 'public'
public.mkdir(parents=True, exist_ok=True)

(pages / 'Gracias.tsx').write_text('''import { ArrowLeft, CheckCircle2 } from "lucide-react";

export default function Gracias() {
  return (
    <main className="thanks-page">
      <section className="thanks-card">
        <CheckCircle2 size={46} />
        <h1>Gracias, recibimos tu solicitud.</h1>
        <p>El equipo de 4AGILE revisará tu necesidad de outsourcing de talentos, hunting de talentos o staffing especializado para coordinar una conversación inicial.</p>
        <a className="button-primary" href="/"><ArrowLeft size={18} /> Volver al inicio</a>
      </section>
    </main>
  );
}
''', encoding='utf-8')

(src / 'App.tsx').write_text('''import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Gracias from "./pages/Gracias";

// Filosofía visual: mantener el diseño premium corporativo original de 4AGILE y rutas simples para Netlify.
function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/gracias"} component={Gracias} />
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
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
''', encoding='utf-8')

(public / 'robots.txt').write_text('''User-agent: *
Allow: /

Sitemap: https://TU-DOMINIO.com/sitemap.xml
''', encoding='utf-8')

(public / 'sitemap.xml').write_text('''<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://TU-DOMINIO.com/</loc>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://TU-DOMINIO.com/gracias</loc>
    <priority>0.2</priority>
  </url>
</urlset>
''', encoding='utf-8')

(root / 'netlify.toml').write_text('''[build]
  command = "pnpm build"
  publish = "dist/public"

[[redirects]]
  from = "/gracias"
  to = "/index.html"
  status = 200

[[redirects]]
  from = "/blog"
  to = "/index.html"
  status = 200

[[redirects]]
  from = "/blog/*"
  to = "/index.html"
  status = 200

[[redirects]]
  from = "/*"
  to = "/"
  status = 301

[build.environment]
  NODE_VERSION = "22"
''', encoding='utf-8')

(root / 'INSTRUCCIONES_NETLIFY.md').write_text('''# 4AGILE — Publicación en Netlify

Esta versión conserva el diseño premium original preparado para GoHighLevel y queda adaptada para Netlify. El contenido se centra en los servicios principales de **outsourcing de talentos** y **hunting de talentos**, destacando velocidad, selección, garantía comercial, acompañamiento experto y reducción de riesgo.

| Elemento | Configuración final |
|---|---|
| Plataforma recomendada | Netlify |
| Build command | `pnpm build` |
| Publish directory | `dist/public` |
| Formulario | `contacto-4agile` |
| Página posterior al envío | `/gracias` |
| SEO técnico | `title`, `description`, Open Graph, JSON-LD, `robots.txt`, `sitemap.xml` |

## Pasos para publicar

Primero sube el ZIP fuente a GitHub o crea un repositorio con estos archivos. Luego entra a Netlify, selecciona **Add new site**, elige el repositorio y confirma que el build command sea `pnpm build` y el directorio publicable sea `dist/public`. Netlify detectará el formulario `contacto-4agile` porque está incluido en el HTML base del sitio.

Después del primer despliegue, envía una prueba desde el formulario. Luego entra a **Forms** dentro de Netlify, abre el formulario `contacto-4agile` y configura las notificaciones al correo comercial de 4AGILE. Finalmente, reemplaza `https://TU-DOMINIO.com/` por el dominio real en `client/index.html`, `client/public/robots.txt` y `client/public/sitemap.xml` antes del deploy definitivo.

## Recomendación de dominio y SEO

Cuando conectes el dominio final, usa una única versión canónica con HTTPS. Si el dominio será `https://www.4agile.cl`, reemplaza todas las apariciones de `https://TU-DOMINIO.com/` por ese valor. Después del deploy definitivo, envía el `sitemap.xml` a Google Search Console para facilitar el rastreo inicial.
''', encoding='utf-8')

print('SEO, formulario, página de gracias y configuración Netlify actualizados.')
