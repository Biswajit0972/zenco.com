import {NavItem} from "@/types";
import Link from "next/link";
import React, {Dispatch, FC} from "react";


interface NavigationLinkProps extends NavItem {
    page: string;
    setPage: Dispatch<React.SetStateAction<string>>;
}

const NavigationLink: FC<NavigationLinkProps> = ({...props}) => {
    return (
        <Link key={props.href} href={props.href}
              className={`px-2 py-1  transform transition-all rounded-full md:px-5    ${props.page === props.href ? "bg-foreground text-black" : ""}`}
              onClick={() => props.setPage(props.href)}>
            {props.label}
        </Link>
    );
};

export default NavigationLink;
