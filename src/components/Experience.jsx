import { experience } from '../data/experience';

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <span className="eyebrow">Where I've worked</span>
        <h2>Experience</h2>
        <div className="timeline">
          {experience.map((job) => (
            <article key={job.role + job.org} className="timeline__item">
              <div className="timeline__header">
                <h3>{job.role}</h3>
                <span className="timeline__period">{job.period}</span>
              </div>
              <p className="timeline__org">{job.org}</p>
              <ul className="timeline__bullets">
                {job.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
