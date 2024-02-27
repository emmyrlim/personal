"use client";

import React from "react";
import styles from "./header.module.css";
import Typestream from "@/components/typestream";

const SUBHEADERS = [
  "I make pretty things on the internet",
  "More than just a pair of hands",
  "Let's build something delightful together",
  "Welcome to my corner of the web",
  "Hailing frequencies open",
];

export default function Header() {
  return (
    <div
      className={`${styles.header} grid w-full place-items-center space-y-2`}
    >
      <h1
        className={`${styles.rainbowText} text-3xl font-bold tracking-tighter text-gray-200 transition-colors sm:text-4xl md:text-5xl dark:text-gray-300`}
      >
        Emmy Lim
      </h1>
      <Typestream
        className="max-w-[600px] text-red-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-red-400"
        text={SUBHEADERS[Math.floor(Math.random() * SUBHEADERS.length)]}
      />
    </div>
  );
}
