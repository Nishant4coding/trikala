// import React from 'react'
import dummy from '@/assets/dummy.png'

function Partners() {
  return (
    <div className="h-[40vh] flex flex-col gap-10">
        <h1 className="text-6xl md:text-6xl lg:text-9xl font-custom text-center">Our Trusted Partners</h1>
        <div className="flex flex-row items-center justify-center lg:gap-20 gap-5 font-custom lg:w-full w-20">
            <img src={dummy} alt="" />
            <img src={dummy} alt="" />
            <img src={dummy} alt="" />
            <img src={dummy} alt="" />
            <img src={dummy} alt="" />
           
        </div>
      
    </div>
  )
}

export default Partners
