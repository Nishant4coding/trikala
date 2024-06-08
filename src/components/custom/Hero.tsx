import aesehi from '../../assets/aesehi.png'
import Lead from '@/components/custom/Lead'


function Hero() {
  return (
    <section className='min-h-screen p-[] font-custom mt-10 '>
      <div className="flex flex-col justify-between  text-custom-db lg:gap-10 gap-5 ">
        <div className="font-silverqueen lg:text-9xl text-5xl  text-left font-bold tracking-wider">
          Architect Your
        </div>
        <div className="font-silverqueen  lg:text-9xl text-5xl text-right font-bold tracking-wider">
          Idea to Design
        </div>
      </div>

      <div className="flex lg:flex-row flex-col   gap-10 mt-10">
        <div className="lg:flex-1  ">
          <div className="flex flex-col-reverse gap-10 gap-5 ">
            <button className=" w-48 border p-2 pl-4 pr-4 rounded-full text-custom-db bg-custom-premium font-bold text-3xl tracking-wider">

              Get Started
            </button>
            <span className="text-xl font-[Roboto] text-justify">
              Signet Estate Group transforms complex development challenges into collaborative opportunities through a creative, flexible, and customized approach.
            </span>
          </div>
        </div>
        <div className="flex-2 flex flex-row gap-5">
          <img src={aesehi} alt="" />
          <img src={aesehi} alt="" className='w-96 md:block hidden' />
        </div>

      </div>
    <div className='md:block hidden'>
      <Lead />
      </div>


    </section>
  )
}

export default Hero
