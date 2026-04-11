import { useState } from 'react'

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    try {
      const res = await fetch('https://portfolio-m9jm.onrender.com/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      const data = await res.json()
      if (data.success) {
        setStatus('Message sent!')
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus('Something went wrong. Try again.')
      }
    } catch {
      setStatus('Could not reach server.')
    }
  }

  return (
    <section id="contact">

      <div className="section-label">Contact</div>
      <div className="contact-links">
        <p className="contact-line">Email: <a href="mailto:natemcc30@gmail.com">nate.mccollough@icloud.com</a></p>
        <p className="contact-line">GitHub: <a href="https://github.com/natemcc20" target="_blank">github.com</a></p>
        <p className="contact-line">LinkedIn: <a href="https://www.linkedin.com/in/nathan-mccollough-3ab850276" target="_blank">linkedin.com/in/nathan-mccollough</a></p>
      </div>


      <form className="contact-form" onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
        <input name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
        <textarea name="message" placeholder="Message" value={form.message} onChange={handleChange} required />
        <button type="submit" className="btn-primary">Send</button>
      </form>

      {status && <p className="contact-status">{status}</p>}

    </section>
  )
}

export default Contact