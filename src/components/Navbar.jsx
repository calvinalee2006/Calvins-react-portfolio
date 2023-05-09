import React from 'react'
import { FaBars } from 'react-icons/fa'


const Navbar = () => {
    return (
        <>
            <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>

                {/* menu */}

                <ul className=" hidden md:flex flex-row">
                    <li className="px-4">Home</li>
                    <li className="px-4">About</li>
                    <li className="px-4">Skills</li>
                    <li className="px-4">Work</li>
                    <li className="px-4">Contact</li>
                </ul>


                {/* Hamburger */}
                <div className='hidden'>
                    <FaBars />
                </div>

                {/* Mobile menu */}
                <ul className="hidden">
                    <li>Home</li>
                    <li>About</li>
                    <li>Skills</li>
                    <li>Work</li>
                    <li>Contact</li>
                </ul>

                {/*Social icons */}
                <div className="hidden"></div>
            </div>

        </>
    )
}

export default Navbar
