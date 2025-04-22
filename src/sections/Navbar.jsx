import React from 'react'
import {Menu, Xmark} from "iconoir-react";
import {navLinks} from "../constants/index.js";

const NavItems = () => {
    return (
        <ul className="nav-ul flex">
            {navLinks.map(({id, title}) => (
                <li key={id} className="nav-li px-5">
                    <a href={"#"+id} className="nav-li_a" onClick={() => {}}>
                        {title}
                    </a>
                </li>
            ))}

        </ul>
    )
}

const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    const toggleMenu = () => setIsOpen((prevIsOpen) => !prevIsOpen);

    return (
        <header className="fixed top-0 right-0 left-0 z-50 bg-black-100 opacity-70">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center py-5 mx-auto c-space">
                    <a href="/" className="">
                        Boll
                    </a>

                    <button onClick={toggleMenu} className="text-neutral-400 hover:text-white focus: outline-none sm:hidden flex" aria-label="Toggle menu">
                        {isOpen ? <Xmark /> : <Menu />}
                    </button>

                    <nav className="sm:flex hidden">
                        <NavItems />
                    </nav>
                </div>
            </div>

            <div className={`sm:hidden nav-sidebar transition-all duration-300 overflow-hidden opacity-70 bg-primary ${isOpen ? "max-h-screen" : "max-h-0"}`}>
                <nav className="">
                    <NavItems />
                </nav>
            </div>


        </header>

    )
}

export default Navbar;
