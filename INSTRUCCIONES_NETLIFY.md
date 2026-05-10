# 4AGILE — Publicación en Netlify

Esta versión conserva el diseño premium original preparado para GoHighLevel y queda adaptada para Netlify. El contenido se centra en los servicios principales de **outsourcing de talentos** y **hunting de talentos**, destacando velocidad, curaduría, garantía comercial, acompañamiento experto y reducción de riesgo.

| Elemento                  | Configuración final                                                      |
| ------------------------- | ------------------------------------------------------------------------ |
| Plataforma recomendada    | Netlify                                                                  |
| Build command             | `pnpm build`                                                             |
| Publish directory         | `dist/public`                                                            |
| Formulario                | `contacto-4agile`                                                        |
| Página posterior al envío | `/gracias`                                                               |
| SEO técnico               | `title`, `description`, Open Graph, JSON-LD, `robots.txt`, `sitemap.xml` |

## Pasos para publicar

Primero sube el ZIP fuente a GitHub o crea un repositorio con estos archivos. Luego entra a Netlify, selecciona **Add new site**, elige el repositorio y confirma que el build command sea `pnpm build` y el directorio publicable sea `dist/public`. Netlify detectará el formulario `contacto-4agile` porque está incluido en el HTML base del sitio.

Después del primer despliegue, envía una prueba desde el formulario. Luego entra a **Forms** dentro de Netlify, abre el formulario `contacto-4agile` y configura las notificaciones al correo comercial de 4AGILE. Finalmente, reemplaza `https://TU-DOMINIO.com/` por el dominio real en `client/index.html`, `client/public/robots.txt` y `client/public/sitemap.xml` antes del deploy definitivo.

## Recomendación de dominio y SEO

Cuando conectes el dominio final, usa una única versión canónica con HTTPS. Si el dominio será `https://www.4agile.cl`, reemplaza todas las apariciones de `https://TU-DOMINIO.com/` por ese valor. Después del deploy definitivo, envía el `sitemap.xml` a Google Search Console para facilitar el rastreo inicial.
