import Link from 'next/link';

import ThemePortrait from './ThemePortrait';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-avatar">
          <ThemePortrait width={160} height={160} priority />
        </div>

        <h1 className="hero-title">
          <span className="hero-name">Asmaad Saeed</span>
        </h1>

        <p className="hero-tagline">
          AI Engineer &amp; Data Scientist with hands-on experience deploying
          LLM-integrated systems, REST APIs, and end-to-end ML pipelines.
          <br />
          Passionate about building production-grade AI solutions where
          reliability matters as much as accuracy.
        </p>

        <div className="hero-chips">
          <span className="hero-chip">UOS Alum</span>
          <span className="hero-chip">Google &amp; IBM Certified Data Scientist</span>
          <span className="hero-chip">AI Engineer</span>
        </div>

        <div className="hero-cta">
          <Link href="/about" className="button button-primary">
            About Me
          </Link>
          <Link href="/resume" className="button button-secondary">
            View Resume
          </Link>
        </div>
      </div>

      <div className="hero-bg" aria-hidden="true">
        <div className="hero-gradient" />
      </div>
    </section>
  );
}
