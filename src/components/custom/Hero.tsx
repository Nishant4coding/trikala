// import React from 'react';
import aesehi from '../../assets/aesehi.png';
import Lead from '@/components/custom/Lead';
import hero1 from '@/assets/hero1.png';
import hero2 from '@/assets/hero2.png';
import hero3 from '@/assets/hero3.png';
import hero4 from '@/assets/hero4.png';
import hero5 from '@/assets/hero5.png';

function Hero() {
  return (
    <section className='min-h-screen font-custom '>
      <div className="flex flex-col justify-between text-custom-db lg:gap- gap-5">
        <div className='flex flex-row justify-between'>
          <div className="font-silverqueen lg:text-[120px] text-5xl text-left font-bold tracking-wider">
            Architect Your
          </div>
          <img src={hero1} alt="" />
        </div>
        <div className='flex flex-row-reverse justify-between'>
          <div className="font-silverqueen lg:text-[120px] text-5xl text-right font-bold tracking-wider">
            Idea to Design
          </div>
          <img src={hero2} alt="" />
        </div>
      </div>  

      <div className="flex lg:flex-row flex-col gap-10 mt-10">
        <div className="lg:flex-1">
          <div className="flex flex-col gap-10 gap-5">
            <button className="w-auto border p-2 pl-4 pr-4 rounded-full font-[Roboto] text-white bg-[#774931] font-bold text-3xl tracking-wider">
              Start a Project --&gt;
            </button>
            <span className="text-xl font-[Roboto] text-justify">
              Signet Estate Group transforms complex development challenges into collaborative opportunities through a creative, flexible, and customized approach.
            </span>
            <div className='flex flex-row justify-center gap-20 '>
              <img src={hero4} alt="" className='h-full object-cover'/>
              <img src={hero5} alt="" className='h-full object-cover'/>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-5 w-3/5 ">
          <img src={hero3} alt="" className='h-full object-cover'/>
          <img src={aesehi} alt="" className='h-full object-cover md:block hidden' />
        </div>
      </div>
      <div className='md:block hidden'>
        <Lead />
      </div>
    </section>
  );
}

export default Hero;
