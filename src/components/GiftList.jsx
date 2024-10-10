import React from "react";
import { allGifts } from "../../utils/data";
import { Gift } from "lucide-react";

const GiftPresentation = () => {
  return (
    <div className="w-full mx-auto p-6 bg-rose-50 rounded-lg ">
      <h1 className="text-4xl  text-rose-600 text-center mb-4">
        23 Surprises for Your 23rd Birthday 🎉
      </h1>
      <p className="text-gray-700 mb-8 text-center">
        As you turn 23, I have prepared 23 special gifts to celebrate you. Here
        are the first few, with more to be revealed each day!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {allGifts.map((gift, index) => (
          <div
            key={gift.id}
            className={`relative overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-lg min-w-48 ${
              index >= 4 ? "blur-sm pointer-events-none" : ""
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-rose-300 to-rose-500 opacity-75" />
            <div className="relative p-6 flex flex-col items-center text-white z-10">
              <h2 className="text-4xl mb-2">🎁</h2>
              <h3 className="text-xl font-semibold text-center mb-2">
                {gift.name}
              </h3>
              <p className="text-sm text-center italic">"{gift.note}"</p>
            </div>
            {index >= 4 && (
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">
                  Coming soon!
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
      <p className="mt-8 text-center text-gray-600 italic">
        A new surprise will be revealed each day. Stay tuned!
      </p>
    </div>
  );
};

export default GiftPresentation;
