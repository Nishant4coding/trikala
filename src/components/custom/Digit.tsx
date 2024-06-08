// import React from 'react';
import NumberTicker from '@/components/ui/number-ticker';
import bg from '@/assets/aesehi.png'

function Digit() {
  return (
    <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${bg})` }}>
      <div className="absolute top-1/4 right-0 bg-white bg-opacity-80 p-6 rounded-lg shadow-lg w-auto font-[Roboto] text-center mr-[-50px] flex flex-col gap-16 ">
        <h2 className="text-2xl font-bold ">We are proven by</h2>
        <div className="">
          <span className='text-2xl'>
          <NumberTicker value={200} />
          </span>
          <h3 className="text-xs font-semibold">Total Work</h3>
        </div>
        <div className="">
          <span className='text-2xl'>
          <NumberTicker value={200} />
          </span>
          <h3 className="text-xs font-semibold">Total Work</h3>
        </div>
        <div className="mb-4">
          <span className='text-2xl'>
          <NumberTicker value={200} />
          </span>
          <h3 className="text-xs font-semibold">Total Work</h3>
        </div>
       
      </div>
    </div>
  );
}

export default Digit;
