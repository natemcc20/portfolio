function Hero() {
  return (
    
    <div className="hero">

      <div className="tag">Software Engineer · Personal Trainer · Marine Veteran</div>
      <h1 className="glitch" data-text="Building things that work.">Building things that work.</h1>
      <p>CS student, Marine veteran, and personal trainer. I build things the same way I approach everything else, methodically and with a real interest in understanding how they work.</p>
      
      <div className="hero-btns">
        <button className="btn-primary" onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>View Projects</button>
        <button className="btn-secondary" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>Contact Me</button>
      </div>

    </div>
  )
}

export default Hero