
// @ts-ignore
import './App.css'
import Hero from '@/components/custom/Hero'


// import Footer from './components/custom/Footer'
import Nav from './components/custom/Nav'
import Digit from './components/custom/Digit'

function App() {


  return (
    <div className='bg-custom-bg min-h-screen px-[5vw] font-silverqueen'>
      <Nav />
      {/* <hr className='border-custom-premium' /> */}
      <Hero />
      <Digit />
    </div>
  )
}

export default App
