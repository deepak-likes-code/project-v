import Image from "next/image";
import { Inter } from "next/font/google";
import { useState } from "react";
import YesCard from "../components/YesCard";
import TypewriterText from "@/components/TypeWriterText";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure bangaram?",
      "Bubu, think again!",
      "Think again!",
      "Last chance!",
      "Surely not?",
      "You might regret this!",
      "Give it another thought!",
      "Are you absolutely certain?",
      "This could be a mistake!",
      "Have a heart!",
      "Don't be so cold!",
      "Change of heart?",
      "Wouldn't you reconsider?",
      "Is that your final answer?",
      "You're breaking my heart ;(",
      "Is that your final answer?",
      "You're breaking my heart ;(",
      "Plsss? :( You're breaking my heart",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <>
      <div className="bg-white overflow-hidden flex flex-col items-center justify-center pt-4 h-screen -mt-16 selection:bg-rose-600 selection:text-white text-zinc-900">
        {yesPressed ? (
          <YesCard />
        ) : (
          <>
            <img
              className="h-[230px] rounded-lg shadow-lg"
              src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOTF0YXAwaWNwZzNtd3luMXdsNXpxMjk2MG5pdTVydDhqeGl2bWpzNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/c76IJLufpNwSULPk77/giphy.gif"
            />

            <TypewriterText text={"Hela, will you be my Valentine?"} />

            <div className="flex flex-wrap justify-center gap-2 items-center">
              <button
                className={`bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg mr-4`}
                style={{ fontSize: yesButtonSize }}
                onClick={() => setYesPressed(true)}
              >
                Yes
              </button>
              <button
                onClick={handleNoClick}
                className=" bg-rose-400 hover:bg-rose-600 rounded-lg text-white font-bold py-2 px-4"
              >
                {noCount === 0 ? "No" : getNoButtonText()}
              </button>
            </div>
          </>
        )}
        <div className=" bg-rose-50 flex flex-col items-center justify-center mt-4">
          <Footer />
        </div>
      </div>
    </>
  );
}

const Footer = () => {
  return (
    <div className=" bg-rose-50 h-2 w-full flex flex-col items-center justify-center mt-4">
      <a
        className="  bg-rose-50  fixed bottom-2 right-2 backdrop-blur-md opacity-80 hover:opacity-95 border p-1 rounded border-rose-300"
        href="https://github.com/Xeven777/valentine"
        target="__blank"
      >
        Made with{" "}
        <span role="img" aria-label="heart">
          ❤️
        </span>{" "}
        by Deepak
      </a>
    </div>
  );
};
