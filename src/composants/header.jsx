import { useState } from 'react'
import '../style/style.css'

export default function Header() {
    const [open, setOpen] = useState(false)
  return (
    <header>
        <button
        className="menu"
        onClick={() => setOpen(!open)}
        aria-label="Menu"
      >
        <span />
        <span />
        <span />
      </button>
      <ul className={open ? 'open' : ''}>
        <li><a href="#accueil" onClick={() => setOpen(false)}>Accueil</a></li>
        <li><a href="#a-propos" onClick={() => setOpen(false)}>À Propos</a></li>
        <li><a href="#projets" onClick={() => setOpen(false)}>Projets</a></li>
        <li><a href="#competences" onClick={() => setOpen(false)}>Compétences</a></li>
        <li><a href="#contact" onClick={() => setOpen(false)}>Contact</a></li>
      </ul>
    </header>
  )
}