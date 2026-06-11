import { useEffect, useState } from "react";

type Theme = "day" | "night";

const STORAGE_KEY = "clearscaler-theme";

function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "day";
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "day" || stored === "night") return stored;
  // Default to day mode (warm cream) regardless of OS preference.
  return "day";
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "night");
    root.style.colorScheme = theme === "night" ? "dark" : "light";
    window.localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const toggle = () => setTheme((t) => (t === "day" ? "night" : "day"));

  return { theme, toggle };
}
