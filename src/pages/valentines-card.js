import Head from "next/head";
import { useState, useEffect } from "react";
import TypewriterText from "@/components/TypeWriterText";

const ValentinesCard = () => {
  const [inputValue, setInputValue] = useState("");
  const [isTextClear, setIsTextClear] = useState(false);

  const handleChange = (event) => {
    const { value } = event.target;
    setInputValue(value);
    setIsTextClear(value.toLowerCase() === "ily deepak");
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the form from actually submitting
    if (isTextClear) {
      setMessageRevealed(true);
    }
  };

  const [messageRevealed, setMessageRevealed] = useState(false);

  const revealMessage = () => {
    setMessageRevealed(true);
  };

  const RomanticTypewriterText = ({ text, speed = 90 }) => {
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
      <h1
        className={`text-rose-400 text-wrap text-2xl md:text-3xl my-4 text-center`}
      >
        {displayedText}
      </h1>
    );
  };

  return (
    <>
      <Head>
        <title>Valentine's Day Card</title>
      </Head>
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 md:p-12 min-w-2xl shadow-2xl border border-rose-200">
          {!messageRevealed && (
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-4xl md:text-5xl font-bold text-rose-500 text-center mb-4">
                Happy Valentine's Day Bubu 💖
              </h1>
              <RomanticTypewriterText
                text="Ily 💖 Through thick and thin and oil"
                speed={100}
              />

              <img
                src="/imgs/hela.webp"
                height={350}
                width={350}
                alt="Romantic Image"
                className="mx-auto rounded-lg mb-6 "
              />

              <form
                onSubmit={handleSubmit}
                className="flex flex-col justify-center items-center text-center"
              >
                <input
                  type="text"
                  value={inputValue}
                  onChange={handleChange}
                  placeholder="Enter 'ILY Deepak' to reveal the plans"
                  className="text-center p-2 m-4"
                />
                <button
                  type="submit"
                  className="bg-rose-500 hover:bg-rose-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-110"
                >
                  Reveal Our Plans
                </button>
              </form>
            </div>
          )}

          {messageRevealed && (
            <div className="text-center transition-opacity duration-700">
              <img
                src="/imgs/dalle.webp"
                height={400}
                width={400}
                alt="Romantic Image"
                className="mx-auto rounded-lg mb-6 heart-beat"
              />
              <p className="text-lg md:text-xl text-gray-700 mb-2">
                Our special night awaits at:
              </p>
              <h2 className="text-2xl md:text-3xl mb-2 font-semibold text-rose-600">
                The Courtyard Square
              </h2>
              <p className="text-md md:text-lg mb-2 text-gray-600">
                Frazer Town, Bangalore
              </p>
              <p className="text-md md:text-lg text-gray-600 mb-3">
                5:00 PM onwards
              </p>
              <p className="text-lg md:text-xl text-gray-700 font-semibold">
                I'll be waiting. 💘
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ValentinesCard;
