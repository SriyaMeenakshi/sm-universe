import { ArrowDownRight, ArrowUpRight, Menu, Orbit } from "lucide-react";

const universes = [
  {
    id: "techverse",
    number: "01",
    name: "SM.TechVerse",
    descriptor: "Engineering · Intelligence · Research",
    theme: "tech",
  },
  {
    id: "visualverse",
    number: "02",
    name: "SM.VisualVerse",
    descriptor: "Photography · Art · Visual stories",
    theme: "visual",
  },
];

export default function Home() {
  return (
    <main className="universe-shell">
      <header className="site-header">
        <a aria-label="SM Universe home" className="wordmark" href="#home">
          <span className="wordmark-mark"><Orbit size={18} strokeWidth={1.5} /></span>
          <span>SM <i>UNIVERSE</i></span>
        </a>
        <nav aria-label="Main navigation" className="header-nav">
          <a href="#about">The identity</a>
          <a href="#universes">Universes</a>
          <details className="mobile-menu">
            <summary aria-label="Open navigation menu"><Menu size={18} /></summary>
            <div className="mobile-menu-panel">
              <a href="#about">The identity</a>
              <a href="#universes">Universes</a>
            </div>
          </details>
        </nav>
      </header>

      <section aria-labelledby="intro-title" className="intro" id="home">
        <p className="eyebrow"><span className="status-dot" /> PERSONAL PORTFOLIO · INDIA</p>
        <h1 id="intro-title">One identity.<br /><em>Two universes.</em></h1>
        <p className="intro-copy">
          I’m <strong>Sriya Meenakshi Chalamalasetty</strong> — an engineer, researcher,
          builder, photographer, and artist. This is where my worlds meet.
        </p>
        <a className="scroll-cue" href="#universes"><span>Explore the worlds</span><ArrowDownRight size={16} /></a>
      </section>

      <section aria-label="Choose a universe" className="universe-grid" id="universes">
        {universes.map((universe) => (
          <article
            className={`universe-card universe-card--${universe.theme}`}
            id={universe.id}
            key={universe.id}
          >
            <div className="card-topline"><span>UNIVERSE {universe.number}</span><ArrowUpRight size={17} /></div>
            <div className="card-content">
              <span className="card-orbit" aria-hidden="true"><Orbit size={42} strokeWidth={1} /></span>
              <h2>{universe.name}</h2>
              <p>{universe.descriptor}</p>
            </div>
            <span className="card-explore">UNIVERSE PREVIEW <span aria-hidden="true">↗</span></span>
          </article>
        ))}
      </section>

      <footer className="site-footer" id="about">
        <span>SM UNIVERSE</span>
        <span>ONE IDENTITY · INFINITE POSSIBILITIES</span>
        <span>© {new Date().getFullYear()} SRIYA MEENAKSHI</span>
      </footer>
    </main>
  );
}
