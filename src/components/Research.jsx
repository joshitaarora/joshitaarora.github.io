import { research, publications } from '../data/research';

export default function Research() {
  return (
    <section id="research">
      <div className="container">
        <span className="eyebrow">Thesis, papers & explorations</span>
        <h2>Research</h2>
        <div className="card-grid">
          {research.map((item) => (
            <article key={item.title} className="card research-card">
              <span className="tag">{item.tag}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              {item.links.length > 0 && (
                <div className="link-row">
                  {item.links.map((link) => (
                    <a key={link.url} className="btn" href={link.url} target="_blank" rel="noreferrer">
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>

        <h3 className="publications__heading">Publications & manuscripts</h3>
        <ul className="publications">
          {publications.map((pub) => (
            <li key={pub.url}>
              <a href={pub.url} target="_blank" rel="noreferrer">
                {pub.citation}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
