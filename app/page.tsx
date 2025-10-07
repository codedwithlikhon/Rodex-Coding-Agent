const featureHighlights = [
  {
    title: "Mobile-first blueprints",
    description:
      "Start from responsive layouts that flex with your content. Every component is optimized for phones first, then gracefully expands to larger screens.",
  },
  {
    title: "Guided AI collaboration",
    description:
      "Describe your idea in natural language and watch the builder generate sections, copy, and imagery tuned to your brand voice.",
  },
  {
    title: "Instant preview links",
    description:
      "Share a live preview with stakeholders in seconds. Gather feedback, iterate quickly, and publish when you are ready.",
  },
  {
    title: "Production-ready export",
    description:
      "Export semantic HTML and accessible React components that plug directly into your existing workflow.",
  },
];

const trustedBy = ["Product teams", "Design agencies", "Founders", "Marketing leads"];

const faqs = [
  {
    question: "How does the AI keep designs responsive?",
    answer:
      "Every layout starts from a fluid, mobile-first grid. Constraints adapt by breakpoint, so typography, spacing, and imagery scale smoothly from small screens up to desktop displays.",
  },
  {
    question: "Can I export the code it generates?",
    answer:
      "Yes. Download clean, semantic HTML or React components that follow accessible patterns and are ready to integrate into your repo.",
  },
  {
    question: "Does Rodex work with my existing workflow?",
    answer:
      "Rodex plugs into your current stack with shareable previews, stakeholder commenting, and version history so you never lose context.",
  },
];

export default function Page() {
  return (
    <main className="landing">
      <header className="landing__nav">
        <span className="landing__logo" aria-label="Rodex">
          <span className="landing__logo-dot" aria-hidden />
          Rodex
        </span>
        <nav className="landing__actions" aria-label="Primary">
          <a className="landing__link" href="#features">
            Features
          </a>
          <a className="landing__link" href="#workflow">
            Workflow
          </a>
          <a className="landing__link" href="#faq">
            FAQ
          </a>
        </nav>
        <a className="landing__cta" href="#get-started">
          Start building
        </a>
      </header>

      <section className="hero" id="get-started">
        <div className="hero__content">
          <p className="hero__eyebrow">Build beautiful apps with AI</p>
          <h1 className="hero__title">What should we build today?</h1>
          <p className="hero__subtitle">
            Create stunning apps and websites by chatting with your AI copilot. Describe the
            experience you want and launch faster than ever before.
          </p>
          <div className="hero__trusted" role="list" aria-label="Trusted by">
            {trustedBy.map((item) => (
              <span className="hero__trusted-item" role="listitem" key={item}>
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="hero__panel" aria-labelledby="idea-input">
          <div className="hero__panel-header">
            <div>
              <span className="hero__panel-indicator" aria-hidden />
              <span className="hero__panel-indicator" aria-hidden />
              <span className="hero__panel-indicator" aria-hidden />
            </div>
            <span className="hero__panel-status">Live collaboration</span>
          </div>
          <div className="hero__panel-body">
            <p className="hero__prompt">Type your idea and we&apos;ll build it together.</p>
            <div className="hero__form" id="workflow" role="group" aria-labelledby="idea-input">
              <div className="hero__input">
                <span className="hero__input-icon" aria-hidden>
                  <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </span>
                <label className="sr-only" htmlFor="idea-input">
                  Describe your product idea
                </label>
                <input
                  id="idea-input"
                  type="text"
                  placeholder="e.g. Social fitness app with weekly challenges"
                  autoComplete="off"
                  spellCheck="false"
                />
                <button type="button">Generate</button>
              </div>
            </div>
            <div className="hero__toggles" role="group" aria-label="Generation mode">
              <button type="button" className="hero__toggle hero__toggle--active">
                Plan
              </button>
              <button type="button" className="hero__toggle">
                Design
              </button>
              <button type="button" className="hero__toggle">
                Ship
              </button>
            </div>
            <div className="hero__cards">
              <article className="hero__card">
                <h3>Storyboard</h3>
                <p>
                  Your AI partner outlines the core user journeys, highlights key screens, and keeps the
                  flow mobile-first by default.
                </p>
              </article>
              <article className="hero__card hero__card--accent">
                <h3>Component kit</h3>
                <p>
                  Generate a responsive component library with flexible spacing, dark mode support, and
                  production-ready copy.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="features" id="features">
        <h2>Ship polished experiences in record time</h2>
        <p className="features__subtitle">
          Rodex orchestrates design, copy, and code so your team can stay focused on the big ideas while
          the details take care of themselves.
        </p>
        <div className="features__grid">
          {featureHighlights.map((feature) => (
            <article className="features__card" key={feature.title}>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="faq" id="faq" aria-labelledby="faq-heading">
        <h2 id="faq-heading">Frequently asked questions</h2>
        <div className="faq__list">
          {faqs.map((faq) => (
            <details key={faq.question}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="cta" aria-labelledby="cta-heading">
        <div className="cta__inner">
          <div>
            <p className="cta__eyebrow">Ready to launch?</p>
            <h2 id="cta-heading">Bring your product idea to life tonight.</h2>
            <p>
              Start a conversation with Rodex and generate a production-ready landing page before your
              next stand-up.
            </p>
          </div>
          <div className="cta__actions">
            <a className="cta__primary" href="#get-started">
              Start building now
            </a>
            <a className="cta__secondary" href="mailto:hello@rodex.ai">
              Talk to sales
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
