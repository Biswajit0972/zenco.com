import Image from "next/image";

const Logo = () => {
  return (
    <div className="logo">
        <Image alt="logo" src="/images/zenco_logo.png" width={300} height={60}/>
    </div>
  );
};

export default Logo;



