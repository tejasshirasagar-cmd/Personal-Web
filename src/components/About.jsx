function About() {
  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="about-left animate-on-scroll">
          <span className="section-label">About Me</span>
          <h2 className="about-heading">
            Curious mind.<br />
            <span className="highlight">Growing every day.</span>
          </h2>
        </div>

        <div className="about-right animate-on-scroll">
          <p className="about-text">
            I am a motivated B.Tech student currently pursuing undergraduate
            studies at REVA University, Yelahanka. I am passionate about
            technology, programming, and continuous learning, with a strong
            interest in exploring new technologies and developing practical
            skills.
          </p>
          <p className="about-text">
            I am eager to learn, build projects, collaborate with others,
            and grow into a skilled technology professional. I enjoy exploring
            new technologies, improving my practical skills, and working on
            projects that help me understand real-world applications.
          </p>
          <p className="about-text">
            I am always eager to learn, connect, collaborate, and explore
            opportunities that support my growth in the technology field.
          </p>

          <div className="about-stats">
            <div className="about-stat">
              <div className="about-stat-icon">🎓</div>
              <div className="about-stat-label">B.Tech</div>
            </div>
            <div className="about-stat">
              <div className="about-stat-icon">🏛️</div>
              <div className="about-stat-label">REVA Univ.</div>
            </div>
            <div className="about-stat">
              <div className="about-stat-icon">📍</div>
              <div className="about-stat-label">Karnataka</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
