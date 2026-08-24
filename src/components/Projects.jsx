function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="animate-on-scroll" style={{ textAlign: 'center' }}>
          <span className="section-label">Projects</span>
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Showcasing what I build and learn along the way.
          </p>
        </div>

        <div className="projects-placeholder animate-on-scroll">
          <div className="projects-icon">🚧</div>
          <h3 className="projects-coming">Projects Coming Soon</h3>
          <p className="projects-desc">
            I'm currently building my technical portfolio.
            New projects will be added here as I complete them.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
