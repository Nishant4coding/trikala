import aesehi from '@/assets/aesehi.png'


function Featured() {
  return (
    <div>

      <div className="">
        {/* <img src={aesehi} alt="" className='absolute '/>
        <img src={aesehi} alt="" /> */}
        <h1 className="relative text-6xl top-10 z-10 md:text-6xl lg:text-9xl font-custom text-left">
          Featured Work
        </h1>
          
            {/* Image placeholder */}
            <img
              src={aesehi} // Replace with your image URL
              alt="Featured work"
              className="h-auto w-auto "
            />
        <div className="relative w-auto">
          
          <div className=" w-full bg-[#6f4638] p-4 text-white shadow-lg max-w-xs">
            <h3 className="text-lg font-bold mb-2">Yorem ipsum d</h3>
            <p className="text-sm">
              Yorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
            </p>
          </div>
          </div>
      </div>
  </div>
  )
}

export default Featured
