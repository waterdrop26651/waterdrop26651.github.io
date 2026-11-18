import type { ReactNode } from "react";
import { SiteNav } from "./site-nav";

const EMAIL = "2022302111349@whu.edu.cn";
const GITHUB = "https://github.com/waterdrop26651";
const SCHOLAR = "https://scholar.google.com/citations?user=KyrsunoAAAAJ";
const BLOG = "https://imwzh.top/";

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
  sameAs: [GITHUB, SCHOLAR, BLOG],
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
        was accepted to <strong>ACM CCS 2026</strong>.
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

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <a className="skip-link" href="#news">
        Skip to content
      </a>
      <SiteNav />

      <main>
        <header className="hero" id="about">
          <div className="container hero-grid">
            <div>
              <h1>Zihao Wang</h1>
              <p className="role">M.Phil. Student · CUHK-Shenzhen</p>
              <div className="bio">
                <p>
                  I am an M.Phil. student at the School of Artificial
                  Intelligence, The Chinese University of Hong Kong, Shenzhen,
                  advised by{" "}
                  <a href="https://drwuz.com" target="_blank" rel="noreferrer">
                    Prof. Zhizheng Wu
                  </a>
                  .
                </p>
                <p>
                  My research focuses on <strong>speech language models</strong>,{" "}
                  <strong>emotion understanding and generation</strong>, and{" "}
                  <strong>interactive models</strong> that can hold a real-time
                  conversation.
                </p>
                <p>
                  Before that, I received my B.Eng. in Artificial Intelligence
                  from Wuhan University, where I worked on the safety of
                  multimodal large language models, especially
                  representation-level calibration and steering.
                </p>
              </div>
              <p className="contact">
                <a href={`mailto:${EMAIL}`}>Email</a>
                <span className="sep">/</span>
                <a href={SCHOLAR} target="_blank" rel="noreferrer">
                  Google Scholar
                </a>
                <span className="sep">/</span>
                <a href={GITHUB} target="_blank" rel="noreferrer">
                  GitHub
                </a>
                <span className="sep">/</span>
                <a href={BLOG} target="_blank" rel="noreferrer">
                  Blog
                </a>
              </p>
            </div>
            <div className="hero-photo">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/avatar.jpg" alt="Zihao Wang" width={132} height={132} />
            </div>
          </div>
        </header>

        <section className="section" id="news" aria-labelledby="news-title">
          <div className="container">
            <h2 className="label" id="news-title">
              News
            </h2>
            <ul className="rows">
              {news.map((item, index) => (
                <li className="row" key={index}>
                  <div className="row-date">{item.date}</div>
                  <div className="row-detail">{item.text}</div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section" id="education" aria-labelledby="education-title">
          <div className="container">
            <h2 className="label" id="education-title">
              Education
            </h2>
            <ul className="rows">
              {education.map((item) => (
                <li className="row" key={item.degree}>
                  <div className="row-date">{item.date}</div>
                  <div className="row-detail">
                    <span className="title">
                      {item.degree}
                      {item.note ? ` (${item.note})` : ""}
                    </span>
                    <span className="sub">{item.school}</span>
                    {item.advisor ? <span className="sub">{item.advisor}</span> : null}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section" id="publications" aria-labelledby="publications-title">
          <div className="container">
            <h2 className="label" id="publications-title">
              Publications
            </h2>
            <p className="pub-legend">
              <sup className="corresponding-mark">†</sup> Corresponding author
            </p>
            <ul className="pub-list">
              <li className="pub-item">
                <span className="pub-no">2026</span>
                <div>
                  <span className="pub-title">
                    MMAligner: Safeguarding Multimodal Large Language Models
                    through Representation Calibration
                  </span>
                  <span className="pub-authors">
                    Shenyi Zhang, Keyan Guo,{" "}
                    <span className="author-me">Zihao Wang</span>, Xuebin Li,
                    Lingchen Zhao, Hongxin Hu, Chao Shen, Qian Wang
                    <sup className="corresponding-mark">†</sup>
                  </span>
                  <span className="pub-venue">
                    ACM Conference on Computer and Communications Security
                    <span className="venue-tag">CCS 2026</span>
                  </span>
                  <span className="pub-links">
                    <a href="https://arxiv.org/abs/2608.05909">[ Preprint ]</a>
                    <a href="https://github.com/shenyizg/MMAligner">[ Code ]</a>
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p className="eot">— END OF TRANSMISSION —</p>
        <p>© 2026 Zihao Wang</p>
      </footer>
    </>
  );
}
