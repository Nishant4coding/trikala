
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
      <div className="flex flex-col lg:justify-between text-custom-db gap-5 lg:gap-10  lg:h-[50vh]">
        <div className='flex flex-col lg:flex-row justify-between'>
          <div className="font-silverqueen text-custom-db text-5xl md:text-[6em] lg:text-[12em] text-left tracking-wider">
            Architect Your
          </div>
          <img src={hero1} alt="" className='w-full lg:w-auto  hidden lg:h-full object-cover lg:block'/>
        </div>
        <div className='flex flex-col lg:flex-row-reverse justify-between'>
          <div className="font-silverqueen text-5xl md:text-[6em] lg:text-[12em] text-right tracking-wider">
            Idea to Design
          </div>
          <img src={hero2} alt="" className='  hidden lg:w-auto lg:h-full object-cover lg:block'/>
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
            <div className='flex flex-row justify-center gap-5 lg:gap-'>
              <img src={hero4} alt="" className='h-32 md:h-48 lg:h-full w-full object-cover'/>
              <img src={hero5} alt="" className='h-32 md:h-48 lg:h-full w-full  object-cover'/>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-10 w-full lg:w-3/5">
          <img src={hero3} alt="" className='h-32 md:h-48 lg:h-full object-cover hidden lg:block'/>
          <img src={aesehi} alt="" className='h-32 md:h-48 lg:h-full object-cover hidden lg:block'/>
        </div>
      </div>
      <div className='hidden'>
        <Lead />
      </div>
    </section>
  );
}

export default Hero;
