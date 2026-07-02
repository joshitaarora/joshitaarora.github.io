import { education, awards } from '../data/education';

export default function EducationAwards() {
  return (
    <section id="education">
      <div className="container education-awards">
        <div>
          <span className="eyebrow">Academics</span>
          <h2>Education</h2>
          <div className="education-list">
            {education.map((item) => (
              <article key={item.school} className="education-item">
                <h3>{item.school}</h3>
                <p>{item.detail}</p>
                <div className="education-item__meta">
                  <span>{item.meta}</span>
                  {item.honor && <span className="tag">{item.honor}</span>}
                </div>
              </article>
            ))}
          </div>
        </div>

        <div>
          <span className="eyebrow">Recognition</span>
          <h2>Awards & Honors</h2>
          <ul className="awards-list">
            {awards.map((award) => (
              <li key={award.title}>
                <h3>{award.title}</h3>
                <p className="awards-list__org">{award.org}</p>
                <p>{award.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
