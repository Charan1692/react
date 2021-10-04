import React, { useContext } from "react";
import { ThemeContext } from "../context/themeContext";
import { AppTheme } from "../colors";

const HeroSection = () => {
  const [theme, setTheme] = useContext(ThemeContext);
  const currentTheme = AppTheme[theme];

  return (
    <div
      style={{
        padding: "1rem",
        backgroundColor: `${currentTheme.backgroundColor}`,
        color: `${currentTheme.textColor}`,
        textAlign: "center",
      }}
    >
      <h1>Context API Theme-Toggler</h1>
      <p>
        Context provides a way to pass data through the component tree without
        having to pass props down manually at every level.
      </p>
      <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        style={{
          backgroundColor: "#26ae60",
          padding: "10px 150px",
          fontSize: "20px",
          color: "#ffffff",
          border: `${currentTheme.border}`,
          cursor: "pointer",
        }}
      >
        Theme Switcher
      </button>
    </div>
  );
};

export default HeroSection;
