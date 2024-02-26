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
    }, 0);

    // Clean up interval on component unmount
    return () => {
      clearInterval(headerInterval);
      clearTimeout(timeout);
    };
  }, []);
  return <p className={className}>{subHeader}</p>;
}
