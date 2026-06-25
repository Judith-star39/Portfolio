import { skills } from '../data/skills'
import '../style/style.css'

export default function Skills() {
  return (
    <section id="competences">
      <h2>Mes compétences</h2>
      <div className="carousel-wrapper">
        <div className="carousel-track">
          {skills.map((skill) => (
            <article key={skill.id} className="skill-card">
              <img src={skill.image} alt={skill.alt} />
              <span>{skill.title}</span>
            </article>
          ))}
          {/* Duplication pour boucle infinie */}
          {skills.map((skill) => (
            <article key={`${skill.id}-clone`} className="skill-card">
              <img src={skill.image} alt={skill.alt} />
              <span>{skill.title}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}