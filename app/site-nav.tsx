"use client";

import { useEffect, useState } from "react";

// Same header as imwzh.top: red mark + spaced mono name, numbered section links,
// the section in view is underlined in red, and a boxed link out to the blog.
const SECTIONS = [
  { id: "news", label: "News" },
  { id: "education", label: "Education" },
  { id: "publications", label: "Publications" },
];

export function SiteNav() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const sections = SECTIONS.map(({ id }) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-20% 0px -75% 0px" }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="nav">
      <div className="nav-inner">
        <a href="#about" className="nav-logo">
          <span className="mark" aria-hidden="true"></span>ZIHAO WANG
        </a>
        <div className="nav-links">
          {SECTIONS.map(({ id, label }, i) => (
            <a key={id} href={`#${id}`} className={active === id ? "active" : ""}>
              <span className="idx">{String(i + 1).padStart(2, "0")}</span>
              {label}
            </a>
          ))}
          <a className="ext" href="https://imwzh.top/" target="_blank" rel="noreferrer">
            Blog ↗
          </a>
        </div>
      </div>
    </nav>
  );
}
