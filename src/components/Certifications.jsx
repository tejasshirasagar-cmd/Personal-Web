const certifications = [
  {
    name: 'IBM Certificate',
    provider: 'IBM',
    icon: '🏆',
    url: '#',
  },
  {
    name: 'Scaler Certificate',
    provider: 'Scaler',
    icon: '🏅',
    url: '#',
  },
];

function Certifications() {
  return (
    <section className="certifications section" id="certifications">
      <div className="container">
        <div className="animate-on-scroll" style={{ textAlign: 'center' }}>
          <span className="section-label">Certifications</span>
          <h2 className="section-title">Certifications</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Professional certifications that validate my learning journey.
          </p>
        </div>

        <div className="cert-grid">
          {certifications.map((cert) => (
            <div className="cert-card animate-on-scroll" key={cert.name}>
              <div className="cert-badge">{cert.icon}</div>
              <h3 className="cert-name">{cert.name}</h3>
              <p className="cert-provider">Provider: {cert.provider}</p>
              <a
                href={cert.url}
                className="cert-btn"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${cert.name}`}
              >
                View Certificate
                <span>↗</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;
