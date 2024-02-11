import { useState, useEffect } from "react";

const TypewriterText = ({ text, speed = 90 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText((prev) => prev + text.charAt(index));
        setIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timer);
    }
  }, [index, text, speed]);

  return (
    <h1 className="text-4xl md:text-6xl my-4 text-center">{displayedText}</h1>
  );
};

export default TypewriterText;
