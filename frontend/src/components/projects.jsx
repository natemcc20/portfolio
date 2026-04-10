function Projects() {
  return (
    <section id="projects">
      <div className="section-label">Projects</div>
      <div className="projects-grid">
        <div className="project-card">
          <div className="proj-tag">Flask · OpenAI · Python</div>
          <h3>Destiny AI Assistant</h3>
          <p>Voice-enabled AI assistant using the Bungie API, OpenAI, and Flask. Deployed to Render.</p>
        </div>
        <div className="project-card">
          <div className="proj-tag">Flask · React</div>
          <h3>Portfolio Site</h3>
          <p>This site. A full stack app with a Flask backend handling real form submissions and a React frontend. Dark, minimal, and fast.</p>
        </div>
      </div>
    </section>
  )
}

export default Projects