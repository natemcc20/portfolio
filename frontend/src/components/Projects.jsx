function Projects() {
  return (
    <section id="projects">
        
      <div className="section-label">Projects</div>
      <div className="projects-grid">

        <div className="project-card">
          <div className="proj-tag">Flask · OpenAI · Python</div>
          <h3>Destiny AI Assistant</h3>
          <p>Voice-enabled AI assistant using the Bungie API, OpenAI, speech to text, with a Flask backend. Deployed to Render.</p>
        </div>

        <div className="project-card">
          <div className="proj-tag">Flask · React</div>
          <h3>Portfolio Site</h3>
          <p>This site. A full stack app with a Flask backend handling real form submissions and a React frontend. Dark, minimal, and fast.</p>
        </div>

        <div className="project-card">
          <div className="proj-tag">Flask · Python · REST API</div>
          <h3>API Rate Limiter</h3>
          <p>Implements sliding window and token bucket algorithms to control request traffic per IP. Includes a test script to demonstrate the behavioral difference between both approaches.</p>
        </div>

        <div className="project-card">
          <div className="proj-tag">In Progress</div>
          <h3>Discord Bot</h3>
          <p>A Discord bot. More to be revealed upon completion</p>
        </div>

      </div>
    </section>
  )
}

export default Projects