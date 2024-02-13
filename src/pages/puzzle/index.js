// pages/puzzle-instructions.js
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

export default function PuzzleInstructions() {
  const [showHint, setShowHint] = useState(false);

  // Toggle the hint visibility
  const toggleHint = () => setShowHint(!showHint);

  return (
    <div className="bg-pink-100 min-h-screen flex flex-col items-center py-10">
      <Head>
        <title>Fun Puzzle Instructions</title>
        <meta
          name="description"
          content="Interactive instructions for our fun puzzle"
        />
      </Head>

      <h1 className="text-4xl md:text-5xl font-bold text-rose-500 mb-6">
        🧩 Fun Puzzle Instructions 🧩
      </h1>

      <div className="bg-white rounded-lg shadow-xl p-6 md:p-10 max-w-lg text-rose-700">
        <p className="text-lg mb-4">
          Get ready for an adventure! Follow these steps to solve the puzzle:
        </p>

        {/* Example of an accordion-like section for stage instructions */}
        <div className="mb-4">
          <button
            onClick={toggleHint}
            className="font-semibold py-2 text-left w-full"
          >
            Stage 1: The Enchanted Garden 🌻
          </button>
          {showHint && (
            <div className="mt-2 pl-4 border-l-4 border-rose-300">
              <p>Discover the hidden key in the enchanted garden image.</p>
            </div>
          )}
        </div>

        <p className="text-lg">
          Use your wit and creativity to uncover the secrets and progress
          through each stage.
        </p>

        <div className="mt-6 text-center">
          <Link
            href="/"
            className="inline-block bg-rose-500 hover:bg-rose-600 text-white font-bold py-2 px-4 rounded"
          >
            Return Home
          </Link>
        </div>
      </div>

      <div className="mt-8">
        <img
          src="/path/to/your/puzzle-image.png"
          alt="Puzzle Image"
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}
