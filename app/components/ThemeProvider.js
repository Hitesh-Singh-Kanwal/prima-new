"use client";

import {
  createContext,
  useCallback,
  useContext,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";

const ThemeContext = createContext(null);

const STORAGE_KEY = "primalabs-theme";

function persistTheme(dark) {
  if (typeof document === "undefined") return;
  document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
  try {
    window.localStorage.setItem(STORAGE_KEY, dark ? "dark" : "light");
  } catch {
    /* ignore */
  }
}

export function ThemeProvider({ children }) {
  /** Matches SSR / first paint; real value applied in a microtask (see below). */
  const [isDarkMode, setIsDarkMode] = useState(true);

  const didHydrateRef = useRef(false);
  const queuedHydrateRef = useRef(false);

  useLayoutEffect(() => {
    if (!didHydrateRef.current && !queuedHydrateRef.current) {
      queuedHydrateRef.current = true;
      queueMicrotask(() => {
        didHydrateRef.current = true;
        try {
          const t = localStorage.getItem(STORAGE_KEY);
          const dark = t !== "light";
          setIsDarkMode(dark);
          persistTheme(dark);
        } catch {
          persistTheme(true);
        }
      });
      return;
    }

    if (didHydrateRef.current) {
      persistTheme(isDarkMode);
    }
  }, [isDarkMode]);

  const toggleTheme = useCallback(() => {
    setIsDarkMode((v) => !v);
  }, []);

  const value = useMemo(
    () => ({
      isDarkMode,
      toggleTheme,
    }),
    [isDarkMode, toggleTheme],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return ctx;
}
