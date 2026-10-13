import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const siteUrl = "https://mt-personal-portfolio.netlify.app";

const pageMetadata = {
  "/": {
    title: "Mohammed Tharick | Full-Stack Developer",
    description:
      "Explore the portfolio of Mohammed Tharick, a full-stack developer in Chennai, India building modern web applications with React, Node.js, and MongoDB.",
  },
  "/about": {
    title: "About Mohammed Tharick | Full-Stack Developer",
    description:
      "Learn about Mohammed Tharick, his full-stack development skills, tools, and approach to building scalable web applications.",
  },
  "/projects": {
    title: "Projects | Mohammed Tharick",
    description:
      "Explore full-stack, frontend, and AI/ML projects built by Mohammed Tharick using React, Node.js, MongoDB, Python, and more.",
  },
  "/contact": {
    title: "Contact Mohammed Tharick | Full-Stack Developer",
    description:
      "Get in touch with Mohammed Tharick about freelance projects, full-time opportunities, and collaborations.",
  },
};

const setMeta = (attribute, key, content) => {
  let element = document.head.querySelector(`meta[${attribute}="${key}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
};

const Seo = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const metadata = pageMetadata[pathname] || pageMetadata["/"];
    const canonicalUrl = `${siteUrl}${pathname}`;

    document.title = metadata.title;
    setMeta("name", "description", metadata.description);
    setMeta("property", "og:title", metadata.title);
    setMeta("property", "og:description", metadata.description);
    setMeta("property", "og:url", canonicalUrl);
    setMeta("name", "twitter:title", metadata.title);
    setMeta("name", "twitter:description", metadata.description);

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;
  }, [pathname]);

  return null;
};

export default Seo;
