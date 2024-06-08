// import React from 'react';
import NumberTicker from '@/components/ui/number-ticker';
import bg from '@/assets/aesehi.png'

function Digit() {
  return (
    <div className="relative h-screen lg:bg-cover lg:bg-center" style={{ backgroundImage: `url(${bg})`, backgroundRepeat: 'no-repeat' }}>
      <div className="absolute lg:top-1/4 right-0 bg-white bg-opacity-80 p-6 rounded-lg shadow-lg w-full font-[Roboto] text-center lg:mr-[-50px] flex flex-col lg:gap-16 gap-5 ">
        <h2 className="lg:text-2xl  text-xl font-bold ">We are proven by</h2>
        <div className="">
          <span className='lg:text-2xl text-lg'>
          <NumberTicker value={200} />
          </span>
          <h3 className="text-xs font-semibold">Total Work</h3>
        </div>
        <div className="">
          <span className='lg:text-2xl text-lg'>
          <NumberTicker value={200} />
          </span>
          <h3 className="text-xs font-semibold">Total Work</h3>
        </div>
        <div className="lg:mb-4 mb-0">
          <span className='lg:text-2xl text-lg'>
          <NumberTicker value={200} />
          </span>
          <h3 className="text-xs font-semibold">Total Work</h3>
        </div>
       
      </div>
    </div>
  );
}

export default Digit;
