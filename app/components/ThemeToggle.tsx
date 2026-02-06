"use client";

import React, { useEffect, useState } from "react";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi2";

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
      <div className="w-10 h-10 rounded-xl bg-[#1f2937] border border-[#374151]" />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="group w-10 h-10 rounded-xl bg-[#1f2937] border border-[#374151]
        hover:border-[#10b981] hover:bg-[#111827]
        transition-all duration-300 flex items-center justify-center"
      aria-label={`Cambiar a tema ${theme === "dark" ? "claro" : "oscuro"}`}
    >
      {theme === "dark" ? (
        <HiOutlineSun className="w-5 h-5 text-amber-400 group-hover:text-amber-300 transition-colors duration-200" />
      ) : (
        <HiOutlineMoon className="w-5 h-5 text-[#10b981] group-hover:text-[#34d399] transition-colors duration-200" />
      )}
    </button>
  );
}

export default ThemeToggle;
