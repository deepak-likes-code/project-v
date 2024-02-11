import React from "react";

const PhotoBooth = () => {
  const images = [
    {
      src: "https://via.placeholder.com/150",
      alt: "Image 1",
      subtext: "Subtext 1",
    },
    {
      src: "https://via.placeholder.com/150",
      alt: "Image 2",
      subtext: "Subtext 2",
    },
    {
      src: "https://via.placeholder.com/150",
      alt: "Image 3",
      subtext: "Subtext 3",
    },
    // Add more images as needed
  ];

  return (
    <div className="bg-gray-100 p-8">
      <h1 className="text-6xl font-semibold text-center mb-6">📸 ✨</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((image, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg shadow-lg bg-white"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-auto transform transition duration-500 hover:scale-110"
            />
            <p className="text-center text-xl py-2">{image.subtext}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoBooth;
