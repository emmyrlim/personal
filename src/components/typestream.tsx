import classNames from "classnames";
import { roboto_mono } from "@/app/fonts";
import styles from "./typestream.module.css";
import React from "react";

export default function Typestream({
  className,
  text,
}: {
  className?: string;
  text: string;
}) {
  const [subHeader, setSubHeader] = React.useState("");

  React.useEffect(() => {
    let headerInterval: NodeJS.Timeout;
    const updateSubHeader = () => {
      setSubHeader((prevHeader) => {
        if (prevHeader.length === text.length) {
          clearInterval(headerInterval);
        }
        return text.substring(0, prevHeader.length + 1);
      });
    };
    const timeout = setTimeout(() => {
      headerInterval = setInterval(updateSubHeader, 50); // Adjust the interval as needed
    }, 500);

    // Clean up interval on component unmount
    return () => {
      clearInterval(headerInterval);
      clearTimeout(timeout);
    };
  }, []);
  return (
    <div
      className={classNames(className, roboto_mono.className, "flex gap-x-4")}
    >
      <p className={styles.blinker}>{`>`}</p>
      <p>{subHeader}</p>
    </div>
  );
}
