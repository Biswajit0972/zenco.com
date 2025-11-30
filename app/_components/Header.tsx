import Logo from "./Logo";
import NavButton from "@/app/_components/NavButton";
import {NAV_ITEMS} from "@/types";
import Link from "next/link";


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
                        <Link
                            key={item.href}
                            href={item.href}
                        >
                            <p>{item.label}</p>
                        </Link>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Header;



