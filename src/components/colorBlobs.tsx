"use client";

import * as React from "react";
import { PointerEvent } from "react";
import styles from "./colorBlobs.module.css";

export default function ColorBlobs() {
  const blobRef = React.useRef(null);
  const handlePagePointerMove = (e: PointerEvent<HTMLDivElement>) => {
    console.log(e);
  };

  React.useEffect(() => {
    console.log(blobRef.current);

    if (blobRef.current != null) {
      document.body.onpointermove;
    }
  }, []);

  return (
    <div
      className="absolute h-screen w-screen"
      onPointerMove={handlePagePointerMove}
    >
      <div ref={blobRef} id={styles.colorBlobs}></div>;
    </div>
  );
}
