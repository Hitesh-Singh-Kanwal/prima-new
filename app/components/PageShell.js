"use client";

import Nav from "./Nav";
import { useTheme } from "./ThemeProvider";

export default function PageShell({ children, onRequestDemo }) {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <>
      <div className="glow" aria-hidden />
      <div className="wrap" id="home">
        <Nav
          isDarkMode={isDarkMode}
          onToggleTheme={toggleTheme}
          onRequestDemo={onRequestDemo}
        />
        {children}
      </div>
    </>
  );
}
