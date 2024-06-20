import React, { useState } from 'react';
import Sections from '../Section';

interface CarouselItem {
  image: string;
  alt: string;
}

interface CarouselProps {
  items: CarouselItem[];
}

const ImageCarousel: React.FC<CarouselProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(Math.floor(items.length / 2));

  const handlePrevClick = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setActiveIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
  };

  const handleClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <Sections className=''>
      <h1 className='text-6xl md:text-6xl lg:text-9xl font-custom text-center'>Expertise</h1>
      <div className="flex items-center justify-center w-full mt-8 -mx-[5vw] relative">
        <button 
          onClick={handlePrevClick} 
          className="bg-gray-600 bg-opacity-20 text-custom-db rounded-full font-bold p-2 absolute left-4 z-20 md:block hidden"
        >
          &lt;--Prev
        </button>
        <div className="relative w-auto">
          <div
            className="flex w-[100vw] justify-center items-center transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(calc(50% - ${activeIndex * 20}%))` }}
          >
            {items.map((item, index) => (
              <div
                key={index}
                className={`transition-transform duration-500 ease-in-out mx-2 md:mx-4 ${
                  index === activeIndex ? 'scale-100 blur-0 z-10' : index === activeIndex - 1 || index === activeIndex + 1 ? 'scale-75 blur-sm opacity-50 z-0' : 'scale-50 blur-md opacity-25 z-0'
                }`}
                style={{ width: '80%' }}
                onClick={() => handleClick(index)}
              >
                <img 
                  src={item.image} 
                  alt={item.alt} 
                  className="lg:w-[40vw] w-[50vw] lg:h-[60vh] h-[40vh] object-cover rounded-full" 
                />
              </div>
            ))}
          </div>
        </div>
        <button 
          onClick={handleNextClick} 
          className="bg-gray-600 bg-opacity-20 text-custom-db rounded-full font-bold p-2 absolute right-4 z-20 md:block hidden"
        >
          Next --&gt;
        </button>
      </div>
    </Sections>
  );
};

export default ImageCarousel;
