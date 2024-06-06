// import React from 'react';
import NumberTicker from '@/components/ui/number-ticker';
import bg from '@/assets/aesehi.png'

function Digit() {
  return (
    <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${bg})` }}>
      <div className="absolute top-1/4 right-0 bg-white bg-opacity-80 p-6 rounded-lg shadow-lg w-auto font-[Roboto]">
        <h2 className="text-2xl font-bold mb-4">Statistics</h2>
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Total Work</h3>
          <NumberTicker value={200} />
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Total Clients</h3>
          <NumberTicker value={150} />
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Projects Done</h3>
          <NumberTicker value={75} />
        </div>
      </div>
    </div>
  );
}

export default Digit;
