import { useTheme } from "../context/ThemeContext.jsx";

import lightIcon from "../../assets/icons/light-mode.svg";
import darkIcon from "../../assets/icons/dark-mode.svg"; 

export default function ThemeSwitcher(){
    const { theme, toggleTheme } = useTheme();

    return (
        <div className="theme-button-wrapper">
        <button onClick={toggleTheme} className={`button ${theme}`}>
        <img
        src={theme === "light" ? darkIcon : lightIcon}
        alt={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
        className="theme-icon"
      />
      </button>
      </div>
    )
}