import Image from "next/image";
import HeroTextHighlight from "@/app/_components/HeroTextHighlight";

const Hero = () => {
  return (
    <div id="hero">
      {/* xl size is done */}
      <div className="poster  bg-black">
        <Image src="/images/bg2.png" alt="bg" fill className="object-cover" />
      </div>
      <div className="text-box center ">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  px-5  md:w-xl lg:min-w-3xl  xl:w-6xl xl:px-4 py-5 max-w-7xl">
          <div className="text-center xl:h-50 overflow-hidden ">
            <h1 className=" font-bold pt-30">
              Creating
              <HeroTextHighlight className="xl:ml-3">brand</HeroTextHighlight>
            </h1>
          </div>
          <div className="text-left overflow-hidden relative h-20 sm:h-24  xl:h-22">
            <h1 className="font-bold text-center lg:pr-55 lg:my-4">and digital</h1>
          </div>
          <div className="h-22 overflow-hidden relative mt-3 xl:h-30 text-center xl:mt-2 sm:h-24 md:h-28">
            <h1 className="xl:mt-0 xl:absolute xl:left-2/5 xl:ml-17">
              <HeroTextHighlight>Solutions</HeroTextHighlight>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
