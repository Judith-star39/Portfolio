import { useState } from 'react'
import { projects } from '../data/projects'
import '../style/style.css'

export default function Projects () {
    const [selected, setSelected] = useState(null)

    return (
        <section id="projets">
            <h2>Mes Projets</h2>
            <div className="projets-grid">
                {projects.map((project) => (
                <article key={project.id} className="projet-card" onClick={() => setSelected(project)}>
                    <img src={project.image} alt={project.alt} />
                    <div className="projet-content">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <div className="projet-tags">
                            {project.tags.map((tag) => (
                            <span key={tag} className="tag">{tag}</span>
                            ))}
                        </div>
                        
                    </div>
                </article>
                ))}
            </div>
            {selected && (
        <div className="modal-overlay" onClick={() => setSelected(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelected(null)}>✕</button>
            <h2>{selected.title}</h2>
            {selected.fiche ? (
              <div className="modal-fiche">
                <div className="fiche-section">
                  <h3>Contexte</h3>
                  <p>{selected.fiche.contexte}</p>
                </div>
                <div className="fiche-section">
                  <h3>Objectifs</h3>
                  <p>{selected.fiche.objectifs}</p>
                </div>
                <div className="fiche-section">
                  <h3>Stack technique</h3>
                  <p>{selected.fiche.stack}</p>
                </div>
                <div className="fiche-section">
                  <h3>Compétences développées</h3>
                  <p>{selected.fiche.competences}</p>
                </div>
                <div className="fiche-section">
                  <h3>Résultats et impact</h3>
                  <p>{selected.fiche.resultats}</p>
                </div>
                <div className="fiche-section">
                  <h3>Perspectives d'amélioration</h3>
                  <p>{selected.fiche.perspectives}</p>
                </div>
              </div>
            ) : (
              <p>{selected.description}</p>
            )}
            <div className="modal-links">
              {selected.github && (
                <a href={selected.github} target="_blank" rel="noopener noreferrer">GitHub </a>
              )}
              {selected.demo && (
                <a href={selected.demo} target="_blank" rel="noopener noreferrer">Demo </a>
              )}
            </div>
          </div>
        </div>
      )}
        </section>
    )
}