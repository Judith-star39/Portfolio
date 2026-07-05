import { useState} from 'react'
import '../style/style.css'

export default function Contact() {
  const [envoye, setEnvoye] = useState(false)


  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.target

    const response = await fetch('https://formspree.io/f/xbdvwagv', {
      method: 'POST',
      body: new FormData(form),
      headers: { Accept: 'application/json' }
    })

    if (response.ok) {
      setEnvoye(true)
      form.reset()
    }
  }

  return (
    <section id="contact">
      <div className="contact-inner">
        <h2>Contact</h2>
        {envoye ? (
          <p className="contact-success">
             Message envoyé, je vous réponds rapidement !
          </p>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="nom">Nom</label>
              <input
                type="text"
                id="nom"
                name="nom"
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
                placeholder="votre@email.com"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
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