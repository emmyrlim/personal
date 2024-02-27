"use client";

import * as React from "react";
import { PointerEvent } from "react";
import { motion } from "framer-motion";
import styles from "./pointerWrapper.module.css";
import classNames from "classnames";

export default function PointerWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mousePos, setMousePos] = React.useState<{
    x: number;
    y: number;
  }>({ x: 0, y: 0 });

  const handlePagePointerMove = (e: PointerEvent<HTMLDivElement>) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  return (
    <main onPointerMove={handlePagePointerMove} className="flex-1">
      <motion.div
        className="absolute"
        animate={{ x: mousePos.x, y: mousePos.y }}
      >
        <div className={styles.rotate}>
          <div
            className={classNames(
              styles.colorBlob,
              "absolute -left-16 -top-16 h-32 w-32 rounded-full",
            )}
          />
        </div>
      </motion.div>
      <div
        className={classNames(styles.blur, "absolute min-h-[100dvh] w-full")}
      />
      <section className="absolute flex h-dvh w-screen justify-center xl:py-24">
        {children}
      </section>
    </main>
  );
}
