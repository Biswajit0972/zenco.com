import Image from "next/image";
import HeroTextHighlight from "@/app/_components/HeroTextHighlight";

const Hero = () => {
  return (
    <div id="hero">
      <div className="poster  bg-black">
        <Image src="/images/bg2.png" alt="bg" fill className="object-cover" />
      </div>
      <div className="text-box center ">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  px-5  md:w-[75%] lg:w-[85%]  xl:w-[65%] xl:px-4 py-5 max-w-5xl">
          <div className="text-left  xl:h-44 overflow-hidden ">
            <h1 className=" font-bold">
              Creating
              <HeroTextHighlight className="mt-5 ml-3">brand</HeroTextHighlight>
            </h1>
          </div>
          <div className="relative h-20 sm:h-24  xl:h-36">
            <h1 className="font-bold ">and digital</h1>
          </div>
          <div className="h-22 overflow-hidden  relative mt-3 xl:h-38 text-center sm:h-24 md:h-28">
            <h1 className=" xl:absolute xl:right-0 ">
              <HeroTextHighlight>Solutions</HeroTextHighlight>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
