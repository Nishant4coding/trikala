
import aesehi from '../../assets/aesehi.png';
import Lead from '@/components/custom/Lead';
import hero1 from '@/assets/hero1.png';
import hero2 from '@/assets/hero2.png';
import hero3 from '@/assets/hero3.png';
import hero4 from '@/assets/hero4.png';
import hero5 from '@/assets/hero5.png';

function Hero() {
  return (
    <section className='lg:min-h-screen font-custom'>
      <div className="flex flex-col justify-between text-custom-db gap-5 lg:gap-10">
        <div className='flex flex-col lg:flex-row justify-between'>
          <div className="font-silverqueen text-6xl md:text-6xl lg:text-[160px] text-left ">
            Architect Your
          </div>
          <img src={hero1} alt="" className='w-full lg:w-auto md:block hidden lg:h-full object-cover'/>
        </div>
        <div className='flex flex-col lg:flex-row-reverse justify-between'>
          <div className="font-silverqueen text-6xl md:text-6xl lg:text-[160px] text-right ">
            Idea to Design
          </div>
          <img src={hero2} alt="" className='w-full md:block hidden lg:w-auto lg:h-full object-cover'/>
        </div>
      </div>  

      <div className="flex flex-col lg:flex-row gap-10 mt-10">
        <div className="lg:flex-1">
          <div className="flex flex-col gap-5 lg:gap-10">
            <button className="w-auto border p-2 pl-4 pr-4 rounded-full font-[Roboto] text-white bg-[#774931] font-bold text-xl md:text-2xl lg:text-3xl tracking-wider">
              Start a Project --&gt;
            </button>
            <span className="text-base md:text-lg lg:text-xl font-[Roboto] text-justify">
              Signet Estate Group transforms complex development challenges into collaborative opportunities through a creative, flexible, and customized approach.
            </span>
            <div className='flex flex-row justify-center gap-5 lg:gap-20'>
              <img src={hero4} alt="" className='h-32 md:h-48 lg:h-full object-cover'/>
              <img src={hero5} alt="" className='h-32 md:h-48 lg:h-full object-cover'/>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-5 w-full lg:w-3/5">
          <img src={hero3} alt="" className='h-32 md:h-48 lg:h-full object-cover'/>
          <img src={aesehi} alt="" className='h-32 md:h-48 lg:h-full object-cover hidden md:block'/>
        </div>
      </div>
      <div className='hidden md:block'>
        <Lead />
      </div>
    </section>
  );
}

export default Hero;
