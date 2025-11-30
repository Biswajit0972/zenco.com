"use client"

import {useState} from "react";
import { FiAlignCenter } from "react-icons/fi";
import { FiAlignJustify } from "react-icons/fi";

const NavButton = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <button onClick={() => setIsOpen(!isOpen)}>
            <p>{isOpen ? <FiAlignCenter/> : <FiAlignJustify />}</p>
        </button>
    )
}
export default NavButton
