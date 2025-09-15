import { useParams, Link } from "react-router";
import { ATHLETES } from "/data/athletes.js";

import { useTheme } from "../context/ThemeContext.jsx";
import ThemeSwitcher from "../components/ThemeSwitcher"


function AthletePage() {
  const { theme } = useTheme();
  const { slug } = useParams();
  const athlete = ATHLETES.find((a) => a.slug === slug);
  const athleteStats = athlete.stats;

  const formatKey = (key) => key.charAt(0).toUpperCase() + key.slice(1);

  return (
    <>
    <ThemeSwitcher />
    <div className={`athlete-page ${theme}`}>
      <div className={`athlete-card ${theme}`}>
        <div className="card-data">
          <img
            src={athlete.avatar}
            alt={athlete.name}
            className="athlete-avatar"
          />
          <h2>{athlete.name}</h2>
        </div>
        <h3>Stats</h3>
        <ul className="stats-list">
          {Object.entries(athleteStats).map(([key, value]) => (
            <li key={key}>
              <strong>{formatKey(key)}:</strong> {value}
            </li>
          ))}
        </ul>
      </div>
      <Link to="/" className={`return-button ${theme}`}>Back to list</Link>
      </div>
    </>
  );
}

export default AthletePage;
