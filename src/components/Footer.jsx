import { profile } from '../data/profile';

export default function Footer() {
  return (
    <footer id="contact" className="site-footer">
      <div className="container site-footer__inner">
        <div>
          <h2>Get in touch</h2>
          <p>Open to research collaborations, engineering roles, and interesting problems.</p>
          <div className="link-row">
            <a className="btn btn-primary" href={`mailto:${profile.email}`}>
              Email
            </a>
            <a className="btn" href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a className="btn" href={profile.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a className="btn" href={profile.resumeUrl} target="_blank" rel="noreferrer">
              Resume
            </a>
          </div>
        </div>
        <p className="site-footer__note">
          © {new Date().getFullYear()} {profile.name}
        </p>
      </div>
    </footer>
  );
}
