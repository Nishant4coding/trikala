import image from '@/assets/aesehi.png';

const TransparentTextOverlay = () => {
  return (
    <div className="relative h-screen bg-cover bg-center flex justify-center items-center" style={{ backgroundImage: `url(${image})` }}>
      <div className="flex justify-center items-center bg-white w-full">
        <h1 className="text-9xl font-bold text-transparent bg-clip-text  bg-center bg-no-repeat" style={{
          backgroundImage: `url(${image})`,
          WebkitTextStroke: '2px '
        }}>
          ARCHITECT
        </h1>
      </div>
    </div>
  );
};

export default TransparentTextOverlay;
