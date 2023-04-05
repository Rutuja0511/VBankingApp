import React from "react";
import { useState } from "react";
import {navLinks} from '../constants';
import {menu, close} from '../assets';

const Navbar = () => {

    const [toggle, setToggle] = useState(false);

    return (
        <nav className="w-full flex py-6 justify-between items-center navbar" >
        {/* <img> LOGO </img> */}

        <ul className="list-none sm:flex hidden justify-end items-center flex-1">
            {navLinks.map((nav, index) =>(
                <li
                key={nav.id}
                className={`list-none font-poppins font-normal cursor-pointer text-[16px] 
                ${index === navLinks.length - 1 ?'mr-0' : 'mr-10'} text-white`} //if last element then give margin right=0 else 10
                >
                    <a href= {`#${nav.id}`}>
                        {nav.title}
                    </a>

                </li>
            ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
            <img 
                src={toggle ? close : menu}
                alt="menu"
                className="w-[20px] h-[20px] object-contain"
                onClick={() => setToggle((prev) => !prev)} />

                <div
                    className={`${toggle ? 'flex' : 'hidden'} 
                    p-6 bg-black-gradient absolute top-12 right-0
                    mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
                    >

                <ul className="list-none flex-col justify-end items-center flex-1">
                    {navLinks.map((nav, index) =>(
                        <li
                        key={nav.id}
                        className={`list-none font-poppins font-normal cursor-pointer text-[16px] 
                        ${index === navLinks.length - 1 ?'mr-0' : 'mb-4'} text-white`} //if last element then give margin right=0 else 10
                        >
                            <a href= {`#${nav.id}`}>
                                {nav.title}
                            </a>

                        </li>
                    ))}
                </ul>

            </div>
        </div>
        
        </nav>
    )
}

export default Navbar