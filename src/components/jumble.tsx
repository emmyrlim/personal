import * as React from "react";

export default function Jumble({ text }: { text: string }) {
  const [jumbleText, setJumbleText] = React.useState(text);

  React.useEffect(() => {
    let headerInterval: NodeJS.Timeout;
    const updateSubHeader = () => {
      setJumbleText((prevHeader) => {
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

  return <p>{jumbleText}</p>;
}
