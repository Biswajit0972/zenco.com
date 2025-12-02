import Logo from "./Logo";
import NavButton from "@/app/_components/NavButton";
import {NAV_ITEMS} from "@/types";
import NavigationLink from "./NavigationLink";


const Header = () => {
    return (
        <header>
            <div className="w-full h-full fl sm:w-[20%]">
                <Logo/>
                <NavButton/>
            </div>
            <nav>
                <ul>
                    {NAV_ITEMS.map((item) => (
                        <NavigationLink   key={item.href} {...item}/>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Header;



