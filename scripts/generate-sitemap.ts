import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const blogFilePath = path.resolve(__dirname, "../client/src/pages/Blog.tsx");
const sitemapOutputPath = path.resolve(
  __dirname,
  "../client/public/sitemap.xml",
);

function extractArticles(content: string) {
  const startKeyword = "const articles = [";
  const startIndex = content.indexOf(startKeyword);
  if (startIndex === -1) return [];

  let depth = 1;
  let i = startIndex + startKeyword.length;
  let articlesStr = "";

  while (i < content.length && depth > 0) {
    const char = content[i];
    if (char === "[") depth++;
    else if (char === "]") depth--;
    if (depth > 0) {
      articlesStr += char;
    }
    i++;
  }

  const blocks: string[] = [];
  let currentBlock = "";
  let braceDepth = 0;
  let inString = false;
  let stringChar = "";

  for (let j = 0; j < articlesStr.length; j++) {
    const char = articlesStr[j];

    if (
      (char === '"' || char === "'" || char === "`") &&
      articlesStr[j - 1] !== "\\"
    ) {
      if (!inString) {
        inString = true;
        stringChar = char;
      } else if (char === stringChar) {
        inString = false;
      }
    }

    if (!inString) {
      if (char === "{") {
        braceDepth++;
        if (braceDepth === 1) {
          currentBlock = "";
          continue;
        }
      } else if (char === "}") {
        braceDepth--;
        if (braceDepth === 0) {
          blocks.push(currentBlock);
          continue;
        }
      }
    }

    if (braceDepth > 0) {
      currentBlock += char;
    }
  }

  return blocks
    .map((block) => {
      const slugMatch = block.match(/slug:\s*["']([^"']+)["']/);
      const dateMatch = block.match(/date:\s*["']([^"']+)["']/);
      return {
        slug: slugMatch ? slugMatch[1] : null,
        date: dateMatch ? dateMatch[1] : null,
      };
    })
    .filter(
      (item): item is { slug: string; date: string | null } =>
        item.slug !== null,
    );
}

function main() {
  console.log("Iniciando generación de sitemap...");

  if (!fs.existsSync(blogFilePath)) {
    console.error(
      `Error: No se encontró el archivo de blog en: ${blogFilePath}`,
    );
    process.exit(1);
  }

  const blogContent = fs.readFileSync(blogFilePath, "utf-8");
  const articles = extractArticles(blogContent);

  console.log(`Se encontraron ${articles.length} artículos en Blog.tsx`);

  let sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://4agile.cl/</loc>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://4agile.cl/servicios</loc>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://4agile.cl/productividad</loc>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://4agile.cl/nosotros</loc>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://4agile.cl/contacto</loc>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://4agile.cl/blog</loc>
    <priority>0.8</priority>
  </url>
`;

  articles.forEach((article) => {
    sitemapContent += `  <url>\n`;
    sitemapContent += `    <loc>https://4agile.cl/blog/${article.slug}</loc>\n`;
    if (article.date) {
      sitemapContent += `    <lastmod>${article.date}</lastmod>\n`;
    }
    sitemapContent += `    <priority>0.7</priority>\n`;
    sitemapContent += `  </url>\n`;
  });

  sitemapContent += `  <url>
    <loc>https://4agile.cl/gracias</loc>
    <priority>0.2</priority>
  </url>
</urlset>
`;

  fs.writeFileSync(sitemapOutputPath, sitemapContent, "utf-8");
  console.log(`Sitemap generado exitosamente en: ${sitemapOutputPath}`);

  // Si existe la carpeta dist/public, también copiamos el sitemap allí para asegurar consistencia
  const distSitemapPath = path.resolve(__dirname, "../dist/public/sitemap.xml");
  if (fs.existsSync(path.dirname(distSitemapPath))) {
    fs.writeFileSync(distSitemapPath, sitemapContent, "utf-8");
    console.log(`Sitemap copiado exitosamente a: ${distSitemapPath}`);
  }
}

main();
