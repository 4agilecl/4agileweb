import { describe, it, expect } from "vitest";
import { renderToString } from "react-dom/server";
import { Router, type BaseLocationHook } from "wouter";
import Header, { LOGO_URL } from "./Header";

const createMockLocation = (initialPath: string): BaseLocationHook => {
  return () => [initialPath, (_path: string) => {}];
};

describe("Header component", () => {
  it("renders brand logo and links correctly", () => {
    const html = renderToString(
      <Router hook={createMockLocation("/")}>
        <Header />
      </Router>,
    );

    // Brand logo & title
    expect(html).toContain("4AGILE");
    expect(html).toContain(LOGO_URL);

    // Desktop nav links
    expect(html).toContain("Inicio");
    expect(html).toContain("Servicios");
    expect(html).toContain("Nosotros");
    expect(html).toContain("Blog");
    expect(html).toContain("Conversemos");

    // Hamburger button
    expect(html).toContain("mobile-menu-toggle");
    expect(html).toContain('aria-label="Abrir menú de navegación"');
    expect(html).toContain('aria-expanded="false"');
  });

  it("marks active link correctly when on /servicios", () => {
    const html = renderToString(
      <Router hook={createMockLocation("/servicios")}>
        <Header />
      </Router>,
    );

    expect(html).toContain('href="/servicios" class="active"');
  });

  it("marks active link correctly when on /nosotros", () => {
    const html = renderToString(
      <Router hook={createMockLocation("/nosotros")}>
        <Header />
      </Router>,
    );

    expect(html).toContain('href="/nosotros" class="active"');
  });

  it("marks active link correctly when on /blog and /contacto", () => {
    const blogHtml = renderToString(
      <Router hook={createMockLocation("/blog")}>
        <Header />
      </Router>,
    );
    expect(blogHtml).toContain('href="/blog" class="active"');

    const contactoHtml = renderToString(
      <Router hook={createMockLocation("/contacto")}>
        <Header />
      </Router>,
    );
    expect(contactoHtml).toContain('href="/contacto" class="nav-cta active"');
  });
});
