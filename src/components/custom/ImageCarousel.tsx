import React, { useState } from 'react';

interface CarouselItem {
  image: string;
  alt: string;
}

interface CarouselProps {
  items: CarouselItem[];
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(Math.floor(items.length / 2));

  const handlePrevClick = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setActiveIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="flex items-center justify-center w-full mt-8 relative">
      <button 
        onClick={handlePrevClick} 
        className="carousel-button bg-black text-white p-2 absolute left-4 z-20"
      >
        Prev
      </button>
      <div className="relative w-full overflow-hidden">
        <div
          className="flex justify-center items-center transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(calc(50% - ${activeIndex * 20}%))` }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className={`transition-transform duration-500 ease-in-out ${
                index === activeIndex ? 'scale-100 blur-0 z-10' : index === activeIndex - 1 || index === activeIndex + 1 ? 'scale-75 blur-sm opacity-50 z-0' : 'scale-50 blur-md opacity-25 z-0'
              } mx-[-10]`}
              style={{ width: '20%' }}
            >
              <img src={item.image} alt={item.alt} className="w-full h-96" style={{ borderRadius: '150px' }} />
            </div>
          ))}
        </div>
      </div>
      <button 
        onClick={handleNextClick} 
        className="carousel-button bg-black text-white p-2 absolute right-4 z-20"
      >
        Next
      </button>
    </div>
  );
};

export default Carousel;
