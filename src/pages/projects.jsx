import { projects } from '../data/projects'
import '../style/style.css'

export default function Projects () {
    return (
        <section id="projets">
            <h2>Mes Projets</h2>
            <div className="projets-grid">
                {projects.map((project) => (
                <article key={project.id} className="projet-card">
                    <img src={project.image} alt={project.alt} />
                    <div className="projet-content">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <div className="projet-tags">
                            {project.tags.map((tag) => (
                            <span key={tag} className="tag">{tag}</span>
                            ))}
                        </div>
                        <div className="projet-links">
                            {project.github && (
                            <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                            )}
                            {project.demo && (
                            <a href={project.demo} target="_blank" rel="noopener noreferrer">Demo</a>
                            )}
                        </div>
                    </div>
                </article>
                ))}
            </div>
        </section>
    )
}