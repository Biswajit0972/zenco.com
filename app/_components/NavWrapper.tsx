"use client"

import {useEffect, useState} from "react";
import NavigationLink from "@/app/_components/NavigationLink";
import {NAV_ITEMS} from "@/types";

export const NavWrapper = () => {
   const [page, setPage] = useState<string>("/");

    return (
        <ul>
            {NAV_ITEMS.map((item) => (
                <NavigationLink   key={item.href} {...{...item, setPage,  page}} />
            ))}
        </ul>
    )
}
