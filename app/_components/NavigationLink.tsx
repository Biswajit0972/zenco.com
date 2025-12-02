"use client";

import { NavItem } from "@/types";
import Link from "next/link";
import { FC } from "react";

const NavigationLink: FC<NavItem> = ({ ...props }) => {
  return (
    <Link key={props.href} href={props.href} className="px-2 py-1 hover:bg-foreground transform transition-all rounded-full hover:text-black">
      {props.label}
    </Link>
  );
};

export default NavigationLink;
