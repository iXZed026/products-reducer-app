import React from 'react';
import { FaSearch } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

function Header() {
    return (
        <header className='w-full bg-inherit p-4 shadow-md'>
            <div className="header-container w-[90%] m-auto flex justify-between items-center">
                <div className="search">
                    <FaSearch className='cursor-pointer text-xl' />
                </div>
                <div className="header-logo">
                    <h1 className='text-3xl font-bold'>Reducer</h1>
                </div>
                <div className="header-cart">
                    <IoCartOutline className='cursor-pointer text-xl' />
                </div>
            </div>
        </header>
    )
}

export default Header