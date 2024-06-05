
import aesehi from '../../assets/aesehi.png'
function Hero() {
  return (
    <div>
      <div className="flex flex-col justify-between p-10  text-custom-db gap-10 ">
        <div className="font-silverqueen text-9xl text-left font-bold ">
          Architect Your
        </div>
        <div className="font-silverqueen text-9xl  text-right font-bold">
          Idea to Design
        </div>
      </div>

      <div className="flex flex-row gap-10">
        <div className="flex-1">
            <div className="flex flex-col gap-10">
                <button className="border p-2 pl-4 pr-4 rounded-full text-custom-db bg-custom-premium w-40 font-bold text-3xl">
                    Get Started
                </button>
                <span className="text-xl font-[Roboto]">
                Signet Estate Group transforms complex development challenges into collaborative opportunities through a creative, flexible, and customized approach.
                </span>
            </div>
        </div>
        <div className="flex-2 flex flex-row">
            <img src={aesehi} alt="" />
            <img src={aesehi} alt="" className='w-96'/>
            {/* <img src={aesehi} alt="" /> */}
        </div>

      </div>
        

    </div>
  )
}

export default Hero
