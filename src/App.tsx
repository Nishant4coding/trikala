
// @ts-ignore
import './App.css'
import Hero from '@/components/custom/Hero'
// import Lead from '@/components/custom/Lead'


// import Footer from './components/custom/Footer'
import Nav from './components/custom/Nav'
import Digit from './components/custom/Digit'
import ImageCrowsell from './components/custom/ImageCarousel';
import image from '@/assets/aesehi.png'
// import WorkingMethodCarousel from './components/custom/Working';
import Working from './components/custom/Working';
// import BlendImage from './components/custom/BlendImage'
// import Testimonials from './components/custom/Testimonials';
// import Landing from './Pages/Landing';
// import Featured from './components/custom/Featured';
// import IconCloud from './components/ui/icon-cloud';
// import logo from '@/assets/logo.png';

function App() {
  // const logos = [logo, logo, logo];

  const items = [
    { image: image, alt: 'Image 1' },
    { image: image, alt: 'Image 2' },
    { image:image, alt: 'Image 3' },
    { image: image, alt: 'Image 4' },
    { image: image, alt: 'Image 5' },
    { image: image, alt: 'Image 6' }
  ];
  return (
    <div className='flex flex-col bg-[#E1D6C0] min-h-screen font-[Roboto] px-[5vw] overflow-hidden gap-10'>
      <Nav/>
      {/* <hr className='border-custom-premium'/> */}
   <Hero/>
   {/* <Featured/> */}
   <Digit/>


   <ImageCrowsell items={items}/>
   {/* <BlendImage/> */}
   {/* <SwitchingTabs/> */}
   {/* <Landing/> */}
   {/* <IconCloud logos={logos} /> */}
   <Working/>
   </div>
  )
}

export default App
