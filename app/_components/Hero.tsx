import Image from "next/image";
import HeroTextHighlight from "@/app/_components/HeroTextHighlight";

const Hero = () => {
  return (
    <div id="hero">
      {/* xl size is done */}
      <div className="poster  bg-black">
        <Image src="/images/bg2.png" alt="bg" fill className="object-cover" />
      </div>
      {/* full text section */}
      <div className="text-box center ">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  px-5  md:w-xl lg:min-w-3xl  xl:w-6xl xl:px-4 py-5 max-w-7xl">
        {/* Word - creating brand*/}
          <div className="text-center xl:h-50 overflow-hidden ">
            <h1 className=" font-bold pt-30">
              Creating
              <HeroTextHighlight className="xl:ml-3">brand</HeroTextHighlight>
            </h1>
          </div>
          {/* word - and digital */}
          <div className="text-center overflow-hidden relative h-20 sm:h-24 md:h-18 md:pt-2.5 lg:h-21 lg:ml-3 xl:h-22 xl:ml-3">
            <h1 className="font-bold text-center md:pl-9 lg:pr-55 lg:py-1.5">
              and digital
            </h1>
          </div>
          {/* word - solutions */}
          <div className="h-22 overflow-hidden relative text-center  xl:h-30  sm:h-24 md:h-28">
            <h1 className="absolute left-2/5 lg:ml-7 xl:left-2/5 xl:ml-17">
              <HeroTextHighlight>Solutions</HeroTextHighlight>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
