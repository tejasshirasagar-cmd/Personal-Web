function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="dot"></span>
            Open to Opportunities
          </div>

          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">Tejas Shirasagar</span>
          </h1>

          <p className="hero-subtitle">
            B.Tech Student | Aspiring Technology Professional
          </p>

          <p className="hero-tagline">
            Learning. Building. Exploring Technology.
          </p>

          <p className="hero-description">
            A motivated B.Tech student passionate about technology,
            programming and continuous learning.
          </p>

          <div className="hero-buttons">
            <a href="#skills" className="btn-primary" aria-label="Explore my skills">
              Explore My Skills
              <span>→</span>
            </a>
            <a href="#contact" className="btn-secondary" aria-label="Contact me">
              Contact Me
              <span>✉</span>
            </a>
          </div>

          <div className="hero-socials">
            <a
              href="#"
              className="social-btn"
              aria-label="LinkedIn profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              in
            </a>
            <a
              href="#"
              className="social-btn"
              aria-label="GitHub profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              ⌨
            </a>
            <a
              href="mailto:tejasshirasagar@gmail.com"
              className="social-btn"
              aria-label="Send email"
            >
              ✉
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-card">
            <div className="hero-card-avatar">TS</div>
            <h2 className="hero-card-name">Tejas Shirasagar</h2>
            <p className="hero-card-role">B.Tech Student</p>
            <p className="hero-card-uni">REVA University, Yelahanka</p>
            <div className="hero-card-status">
              <span className="dot"></span>
              Open to learning &amp; opportunities
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
