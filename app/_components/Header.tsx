import Logo from "./Logo";
import NavButton from "@/app/_components/NavButton";
import {NAV_ITEMS} from "@/types";
import NavigationLink from "./NavigationLink";
import {NavWrapper} from "@/app/_components/NavWrapper";


const Header = () => {
    return (
        <header>
            <div className="w-full h-full fl sm:w-[20%]">
                <Logo/>
                <NavButton/>
            </div>
            <nav>
              <NavWrapper/>
            </nav>
        </header>
    );
};

export default Header;



