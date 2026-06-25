import { useState } from 'react'
import '../style/style.css'

export default function Contact() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    message: ''
  })
  const [envoye, setEnvoye] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setEnvoye(true)
  }

  return (
    <section id="contact">
      <div className="contact-inner">
        <h2>Contact</h2>
        {envoye ? (
          <p className="contact-success">
            ✓ Message envoyé, je vous réponds rapidement !
          </p>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="nom">Nom</label>
              <input
                type="text"
                id="nom"
                name="nom"
                value={formData.nom}
                onChange={handleChange}
                placeholder="Votre nom"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="votre@email.com"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Votre message..."
                rows="5"
                required
              />
            </div>
            <button type="submit">Envoyer</button>
          </form>
        )}
      </div>
    </section>
  )
}