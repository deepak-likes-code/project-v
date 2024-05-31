import { Inter } from "next/font/google";
import { useState } from "react";
import YesCard from "../components/YesCard";
import TypewriterText from "@/components/TypeWriterText";
import Footer from "@/components/Footer";
import Image from "next/image";
const inter = Inter({ subsets: ["latin"] });
import ComicBookViewer from "@/components/ComicBookViewer";

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
      <div className="bg-rose-50 overflow-hidden flex flex-col items-center justify-center pt-4 h-screen -mt-16 selection:bg-rose-600 selection:text-white text-zinc-900">
        {yesPressed ? (
          <YesCard />
        ) : (
          <>
            {/* <img
              className="h-[230px] rounded-lg "
              src="https://media.tenor.com/0tkCPVxDt1kAAAAi/dudu.gif"
            />

            <TypewriterText text={"Hela, will you be my Valentine?"} /> */}

            <div className="flex flex-wrap justify-center gap-2 items-center">
              {/* <button
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
              </button> */}
              <div className="overflow-y-auto mt-20">
                <ComicBookViewer />
              </div>
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
