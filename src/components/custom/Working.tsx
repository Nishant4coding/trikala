import React, { useState } from 'react';
import hero5 from '@/assets/hero3.png';


const Working: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    hero5,
    hero5,
    hero5,
    hero5,
    hero5
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="w-full mx-auto mt-8">
      <div className="relative flex items-left">
        <button onClick={prevSlide} className="absolute right-10  z-10 p-2 bg-gray-200 rounded-full">
          &lt;
        </button>
        <div className="flex overflow-hidden w-full justify-center mt-20">
          {images.map((image, index) => (
            <div
              key={index}
              className={`transition-all duration-500 ease-in-out p-2 h-[50vh]   ${
                index === currentIndex ? 'w-4/5 ' : 'w-1/6 '
              }`}
            >
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className={`h-full mx-auto transition-all duration-500 ease-in-out object-cover ${
                  index === currentIndex ? 'w-full h-52' : 'w-auto'
                }`}
              />
            </div>
          ))}
        </div>
        <button onClick={nextSlide} className="absolute right-0 z-10 p-2 bg-gray-200 rounded-full">
          &gt;
        </button>
      </div>
      {/* <div className="flex justify-center mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full mx-1 ${
              index === currentIndex ? 'bg-gray-800' : 'bg-gray-400'
            }`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div> */}
    </div>
  );
};

export default Working;
