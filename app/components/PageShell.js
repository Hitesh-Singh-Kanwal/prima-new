"use client";

import Nav from "./Nav";
import { useDemoRequest } from "./DemoRequestProvider";
import { useTheme } from "./ThemeProvider";

export default function PageShell({ children }) {
  const { isDarkMode, toggleTheme } = useTheme();
  const { openDemoModal } = useDemoRequest();

  return (
    <>
      <div className="glow" aria-hidden />
      <div className="wrap">
        <Nav
          isDarkMode={isDarkMode}
          onToggleTheme={toggleTheme}
          onRequestDemo={openDemoModal}
        />
        {children}
      </div>
    </>
  );
}
