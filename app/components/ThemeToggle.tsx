"use client";

import React, { useEffect, useState } from "react";
import { IoSunny, IoMoon } from "react-icons/io5";

function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme(prefersDark ? "dark" : "light");
      document.documentElement.classList.toggle("dark", prefersDark);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-xl bg-surface-secondary border border-border-primary" />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="group relative w-10 h-10 rounded-xl bg-surface-secondary border border-border-primary
        hover:border-accent-primary hover:shadow-lg hover:shadow-accent-primary/20
        transition-all duration-300 flex items-center justify-center overflow-hidden"
      aria-label={`Cambiar a tema ${theme === "dark" ? "claro" : "oscuro"}`}
    >
      <div className="relative w-5 h-5">
        <IoSunny
          className={`absolute inset-0 text-yellow-400 transition-all duration-300 ${
            theme === "dark"
              ? "opacity-100 rotate-0 scale-100"
              : "opacity-0 rotate-90 scale-50"
          }`}
        />
        <IoMoon
          className={`absolute inset-0 text-accent-primary transition-all duration-300 ${
            theme === "light"
              ? "opacity-100 rotate-0 scale-100"
              : "opacity-0 -rotate-90 scale-50"
          }`}
        />
      </div>
    </button>
  );
}

export default ThemeToggle;
