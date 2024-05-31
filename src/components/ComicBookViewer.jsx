import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import "./ComicBookViewer.css"; // Create this CSS file for custom styles

const comicPages = [
  {
    src: "/imgs/panel-1.png",
    story:
      "In a distant magical world, there exists a lush forest with ancient, towering trees and a glowing sky. This mystical place is filled with vibrant flora and enchanting creatures, creating a serene yet magical atmosphere.",
  },
  {
    src: "/imgs/panel-2.png",
    story:
      "Deep within the forest, an angel named Hela sits on a rock, her radiant wings drooping with pain. Hela, with her long, flowing dark hair and expressive eyes, clutches her side, wounded and in need of help.",
  },
  {
    src: "/imgs/panel-3.png",
    story:
      "In a nearby village, the brave knight Deepak hears of Hela's plight from an old sage. Determined to help, Deepak listens intently, his resolve to save the angel growing stronger.",
  },
  {
    src: "/imgs/panel-4.png",
    story:
      "Deepak sets off on his quest, mounted on his sturdy horse. Clad in his intricately decorated knight armor, he ventures into the dense forest, ready to face any challenge that comes his way.",
  },
  {
    src: "/imgs/panel-5.png",
    story:
      "After a fierce battle, Deepak discovers a hidden grove bathed in ethereal light. In the center of this serene place stands an ancient pedestal holding the healing crystal, surrounded by rare, glowing flowers.",
  },
  {
    src: "/imgs/panel-6.png",
    story:
      "Approaching the pedestal, Deepak retrieves the glowing healing crystal. The crystal emits a bright, healing light, and Deepak's face reflects hope and relief as he holds the key to saving Hela.",
  },
  {
    src: "/imgs/panel-7.png",
    story:
      "With the healing crystal in hand, Deepak returns to the forest clearing where Hela awaits. She looks up, her eyes filled with gratitude as Deepak approaches, ready to heal her wounds.",
  },
  {
    src: "/imgs/panel-8.png",
    story:
      "As Hela holds the healing crystal, a warm light envelops her. Her pain begins to fade, and her wings regain their full radiance. The forest is filled with a sense of peace and hope as Hela's healing is complete.",
  },
  {
    src: "/imgs/panel-9.png",
    story:
      "In the heart of the forest, Deepak and Hela stand together, holding hands. United by their journey, their bond is now stronger than ever, symbolizing the harmony and balance restored in their magical world.",
  },

  // Add more comic pages as needed
];

const ComicBookViewer = () => {
  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="max-w-screen-lg mx-auto h-screen flex flex-col justify-center overflow-y-auto pt-10 mt-5">
      <div className="h-full">
        <h1 className="text-center font-bold text-lg">
          {" "}
          Tale of the Enchanted Bodi Kai
        </h1>

        <Slider {...sliderSettings}>
          {comicPages.map((page, index) => (
            <div key={index} className="flex flex-col items-center p-4">
              <img
                className="max-h-[500px] w-full object-contain rounded-lg"
                src={page.src}
                alt={`Comic Page ${index + 1}`}
              />
              <p className="mt-2 text-center text-zinc-900">{page.story}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

// Custom Arrow Components
const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", right: 1 }}
      onClick={onClick}
    />
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", left: 10, zIndex: 1 }}
      onClick={onClick}
    />
  );
};

export default ComicBookViewer;
