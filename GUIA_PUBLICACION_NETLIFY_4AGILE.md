# Guía de publicación en Netlify para 4AGILE

**Autor:** Manus AI  
**Fecha:** 09 de mayo de 2026

He preparado el sitio de **4AGILE** para publicarse en Netlify con una estructura moderna de frontend estático, formulario de contacto compatible con **Netlify Forms**, metadatos SEO iniciales, `robots.txt`, `sitemap.xml`, encabezados de seguridad y una página de confirmación en `/gracias`.

> Netlify Forms funciona detectando formularios HTML en el sitio desplegado y procesando envíos sin necesidad de crear un backend propio. Para que Netlify detecte el formulario, el HTML debe contener un formulario con `data-netlify="true"` y un nombre de formulario estable.[1]

## Paquetes incluidos

| Archivo | Uso recomendado | Cuándo usarlo |
|---|---|---|
| `4agile_netlify_source_final.zip` | Proyecto fuente completo | Recomendado si vas a conectar GitHub con Netlify para actualizaciones futuras |
| `4agile_netlify_drag_drop_final.zip` | Build ya compilado | Útil para publicación rápida usando el área de drag-and-drop de Netlify |
| `GUIA_PUBLICACION_NETLIFY_4AGILE.md` | Instrucciones | Documento de referencia para publicar, activar formularios y ajustar SEO |

## Opción recomendada: publicar conectando GitHub

La opción más profesional es subir el proyecto fuente a un repositorio de GitHub y conectarlo a Netlify. Esto permite hacer cambios futuros, mantener historial de versiones y que Netlify reconstruya el sitio automáticamente cada vez que haya una actualización.

| Paso | Acción | Configuración |
|---|---|---|
| 1 | Descomprime `4agile_netlify_source_final.zip` | Obtendrás la carpeta `4agile_netlify` |
| 2 | Crea un repositorio nuevo en GitHub | Puede llamarse `4agile-website` |
| 3 | Sube el contenido de la carpeta al repositorio | Incluye `netlify.toml`, `client/`, `package.json` y demás archivos |
| 4 | Entra a Netlify y selecciona **Add new site → Import an existing project** | Conecta el repositorio |
| 5 | Verifica la configuración de build | `Build command: pnpm build` y `Publish directory: dist/public` |
| 6 | Publica el sitio | Netlify generará una URL temporal tipo `nombre.netlify.app` |

El archivo `netlify.toml` ya contiene la configuración para que Netlify publique la carpeta correcta:

```toml
[build]
  command = "pnpm build"
  publish = "dist/public"
```

## Opción rápida: publicar por drag-and-drop

Si quieres publicar sin GitHub, puedes usar `4agile_netlify_drag_drop_final.zip`. Esta opción es más rápida, pero menos conveniente para cambios futuros.

| Paso | Acción | Resultado |
|---|---|---|
| 1 | Inicia sesión en Netlify | Entra a tu panel |
| 2 | Ve a **Sites** | Busca la zona de publicación manual |
| 3 | Arrastra `4agile_netlify_drag_drop_final.zip` | Netlify publicará el sitio compilado |
| 4 | Prueba el formulario | Envía una solicitud de prueba |
| 5 | Revisa **Forms** en Netlify | Debería aparecer `contacto-4agile` |

## Activar notificaciones del formulario

Después del primer deploy y, en algunos casos, después del primer envío de prueba, Netlify mostrará el formulario en la sección **Forms** del sitio. Desde ahí puedes configurar notificaciones por correo.

| Configuración | Recomendación |
|---|---|
| Nombre del formulario | `contacto-4agile` |
| Campos incluidos | Nombre, email, empresa, teléfono y mensaje |
| Página posterior al envío | `/gracias` |
| Notificación recomendada | Email al correo comercial principal de 4AGILE |
| Antispam | Honeypot incluido como `bot-field` |

## Ajustes SEO antes de conectar el dominio final

Google recomienda que el sitio sea útil para usuarios, fácil de rastrear, con contenido organizado, URLs descriptivas y recursos accesibles para el crawler.[2] Por eso dejé preparados los metadatos principales, pero debes reemplazar el dominio temporal por el dominio final de 4AGILE.

| Archivo | Buscar | Reemplazar por |
|---|---|---|
| `client/index.html` | `https://TU-DOMINIO.com/` | Tu dominio final, por ejemplo `https://www.4agile.com/` |
| `client/public/robots.txt` | `https://TU-DOMINIO.com/sitemap.xml` | URL real del sitemap |
| `client/public/sitemap.xml` | `https://TU-DOMINIO.com/` | URL real de la página principal |

> Google explica que el SEO consiste en ayudar a los motores de búsqueda a entender el contenido y ayudar a los usuarios a encontrar el sitio y decidir si deben visitarlo desde un buscador.[2]

## Conectar dominio propio en Netlify

Cuando el sitio esté publicado, entra al panel del sitio en Netlify y ve a **Domain management**. Ahí puedes añadir tu dominio propio y seguir las instrucciones de DNS que Netlify te dará. Netlify también suele emitir SSL automáticamente para sitios conectados correctamente.

| Caso | Acción |
|---|---|
| Dominio comprado en otro proveedor | Añadir dominio en Netlify y actualizar DNS en tu registrador |
| Subdominio, por ejemplo `www` | Crear el registro CNAME indicado por Netlify |
| Dominio raíz | Seguir las instrucciones de A records o nameservers de Netlify |

## Recomendación final

Para 4AGILE recomiendo usar **GitHub + Netlify**, no solo drag-and-drop, porque el sitio necesitará ajustes posteriores de dominio, SEO, contenido y posiblemente automatizaciones de leads. El formulario ya está listo para funcionar en Netlify; solo falta publicar, hacer un envío de prueba y configurar el correo de notificación dentro del panel de Forms.

## Referencias

[1]: https://docs.netlify.com/manage/forms/setup/ "Netlify Docs — Forms setup"  
[2]: https://developers.google.com/search/docs/fundamentals/seo-starter-guide "Google Search Central — SEO Starter Guide"
