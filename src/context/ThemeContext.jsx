import { createContext, useState, useContext } from 'react';

const defaultThemeContext = {
    theme: "light",
    toggleTheme: () => {},
  };
  
const ThemeContext = createContext(defaultThemeContext);

export function useTheme() {
    return useContext(ThemeContext)
}

export function ThemeProvider({children}) {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };

    const value = {theme, toggleTheme};

    return (
        <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}