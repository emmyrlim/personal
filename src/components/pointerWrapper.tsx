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
    x: number | string;
    y: number | string;
  }>({ x: "50vw", y: "50vh" });

  const handlePagePointerMove = (e: PointerEvent<HTMLDivElement>) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  return (
    <main onPointerMove={handlePagePointerMove} className="flex-1">
      <motion.div
        className="absolute"
        animate={{ x: mousePos.x, y: mousePos.y }}
        transition={{
          type: "spring",
          bounce: 0.2,
          duration: 0.2,
          restSpeed: 1000,
        }}
      >
        <div className={styles.rotate}>
          <div
            className={classNames(
              styles.colorBlob,
              "absolute -left-28 -top-28 size-56 rounded-full",
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
