import { skills } from '../data/skills';

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <span className="eyebrow">Toolbox</span>
        <h2>Skills</h2>
        <div className="skills-grid">
          {skills.map((group) => (
            <div key={group.group} className="skills-group">
              <h3>{group.group}</h3>
              <div>
                {group.items.map((item) => (
                  <span key={item} className="tag">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
