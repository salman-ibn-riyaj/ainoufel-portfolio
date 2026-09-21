"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

export function ThemeSwitch() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200/50 dark:border-neutral-700/50 bg-slate-100/50 dark:bg-neutral-800/50" />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <motion.button
      whileHover={{ scale: 1.1, rotate: 15 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle Theme"
      type="button"
      className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl border border-slate-200/50 dark:border-neutral-700/50 bg-slate-100/50 dark:bg-neutral-800/50 text-slate-700 dark:text-slate-200 backdrop-blur-md shadow-sm transition-colors"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={isDark ? "dark" : "light"}
          initial={{ y: -10, opacity: 0, rotate: -45 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: 10, opacity: 0, rotate: 45 }}
          transition={{ duration: 0.2 }}
        >
          {isDark ? (
            <FiSun className="h-5 w-5 text-amber-400" />
          ) : (
            <FiMoon className="h-5 w-5 text-slate-700 dark:text-slate-200" />
          )}
        </motion.div>
      </AnimatePresence>
    </motion.button>
  );
}

export default ThemeSwitch;