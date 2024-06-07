
// @ts-ignore
import './App.css'
import Hero from '@/components/custom/Hero'
// import Lead from '@/components/custom/Lead'


// import Footer from './components/custom/Footer'
import Nav from './components/custom/Nav'
import Digit from './components/custom/Digit'
import ImageCrowsell from './components/custom/ImageCarousel';
import image from '@/assets/aesehi.png'

function App() {

  const items = [
    { image: image, alt: 'Image 1' },
    { image: image, alt: 'Image 2' },
    { image:image, alt: 'Image 3' },
    { image: image, alt: 'Image 4' },
    { image: image, alt: 'Image 5' },
    { image: image, alt: 'Image 6' }
  ];
  return (
    <div className='bg-custom-bg min-h-screen font-silverqueen px-[5vw]'>
      <Nav/>
      <hr className='border-custom-premium'/>
   <Hero/>
   <Digit/>


   <ImageCrowsell items={items}/>
    </div>
  )
}

export default App
