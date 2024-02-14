import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import ImageCard from "@/components/Image";

const PhotoBooth = () => {
  const router = useRouter();

  // Function to handle the continue button click
  const handleClick = () => {
    router.push("/chat");
  };

  const cardsData = [
    {
      src: "/imgs/official-min.jpg",
      alt: "Two cuties make it official 👩‍❤️‍👨",
      subtext: "Two cuties make it official 👩‍❤️‍👨",
      question: "Where did we have dinner after making it official?",
      correctAnswer: "Misu",
    },
    {
      src: "/imgs/saree-min.jpg",
      alt: "Trad Gworl 💃",
      subtext: "Trad Gworl 💃",
      question: "From where did I get this saree that you are wearing?",
      correctAnswer: "Udaipur",
    },
    {
      src: "/imgs/flowers-min.jpg",
      alt: "Flower Day",
      subtext: "🌸 🌸 🌸",
      question: "Scientific name of this flower?",
      correctAnswer: "Tabebuia Rosea",
    },
    {
      src: "/imgs/hotpot-min.jpeg",
      alt: "Hotpot",
      subtext: "Hotpot 🍲",
      question: "The restaurant where we had hotpot for the first time?",
      correctAnswer: "Haidilao",
    },
    {
      src: "/imgs/mumbai-min.jpg",
      alt: "Mumbai",
      subtext: "The day when I fell in love with you 💖",
      question: "Where did we take this picture at?",
      correctAnswer: "Sassoon Docks",
    },
    {
      src: "/imgs/nose-min.jpeg",
      alt: "Piercing Day",
      subtext: "Tough one 🤔",
      question:
        "You got this nose peircing after having drinks at? (Hint: It means Good Health in French)",
      correctAnswer: "Bon Sante",
    },
  ];

  // State to track correctness of all cards
  const [correctAnswers, setCorrectAnswers] = useState(
    Array(cardsData.length).fill(false)
  );

  // Callback function to update state based on card answer
  const handleCardAnswer = (index, isCorrect) => {
    setCorrectAnswers((prev) => {
      const updated = [...prev];
      updated[index] = isCorrect;
      return updated;
    });
  };

  // Check if all answers are correct to show the continue button
  const allCorrect = correctAnswers.every((status) => status);

  return (
    <div className=" min-h-screen p-8 flex flex-col justify-center items-center">
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center px-2">
        {cardsData.map((image, index) => (
          <ImageCard
            key={index}
            src={image.src}
            correctAnswer={image.correctAnswer}
            question={image.question}
            subtext={image.subtext}
            onAnswerCheck={(isCorrect) => handleCardAnswer(index, isCorrect)}
          />
        ))}
      </div>{" "}
      {allCorrect && (
        <button
          onClick={handleClick}
          className="mt-4 px-4 w-1/5 py-2 bg-rose-500 text-white rounded hover:bg-rose-600 font-bold hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
        >
          Yaaaaay!!!! You Did It 🎉
        </button>
      )}
    </div>
  );
};

export default PhotoBooth;
