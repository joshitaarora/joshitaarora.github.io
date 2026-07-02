export default function AchievementBanner() {
  return (
    <a
      className="achievement-banner"
      href="https://devpost.com/software/brainsafe-browser"
      target="_blank"
      rel="noreferrer"
    >
      <span className="achievement-banner__icon" aria-hidden="true">
        🏆
      </span>
      <span>
        <strong>1st place, Google Cloud Challenge — ShellHacks 2025</strong> · BrainSafe ranked 1st among 175+ teams
        at Florida's largest hackathon
      </span>
      <span className="achievement-banner__arrow" aria-hidden="true">
        →
      </span>
    </a>
  );
}
