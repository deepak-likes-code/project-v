import React, { useState, useRef, useEffect } from "react";

const ImageCard = ({
  src,
  alt,
  subtext,
  question,
  correctAnswer,
  onAnswerCheck,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [answer, setAnswer] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);
  const [shake, setShake] = useState(false); // State to manage shake effect
  const cardRef = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (cardRef.current && !cardRef.current.contains(event.target)) {
        setIsFlipped(false); // Flip back to front when clicking outside
      }
    }

    // Attach the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Clean up the event listener
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [cardRef]);

  const checkAnswer = (e) => {
    e.preventDefault();
    if (answer.toLowerCase() === correctAnswer.toLowerCase()) {
      setIsCorrect(true);
      setIsFlipped(false);
      onAnswerCheck(true);
    } else {
      setShake(true);
      onAnswerCheck(false);
      setTimeout(() => setShake(false), 1300); // Remove shake effect after 2 seconds
    }
  };

  const flipCard = () => {
    if (!isCorrect) {
      // Only flip if the answer isn't correct yet
      setIsFlipped(!isFlipped);
    }
  };

  const handleAnswerChange = (e) => {
    setAnswer(e.target.value);
  };

  const stopPropagation = (e) => {
    e.stopPropagation(); // Stop the click event from propagating to the parent
  };

  return (
    <div
      onClick={flipCard}
      ref={cardRef}
      className={`relative overflow-hidden rounded-lg flex flex-col items-center justify-center shadow-lg hover:shadow-xl md:w-96 w-72 md:h-96 h-72 m-4 transform transition duration-500 ease-in-out hover:scale-105 cursor-pointer ${
        isCorrect
          ? "border-4 border-rose-50"
          : shake
          ? "border-4 border-red-500 shake"
          : "border-4 border-rose-300"
      } bg-rose-200`}
    >
      {/* Front side */}
      <div
        className={`w-full h-full backface-hidden ${
          isFlipped ? "hidden" : "block"
        } p-4`}
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-4/5 object-cover rounded-lg mb-2"
        />
        <p className="text-center text-xl py-2 text-rose-600">{subtext}</p>
      </div>

      {/* Back side */}
      <div
        onClick={stopPropagation}
        className={`absolute top-0 left-0 w-full h-full backface-hidden rotate-y-180 ${
          isFlipped ? "block" : "hidden"
        } bg-rose-50 p-4 flex flex-col justify-center`}
      >
        <form
          onSubmit={checkAnswer}
          className="h-full p-2 flex flex-col justify-center items-center bg-white"
        >
          <p className="text-xl text-center mb-4">{question}</p>
          <input
            type="text"
            value={answer}
            onChange={handleAnswerChange}
            onClick={stopPropagation}
            className="text-center mb-4 p-2 border-2 border-gray-300 rounded"
            placeholder="Your answer"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-red-500 text-white rounded"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ImageCard;
