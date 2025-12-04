import Image from "next/image";

const Logo = () => {
    return (
        <div className="logo">
            <div>
                <Image alt="logo" src="/images/zenco_logo.png" width={200} height={120} className="scale-[1.299]"/>
            </div>
        </div>
    );
};

export default Logo;



