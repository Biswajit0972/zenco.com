import { ReactNode } from "react";

const HeroTextHighlight = ({ children, className }: {children:ReactNode, className?:string}) => {
  return (
    <span className={className}>
      {children}
    </span>
  );
};

export default HeroTextHighlight;



