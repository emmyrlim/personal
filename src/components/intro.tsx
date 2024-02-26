"use client";

import * as React from "react";
import anime from "animejs/lib/anime.es.js";
import styles from "./intro.module.css";
import { motion } from "framer-motion";
import { AnimeTimelineInstance } from "animejs";

export default function Intro() {
  const animation = React.useRef<AnimeTimelineInstance | null>(null);

  React.useEffect(() => {
    animation.current = anime.timeline();

    animation.current
      .add({
        targets: ".banner",
        duration: 200,
        skewY: [-3, -3],
        scaleY: [0, 1],
        opacity: [0, 1],
        easing: "easeInCubic",
      })
      .add({
        targets: ".banner h1",
        translateY: "1em",
        translateX: [-109, window.innerWidth],
        // easing: [0, 0.96, 1, 0.04],
        opacity: [0.5, 1, 0.5],
        duration: 2800,
      })
      .add({
        targets: ".banner h2",
        translateX: [window.innerWidth, -208],
        // easing: [0, 0.96, 1, 0.04],
        duration: 2800,
        opacity: [0.5, 1, 0.5],
        offset: "-=2800",
      })
      .add({
        targets: [".banner", ".bannerWrapper"],
        duration: 400,
        skewY: 0,
        scaleY: [1, 0],
        easing: "easeInCubic",
      })
      .add({
        targets: ".topPane",
        translateY: "-50vh",
        duration: 900,
        easing: "easeInOutQuint",
      })
      .add({
        targets: ".bottomPane",
        translateY: "50vh",
        offset: "-=500",
      });
  }, []);

  return (
    <aside>
      <motion.div
        className={`${styles.topPane} topPane bg-gray-800/50`}
      ></motion.div>
      <motion.div
        className={`${styles.bottomPane} bottomPane bg-gray-800/50`}
      ></motion.div>
      <motion.div className={`${styles.bannerWrapper} bannerWrapper`}>
        <motion.div className={`${styles.banner} banner`}>
          <h1>
            <span>Emmy Lim</span>
          </h1>
          <h2>
            <span>Web Developer</span>
          </h2>
        </motion.div>
      </motion.div>
    </aside>
  );
  // return (
  //   <aside>
  //     <div className={`${styles.topPane} topPane bg-gray-800/50`}></div>
  //     <div className={`${styles.bottomPane} bottomPane bg-gray-800/50`}></div>
  //     <div className={`${styles.bannerWrapper} bannerWrapper`}>
  //       <div className={`${styles.banner} banner`}>
  //         <h1>
  //           <span>Emmy Lim</span>
  //         </h1>
  //         <h2>
  //           <span>Web Developer</span>
  //         </h2>
  //       </div>
  //     </div>
  //   </aside>
  // );
}
