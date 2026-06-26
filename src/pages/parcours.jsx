import '../style/style.css'

const parcours = [
  {
    id: 1,
    periode: "2022",
    titre: "Infirmière",
    description: "Exercice du métier d'infirmière — développement de la rigueur, de l'attention aux détails et du sens des responsabilités.",
    tag: "Formation"
  },
  {
    id: 2,
    periode: "2024 — 2025",
    titre: "BTS SIO",
    description: "Formation en Services Informatiques aux Organisations — première immersion dans l'univers informatique et découverte de la programmation.",
    tag: "Formation"
  },
  {
    id: 3,
    periode: "Novembre 2025",
    titre: "Formation Intégrateur Web — OpenClassrooms",
    description: "Formation intensive en développement web front-end : HTML, CSS, JavaScript, React, Redux, SEO, accessibilité et gestion de projet agile.",
    tag: "Formation"
  },
  
]

export default function Parcours() {
  return (
    <section id="parcours">
      <h2>Mon Parcours</h2>
      <div className="timeline">
        {parcours.map((item) => (
          <div key={item.id} className="timeline-item">
            <div className="timeline-point" />
            <div className="timeline-content">
              <span className="timeline-periode">{item.periode}</span>
              <span className="timeline-tag">{item.tag}</span>
              <h3>{item.titre}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}