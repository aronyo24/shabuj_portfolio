import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ThemeToggleProps {
  className?: string;
}

const ThemeToggle = ({ className }: ThemeToggleProps) => {
  const [dark, setDark] = useState<boolean>(() => {
    if (typeof window === "undefined") {
      return true;
    }

    const stored = window.localStorage.getItem("theme");

    if (stored === "dark") {
      return true;
    }

    if (stored === "light") {
      return false;
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    window.localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      onClick={() => setDark(!dark)}
      className={cn(
        "inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/70 bg-card/80 text-primary backdrop-blur-sm transition-all duration-200 hover:glow-shadow hover:bg-card",
        className,
      )}
      aria-label="Toggle theme"
      title={dark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </motion.button>
  );
};

export default ThemeToggle;
