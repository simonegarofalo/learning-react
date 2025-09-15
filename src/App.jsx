import { Link } from "react-router";

import Timer from "./components/timer.jsx";
import { ATHLETES, DEFAULT_ATHLETE } from "../data/athletes.js";

import { useTheme } from "./context/ThemeContext.jsx";
import ThemeSwitcher from "./components/ThemeSwitcher.jsx"

import "./App.css";
import "./index.css";

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <ThemeSwitcher />
      <h1>TRACKING ATHLETES' TIME</h1>
      <div className="timer-container">
        {ATHLETES.map((athlete) => (
          <Timer key={athlete.slug} athlete={athlete} />
        ))}
      </div>
    </div>
  );
}

export default App;
