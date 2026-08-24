const skillsData = [
  {
    icon: '💻',
    name: 'Programming',
    desc: 'Building coding skills and learning programming concepts through hands-on practice.',
  },
  {
    icon: '🧠',
    name: 'Computer Science Fundamentals',
    desc: 'Developing a solid understanding of core CS concepts and computational thinking.',
  },
  {
    icon: '🚀',
    name: 'Learning New Technologies',
    desc: 'Actively exploring emerging tools, frameworks, and technologies in the industry.',
  },
  {
    icon: '🧩',
    name: 'Problem Solving',
    desc: 'Approaching challenges analytically and finding effective, practical solutions.',
  },
  {
    icon: '🛠️',
    name: 'Practical Project Development',
    desc: 'Turning ideas into working projects to gain real-world development experience.',
  },
  {
    icon: '📚',
    name: 'Continuous Learning',
    desc: 'Committed to ongoing growth, staying updated, and expanding knowledge every day.',
  },
  {
    icon: '🔄',
    name: 'Adaptability',
    desc: 'Quickly adapting to new environments, tools, and methodologies with ease.',
  },
];

function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="animate-on-scroll" style={{ textAlign: 'center' }}>
          <span className="section-label">Skills</span>
          <h2 className="section-title">Skills &amp; Learning Interests</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Areas I'm passionate about and actively developing expertise in.
          </p>
        </div>

        <div className="skills-grid">
          {skillsData.map((skill, index) => (
            <div
              className="skill-card animate-on-scroll"
              key={skill.name}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="skill-icon">{skill.icon}</div>
              <h3 className="skill-name">{skill.name}</h3>
              <p className="skill-desc">{skill.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
