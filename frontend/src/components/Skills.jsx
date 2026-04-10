function Skills() {
  const skills = ['Python', 'Java', 'Flask', 'React', 'JavaScript', 'HTML / CSS', 'Git', 'REST APIs', 'SQL']

  return (
    <section id="skills">
      <div className="section-label">Skills</div>
      <div className="skills-row">
        {skills.map(skill => (
          <span key={skill} className="skill-pill">{skill}</span>
        ))}
      </div>
    </section>
  )
}

export default Skills