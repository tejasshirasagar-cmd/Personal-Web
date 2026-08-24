function Education() {
  return (
    <section className="education section" id="education">
      <div className="container">
        <div className="animate-on-scroll" style={{ textAlign: 'center' }}>
          <span className="section-label">Education</span>
          <h2 className="section-title">My Academic Journey</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Building a strong academic foundation for a career in technology.
          </p>
        </div>

        <div className="education-card animate-on-scroll">
          <div className="education-icon">🎓</div>
          <h3 className="education-degree">B.Tech</h3>
          <p className="education-institution">REVA University, Yelahanka</p>
          <span className="education-status">
            <span className="dot" style={{
              width: 6,
              height: 6,
              borderRadius: '50%',
              background: '#22c55e',
              display: 'inline-block',
            }}></span>
            Currently Pursuing
          </span>
          <p className="education-description">
            Building a strong foundation in technology and computer science.
            Developing practical skills, exploring new technologies, and
            preparing for a successful career in the technology industry.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Education;
