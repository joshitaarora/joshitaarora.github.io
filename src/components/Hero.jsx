import { profile } from '../data/profile';

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero__inner">
        <img
          className="hero__headshot"
          src={profile.headshot}
          alt={profile.name}
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
        <span className="eyebrow">{profile.title}</span>
        <h1>{profile.name}</h1>
        <p className="hero__tagline">{profile.tagline}</p>
        <div className="link-row">
          <a className="btn btn-primary" href="#projects">
            See my work
          </a>
          <a className="btn" href={profile.resumeUrl} target="_blank" rel="noreferrer">
            Download résumé
          </a>
        </div>
      </div>
    </section>
  );
}
