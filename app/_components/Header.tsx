import Logo from "./Logo";
import NavButton from "@/app/_components/NavButton";
import {NavWrapper} from "@/app/_components/NavWrapper";


const Header = () => {
    return (
        <header>
            <div className="w-full fl">
                <div className="w-full  fl sm:w-[35%]">
                    <Logo/>
                    <NavButton/>
                </div>
                <nav>
                    <NavWrapper/>
                </nav>
            </div>


        </header>
    );
};

export default Header;



