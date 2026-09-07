import type { ReactNode } from "react";
import { SiteNav } from "./site-nav";

const EMAIL = "2022302111349@whu.edu.cn";
const GITHUB = "https://github.com/waterdrop26651";

// Structured data so search engines can identify this page as Zihao Wang's homepage.
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Zihao Wang",
  alternateName: "zihaowang",
  url: "https://waterdrop26651.github.io/",
  image: "https://waterdrop26651.github.io/avatar.jpg",
  email: `mailto:${EMAIL}`,
  jobTitle: "M.Phil. Student",
  affiliation: {
    "@type": "CollegeOrUniversity",
    name: "School of Artificial Intelligence, The Chinese University of Hong Kong, Shenzhen",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Wuhan University",
  },
  sameAs: [GITHUB],
};

const news: { date: string; text: ReactNode }[] = [
  {
    date: "Sep 2026",
    text: (
      <>
        Our paper{" "}
        <a href="https://arxiv.org/abs/2608.05909">
          <strong>MMAligner</strong>
        </a>{" "}
        was accepted to <strong>ACM CCS 2026</strong>. 🎉
      </>
    ),
  },
  {
    date: "Sep 2026",
    text: "Started my M.Phil. study at the School of Artificial Intelligence, The Chinese University of Hong Kong, Shenzhen, with Prof. Zhizheng Wu as my advisor.",
  },
];

const education = [
  {
    date: "2026 — 2028",
    degree: "M.Phil. in Artificial Intelligence",
    school:
      "School of Artificial Intelligence, The Chinese University of Hong Kong, Shenzhen",
    advisor: "Advisor: Prof. Zhizheng Wu",
    note: "Expected",
  },
  {
    date: "2022 — 2026",
    degree: "B.Eng. in Artificial Intelligence",
    school: "Wuhan University",
    advisor: "",
    note: "",
  },
];

const projects = [
  {
    name: "Memento Skill",
    eyebrow: "Agent Memory · Open Source",
    description:
      "A controlled external-memory system for fragmented experiments and evolving hypotheses. It separates facts from beliefs and keeps only decision-relevant evidence on the hot path.",
    href: "https://github.com/waterdrop26651/Memento-skill",
    meta: "Python · Agent Skill",
  },
  {
    name: "MMSteer",
    eyebrow: "Multimodal Safety",
    description:
      "Research on safety representations and preventative steering for vision-language models.",
    href: "https://github.com/waterdrop26651/MMSteer",
    meta: "Python · Research",
  },
  {
    name: "Ouroboros Transformer",
    eyebrow: "Architecture Experiment",
    description:
      "A cyclic Transformer where independent blocks form a ring and information flows through repeated loops.",
    href: "https://github.com/waterdrop26651/ouroboros_transformer",
    meta: "Transformer · Recurrence",
  },
  {
    name: "Upload Intelligence",
    eyebrow: "Collective Intelligence",
    description:
      "An exploration of thought collectives, shared context, and what it might mean to become upload intelligence.",
    href: "https://github.com/waterdrop26651/Upload-Intelligence",
    meta: "Concept · Experiment",
  },
  {
    name: "FormulaAI",
    eyebrow: "Intelligent Documents",
    description:
      "A document-formatting tool that reads structure and applies professional, configurable rules to academic and technical writing.",
    href: "https://github.com/waterdrop26651/FormulaAI",
    meta: "Python · Tooling",
  },
];

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <SiteNav />
      <a className="skip-link" href="#news">
        Skip to content
      </a>

      <header className="hero" id="about">
        <div className="container hero-grid">
          <div className="hero-photo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/avatar.jpg" alt="Zihao Wang" width={180} height={180} />
          </div>
          <div className="hero-text">
            <h1>Zihao Wang</h1>
            <p className="subtitle">M.Phil. Student</p>
            <p className="affiliation">
              School of Artificial Intelligence, The Chinese University of
              Hong Kong, Shenzhen
            </p>
            <p className="bio">
              I am an M.Phil. student at the School of Artificial
              Intelligence, The Chinese University of Hong Kong, Shenzhen. My
              advisor is{" "}
              <a href="https://drwuz.com" target="_blank" rel="noreferrer">
                Prof. Zhizheng Wu
              </a>
              . I received my B.Eng. degree in Artificial Intelligence from
              Wuhan University in 2026, where I worked on the safety of
              multimodal large language models, especially
              representation-level calibration and steering. My current
              research focuses on{" "}
              <strong>speech language models (SLM)</strong>,{" "}
              <strong>emotion understanding and generation</strong>, and{" "}
              <strong>interactive models</strong>.
            </p>
            <div className="hero-links">
              <a href={`mailto:${EMAIL}`} className="btn">
                Email
              </a>
              <a
                href={GITHUB}
                className="btn btn-outline"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </header>

      <section className="section section-alt" id="news" aria-labelledby="news-title">
        <div className="container">
          <h2 id="news-title">News</h2>
          <ul className="news-list">
            {news.map((item, index) => (
              <li className="cv-item" key={index}>
                <div className="cv-date">{item.date}</div>
                <div className="cv-detail">{item.text}</div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" id="education" aria-labelledby="education-title">
        <div className="container">
          <h2 id="education-title">Education</h2>
          <div>
            {education.map((item) => (
              <div className="cv-item" key={item.degree}>
                <div className="cv-date">{item.date}</div>
                <div className="cv-detail">
                  <strong>{item.degree}</strong>
                  <br />
                  {item.school}
                  {item.note ? ` (${item.note})` : ""}
                  {item.advisor ? (
                    <>
                      <br />
                      {item.advisor}
                    </>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="section section-alt"
        id="publications"
        aria-labelledby="publications-title"
      >
        <div className="container">
          <h2 id="publications-title">Publications</h2>
          <p className="pub-legend">
            <sup className="corresponding-mark">†</sup> Corresponding author
          </p>

          <div className="pub-year">2026</div>
          <ul className="pub-list">
            <li className="pub-item">
              <span className="pub-title">
                MMAligner: Safeguarding Multimodal Large Language Models through
                Representation Calibration
              </span>
              <span className="pub-authors">
                Shenyi Zhang, Keyan Guo,{" "}
                <span className="author-me">Zihao Wang</span>, Xuebin Li,
                Lingchen Zhao, Hongxin Hu, Chao Shen, Qian Wang
                <sup className="corresponding-mark">†</sup>
              </span>
              <span className="pub-venue">
                ACM Conference on Computer and Communications Security{" "}
                <strong className="venue-top">(CCS)</strong>, 2026
              </span>
              <span className="pub-links">
                <a href="https://arxiv.org/abs/2608.05909">Preprint</a>
                {" · "}
                <a href="https://github.com/shenyizg/MMAligner">Code</a>
              </span>
            </li>
          </ul>
        </div>
      </section>

      <section className="section" id="projects" aria-labelledby="projects-title">
        <div className="container">
          <h2 id="projects-title">Open Source</h2>
          <div className="project-grid">
            {projects.map((project) => (
              <a
                className="project-card"
                href={project.href}
                target="_blank"
                rel="noreferrer"
                key={project.name}
              >
                <span className="project-eyebrow">{project.eyebrow}</span>
                <strong className="project-name">
                  {project.name}{" "}
                  <span className="project-arrow" aria-hidden="true">
                    ↗
                  </span>
                </strong>
                <span className="project-description">
                  {project.description}
                </span>
                <span className="project-meta">{project.meta}</span>
              </a>
            ))}
          </div>
          <p className="projects-more">
            <a
              className="text-link"
              href="https://github.com/waterdrop26651?tab=repositories"
              target="_blank"
              rel="noreferrer"
            >
              All repositories ↗
            </a>
          </p>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p className="footer-links">
            <a href={`mailto:${EMAIL}`}>Email</a>
            {" · "}
            <a href={GITHUB} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </p>
          <p>© 2026 Zihao Wang</p>
        </div>
      </footer>
    </main>
  );
}
