import { projects } from '../data/projects';

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <span className="eyebrow">Things I've built</span>
        <h2>Projects</h2>
        <div className="card-grid">
          {projects.map((project) => (
            <article
              key={project.title}
              className={`card project-card${project.featured ? ' project-card--featured' : ''}`}
            >
              {project.badge && <span className="tag tag--badge">{project.badge}</span>}
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              {project.links.length > 0 && (
                <div className="link-row">
                  {project.links.map((link) => (
                    <a key={link.url} className="btn" href={link.url} target="_blank" rel="noreferrer">
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
        <p className="projects__more">More projects added as they ship — check back soon.</p>
      </div>
    </section>
  );
}
