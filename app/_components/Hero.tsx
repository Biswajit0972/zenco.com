import Image from "next/image";
import HeroTextHighlight from "@/app/_components/HeroTextHighlight";

const Hero = () => {
    return (
        <div id="hero">
            <div className="poster">
                <Image src="/images/bg1.jpg" alt="bg" fill className="object-cover"/>
            </div>
            <div className="text-box">
                <div className="md:text-center">
                    <h1 className="font-mono font-[500]">
                        Creating
                        <HeroTextHighlight>Awesome</HeroTextHighlight>
                    </h1>
                </div>
                <div>
                    <h1 className="font-mono font-[500] md:text-center">
                        and digital
                    </h1>
                </div>
                <div className="h-30 overflow-hidden">
                    <div className="h-full w-full sm:w-[55%] xl:w-[40%] absolute sm:right-18 md:right-15 ">
                        <h1 className=" flex items-center">
                            <HeroTextHighlight>Solutions</HeroTextHighlight>
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;



