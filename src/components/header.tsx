"use client";

import styles from "./headerStyles.module.css";

export default function Header() {
  return (
    <h1
      className={`${styles.rainbowText} text-3xl font-bold tracking-tighter text-gray-200 transition-colors sm:text-4xl md:text-5xl dark:text-gray-300`}
    >
      Emmy Lim
    </h1>
  );
}
