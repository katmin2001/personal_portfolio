import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

const navLinks = [
    {
        id: "home",
        title: "Home",
    },
    {
        id: "experience",
        title: "Experience",
    },
    {
        id: "awards",
        title: "Awards",
    },
    {
        id: "projects",
        title: "Projects",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const Navbar = ({ scrolled }) => {
    const [toggle, setToggle] = useState(false);

    return (
        <nav className={`sm:px-16 px-6 w-full flex items-center py-5 fixed top-0 z-20 ${scrolled ? "bg-primary" : "bg-transparent"}`}>
            <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
                <Link
                    to="home"
                    className="flex items-center gap-2"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    <p className="text-white text-[18px] font-bold cursor-pointer flex">
                        My Portfolio &nbsp;
                        <span className="sm:block hidden">| Developer</span>
                    </p>
                </Link>

                <ul className="list-none hidden sm:flex flex-row gap-10">
                    {navLinks.map((link) => (
                        <li
                            key={link.id}
                            className="nav-link"
                        >
                            <Link
                                to={link.id}
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                activeClass="active"
                            >
                                {link.title}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className="sm:hidden flex flex-1 justify-end items-center">
                    <div
                        className="w-[28px] h-[28px] object-contain cursor-pointer z-20"
                        onClick={() => setToggle(!toggle)}
                    >
                        {toggle ? <FaTimes className="text-white text-[28px]" /> : <FaBars className="text-white text-[28px]" />}
                    </div>

                    <div className={`${!toggle ? "hidden" : "flex"} p-6 bg-tertiary absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
                        <ul className="list-none flex justify-end items-start flex-col gap-4">
                            {navLinks.map((link) => (
                                <li
                                    key={link.id}
                                    className="font-poppins font-medium cursor-pointer text-[16px] text-white"
                                    onClick={() => setToggle(!toggle)}
                                >
                                    <Link
                                        to={link.id}
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}
                                    >
                                        {link.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
