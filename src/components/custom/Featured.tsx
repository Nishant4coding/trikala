// import aesehi from '@/assets/aesehi.png'


function Featured() {
  return (
    <div>
      <h1>Featured Work</h1>

      <div className="h-screen">
        {/* <img src={aesehi} alt="" className='absolute '/>
        <img src={aesehi} alt="" /> */}
        <div className="relative">
          <div className="bg-white h-64 w-full rounded-lg shadow-lg overflow-hidden">
            {/* Image placeholder */}
            <img
              src="https://via.placeholder.com/600x400" // Replace with your image URL
              alt="Featured work"
              className="h-auto w-auto "
            />
          </div>
          <div className="absolute bottom-0  mt-20 ml-20 bg-[#6f4638] p-4 rounded-lg text-white shadow-lg max-w-xs">
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
