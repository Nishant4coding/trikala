// Digit.tsx
import NumberTicker from '@/components/ui/number-ticker';
import bg from '@/assets/Digit.png';
// import IconCloud from '@/components/ui/icon-cloud';
// import logo from '@/assets/logo.png';

function Digit() {
  // const slugs = [
  //   "typescript",
  //   "javascript",
  //   "dart",
  //   "java",
  //   "react",
  //   "flutter",
  //   "android",
  //   "html5",
  //   "css3",
  //   "nodedotjs",
  //   "express",
  //   "nextdotjs",
  //   "prisma",
  //   "amazonaws",
  //   "postgresql",
  //   "firebase",
  //   "nginx",
  //   "vercel",
  //   "testinglibrary",
  //   "jest",
  //   "cypress",
  //   "docker",
  //   "git",
  //   "jira",
  //   "github",
  //   "gitlab",
  //   "visualstudiocode",
  //   "androidstudio",
  //   "sonarqube",
  //   "figma",
  // ];

  return (
    <section className='  max-h-screen mt-32'>
      <h1 className='text-9xl font-custom text-center'>At a Glance</h1>
    <div className="relative h-[40vw] lg:bg-cover lg:bg-center text-white" style={{ backgroundImage: `url(${bg})`, backgroundRepeat: 'no-repeat', opacity:20 }}>
      {/* <IconCloud iconSlugs={slugs} /> */}
      <div className="absolute lg:top-[5vw] right-0 bg-[#774931] p-6 rounded-lg shadow-lg lg:w-52 w-full font-[Roboto] text-center lg:mr-[-70px] flex flex-col lg:gap-16 gap-5 ">
        <h2 className="lg:text-2xl text-xl font-bold text-left">We are <br /> proven by</h2>
        <div className="">
          <span className='lg:text-7xl text-lg font-semibold'>
            <NumberTicker value={200} />
          </span>
          <h3 className="text-xs font-semibold">Total Work</h3>
        </div>
        <div className="">
          <span className='lg:text-7xl text-lg font-semibold'>
            <NumberTicker value={200} />
          </span>
          <h3 className="text-xs font-semibold">Total Work</h3>
        </div>
        <div className="lg:mb-4 mb-0">
          <span className='lg:text-7xl text-lg font-semibold'>
            <NumberTicker value={200} />
          </span>
          <h3 className="text-xs font-semibold">Total Work</h3>
        </div>
      </div>
    </div>
    </section>
  );
}

export default Digit;
