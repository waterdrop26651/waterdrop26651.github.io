const researchVectors = [
  {
    index: "01",
    title: "Representation",
    description:
      "Hidden-space flow, interpretability, steering, and the structures that make model behavior legible.",
    tags: ["Interpretability", "Steering", "Safety"],
  },
  {
    index: "02",
    title: "Modality",
    description:
      "How language, vision, and speech meet, align, and reshape one another inside shared systems.",
    tags: ["Speech", "Vision-Language", "Alignment"],
  },
  {
    index: "03",
    title: "Real-Time Interaction",
    description:
      "Interruption, latency, turn-taking, and agents that participate in time instead of only exchanging messages.",
    tags: ["Duplex Speech", "Turn-Taking", "Agents"],
  },
  {
    index: "04",
    title: "External Memory",
    description:
      "Controlled recall for fixed models: keeping facts, beliefs, context, and archives useful without letting them blur.",
    tags: ["Agent Memory", "Recall", "Context"],
  },
];

const projects = [
  {
    name: "Memento Skill",
    eyebrow: "Agent memory / Open source",
    description:
      "A controlled external-memory system for fragmented experiments and evolving hypotheses. It separates facts from beliefs and keeps only decision-relevant evidence on the hot path.",
    href: "https://github.com/waterdrop26651/Memento-skill",
    accent: true,
    meta: "Python · Agent Skill",
  },
  {
    name: "MMSteer",
    eyebrow: "Multimodal safety",
    description:
      "Research on safety representations and preventative steering for vision-language models.",
    href: "https://github.com/waterdrop26651/MMSteer",
    meta: "Python · Research",
  },
  {
    name: "Ouroboros Transformer",
    eyebrow: "Architecture experiment",
    description:
      "A cyclic Transformer where independent blocks form a ring and information flows through repeated loops.",
    href: "https://github.com/waterdrop26651/ouroboros_transformer",
    meta: "Transformer · Recurrence",
  },
  {
    name: "Upload Intelligence",
    eyebrow: "Collective intelligence",
    description:
      "An exploration of thought collectives, shared context, and what it might mean to become upload intelligence.",
    href: "https://github.com/waterdrop26651/Upload-Intelligence",
    meta: "Concept · Experiment",
  },
  {
    name: "FormulaAI",
    eyebrow: "Intelligent documents",
    description:
      "A document-formatting tool that reads structure and applies professional, configurable rules to academic and technical writing.",
    href: "https://github.com/waterdrop26651/FormulaAI",
    meta: "Python · Tooling",
  },
];

const education = [
  {
    period: "2026 — 2028",
    degree: "M.Phil. in Artificial Intelligence",
    school: "The Chinese University of Hong Kong, Shenzhen",
    note: "Expected",
  },
  {
    period: "2022 — 2026",
    degree: "B.Eng. in Artificial Intelligence",
    school: "Wuhan University",
    note: "",
  },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <main>
      <a className="skip-link" href="#content">
        Skip to content
      </a>

      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Waterdrop, back to top">
          <span className="wordmark-mark" aria-hidden="true" />
          <span>理水</span>
          <span className="wordmark-slash">/</span>
          <span className="wordmark-latin">WATERDROP</span>
        </a>

        <nav aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#research">Research</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>

        <a
          className="header-github"
          href="https://github.com/waterdrop26651"
          target="_blank"
          rel="noreferrer"
        >
          GitHub <Arrow />
        </a>
      </header>

      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-copy">
          <p className="kicker"><span>Student researcher</span><span>Artificial intelligence</span></p>
          <h1 id="hero-title">
            Representations <em>flow.</em>
            <br />
            Interactions give
            <br />
            them <em>shape.</em>
          </h1>
          <div className="hero-intro">
            <p>
              I&apos;m <strong>Zihao Wang</strong>, exploring speech language models,
              representation learning, real-time interaction, and agent memory.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                View selected work <span aria-hidden="true">↓</span>
              </a>
              <a
                className="button button-quiet"
                href="mailto:2022302111349@whu.edu.cn"
              >
                Email me <Arrow />
              </a>
            </div>
          </div>
        </div>

        <div className="flow-field" aria-label="Research themes orbiting a portrait of Zihao Wang">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="orbit orbit-three" />
          <span className="orbit-label orbit-label-one">REPRESENTATION</span>
          <span className="orbit-label orbit-label-two">INTERACTION</span>
          <span className="orbit-label orbit-label-three">MEMORY</span>
          <div className="portrait-frame">
            {/* Public GitHub avatar; kept remote so profile updates remain in sync. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://avatars.githubusercontent.com/u/126967031?v=4"
              alt="Zihao Wang"
              width="320"
              height="320"
            />
            <span className="portrait-scan" aria-hidden="true" />
          </div>
          <span className="coordinate coordinate-left">HIDDEN → SHARED</span>
          <span className="coordinate coordinate-right">SIGNAL → MEMORY</span>
        </div>

        <a className="scroll-cue" href="#about">
          <span aria-hidden="true">↓</span> Scroll to explore
        </a>
      </section>

      <div id="content">
        <section className="section about-section" id="about" aria-labelledby="about-title">
          <div className="section-rail">
            <p className="section-index">01 / ABOUT</p>
            <p className="rail-note">Seek truth from facts.</p>
          </div>
          <div className="about-content">
            <h2 id="about-title">
              I follow the undercurrent between
              <span> representation and interaction.</span>
            </h2>
            <div className="about-columns">
              <p>
                I first approached foundation models through language-model and
                multimodal safety. Safety became a probe: a way to see how data
                enters a model, becomes representation, and flows through hidden
                space.
              </p>
              <p>
                Speech makes interaction denser. Interruption, overlap, pause,
                repair, rhythm, and presence turn a prompt-response loop into
                shared time. I&apos;m interested in systems that can listen, wait,
                remember, and change through that interaction.
              </p>
            </div>
          </div>
        </section>

        <section className="section research-section" id="research" aria-labelledby="research-title">
          <div className="section-heading">
            <div>
              <p className="section-index">02 / RESEARCH VECTORS</p>
              <h2 id="research-title">Four currents, one question.</h2>
            </div>
            <p className="heading-note">
              Can a fixed model still learn to remember, respond, and change through interaction?
            </p>
          </div>

          <div className="vector-grid">
            {researchVectors.map((vector) => (
              <article className="vector-card" key={vector.index}>
                <div className="vector-topline">
                  <span>{vector.index}</span>
                  <span className="vector-dot" aria-hidden="true" />
                </div>
                <h3>{vector.title}</h3>
                <p>{vector.description}</p>
                <ul aria-label={`${vector.title} topics`}>
                  {vector.tags.map((tag) => <li key={tag}>{tag}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section projects-section" id="projects" aria-labelledby="projects-title">
          <div className="section-heading projects-heading">
            <div>
              <p className="section-index">03 / SELECTED WORK</p>
              <h2 id="projects-title">Projects in motion.</h2>
            </div>
            <a
              className="text-link"
              href="https://github.com/waterdrop26651?tab=repositories"
              target="_blank"
              rel="noreferrer"
            >
              All repositories <Arrow />
            </a>
          </div>

          <div className="project-list">
            {projects.map((project, index) => (
              <a
                className={`project-card${project.accent ? " project-featured" : ""}`}
                href={project.href}
                target="_blank"
                rel="noreferrer"
                key={project.name}
              >
                <span className="project-number">{String(index + 1).padStart(2, "0")}</span>
                <span className="project-main">
                  <span className="project-eyebrow">{project.eyebrow}</span>
                  <strong>{project.name}</strong>
                  <span className="project-description">{project.description}</span>
                </span>
                <span className="project-meta">{project.meta}</span>
                <span className="project-arrow" aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </section>

        <section className="section trajectory-section" aria-labelledby="trajectory-title">
          <div className="section-rail">
            <p className="section-index">04 / TRAJECTORY</p>
            <p className="rail-note">Learning across modalities.</p>
          </div>
          <div className="trajectory-content">
            <h2 id="trajectory-title">Education</h2>
            <div className="timeline">
              {education.map((item) => (
                <article className="timeline-item" key={item.period}>
                  <div className="timeline-period">
                    <span className="timeline-node" aria-hidden="true" />
                    {item.period}
                  </div>
                  <div>
                    <h3>{item.degree}</h3>
                    <p>{item.school}</p>
                  </div>
                  <span className="timeline-note">{item.note}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div className="contact-orbit contact-orbit-one" aria-hidden="true" />
          <div className="contact-orbit contact-orbit-two" aria-hidden="true" />
          <p className="section-index">05 / CONNECT</p>
          <h2 id="contact-title">
            Let&apos;s follow a
            <br />
            <em>new current.</em>
          </h2>
          <p>
            Open to research conversations, strange ideas, and collaborations around intelligent systems.
          </p>
          <div className="contact-actions">
            <a className="button button-light" href="mailto:2022302111349@whu.edu.cn">
              Start a conversation <Arrow />
            </a>
            <a
              className="button button-outline-light"
              href="https://github.com/waterdrop26651"
              target="_blank"
              rel="noreferrer"
            >
              Follow on GitHub <Arrow />
            </a>
          </div>
        </section>
      </div>

      <footer>
        <div className="footer-mark">
          <span className="wordmark-mark" aria-hidden="true" />
          <span>理水 / WATERDROP</span>
        </div>
        <p>Representations flow. Interactions give them shape.</p>
        <p>© {new Date().getFullYear()} Zihao Wang</p>
      </footer>
    </main>
  );
}
