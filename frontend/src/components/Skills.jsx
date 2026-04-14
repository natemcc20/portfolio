function Skills() {
  const skills = ['Python', 'Java', 'JavaScript / TypeScript / React', 'C++', 'Flask', 'HTML / CSS', 'Git', 'REST APIs', 'SQL', 'LLM Integration']

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