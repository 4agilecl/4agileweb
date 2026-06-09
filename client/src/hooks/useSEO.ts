import { useEffect } from "react";

interface SEOProps {
  title: string;
  description?: string;
  canonicalUrl?: string;
  ogType?: string;
  ogImage?: string;
}

export function useSEO({
  title,
  description,
  canonicalUrl,
  ogType = "website",
  ogImage,
}: SEOProps) {
  useEffect(() => {
    // 1. Update Document Title
    document.title = title;

    // Helper function to update or create meta tags
    const updateMetaTag = (
      attribute: string,
      attrValue: string,
      contentValue: string | undefined,
    ) => {
      if (!contentValue) return;
      let element = document.querySelector(`meta[${attribute}="${attrValue}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, attrValue);
        document.head.appendChild(element);
      }
      element.setAttribute("content", contentValue);
    };

    // 2. Update Meta Description
    updateMetaTag("name", "description", description);

    // 3. Update Canonical Link
    if (canonicalUrl) {
      let canonicalLink = document.querySelector("link[rel='canonical']");
      if (!canonicalLink) {
        canonicalLink = document.createElement("link");
        canonicalLink.setAttribute("rel", "canonical");
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.setAttribute("href", canonicalUrl);
    }

    // 4. Update OpenGraph Tags
    updateMetaTag("property", "og:title", title);
    updateMetaTag("property", "og:description", description);
    updateMetaTag("property", "og:type", ogType);
    if (canonicalUrl) {
      updateMetaTag("property", "og:url", canonicalUrl);
    }
    if (ogImage) {
      updateMetaTag("property", "og:image", ogImage);
    }
  }, [title, description, canonicalUrl, ogType, ogImage]);
}
