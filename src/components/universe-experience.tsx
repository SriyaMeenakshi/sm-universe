"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import {
  Aperture,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Menu,
  Orbit,
  Sparkles,
  X,
} from "lucide-react";
import {
  AnimatePresence,
  MotionConfig,
  motion,
  useReducedMotion,
} from "motion/react";

type Universe = "tech" | "visual";
let universeFallback: Universe = "tech";

const subscribeToUniverse = (callback: () => void) => {
  window.addEventListener("storage", callback);
  window.addEventListener("sm-universe-change", callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("sm-universe-change", callback);
  };
};

const getUniverseSnapshot = (): Universe => {
  try {
    const stored = window.localStorage.getItem("sm-universe");
    universeFallback = stored === "visual" ? "visual" : "tech";
    return universeFallback;
  } catch {
    return universeFallback;
  }
};

const getServerUniverseSnapshot = (): Universe => "tech";

const roles = ["an engineer", "a researcher", "a builder", "a photographer", "an artist"];
const techStack = ["AI / ML", "Computer Vision", "NLP", "Full-Stack"];

export function UniverseExperience() {
  const universe = useSyncExternalStore(
    subscribeToUniverse,
    getUniverseSnapshot,
    getServerUniverseSnapshot,
  );
  const [roleIndex, setRoleIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;
    const timer = window.setInterval(() => {
      setRoleIndex((current) => (current + 1) % roles.length);
    }, 3000);
    return () => window.clearInterval(timer);
  }, [reduceMotion]);

  const changeUniverse = (nextUniverse: Universe) => {
    universeFallback = nextUniverse;
    try {
      window.localStorage.setItem("sm-universe", nextUniverse);
    } catch {
      // The selected universe still changes for this page when storage is unavailable.
    }
    window.dispatchEvent(new Event("sm-universe-change"));
    setMenuOpen(false);
  };

  return (
    <MotionConfig reducedMotion="user">
      <main className={`experience experience--${universe}`} id="home">
        <div aria-hidden="true" className="experience-grid" />
        <header className="site-header">
          <a aria-label="SM Universe home" className="wordmark" href="#home">
            <span className="wordmark-mark"><Orbit size={19} strokeWidth={1.5} /></span>
            <span>SM <i>UNIVERSE</i></span>
          </a>
          <nav aria-label="Main navigation" className="header-nav">
            <a href="#about">About</a>
            <a href="#explore">Explore</a>
            <div aria-label="Choose your universe" className="universe-toggle" role="group">
              <button
                aria-pressed={universe === "tech"}
                className={universe === "tech" ? "is-active" : ""}
                onClick={() => changeUniverse("tech")}
                type="button"
              >
                <span className="toggle-indicator" /> TECH
              </button>
              <button
                aria-pressed={universe === "visual"}
                className={universe === "visual" ? "is-active" : ""}
                onClick={() => changeUniverse("visual")}
                type="button"
              >
                <span className="toggle-indicator" /> ART
              </button>
            </div>
            <button
              aria-expanded={menuOpen}
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              className="mobile-menu-button"
              onClick={() => setMenuOpen((open) => !open)}
              type="button"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </nav>
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                animate={{ opacity: 1, y: 0 }}
                className="mobile-menu-panel"
                exit={{ opacity: 0, y: reduceMotion ? 0 : -6 }}
                initial={{ opacity: 0, y: reduceMotion ? 0 : -6 }}
                transition={{ duration: reduceMotion ? 0.01 : 0.18 }}
              >
                <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
                <a href="#explore" onClick={() => setMenuOpen(false)}>Explore</a>
              </motion.div>
            )}
          </AnimatePresence>
        </header>

        <AnimatePresence mode="wait">
          <motion.section
            animate={{ opacity: 1, y: 0 }}
            aria-label={universe === "tech" ? "SM TechVerse introduction" : "SM VisualVerse introduction"}
            className={`hero hero--${universe}`}
            exit={{ opacity: 0, y: reduceMotion ? 0 : 10 }}
            initial={{ opacity: 0, y: reduceMotion ? 0 : 10 }}
            key={universe}
            transition={{ duration: reduceMotion ? 0.01 : 0.32, ease: "easeOut" }}
          >
            <div className="hero-copy" id="about">
              <p className="eyebrow">
                <span className="status-dot" />
                {universe === "tech" ? "SYSTEM ONLINE · UNIVERSE 01" : "A CREATIVE JOURNAL · UNIVERSE 02"}
              </p>
              <h1>Sriya Meenakshi<br /><em>Chalamalasetty</em></h1>
              <div aria-live="polite" className="role-line">
                <span>I am</span>
                <AnimatePresence mode="wait">
                  <motion.strong
                    animate={{ opacity: 1, y: 0 }}
                    className="animated-role"
                    exit={{ opacity: 0, y: reduceMotion ? 0 : -8 }}
                    initial={{ opacity: 0, y: reduceMotion ? 0 : 8 }}
                    key={universe === "visual" ? "a visual storyteller" : roles[roleIndex]}
                    transition={{ duration: reduceMotion ? 0.01 : 0.2 }}
                  >
                    {universe === "visual" ? "a visual storyteller" : roles[roleIndex]}
                  </motion.strong>
                </AnimatePresence>
              </div>
              <p className="hero-description">
                {universe === "tech"
                  ? "Building Intelligent Systems. Exploring Beyond Boundaries."
                  : "Beyond Code, There Is Creativity."}
              </p>
              <div className="hero-actions">
                <a className="primary-action" href="#explore">
                  {universe === "tech" ? "Explore projects" : "Explore gallery"}
                  <ArrowRight size={16} />
                </a>
                <a className="secondary-action" href="#about">A little about me <ArrowDownRight size={15} /></a>
              </div>
              <div aria-label="Social profiles" className="social-links">
                <a href="https://www.linkedin.com/in/sriya-meenakshi-chalamalasetty/" rel="noreferrer" target="_blank">
                  LinkedIn <ArrowUpRight size={12} />
                </a>
                <a href="https://github.com/SriyaMeenakshi" rel="noreferrer" target="_blank">
                  GitHub <ArrowUpRight size={12} />
                </a>
              </div>
            </div>

            <div aria-label="Portrait and custom avatar placeholders" className="hero-art">
              <div aria-hidden="true" className="art-orbit art-orbit--one" />
              <div aria-hidden="true" className="art-orbit art-orbit--two" />
              <div className="portrait-placeholder portrait-placeholder--photo">
                <div className="placeholder-mark"><Aperture size={26} strokeWidth={1} /></div>
                <span>PROFILE PHOTOGRAPH</span>
                <small>PHOTO PLACEHOLDER</small>
              </div>
              <div className="portrait-placeholder portrait-placeholder--avatar">
                <div aria-hidden="true" className="avatar-outline">
                  <span className="avatar-head" />
                  <span className="avatar-shoulders" />
                </div>
                <span>CUSTOM AVATAR</span>
                <small>AWAITING YOUR PHOTO</small>
              </div>
              <motion.div
                animate={reduceMotion ? undefined : { y: [0, -7, 0] }}
                className="hero-note hero-note--top"
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <Sparkles size={14} /> ONE IDENTITY
              </motion.div>
              <div className="hero-note hero-note--bottom">
                {universe === "tech" ? "BUILD · LEARN · DISCOVER" : "NOTICE · FRAME · CREATE"}
              </div>
            </div>
          </motion.section>
        </AnimatePresence>

        <section aria-label="Featured interests" className="interest-strip" id="explore">
          {universe === "tech" ? (
            <>
              <div className="strip-label"><span>01 — THE TECHVERSE</span><strong>Curiosity, engineered.</strong></div>
              <div aria-label="Areas of interest" className="stack-orbit">
                {techStack.map((item, index) => (
                  <span className={`stack-chip stack-chip--${index + 1}`} key={item}>{item}</span>
                ))}
              </div>
              <span className="strip-link">PROJECTS WILL APPEAR HERE</span>
            </>
          ) : (
            <>
              <div className="strip-label"><span>02 — THE VISUALVERSE</span><strong>Finding stories in the details.</strong></div>
              <div className="creative-tags"><span>Nature</span><span>Travel</span><span>Everyday light</span></div>
              <span className="strip-link strip-link--quiet">PERSONAL PHOTO GALLERY · AWAITING PHOTOS</span>
            </>
          )}
        </section>

        <footer className="site-footer">
          <span>SM UNIVERSE</span>
          <span>ONE IDENTITY · INFINITE POSSIBILITIES</span>
          <span>© {new Date().getFullYear()} SRIYA MEENAKSHI</span>
        </footer>
      </main>
    </MotionConfig>
  );
}
